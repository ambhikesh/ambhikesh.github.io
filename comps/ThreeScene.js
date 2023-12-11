import React, { useEffect } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { randFloat } from 'three/src/math/MathUtils';

const ThreeScene = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.6, 1200);
        camera.position.z = 250;
        const renderer = new THREE.WebGLRenderer({antialias: true});
        
        renderer.setClearColor("#0F0F0F");
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        renderer.domElement.style.position = 'fixed';  // Set position to fixed
        renderer.domElement.style.top = 0;
        renderer.domElement.style.left = 0;
        renderer.domElement.style.zIndex = '-1';
        
        window.addEventListener('resize', () => {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        })
        
        
        const ambientLight = new THREE.AmbientLight("#008170");
        scene.add(ambientLight);
        
        const lights = [];
        const lightValues = [
            {colour: 0x00FF00, intensity: 10000, dist: 0, x: 1, y: 0, z: 1000},
            {colour: 0xFFFFFF, intensity: 10000, dist: 0, x: -2, y: 1, z: -1000},
            {colour: 0x00FF00, intensity: 10000, dist: 0, x: 0, y: 10, z: 1000},
            {colour: 0xFF0000, intensity: 10000, dist: 0, x: 0, y: -10, z: -1000},
            {colour: 0x00FF00, intensity: 10000, dist: 0, x: 10, y: 3, z: 1000},
            {colour: 0xFFFFFF, intensity: 10000, dist: 0, x: -10, y: -1, z: 1000}
        ];
        for (let i=0; i<6; i++) {
            lights[i] = new THREE.PointLight(
                lightValues[i]['colour'], 
                lightValues[i]['intensity'], 
                lightValues[i]['dist']);
            lights[i].position.set(
                lightValues[i]['x'], 
                lightValues[i]['y'], 
                lightValues[i]['z']);
            //scene.add(lights[i]);
        }
        
        const controls = new TrackballControls(camera, renderer.domElement); 
        controls.rotateSpeed = 4;
        controls.dynamicDampingFactor = 0.1;
        
        const axesHelper = new THREE.AxesHelper(5);
        //scene.add(axesHelper);
        
        const numberOfSphere = 1000;
        const radius = 50;
        
        for (let i = 0; i < numberOfSphere; i++) {
            const geometry = new THREE.SphereGeometry( 2, 32, 16 );
            const material = new THREE.MeshLambertMaterial({color: 0xffff00});
            const cone = new THREE.Mesh(geometry, material);
            
            cone.position.set(randFloat(-500,500), randFloat(-500,500), randFloat(-500,500));
            scene.add(cone);
        }
        
        const rendering = function() {
          requestAnimationFrame(rendering);
          controls.update();
          scene.rotation.z-=0.001
          scene.rotation.y-=0.001
          renderer.render(scene, camera);
        }
        
        rendering();
        
    }, []);
  
    return (
      <div className="top-0 left-0 -z-10"></div>
    );
  };
  
export default ThreeScene;