// import libraries

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// create a scene
const scene = new THREE.Scene();

 // scene.fog = new THREE.Fog(0x1c5d50, 12, 22);
//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// create a renderer
const renderer = new THREE.WebGLRenderer( { alpha: true });

// instantiate OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = .35;
controls.maxDistance = 200;

const headLoader = new GLTFLoader();

// GLTF LOADER ------- the gltf model using the gltf loader library
headLoader.load(
  'https://raw.githubusercontent.com/510home/3JS-barebones/main/meshes/daniel-head.glb',
  (gltf) => {
    const object = gltf.scene;
    object.scale.set(0.25, 0.25, 0.25);
    scene.add(object);
  },
);

// add renderer to the Document Object Model (DOM)
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// camera position
camera.position.set(0, 0, 2);

// add light to the scene
const ambientLight = new THREE.AmbientLight(0xdf8842, .5);
 scene.add(ambientLight);

 const topLight = new THREE.DirectionalLight(0xffffff, 3.5);
 topLight.position.set(0, 1, 0);
 scene.add(topLight);

 function animate() {
  requestAnimationFrame(animate)
 
renderer.render(scene, camera);
 }

// event listener watches for window changes in order to resize and rerender the window
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// start rendering the scene
animate ();