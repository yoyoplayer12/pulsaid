import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, 310 / 509, 0.1, 1000);
camera.position.z = 5;

// Get the canvas
var canvas = document.querySelector('.indexvisualgraphic');

// Create a renderer with a transparent background and set its size
var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);



let heart;
//import gltf
var loader = new GLTFLoader();
loader.load(
    'models/heart.glb',
    function (gltf) {
        heart = gltf.scene;
        heart.scale.set(5, 5, 5);
        heart.position.set(0, 0, 0);
        heart.rotation.set(0, 1.6, 0);
        heart.traverse((o) => {
            if (o.isMesh) {
                o.material = new THREE.MeshPhongMaterial({
                    color: 0xff0000, // Change to the color you want
                    shininess: 10 // Change to the shininess you want
                });
            }
        });
        scene.add(heart);
}, undefined, function (error) {
    console.error(error);
});
//import light
var light = new THREE.PointLight(0xffffff, 200, 40);
light.position.set(0, 0, 10);
scene.add(light);



// Calculate beats per second
var beatsPerSecond = 104 / 60;
// Calculate radians per millisecond
var radiansPerMillisecond = 2 * Math.PI * beatsPerSecond / 1000;
// Make heart beat


// Create an animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    // heart beat
    if (heart) {
        heart.scale.x = 5 + Math.sin(Date.now() * radiansPerMillisecond);
    }
    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate();