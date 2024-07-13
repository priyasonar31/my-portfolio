import React, { useEffect, useRef, useState } from "react";
import {
  Scene,
  Box3,
  WebGLRenderer,
  OrthographicCamera,
  PerspectiveCamera,
  Vector3,
  AmbientLight,
  AnimationMixer,
  HemisphereLight,
  DirectionalLight,
  Clock,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        const animations = gltf.animations;
        obj.name = "dinosaur";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.position.z = 0;
        // obj.receiveShadow = receiveShadow;
        // obj.castShadow = castShadow;
        // obj.rotation.x = 0;
        // obj.rotation.y = -160;
        // obj.rotation.z = 0
        const mixer = new AnimationMixer(obj);

        // if (animations && animations.length > 0) {
        //   const idleAction = mixer.clipAction(
        //     animations.find((clip) => clip.name === "Idle")
        //   );
        //   if (idleAction) {
        //     idleAction.play();
        //   } else {
        //     console.warn("Idle animation not found");
        //   }
        // }

        scene.add(obj);

        obj.traverse(function (child) {
          // @ts-ignore
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve({mixer, obj});
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
}

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Loader3D = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      // @ts-ignore
      const scW = container.clientWidth;
      // @ts-ignore
      const scH = container.clientHeight;
      const renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      // @ts-ignore
      //   renderer.outputEncoding = sRGBEncoding;
      // @ts-ignore
      container.appendChild(renderer.domElement);
      // @ts-ignore
      setRenderer(renderer);

      const scene = new Scene();
      const scale = 1;
      const camera = new PerspectiveCamera( 3, window.innerWidth / window.innerHeight, 1 ,4000 );
      camera.position.set( 8,40, 50 );
      camera.lookAt( 0, -4, 0 );
      // const camera = new OrthographicCamera(
      //   -scale,
      //   scale,
      //   scale,
      //   -scale,
      //   0.5,
      //   50000
      // );
      // const camera = new PerspectiveCamera(
      //   1,
      //   scale,
      //   1,
      //   4000
      // );
      // camera.position.set(
      //  100, 300, 1000
      // );
      const target = new Vector3(0, 300, 0);
      const initialCameraPosition = new Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );
      // const ambientLight = new AmbientLight(0xcccccc, 1);
      // scene.add(ambientLight);
      const hemiLight = new HemisphereLight( 0xffffff, 0x8d8d8d, 3 );
				hemiLight.position.set( 0, 20, 0 );
				scene.add( hemiLight );

				const dirLight = new DirectionalLight( 0xffffff, 3 );
				dirLight.position.set( - 3, 10, - 10 );
				dirLight.castShadow = true;
				dirLight.shadow.camera.top = 2;
				dirLight.shadow.camera.bottom = - 2;
				dirLight.shadow.camera.left = - 2;
				dirLight.shadow.camera.right = 2;
				dirLight.shadow.camera.near = 0.1;
				dirLight.shadow.camera.far = 40;
				scene.add( dirLight );
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, "./3d/scene.gltf", {
        receiveShadow: false,
        castShadow: false,
      }).then((result) => {
        // Render loop
        console.log("obj-->", result);
        const clock = new Clock();
        const animate = () => {
          requestAnimationFrame(animate);
          if (result.obj) {
            const { position, rotation } = result.obj;
            console.log(`Position: x=${position.x}, y=${position.y}, z=${position.z}`);
            console.log(`Rotation: x=${rotation.x}, y=${rotation.y}, z=${rotation.z}`);
          }
          result.mixer.update(clock.getDelta());
          renderer.render(scene, camera);
        };
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      // const animate = () => {
      //   req = requestAnimationFrame(animate);
      //   frame = frame <= 100 ? frame + 1 : frame;

      //   if (frame <= 100) {
      //     const p = initialCameraPosition;
      //     const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

      //     camera.position.y = 10;
      //     camera.position.x =
      //       p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
      //     camera.position.z =
      //       p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
      //     camera.lookAt(target);
      //   } else {
      //     controls.update();
      //   }

      //   renderer.render(scene, camera);
      // };

      return () => {
        // @ts-ignore
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div
      style={{
        height: "491px",
        width: "582px",
        position: "relative",
        bottom: "56px",
        border: "1px solid",
      }}
      // @ts-ignore
      ref={refContainer}
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  );
};

export default Loader3D;
