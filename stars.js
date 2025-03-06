import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('stars'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const starVertices = [];

for (let i = 0; i < 600; i++) {
    let x = (Math.random() - 0.5) * 2000;
    let y = (Math.random() - 0.5) * 2000;
    let z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starField = new THREE.Points(starsGeometry, starsMaterial);

scene.add(starField);
camera.position.z = 500;

function animate() {
    starField.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
