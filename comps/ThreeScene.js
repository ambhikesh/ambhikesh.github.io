import React, { useEffect } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { randFloat } from 'three/src/math/MathUtils';

const ThreeScene = () => {
  useEffect(() => {
    const setupScene = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.6, 1200);
      camera.position.z = 250;
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor("#FFE5D0"); // Light peach background color
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      renderer.domElement.style.position = 'fixed';
      renderer.domElement.style.top = 0;
      renderer.domElement.style.left = 0;
      renderer.domElement.style.zIndex = '-1';
      return { scene, camera, renderer };
    };

    const setupCones = (scene, numberOfCones, color) => {
      for (let i = 0; i < numberOfCones; i++) {
        const geometry = new THREE.TetrahedronGeometry(2,2);
        const material = new THREE.MeshLambertMaterial({ color, metalness: 2, roughness: 0 });
        const cone = new THREE.Mesh(geometry, material);
        cone.position.set(randFloat(-500, 500), randFloat(-500, 500), randFloat(-500, 500));
        scene.add(cone);
      }
    };

    const setupLights = (scene) => {
      const pointLight = new THREE.PointLight(0xffffff, 10);
      pointLight.position.set(0, 0, 250);
      scene.add(pointLight);
    };

    const { scene, camera, renderer } = setupScene();
    const controls = new TrackballControls(camera, renderer.domElement);
    const ambientLight = new THREE.AmbientLight("#FFFFFF");
    scene.add(ambientLight);
    setupLights(scene);
    const numberOfCones = 750;
    setupCones(scene, numberOfCones, 0xFFE5D0); // Darker peach color for cones

    const rendering = () => {
      requestAnimationFrame(rendering);
      controls.update();
      scene.rotation.z -= 0.00009;
      scene.rotation.y -= 0.00009;
      renderer.render(scene, camera);
    };
    rendering();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    const cleanup = () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
      controls.dispose();
      renderer.dispose();
    };
    return cleanup;
  }, []);

  return <div className="top-0 left-0 -z-10"></div>;
};

export default ThreeScene;