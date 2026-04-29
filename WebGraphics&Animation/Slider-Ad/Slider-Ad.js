(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Slider_Ad_atlas_1", frames: [[0,0,980,230],[0,232,980,230]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Before_and_After_pt1 = function() {
	this.initialize(ss["Slider_Ad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Before_and_After_pt2 = function() {
	this.initialize(ss["Slider_Ad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Agnx4IBPAAMAAAAjxIhPAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003399").s().p("AgnR5MAAAgjxIBPAAMAAAAjxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-115.4,10,230.9);


(lib.BeforeImage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Before_and_After_pt1();
	this.instance.setTransform(-490,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-490,-115,980,230);


(lib.AfterImage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Before_and_After_pt2();
	this.instance.setTransform(-490,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-490,-115,980,230);


// stage content:
(lib.SliderAd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// Define your constants
		var totalFrames = 240;
		var imageWidth = 965;
		
		stage.on("stagemousemove", function(evt) {
		    // 1. Get mouse position relative to the animation container
		    var p = this.globalToLocal(evt.stageX, evt.stageY);
		    
		    // 2. Calculate the percentage of the mouse across the 980px image
		    var percent = Math.max(0, Math.min(1, p.x / imageWidth));
		    
		    // 3. Map that percentage to your 240 frames
		    // (totalFrames - 1) because the first frame is index 0
		    var targetFrame = Math.floor(percent * (totalFrames - 1));
		    
		    this.gotoAndStop(targetFrame);
		}, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(241));

	// Slider
	this.instance = new lib.Slider("synched",0);
	this.instance.setTransform(4,115.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:977.9,y:115.15},240).wait(1));

	// MaskSlider (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhMjAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_1 = new cjs.Graphics().p("EhMPAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_2 = new cjs.Graphics().p("EhL6AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_3 = new cjs.Graphics().p("EhLmAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_4 = new cjs.Graphics().p("EhLSAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_5 = new cjs.Graphics().p("EhK+AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_6 = new cjs.Graphics().p("EhKpAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_7 = new cjs.Graphics().p("EhKVAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_8 = new cjs.Graphics().p("EhKBAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_9 = new cjs.Graphics().p("EhJsAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_10 = new cjs.Graphics().p("EhJYAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_11 = new cjs.Graphics().p("EhJEAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_12 = new cjs.Graphics().p("EhIwAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_13 = new cjs.Graphics().p("EhIbAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_14 = new cjs.Graphics().p("EhIHAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_15 = new cjs.Graphics().p("EhHzAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_16 = new cjs.Graphics().p("EhHeAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_17 = new cjs.Graphics().p("EhHKAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_18 = new cjs.Graphics().p("EhG2AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_19 = new cjs.Graphics().p("EhGhAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_20 = new cjs.Graphics().p("EhGNAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_21 = new cjs.Graphics().p("EhF5AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_22 = new cjs.Graphics().p("EhFlAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_23 = new cjs.Graphics().p("EhFQAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_24 = new cjs.Graphics().p("EhE8AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_25 = new cjs.Graphics().p("EhEoAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_26 = new cjs.Graphics().p("EhETAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_27 = new cjs.Graphics().p("EhD/AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_28 = new cjs.Graphics().p("EhDrAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_29 = new cjs.Graphics().p("EhDXAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_30 = new cjs.Graphics().p("EhDCAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_31 = new cjs.Graphics().p("EhCuAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_32 = new cjs.Graphics().p("EhCaAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_33 = new cjs.Graphics().p("EhCFAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_34 = new cjs.Graphics().p("EhBxAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_35 = new cjs.Graphics().p("EhBdAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_36 = new cjs.Graphics().p("EhBJAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_37 = new cjs.Graphics().p("EhA0AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_38 = new cjs.Graphics().p("EhAgAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_39 = new cjs.Graphics().p("EhAMAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_40 = new cjs.Graphics().p("Eg/3AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_41 = new cjs.Graphics().p("Eg/jAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_42 = new cjs.Graphics().p("Eg/PAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_43 = new cjs.Graphics().p("Eg+7AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_44 = new cjs.Graphics().p("Eg+mAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_45 = new cjs.Graphics().p("Eg+SAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_46 = new cjs.Graphics().p("Eg9+AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_47 = new cjs.Graphics().p("Eg9pAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_48 = new cjs.Graphics().p("Eg9VAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_49 = new cjs.Graphics().p("Eg9BAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_50 = new cjs.Graphics().p("Eg8tAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_51 = new cjs.Graphics().p("Eg8YAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_52 = new cjs.Graphics().p("Eg8EAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_53 = new cjs.Graphics().p("Eg7wAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_54 = new cjs.Graphics().p("Eg7bAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_55 = new cjs.Graphics().p("Eg7HAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_56 = new cjs.Graphics().p("Eg6zAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_57 = new cjs.Graphics().p("Eg6eAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_58 = new cjs.Graphics().p("Eg6KAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_59 = new cjs.Graphics().p("Eg52AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_60 = new cjs.Graphics().p("Eg5iAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_61 = new cjs.Graphics().p("Eg5NAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_62 = new cjs.Graphics().p("Eg45AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_63 = new cjs.Graphics().p("Eg4lAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_64 = new cjs.Graphics().p("Eg4QAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_65 = new cjs.Graphics().p("Eg38AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_66 = new cjs.Graphics().p("Eg3oAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_67 = new cjs.Graphics().p("Eg3UAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_68 = new cjs.Graphics().p("Eg2/AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_69 = new cjs.Graphics().p("Eg2rAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_70 = new cjs.Graphics().p("Eg2XAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_71 = new cjs.Graphics().p("Eg2CAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_72 = new cjs.Graphics().p("Eg1uAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_73 = new cjs.Graphics().p("Eg1aAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_74 = new cjs.Graphics().p("Eg1GAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_75 = new cjs.Graphics().p("Eg0xAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_76 = new cjs.Graphics().p("Eg0dAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_77 = new cjs.Graphics().p("Eg0JAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_78 = new cjs.Graphics().p("Egz0AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_79 = new cjs.Graphics().p("EgzgAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_80 = new cjs.Graphics().p("EgzMAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_81 = new cjs.Graphics().p("Egy4AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_82 = new cjs.Graphics().p("EgyjAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_83 = new cjs.Graphics().p("EgyPAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_84 = new cjs.Graphics().p("Egx7AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_85 = new cjs.Graphics().p("EgxmAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_86 = new cjs.Graphics().p("EgxSAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_87 = new cjs.Graphics().p("Egw+AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_88 = new cjs.Graphics().p("EgwqAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_89 = new cjs.Graphics().p("EgwVAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_90 = new cjs.Graphics().p("EgwBAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_91 = new cjs.Graphics().p("EgvtAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_92 = new cjs.Graphics().p("EgvYAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_93 = new cjs.Graphics().p("EgvEAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_94 = new cjs.Graphics().p("EguwAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_95 = new cjs.Graphics().p("EgubAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_96 = new cjs.Graphics().p("EguHAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_97 = new cjs.Graphics().p("EgtzAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_98 = new cjs.Graphics().p("EgtfAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_99 = new cjs.Graphics().p("EgtKAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_100 = new cjs.Graphics().p("Egs2AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_101 = new cjs.Graphics().p("EgsiAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_102 = new cjs.Graphics().p("EgsNAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_103 = new cjs.Graphics().p("Egr5AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_104 = new cjs.Graphics().p("EgrlAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_105 = new cjs.Graphics().p("EgrRAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_106 = new cjs.Graphics().p("Egq8AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_107 = new cjs.Graphics().p("EgqoAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_108 = new cjs.Graphics().p("EgqUAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_109 = new cjs.Graphics().p("Egp/AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_110 = new cjs.Graphics().p("EgprAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_111 = new cjs.Graphics().p("EgpXAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_112 = new cjs.Graphics().p("EgpDAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_113 = new cjs.Graphics().p("EgouAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_114 = new cjs.Graphics().p("EgoaAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_115 = new cjs.Graphics().p("EgoGAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_116 = new cjs.Graphics().p("EgnxAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_117 = new cjs.Graphics().p("EgndAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_118 = new cjs.Graphics().p("EgnJAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_119 = new cjs.Graphics().p("Egm1AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_120 = new cjs.Graphics().p("EgmgAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_121 = new cjs.Graphics().p("EgmMAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_122 = new cjs.Graphics().p("Egl4AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_123 = new cjs.Graphics().p("EgljAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_124 = new cjs.Graphics().p("EglPAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_125 = new cjs.Graphics().p("Egk7AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_126 = new cjs.Graphics().p("EgknAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_127 = new cjs.Graphics().p("EgkSAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_128 = new cjs.Graphics().p("Egj+AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_129 = new cjs.Graphics().p("EgjqAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_130 = new cjs.Graphics().p("EgjVAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_131 = new cjs.Graphics().p("EgjBAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_132 = new cjs.Graphics().p("EgitAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_133 = new cjs.Graphics().p("EgiYAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_134 = new cjs.Graphics().p("EgiEAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_135 = new cjs.Graphics().p("EghwAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_136 = new cjs.Graphics().p("EghcAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_137 = new cjs.Graphics().p("EghHAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_138 = new cjs.Graphics().p("EggzAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_139 = new cjs.Graphics().p("EggfAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_140 = new cjs.Graphics().p("EggKAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_141 = new cjs.Graphics().p("A/2R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_142 = new cjs.Graphics().p("A/iR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_143 = new cjs.Graphics().p("A/OR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_144 = new cjs.Graphics().p("A+5R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_145 = new cjs.Graphics().p("A+lR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_146 = new cjs.Graphics().p("A+RR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_147 = new cjs.Graphics().p("A98R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_148 = new cjs.Graphics().p("A9oR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_149 = new cjs.Graphics().p("A9UR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_150 = new cjs.Graphics().p("A9AR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_151 = new cjs.Graphics().p("A8rR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_152 = new cjs.Graphics().p("A8XR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_153 = new cjs.Graphics().p("A8DR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_154 = new cjs.Graphics().p("A7uR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_155 = new cjs.Graphics().p("A7aR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_156 = new cjs.Graphics().p("A7GR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_157 = new cjs.Graphics().p("A6yR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_158 = new cjs.Graphics().p("A6dR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_159 = new cjs.Graphics().p("A6JR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_160 = new cjs.Graphics().p("A51R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_161 = new cjs.Graphics().p("A5gR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_162 = new cjs.Graphics().p("A5MR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_163 = new cjs.Graphics().p("A44R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_164 = new cjs.Graphics().p("A4kR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_165 = new cjs.Graphics().p("A4PR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_166 = new cjs.Graphics().p("A37R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_167 = new cjs.Graphics().p("A3nR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_168 = new cjs.Graphics().p("A3SR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_169 = new cjs.Graphics().p("A2+R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_170 = new cjs.Graphics().p("A2qR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_171 = new cjs.Graphics().p("A2VR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_172 = new cjs.Graphics().p("A2BR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_173 = new cjs.Graphics().p("A1tR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_174 = new cjs.Graphics().p("A1ZR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_175 = new cjs.Graphics().p("A1ER+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_176 = new cjs.Graphics().p("A0wR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_177 = new cjs.Graphics().p("A0cR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_178 = new cjs.Graphics().p("A0HR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_179 = new cjs.Graphics().p("AzzR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_180 = new cjs.Graphics().p("AzfR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_181 = new cjs.Graphics().p("AzLR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_182 = new cjs.Graphics().p("Ay2R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_183 = new cjs.Graphics().p("AyiR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_184 = new cjs.Graphics().p("AyOR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_185 = new cjs.Graphics().p("Ax5R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_186 = new cjs.Graphics().p("AxlR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_187 = new cjs.Graphics().p("AxRR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_188 = new cjs.Graphics().p("Aw9R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_189 = new cjs.Graphics().p("AwoR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_190 = new cjs.Graphics().p("AwUR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_191 = new cjs.Graphics().p("AwAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_192 = new cjs.Graphics().p("AvrR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_193 = new cjs.Graphics().p("AvXR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_194 = new cjs.Graphics().p("AvDR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_195 = new cjs.Graphics().p("AuvR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_196 = new cjs.Graphics().p("AuaR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_197 = new cjs.Graphics().p("AuGR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_198 = new cjs.Graphics().p("AtyR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_199 = new cjs.Graphics().p("AtdR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_200 = new cjs.Graphics().p("AtJR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_201 = new cjs.Graphics().p("As1R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_202 = new cjs.Graphics().p("AshR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_203 = new cjs.Graphics().p("AsMR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_204 = new cjs.Graphics().p("Ar4R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_205 = new cjs.Graphics().p("ArkR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_206 = new cjs.Graphics().p("ArPR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_207 = new cjs.Graphics().p("Aq7R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_208 = new cjs.Graphics().p("AqnR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_209 = new cjs.Graphics().p("AqSR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_210 = new cjs.Graphics().p("Ap+R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_211 = new cjs.Graphics().p("ApqR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_212 = new cjs.Graphics().p("ApWR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_213 = new cjs.Graphics().p("ApBR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_214 = new cjs.Graphics().p("AotR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_215 = new cjs.Graphics().p("AoZR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_216 = new cjs.Graphics().p("AoER+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_217 = new cjs.Graphics().p("AnwR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_218 = new cjs.Graphics().p("AncR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_219 = new cjs.Graphics().p("AnIR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_220 = new cjs.Graphics().p("AmzR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_221 = new cjs.Graphics().p("AmfR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_222 = new cjs.Graphics().p("AmLR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_223 = new cjs.Graphics().p("Al2R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_224 = new cjs.Graphics().p("AliR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_225 = new cjs.Graphics().p("AlOR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_226 = new cjs.Graphics().p("Ak6R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_227 = new cjs.Graphics().p("AklR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_228 = new cjs.Graphics().p("AkRR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_229 = new cjs.Graphics().p("Aj9R+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_230 = new cjs.Graphics().p("AjoR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_231 = new cjs.Graphics().p("AjUR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_232 = new cjs.Graphics().p("AjAR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_233 = new cjs.Graphics().p("AisR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_234 = new cjs.Graphics().p("AiXR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_235 = new cjs.Graphics().p("AiDR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_236 = new cjs.Graphics().p("AhvR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_237 = new cjs.Graphics().p("AhaR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_238 = new cjs.Graphics().p("AhGR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_239 = new cjs.Graphics().p("AgyR+MAAAgj7MCZHAAAMAAAAj7g");
	var mask_graphics_240 = new cjs.Graphics().p("AgeR+MAAAgj7MCZIAAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:490,y:115}).wait(1).to({graphics:mask_graphics_1,x:492.029,y:114.9983}).wait(1).to({graphics:mask_graphics_2,x:494.0579,y:114.9967}).wait(1).to({graphics:mask_graphics_3,x:496.0869,y:114.995}).wait(1).to({graphics:mask_graphics_4,x:498.1158,y:114.9933}).wait(1).to({graphics:mask_graphics_5,x:500.1448,y:114.9917}).wait(1).to({graphics:mask_graphics_6,x:502.1738,y:114.99}).wait(1).to({graphics:mask_graphics_7,x:504.2027,y:114.9883}).wait(1).to({graphics:mask_graphics_8,x:506.2317,y:114.9867}).wait(1).to({graphics:mask_graphics_9,x:508.2606,y:114.985}).wait(1).to({graphics:mask_graphics_10,x:510.2896,y:114.9833}).wait(1).to({graphics:mask_graphics_11,x:512.3185,y:114.9817}).wait(1).to({graphics:mask_graphics_12,x:514.3475,y:114.98}).wait(1).to({graphics:mask_graphics_13,x:516.3765,y:114.9783}).wait(1).to({graphics:mask_graphics_14,x:518.4054,y:114.9767}).wait(1).to({graphics:mask_graphics_15,x:520.4344,y:114.975}).wait(1).to({graphics:mask_graphics_16,x:522.4633,y:114.9733}).wait(1).to({graphics:mask_graphics_17,x:524.4923,y:114.9717}).wait(1).to({graphics:mask_graphics_18,x:526.5213,y:114.97}).wait(1).to({graphics:mask_graphics_19,x:528.5502,y:114.9683}).wait(1).to({graphics:mask_graphics_20,x:530.5792,y:114.9667}).wait(1).to({graphics:mask_graphics_21,x:532.6081,y:114.965}).wait(1).to({graphics:mask_graphics_22,x:534.6371,y:114.9633}).wait(1).to({graphics:mask_graphics_23,x:536.666,y:114.9617}).wait(1).to({graphics:mask_graphics_24,x:538.695,y:114.96}).wait(1).to({graphics:mask_graphics_25,x:540.724,y:114.9583}).wait(1).to({graphics:mask_graphics_26,x:542.7529,y:114.9567}).wait(1).to({graphics:mask_graphics_27,x:544.7819,y:114.955}).wait(1).to({graphics:mask_graphics_28,x:546.8108,y:114.9533}).wait(1).to({graphics:mask_graphics_29,x:548.8398,y:114.9517}).wait(1).to({graphics:mask_graphics_30,x:550.8688,y:114.95}).wait(1).to({graphics:mask_graphics_31,x:552.8977,y:114.9483}).wait(1).to({graphics:mask_graphics_32,x:554.9267,y:114.9467}).wait(1).to({graphics:mask_graphics_33,x:556.9556,y:114.945}).wait(1).to({graphics:mask_graphics_34,x:558.9846,y:114.9433}).wait(1).to({graphics:mask_graphics_35,x:561.0135,y:114.9417}).wait(1).to({graphics:mask_graphics_36,x:563.0425,y:114.94}).wait(1).to({graphics:mask_graphics_37,x:565.0715,y:114.9383}).wait(1).to({graphics:mask_graphics_38,x:567.1004,y:114.9367}).wait(1).to({graphics:mask_graphics_39,x:569.1294,y:114.935}).wait(1).to({graphics:mask_graphics_40,x:571.1583,y:114.9333}).wait(1).to({graphics:mask_graphics_41,x:573.1873,y:114.9317}).wait(1).to({graphics:mask_graphics_42,x:575.2162,y:114.93}).wait(1).to({graphics:mask_graphics_43,x:577.2452,y:114.9283}).wait(1).to({graphics:mask_graphics_44,x:579.2742,y:114.9267}).wait(1).to({graphics:mask_graphics_45,x:581.3031,y:114.925}).wait(1).to({graphics:mask_graphics_46,x:583.3321,y:114.9233}).wait(1).to({graphics:mask_graphics_47,x:585.361,y:114.9217}).wait(1).to({graphics:mask_graphics_48,x:587.39,y:114.92}).wait(1).to({graphics:mask_graphics_49,x:589.419,y:114.9183}).wait(1).to({graphics:mask_graphics_50,x:591.4479,y:114.9167}).wait(1).to({graphics:mask_graphics_51,x:593.4769,y:114.915}).wait(1).to({graphics:mask_graphics_52,x:595.5058,y:114.9133}).wait(1).to({graphics:mask_graphics_53,x:597.5348,y:114.9117}).wait(1).to({graphics:mask_graphics_54,x:599.5638,y:114.91}).wait(1).to({graphics:mask_graphics_55,x:601.5927,y:114.9083}).wait(1).to({graphics:mask_graphics_56,x:603.6217,y:114.9067}).wait(1).to({graphics:mask_graphics_57,x:605.6506,y:114.905}).wait(1).to({graphics:mask_graphics_58,x:607.6796,y:114.9033}).wait(1).to({graphics:mask_graphics_59,x:609.7085,y:114.9017}).wait(1).to({graphics:mask_graphics_60,x:611.7375,y:114.9}).wait(1).to({graphics:mask_graphics_61,x:613.7665,y:114.8983}).wait(1).to({graphics:mask_graphics_62,x:615.7954,y:114.8967}).wait(1).to({graphics:mask_graphics_63,x:617.8244,y:114.895}).wait(1).to({graphics:mask_graphics_64,x:619.8533,y:114.8933}).wait(1).to({graphics:mask_graphics_65,x:621.8823,y:114.8917}).wait(1).to({graphics:mask_graphics_66,x:623.9113,y:114.89}).wait(1).to({graphics:mask_graphics_67,x:625.9402,y:114.8883}).wait(1).to({graphics:mask_graphics_68,x:627.9692,y:114.8867}).wait(1).to({graphics:mask_graphics_69,x:629.9981,y:114.885}).wait(1).to({graphics:mask_graphics_70,x:632.0271,y:114.8833}).wait(1).to({graphics:mask_graphics_71,x:634.056,y:114.8817}).wait(1).to({graphics:mask_graphics_72,x:636.085,y:114.88}).wait(1).to({graphics:mask_graphics_73,x:638.114,y:114.8783}).wait(1).to({graphics:mask_graphics_74,x:640.1429,y:114.8767}).wait(1).to({graphics:mask_graphics_75,x:642.1719,y:114.875}).wait(1).to({graphics:mask_graphics_76,x:644.2008,y:114.8733}).wait(1).to({graphics:mask_graphics_77,x:646.2298,y:114.8717}).wait(1).to({graphics:mask_graphics_78,x:648.2588,y:114.87}).wait(1).to({graphics:mask_graphics_79,x:650.2877,y:114.8683}).wait(1).to({graphics:mask_graphics_80,x:652.3167,y:114.8667}).wait(1).to({graphics:mask_graphics_81,x:654.3456,y:114.865}).wait(1).to({graphics:mask_graphics_82,x:656.3746,y:114.8633}).wait(1).to({graphics:mask_graphics_83,x:658.4035,y:114.8617}).wait(1).to({graphics:mask_graphics_84,x:660.4325,y:114.86}).wait(1).to({graphics:mask_graphics_85,x:662.4615,y:114.8583}).wait(1).to({graphics:mask_graphics_86,x:664.4904,y:114.8567}).wait(1).to({graphics:mask_graphics_87,x:666.5194,y:114.855}).wait(1).to({graphics:mask_graphics_88,x:668.5483,y:114.8533}).wait(1).to({graphics:mask_graphics_89,x:670.5773,y:114.8517}).wait(1).to({graphics:mask_graphics_90,x:672.6063,y:114.85}).wait(1).to({graphics:mask_graphics_91,x:674.6352,y:114.8483}).wait(1).to({graphics:mask_graphics_92,x:676.6642,y:114.8467}).wait(1).to({graphics:mask_graphics_93,x:678.6931,y:114.845}).wait(1).to({graphics:mask_graphics_94,x:680.7221,y:114.8433}).wait(1).to({graphics:mask_graphics_95,x:682.751,y:114.8417}).wait(1).to({graphics:mask_graphics_96,x:684.78,y:114.84}).wait(1).to({graphics:mask_graphics_97,x:686.809,y:114.8383}).wait(1).to({graphics:mask_graphics_98,x:688.8379,y:114.8367}).wait(1).to({graphics:mask_graphics_99,x:690.8669,y:114.835}).wait(1).to({graphics:mask_graphics_100,x:692.8958,y:114.8333}).wait(1).to({graphics:mask_graphics_101,x:694.9248,y:114.8317}).wait(1).to({graphics:mask_graphics_102,x:696.9538,y:114.83}).wait(1).to({graphics:mask_graphics_103,x:698.9827,y:114.8283}).wait(1).to({graphics:mask_graphics_104,x:701.0117,y:114.8267}).wait(1).to({graphics:mask_graphics_105,x:703.0406,y:114.825}).wait(1).to({graphics:mask_graphics_106,x:705.0696,y:114.8233}).wait(1).to({graphics:mask_graphics_107,x:707.0985,y:114.8217}).wait(1).to({graphics:mask_graphics_108,x:709.1275,y:114.82}).wait(1).to({graphics:mask_graphics_109,x:711.1565,y:114.8183}).wait(1).to({graphics:mask_graphics_110,x:713.1854,y:114.8167}).wait(1).to({graphics:mask_graphics_111,x:715.2144,y:114.815}).wait(1).to({graphics:mask_graphics_112,x:717.2433,y:114.8133}).wait(1).to({graphics:mask_graphics_113,x:719.2723,y:114.8117}).wait(1).to({graphics:mask_graphics_114,x:721.3013,y:114.81}).wait(1).to({graphics:mask_graphics_115,x:723.3302,y:114.8083}).wait(1).to({graphics:mask_graphics_116,x:725.3592,y:114.8067}).wait(1).to({graphics:mask_graphics_117,x:727.3881,y:114.805}).wait(1).to({graphics:mask_graphics_118,x:729.4171,y:114.8033}).wait(1).to({graphics:mask_graphics_119,x:731.446,y:114.8017}).wait(1).to({graphics:mask_graphics_120,x:733.475,y:114.8}).wait(1).to({graphics:mask_graphics_121,x:735.504,y:114.7983}).wait(1).to({graphics:mask_graphics_122,x:737.5329,y:114.7967}).wait(1).to({graphics:mask_graphics_123,x:739.5619,y:114.795}).wait(1).to({graphics:mask_graphics_124,x:741.5908,y:114.7933}).wait(1).to({graphics:mask_graphics_125,x:743.6198,y:114.7917}).wait(1).to({graphics:mask_graphics_126,x:745.6487,y:114.79}).wait(1).to({graphics:mask_graphics_127,x:747.6777,y:114.7883}).wait(1).to({graphics:mask_graphics_128,x:749.7067,y:114.7867}).wait(1).to({graphics:mask_graphics_129,x:751.7356,y:114.785}).wait(1).to({graphics:mask_graphics_130,x:753.7646,y:114.7833}).wait(1).to({graphics:mask_graphics_131,x:755.7935,y:114.7817}).wait(1).to({graphics:mask_graphics_132,x:757.8225,y:114.78}).wait(1).to({graphics:mask_graphics_133,x:759.8515,y:114.7783}).wait(1).to({graphics:mask_graphics_134,x:761.8804,y:114.7767}).wait(1).to({graphics:mask_graphics_135,x:763.9094,y:114.775}).wait(1).to({graphics:mask_graphics_136,x:765.9383,y:114.7733}).wait(1).to({graphics:mask_graphics_137,x:767.9673,y:114.7717}).wait(1).to({graphics:mask_graphics_138,x:769.9963,y:114.77}).wait(1).to({graphics:mask_graphics_139,x:772.0252,y:114.7683}).wait(1).to({graphics:mask_graphics_140,x:774.0542,y:114.7667}).wait(1).to({graphics:mask_graphics_141,x:776.0831,y:114.765}).wait(1).to({graphics:mask_graphics_142,x:778.1121,y:114.7633}).wait(1).to({graphics:mask_graphics_143,x:780.141,y:114.7617}).wait(1).to({graphics:mask_graphics_144,x:782.17,y:114.76}).wait(1).to({graphics:mask_graphics_145,x:784.199,y:114.7583}).wait(1).to({graphics:mask_graphics_146,x:786.2279,y:114.7567}).wait(1).to({graphics:mask_graphics_147,x:788.2569,y:114.755}).wait(1).to({graphics:mask_graphics_148,x:790.2858,y:114.7533}).wait(1).to({graphics:mask_graphics_149,x:792.3148,y:114.7517}).wait(1).to({graphics:mask_graphics_150,x:794.3438,y:114.75}).wait(1).to({graphics:mask_graphics_151,x:796.3727,y:114.7483}).wait(1).to({graphics:mask_graphics_152,x:798.4017,y:114.7467}).wait(1).to({graphics:mask_graphics_153,x:800.4306,y:114.745}).wait(1).to({graphics:mask_graphics_154,x:802.4596,y:114.7433}).wait(1).to({graphics:mask_graphics_155,x:804.4885,y:114.7417}).wait(1).to({graphics:mask_graphics_156,x:806.5175,y:114.74}).wait(1).to({graphics:mask_graphics_157,x:808.5465,y:114.7383}).wait(1).to({graphics:mask_graphics_158,x:810.5754,y:114.7367}).wait(1).to({graphics:mask_graphics_159,x:812.6044,y:114.735}).wait(1).to({graphics:mask_graphics_160,x:814.6333,y:114.7333}).wait(1).to({graphics:mask_graphics_161,x:816.6623,y:114.7317}).wait(1).to({graphics:mask_graphics_162,x:818.6913,y:114.73}).wait(1).to({graphics:mask_graphics_163,x:820.7202,y:114.7283}).wait(1).to({graphics:mask_graphics_164,x:822.7492,y:114.7267}).wait(1).to({graphics:mask_graphics_165,x:824.7781,y:114.725}).wait(1).to({graphics:mask_graphics_166,x:826.8071,y:114.7233}).wait(1).to({graphics:mask_graphics_167,x:828.836,y:114.7217}).wait(1).to({graphics:mask_graphics_168,x:830.865,y:114.72}).wait(1).to({graphics:mask_graphics_169,x:832.894,y:114.7183}).wait(1).to({graphics:mask_graphics_170,x:834.9229,y:114.7167}).wait(1).to({graphics:mask_graphics_171,x:836.9519,y:114.715}).wait(1).to({graphics:mask_graphics_172,x:838.9808,y:114.7133}).wait(1).to({graphics:mask_graphics_173,x:841.0098,y:114.7117}).wait(1).to({graphics:mask_graphics_174,x:843.0388,y:114.71}).wait(1).to({graphics:mask_graphics_175,x:845.0677,y:114.7083}).wait(1).to({graphics:mask_graphics_176,x:847.0967,y:114.7067}).wait(1).to({graphics:mask_graphics_177,x:849.1256,y:114.705}).wait(1).to({graphics:mask_graphics_178,x:851.1546,y:114.7033}).wait(1).to({graphics:mask_graphics_179,x:853.1835,y:114.7017}).wait(1).to({graphics:mask_graphics_180,x:855.2125,y:114.7}).wait(1).to({graphics:mask_graphics_181,x:857.2415,y:114.6983}).wait(1).to({graphics:mask_graphics_182,x:859.2704,y:114.6967}).wait(1).to({graphics:mask_graphics_183,x:861.2994,y:114.695}).wait(1).to({graphics:mask_graphics_184,x:863.3283,y:114.6933}).wait(1).to({graphics:mask_graphics_185,x:865.3573,y:114.6917}).wait(1).to({graphics:mask_graphics_186,x:867.3863,y:114.69}).wait(1).to({graphics:mask_graphics_187,x:869.4152,y:114.6883}).wait(1).to({graphics:mask_graphics_188,x:871.4442,y:114.6867}).wait(1).to({graphics:mask_graphics_189,x:873.4731,y:114.685}).wait(1).to({graphics:mask_graphics_190,x:875.5021,y:114.6833}).wait(1).to({graphics:mask_graphics_191,x:877.531,y:114.6817}).wait(1).to({graphics:mask_graphics_192,x:879.56,y:114.68}).wait(1).to({graphics:mask_graphics_193,x:881.589,y:114.6783}).wait(1).to({graphics:mask_graphics_194,x:883.6179,y:114.6767}).wait(1).to({graphics:mask_graphics_195,x:885.6469,y:114.675}).wait(1).to({graphics:mask_graphics_196,x:887.6758,y:114.6733}).wait(1).to({graphics:mask_graphics_197,x:889.7048,y:114.6717}).wait(1).to({graphics:mask_graphics_198,x:891.7338,y:114.67}).wait(1).to({graphics:mask_graphics_199,x:893.7627,y:114.6683}).wait(1).to({graphics:mask_graphics_200,x:895.7917,y:114.6667}).wait(1).to({graphics:mask_graphics_201,x:897.8206,y:114.665}).wait(1).to({graphics:mask_graphics_202,x:899.8496,y:114.6633}).wait(1).to({graphics:mask_graphics_203,x:901.8785,y:114.6617}).wait(1).to({graphics:mask_graphics_204,x:903.9075,y:114.66}).wait(1).to({graphics:mask_graphics_205,x:905.9365,y:114.6583}).wait(1).to({graphics:mask_graphics_206,x:907.9654,y:114.6567}).wait(1).to({graphics:mask_graphics_207,x:909.9944,y:114.655}).wait(1).to({graphics:mask_graphics_208,x:912.0233,y:114.6533}).wait(1).to({graphics:mask_graphics_209,x:914.0523,y:114.6517}).wait(1).to({graphics:mask_graphics_210,x:916.0813,y:114.65}).wait(1).to({graphics:mask_graphics_211,x:918.1102,y:114.6483}).wait(1).to({graphics:mask_graphics_212,x:920.1392,y:114.6467}).wait(1).to({graphics:mask_graphics_213,x:922.1681,y:114.645}).wait(1).to({graphics:mask_graphics_214,x:924.1971,y:114.6433}).wait(1).to({graphics:mask_graphics_215,x:926.226,y:114.6417}).wait(1).to({graphics:mask_graphics_216,x:928.255,y:114.64}).wait(1).to({graphics:mask_graphics_217,x:930.284,y:114.6383}).wait(1).to({graphics:mask_graphics_218,x:932.3129,y:114.6367}).wait(1).to({graphics:mask_graphics_219,x:934.3419,y:114.635}).wait(1).to({graphics:mask_graphics_220,x:936.3708,y:114.6333}).wait(1).to({graphics:mask_graphics_221,x:938.3998,y:114.6317}).wait(1).to({graphics:mask_graphics_222,x:940.4288,y:114.63}).wait(1).to({graphics:mask_graphics_223,x:942.4577,y:114.6283}).wait(1).to({graphics:mask_graphics_224,x:944.4867,y:114.6267}).wait(1).to({graphics:mask_graphics_225,x:946.5156,y:114.625}).wait(1).to({graphics:mask_graphics_226,x:948.5446,y:114.6233}).wait(1).to({graphics:mask_graphics_227,x:950.5735,y:114.6217}).wait(1).to({graphics:mask_graphics_228,x:952.6025,y:114.62}).wait(1).to({graphics:mask_graphics_229,x:954.6315,y:114.6183}).wait(1).to({graphics:mask_graphics_230,x:956.6604,y:114.6167}).wait(1).to({graphics:mask_graphics_231,x:958.6894,y:114.615}).wait(1).to({graphics:mask_graphics_232,x:960.7183,y:114.6133}).wait(1).to({graphics:mask_graphics_233,x:962.7473,y:114.6117}).wait(1).to({graphics:mask_graphics_234,x:964.7763,y:114.61}).wait(1).to({graphics:mask_graphics_235,x:966.8052,y:114.6083}).wait(1).to({graphics:mask_graphics_236,x:968.8342,y:114.6067}).wait(1).to({graphics:mask_graphics_237,x:970.8631,y:114.605}).wait(1).to({graphics:mask_graphics_238,x:972.8921,y:114.6033}).wait(1).to({graphics:mask_graphics_239,x:974.921,y:114.6017}).wait(1).to({graphics:mask_graphics_240,x:976.95,y:114.6}).wait(1));

	// Before
	this.instance_1 = new lib.BeforeImage();
	this.instance_1.setTransform(490,115);

	this.instance_2 = new lib.Before_and_After_pt2();

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(241));

	// After
	this.instance_3 = new lib.AfterImage();
	this.instance_3.setTransform(490,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(241));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(489,114.7,493.9,116.3);
// library properties:
lib.properties = {
	id: '90C33B0A810B9F40A2D7824924C24412',
	width: 980,
	height: 230,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Slider_Ad_atlas_1.png", id:"Slider_Ad_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90C33B0A810B9F40A2D7824924C24412'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;