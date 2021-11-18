import * as THREE from './three.module'

import { OrbitControls } from './OrbitControls.js';

//container
const container = document.createElement("div");
document.body.appendChild(container);



const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 3;

//renderer
const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);

//material
const material = new THREE.MeshBasicMaterial({color:0xff0000});

//geometry
const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1),material)
scene.add(cube);

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene,camera);
}

animate();


