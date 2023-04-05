import * as THREE from "three";
import coin from "../assets/logo_icon.png"

export default function Rocket() {
  // create a new Three.js scene
  const scene = new THREE.Scene();

  // create a camera and position it
  const camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
  );
  camera.position.z = 5;

  // create a renderer and add it to the DOM
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // create a rocket mesh
  const rocketGeometry = new THREE.BoxGeometry(1, 2, 1);
  const rocketMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
  scene.add(rocket);

  // create a galaxy particle system
  const galaxyGeometry = new THREE.BufferGeometry();
  const galaxyPositions = [];
  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);
    galaxyPositions.push(x, y, z);
  }
  galaxyGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(galaxyPositions, 3)
  );
  const galaxyMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    map: new THREE.TextureLoader().load(coin),
  });
  const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
  scene.add(galaxy);

  // define the animation loop
  function animate() {
    requestAnimationFrame(animate);

    // rotate the rocket
    rocket.rotation.x += 0.01;
    rocket.rotation.y += 0.01;

    // move the galaxy
    galaxy.position.z += 1;

    // render the scene
    renderer.render(scene, camera);
  }

  // start the animation loop
  animate();

  // return an empty div element, as the Three.js canvas will be added to the DOM separately
  return <div />;
}