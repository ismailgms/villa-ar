
THREE.GLTFLoader = function () {
  return {
    load: function (url, onLoad) {
      console.log("GLTFLoader placeholder: can't actually load", url);
      onLoad({ scene: new THREE.Group() });
    }
  };
};
