// import libraries

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150/build/three.module.js';
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.150/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.150/examples/jsm/loaders/GLTFLoader.js";

// create a scene
const scene = new THREE.Scene();
 // scene.background = new THREE.Color(0x1c5d38);
 // scene.fog = new THREE.Fog(0x1c5d50, 12, 22);
//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// create a renderer
const renderer = new THREE.WebGLRenderer( { alpha: true });

// follow the cursor'sposition
let mouseX = window.innerwidth / 2;
let mouseY = window.innerHeight / 2;

// object as a global variable
let object;

// instantiate OrbitControls
let controls;

// state which object to render
let objToRender = 'head';

const headLoader = new GLTFLoader();

// load the gltf model using the gltf loader library
headLoader.load(
  'https://raw.githubusercontent.com/510home/3JS-barebones/main/meshes/lancer_green_scaled.glb',
  (gltf) => {
    object = gltf.scene;
    object.scale.set(0.2, 0.2, 0.2);
    scene.add(object);
  },

);

// add renderer to the Document Object Model (DOM)
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// camera position
camera.position.set(0, 0, 8);

// sdd light to the scene
const ambientLight = new THREE.AmbientLight(0xdf8842, 1);
 scene.add(ambientLight);

 const topLight = new THREE.DirectionalLight(0xffff88, 1);
 topLight.position.set(0, 1, 0);
 scene.add(topLight);

 function animate() {
  requestAnimationFrame(animate)
 
if (object && objectToRender === 'head') {
    // values are based on tutorial's approximation
    object.rotation.y = -3 + mousex / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
}
renderer.render(scene, camera);
 }


// event listener watches for window changes in order to resize and rerender the window
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// add mouse/cursor positoin listenre
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// start rendering the scene
animate ();