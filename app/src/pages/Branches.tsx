import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface Branch {
  name: string;
  country: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  email: string;
  properties: number;
}

const branches: Branch[] = [
  { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.006, address: '432 Park Avenue, NY 10016', phone: '+1 212 555 0190', email: 'newyork@aurum.estate', properties: 142 },
  { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, address: '10 Grosvenor Sq, Mayfair W1K 6JP', phone: '+44 20 7946 0190', email: 'london@aurum.estate', properties: 98 },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, address: 'DIFC Gate Village 8, Level 12', phone: '+971 4 555 0190', email: 'dubai@aurum.estate', properties: 87 },
  { name: 'Geneva', country: 'Switzerland', lat: 46.2044, lng: 6.1432, address: 'Rue du Rhône 60, 1204 Geneva', phone: '+41 22 555 0190', email: 'geneva@aurum.estate', properties: 63 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, address: '1 Raffles Place, #38-01, 048616', phone: '+65 6555 0190', email: 'singapore@aurum.estate', properties: 54 },
  { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, address: 'International Finance Centre, Level 54', phone: '+852 2555 0190', email: 'hongkong@aurum.estate', properties: 49 },
];

function latLngToVec3(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

export function Branches() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Branch>(branches[0]);
  const sceneDataRef = useRef<{
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    globe: THREE.Mesh;
    markers: Array<{ mesh: THREE.Mesh; branch: Branch }>;
    animId: number;
    targetRot: number;
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Globe
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = new THREE.MeshPhongMaterial({ color: 0x111118, emissive: 0x020210, specular: 0x333355, shininess: 100 });
    const globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    const wireGeo = new THREE.SphereGeometry(1.002, 30, 30);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xc5a377, wireframe: true, transparent: true, opacity: 0.08 });
    scene.add(new THREE.Mesh(wireGeo, wireMat));

    // Atmosphere
    const atmGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const atmMat = new THREE.MeshPhongMaterial({ color: 0x4466cc, transparent: true, opacity: 0.05, side: THREE.BackSide });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const d = new THREE.DirectionalLight(0xc5a377, 2);
    d.position.set(4, 2, 4);
    scene.add(d);
    const p = new THREE.PointLight(0x4466ff, 0.6, 10);
    p.position.set(-3, -2, -2);
    scene.add(p);

    // Markers
    const markerData: Array<{ mesh: THREE.Mesh; branch: Branch; ring: THREE.Mesh }> = [];
    branches.forEach((b) => {
      const pos = latLngToVec3(b.lat, b.lng, 1.02);
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(0.025, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xc5a377 })
      );
      m.position.copy(pos);
      scene.add(m);

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.035, 0.055, 32),
        new THREE.MeshBasicMaterial({ color: 0xc5a377, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
      );
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(ring);

      markerData.push({ mesh: m, branch: b, ring });
    });

    sceneDataRef.current = { renderer, camera, globe, markers: markerData, animId: 0, targetRot: 0 };

    // Mouse drag
    let isDragging = false;
    let prevX = 0;
    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !sceneDataRef.current) return;
      const dx = e.clientX - prevX;
      sceneDataRef.current.targetRot += dx * 0.004;
      prevX = e.clientX;
    };
    const onMouseUp = () => { isDragging = false; };
    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Click on branch
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onClick = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(markerData.map(m => m.mesh));
      if (hits[0]) {
        const found = markerData.find(m => m.mesh === hits[0].object);
        if (found) {
          setSelected(found.branch);
          // Zoom camera towards branch
          const pos = found.mesh.position.clone().normalize().multiplyScalar(2.2);
          gsap.to(camera.position, {
            x: pos.x,
            y: pos.y,
            z: pos.z + 0.8,
            duration: 1.2,
            ease: 'power3.inOut',
            onComplete: () => {
              if (sceneDataRef.current) {
                gsap.to(camera.position, { x: 0, y: 0, z: 3, duration: 1, delay: 1.5, ease: 'power3.inOut' });
              }
            },
          });
        }
      }
    };
    mount.addEventListener('click', onClick);

    const clock = new THREE.Clock();
    function animate() {
      const id = requestAnimationFrame(animate);
      if (sceneDataRef.current) sceneDataRef.current.animId = id;
      const t = clock.getElapsedTime();

      if (sceneDataRef.current && !isDragging) {
        globe.rotation.y += 0.0015;
      }
      if (sceneDataRef.current && isDragging) {
        globe.rotation.y += (sceneDataRef.current.targetRot - globe.rotation.y) * 0.1;
      }

      // Marker pulse & sync rotation
      markerData.forEach(({ mesh, ring }, i) => {
        const s = 1 + 0.25 * Math.sin(t * 2.5 + i * 1.2);
        mesh.scale.setScalar(s);
        const rot = new THREE.Euler(0, globe.rotation.y, 0);
        const origPos = latLngToVec3(branches[i].lat, branches[i].lng, 1.02);
        origPos.applyEuler(rot);
        mesh.position.copy(origPos);
        ring.position.copy(origPos);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
      });

      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(sceneDataRef.current?.animId ?? 0);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      mount.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Header */}
      <div className="pt-28 pb-10 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-brand-gold" />
          <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Worldwide Presence</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter">
          Global Branches
        </h1>
        <p className="font-body text-white/50 mt-4 max-w-lg">
          Click on any location to explore our offices. Drag the globe to explore.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-[1600px] mx-auto w-full px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
          {/* Globe */}
          <div className="lg:col-span-3">
            <div
              ref={mountRef}
              className="w-full rounded-3xl cursor-grab overflow-hidden"
              style={{
                height: 'min(70vh, 600px)',
                background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)',
              }}
            />
          </div>

          {/* Branch Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Selected branch card */}
            <div className="glass-dark rounded-3xl p-8 border-gold flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-brand-gold animate-glow" />
                <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Active Office</span>
              </div>
              <h2 className="font-display text-3xl text-white tracking-tighter mb-1">{selected.name}</h2>
              <p className="font-heading text-sm text-brand-gold tracking-widest uppercase mb-6">{selected.country}</p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-heading text-xs text-white/30 tracking-widest uppercase mb-1">Address</p>
                  <p className="font-body text-sm text-white/70">{selected.address}</p>
                </div>
                <div>
                  <p className="font-heading text-xs text-white/30 tracking-widest uppercase mb-1">Telephone</p>
                  <p className="font-body text-sm text-white/70">{selected.phone}</p>
                </div>
                <div>
                  <p className="font-heading text-xs text-white/30 tracking-widest uppercase mb-1">Email</p>
                  <a href={`mailto:${selected.email}`} className="font-body text-sm text-brand-gold hover:underline">{selected.email}</a>
                </div>
                <div>
                  <p className="font-heading text-xs text-white/30 tracking-widest uppercase mb-1">Active Listings</p>
                  <p className="font-display text-3xl text-white tracking-tighter">{selected.properties}</p>
                </div>
              </div>

              <a href="/concierge" className="inline-flex w-full justify-center items-center gap-2 py-3.5 bg-brand-gold text-white font-heading text-xs tracking-widest uppercase rounded-full hover:bg-brand-gold-dim transition-all duration-300">
                Contact This Office
              </a>
            </div>

            {/* Branch list */}
            <div className="grid grid-cols-2 gap-3">
              {branches.map((b) => (
                <button
                  key={b.name}
                  onClick={() => setSelected(b)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                    selected.name === b.name
                      ? 'bg-brand-gold/20 border border-brand-gold/40'
                      : 'bg-white/5 border border-white/8 hover:border-brand-gold/30'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="font-heading text-xs text-white font-500">{b.name}</span>
                  </div>
                  <p className="font-heading text-xs text-white/30 tracking-widest uppercase">{b.country}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
