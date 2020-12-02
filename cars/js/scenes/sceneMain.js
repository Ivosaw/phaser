class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {

    }
    create() {
      // define the objects
      // Also on sceneTitle as its needed on first scene
      emitter = new Phaser.Events.EventEmitter();
      controller = new Controller();


      // Prevents gameOver from reverting to true when the game is reset and speed/score continuing from previous run.
      model.gameOver=false;
      model.speed=1;
      model.score=0;
        // creates a new scorebox from scoreBox.js which use the model/controller getters and setters emmiter to listen for events.
        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width-50;
        this.sb.y=50;
        // Creates the first road with two lanes. Delete road2 and change game.config.width to /2 to revert to single road game
        this.road = new Road({scene:this});
        this.road.x = game.config.width *.25;
        this.road.makeLines();
        // Creates the second road
        this.road2 = new Road({scene:this});
        this.road2.x = game.config.width *.75;
        this.road2.makeLines();
        // change car image from default
        this.road2.car.setFrame(1);

        // Allows items to be placed around the screen
        this.alignGrid = new AlignGrid({scene:this,rows:5,cols:5});
        // shows the lines and number of boxes for dev purposes
        //this.alignGrid.showNumbers();
        // can be used to place scorebox at the side of screen
        //this.alignGrid.placeAtIndex(4,this.sb);

        var soundButtons=new SoundButtons({scene:this});
        // creates a new scorebox from scoreBox.js which use the model/controller.js getters and setters to listen for events.
        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width/2;
        this.sb.y=50;
        // Listen for score updating to increase speed
        emitter.on(G.SCORE_UPDATED,this.scoreUpdated,this);
    }
    // updates the score every 5 points to increase speed and then caps it at 1.5 times speed.
    scoreUpdated() {
      if (model.score / 5 == Math.floor(model.score / 5)) {
        model.speed += .25;
        if (model.speed > 1.5) {
          model.speed = 1.5;
        }
      }
    }
    update() {
      // constant running loop
      this.road.moveLines();
      this.road.moveObject();
      // second road updating
      this.road2.moveLines();
      this.road2.moveObject();
    }
}
