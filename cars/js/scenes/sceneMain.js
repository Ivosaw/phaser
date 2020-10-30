class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {

    }
    create() {
      // define the objects
      // Moved to sceneTitle as its the first scene
      // emitter = new Phaser.Events.EventEmitter();
      // controller = new Controller();
      var mediaManager=new MediaManager({scene:this});
      model.gameOver=false;
        //
        this.sb=new ScoreBox({scene:this});
        this.sb.x=game.config.width-50;
        this.sb.y=50;

        this.road=new Road({scene:this});
        this.road.x=game.config.width/2;
        this.road.makeLines();

        this.alignGrid=new AlignGrid({scene:this,rows:5,cols:5});
        // shows the lines and number of boxes for dev purposes
        //this.alignGrid.showNumbers();
        this.alignGrid.placeAtIndex(4,this.sb);

        var soundButtons=new SoundButtons({scene:this});
    }
    update() {
      // constant running loop
      this.road.moveLines();
      this.road.moveObject();
    }
}
