"use client";
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { SITE_CONFIG } from '@/config/siteConfig';
import { PROPERTIES } from '@/data/properties';
import { SITE_DATA } from '@/constants/siteData';

interface BranchCity {
  name: string;
  country: string;
  lat: number;
  lng: number;
  properties: number;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export function GlobeSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { global } = SITE_DATA;
  const [hoveredBranch, setHoveredBranch] = useState<BranchCity | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    globe: THREE.Mesh;
    markers: Array<{ mesh: THREE.Mesh; branch: BranchCity }>;
    animId: number;
    autoRotate: boolean;
  } | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const w = mount.clientWidth;
    const h = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Globe
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x111111,
      emissive: 0x0a0a1a,
      specular: 0x333344,
      shininess: 100,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Wireframe overlay
    const wireGeo = new THREE.SphereGeometry(1.01, 40, 40);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc5a377,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    scene.add(new THREE.Mesh(wireGeo, wireMat));

    // Atmosphere
    const atmGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0xc5a377,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xc5a377, 2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Markers
    const markerData: Array<{ mesh: THREE.Mesh; branch: BranchCity }> = [];
    global.branches.forEach((b) => {
      const pos = latLngToVector3(b.lat, b.lng, 1.02);
      const markerMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xc5a377 })
      );
      markerMesh.position.copy(pos);
      scene.add(markerMesh);
      markerData.push({ mesh: markerMesh, branch: b as BranchCity });

      // Ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.035, 0.045, 32),
        new THREE.MeshBasicMaterial({ color: 0xc5a377, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
      );
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(ring);
    });

    sceneRef.current = { renderer, scene, camera, globe, markers: markerData, animId: 0, autoRotate: true };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let prevMousePosition = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        globe.rotation.y += (e.clientX - prevMousePosition.x) * 0.005;
        globe.rotation.x += (e.clientY - prevMousePosition.y) * 0.005;
        prevMousePosition = { x: e.clientX, y: e.clientY };
      }

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(markerData.map(m => m.mesh));
      if (hits.length > 0) {
        const found = markerData.find(m => m.mesh === hits[0].object);
        if (found) {
          setHoveredBranch(found.branch);
          setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          mount.style.cursor = 'pointer';
        }
      } else {
        setHoveredBranch(null);
        mount.style.cursor = 'grab';
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePosition = { x: e.clientX, y: e.clientY };
      if (sceneRef.current) sceneRef.current.autoRotate = false;
    };

    const onMouseUp = () => {
      isDragging = false;
      if (sceneRef.current) sceneRef.current.autoRotate = true;
    };

    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const animate = () => {
      const id = requestAnimationFrame(animate);
      if (sceneRef.current) sceneRef.current.animId = id;
      if (sceneRef.current?.autoRotate) {
        globe.rotation.y += 0.0015;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(sceneRef.current?.animId ?? 0);
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);


  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-heading text-[10px] tracking-widest uppercase text-brand-gold">{global.tag}</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none mb-10">
              {global.title}
            </h2>
            <p className="font-body text-white/40 text-lg leading-relaxed mb-12 max-w-md">
              {global.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {global.branches.map((b) => (
                <div
                  key={b.name}
                  className="p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-500 group cursor-default"
                >
                  <p className="font-heading text-xs text-brand-gold tracking-widest uppercase mb-1">{b.country}</p>
                  <p className="font-display text-xl text-white mb-4 group-hover:translate-x-1 transition-transform">{b.name}</p>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/30">
                    <span>Listings</span>
                    <span className="text-white font-mono">{b.properties}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-12 group flex items-center gap-4 text-white font-heading text-[10px] tracking-[0.2em] uppercase">
              <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                â†“
              </span>
              View All Locations
            </button>
          </div>

          {/* Interactive Globe */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-square lg:aspect-auto h-[500px] lg:h-[800px]">
            <div
              ref={mountRef}
              className="w-full h-full rounded-[3rem] overflow-hidden relative"
              style={{ background: 'radial-gradient(circle at center, #1a1a2a 0%, #080808 100%)' }}
            />
            {/* Tooltip */}
            {hoveredBranch && (
              <div
                className="absolute pointer-events-none glass-dark rounded-2xl p-6 border-gold shadow-2xl z-20 whitespace-nowrap animate-in fade-in zoom-in duration-300"
                style={{ left: tooltipPos.x + 20, top: tooltipPos.y - 40 }}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[9px] text-brand-gold uppercase tracking-[0.2em]">{hoveredBranch.country}</span>
                  <span className="font-display text-2xl text-white">{hoveredBranch.name}</span>
                  <div className="h-px w-full bg-white/10 my-2" />
                  <span className="font-body text-xs text-white/50">{hoveredBranch.properties} Exclusive Listings</span>
                </div>
              </div>
            )}

            {/* Aesthetic Glows */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

