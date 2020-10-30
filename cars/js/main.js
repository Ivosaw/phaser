var game;
var model;
var emitter;
var G;
var controller;

window.onload=function() {
  // looks in the browser for the keywords mobile or tablet to set the screen scalling size
  var isMobile = navigator.userAgent.indexOf("Mobile");
  if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
  }
  // desktop detection
  if (isMobile == -1) {
    var config = {
          type: Phaser.AUTO,
          width: 480,
          height: 640,
          parent: 'phaser-game',
          scene: [SceneLoad,SceneTitle,SceneMain,SceneOver]
      };
  // mobile detection
  } else {
      var config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'phaser-game',
      scene: [ScenceLoad,SceneTitle,SceneMain,SceneOver]
      };
  }
    G = new Constants();
    model = new Model();
    model.isMobile=isMobile;
    game = new Phaser.Game(config);
}
