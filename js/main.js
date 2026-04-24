// import libraries

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// create a scene
const scene = new THREE.Scene();
 // scene.background = new THREE.Color(0x1c5d38);
 // scene.fog = new THREE.Fog(0x1c5d50, 12, 22);
//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// create a renderer
const renderer = new THREE.WebGLRenderer( { alpha: true });

// follow the cursor's position
const mouseX = window.innerWidth / 2;
const mouseY = window.innerHeight / 2;

// object as a global variable
//let object = 'head';

// instantiate OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = .35;
controls.maxDistance = 200;


 //state which object to render
// let objToRender = 'head';

const headLoader = new GLTFLoader();

// GLTF LOADER ------- the gltf model using the gltf loader library
headLoader.load(
  'https://raw.githubusercontent.com/510home/3JS-barebones/main/meshes/daniel-head.glb',
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
camera.position.set(0, 0, 1.6);

// sdd light to the scene
const ambientLight = new THREE.AmbientLight(0xdf8842, .5);
 scene.add(ambientLight);

 const topLight = new THREE.DirectionalLight(0x88ffff, 3);
 topLight.position.set(0, 1, 0);
 scene.add(topLight);

 function animate() {
  requestAnimationFrame(animate)
  // values are based on tutorial's approximation
    object.rotation.y = -3 + mousex / window.innerWidth * 3;
    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    
renderer.render(scene, camera);
 }

// event listener watches for window changes in order to resize and rerender the window
window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// add mouse/cursor position listener
//document.onmousemove = (e) => {
 // mouseX = e.clientX;
 // mouseY = e.clientY;
//}

// start rendering the scene
animate ();