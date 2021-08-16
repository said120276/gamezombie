(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"game_atlas_1", frames: [[0,0,2000,1143],[0,1145,1142,858]]},
		{name:"game_atlas_2", frames: [[0,802,1102,802],[0,0,1120,800]]},
		{name:"game_atlas_3", frames: [[1102,0,684,627],[1102,629,684,627],[0,0,1100,800],[0,1258,684,627],[686,1258,684,627]]},
		{name:"game_atlas_4", frames: [[0,0,684,627],[686,0,684,627],[0,629,684,627],[0,1258,684,627],[686,629,684,627],[686,1258,684,627]]},
		{name:"game_atlas_5", frames: [[0,629,578,599],[580,629,578,599],[0,1230,578,599],[580,1230,578,599],[1160,653,578,599],[1160,1254,578,599],[0,0,684,627],[686,0,684,627],[1372,0,650,651]]},
		{name:"game_atlas_6", frames: [[1160,0,629,526],[580,601,629,526],[580,1129,629,526],[1211,528,629,526],[1211,1056,629,526],[0,0,578,599],[0,601,578,599],[580,0,578,599],[0,1202,578,599]]},
		{name:"game_atlas_7", frames: [[631,1056,521,576],[1154,1056,521,576],[0,0,629,526],[631,0,629,526],[1262,0,629,526],[0,528,629,526],[0,1056,629,526],[631,528,629,526],[1262,528,629,526]]},
		{name:"game_atlas_8", frames: [[0,0,521,576],[0,578,521,576],[0,1156,521,576],[523,0,521,576],[1046,0,521,576],[523,578,521,576],[523,1156,521,576],[1046,578,521,576],[1046,1156,521,576]]},
		{name:"game_atlas_9", frames: [[0,0,521,576],[0,578,521,576],[0,1156,521,576],[523,0,521,576],[1046,0,521,576],[523,578,521,576],[523,1156,521,576],[1046,578,521,576],[1046,1156,521,576]]},
		{name:"game_atlas_10", frames: [[0,0,521,576],[0,578,521,576],[0,1156,521,576],[523,0,521,576],[1046,0,521,576],[523,578,521,576],[523,1156,521,576],[1046,578,521,576],[1046,1156,521,576]]},
		{name:"game_atlas_11", frames: [[1046,0,524,565],[523,578,524,565],[523,1145,524,565],[1049,567,524,565],[1049,1134,524,565],[0,0,521,576],[0,578,521,576],[523,0,521,576],[0,1156,521,576]]},
		{name:"game_atlas_12", frames: [[526,567,496,465],[1578,552,430,519],[1024,567,430,519],[526,1034,430,519],[1456,1073,430,519],[958,1088,430,519],[0,0,524,565],[0,567,524,565],[0,1134,524,565],[526,0,524,565],[1052,0,524,565],[1578,0,438,550]]},
		{name:"game_atlas_13", frames: [[0,0,430,519],[0,521,430,519],[0,1042,430,519],[432,0,430,519],[864,0,430,519],[1296,0,430,519],[432,521,430,519],[432,1042,430,519],[864,521,430,519],[1296,521,430,519],[864,1042,430,519],[1296,1042,430,519]]},
		{name:"game_atlas_14", frames: [[0,0,430,519],[0,521,430,519],[0,1042,430,519],[432,0,430,519],[864,0,430,519],[1296,0,430,519],[432,521,430,519],[432,1042,430,519],[864,521,430,519],[1296,521,430,519],[864,1042,430,519],[1296,1042,430,519]]},
		{name:"game_atlas_15", frames: [[0,1563,480,456],[432,521,480,456],[864,0,480,456],[432,979,480,456],[482,1437,399,543],[883,1437,399,543],[1346,0,399,543],[914,458,399,543],[1315,545,399,543],[1284,1090,399,543],[0,0,430,519],[0,521,430,519],[0,1042,430,519],[432,0,430,519]]},
		{name:"game_atlas_16", frames: [[802,0,478,450],[1535,1044,290,500],[1535,1546,290,500],[0,0,399,543],[1282,0,376,520],[0,545,399,543],[0,1090,399,543],[1660,0,376,520],[802,452,376,520],[401,545,376,520],[401,1067,376,520],[1180,522,376,520],[779,974,376,520],[779,1496,376,520],[1558,522,376,520],[1157,1044,376,520],[401,0,399,543]]},
		{name:"game_atlas_17", frames: [[1156,646,65,65],[1969,502,72,77],[1545,502,162,115],[1352,502,191,141],[1069,726,31,12],[1223,646,20,33],[2025,581,20,44],[1250,502,100,298],[1223,681,20,22],[1675,619,20,9],[292,502,338,238],[1050,726,17,24],[2025,627,20,2],[1156,713,51,37],[920,502,328,142],[1969,581,54,46],[1209,713,27,27],[920,722,128,42],[1709,502,128,128],[1839,502,128,128],[1935,632,106,106],[1352,645,182,90],[920,646,132,74],[1054,646,100,78],[0,0,290,500],[292,0,290,500],[584,0,290,500],[876,0,290,500],[1168,0,290,500],[1460,0,290,500],[1752,0,290,500],[1545,619,128,128],[1675,632,128,128],[1805,632,128,128],[632,502,286,239],[0,502,290,500]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_34 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Attack1 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Attack4 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Attack1pngcopy = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Attack4pngcopy = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Attack5 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Attack3pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Attack6 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Attack6pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Attack7 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Attack7pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Attack8 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Attack8pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Attack__000pngcopy2 = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Attack__001pngcopy2 = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.attak = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Attack__003pngcopy2 = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Attack__004pngcopy2 = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Attack__002pngcopy2 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Attack__009pngcopy2 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Attack__007pngcopy2 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Attack__008pngcopy2 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Attack__006pngcopy2 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bone1pngcopy = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bone4 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["game_atlas_12"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Crate = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bush1 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Attack5pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead1pngcopy = function() {
	this.initialize(ss["game_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dead10 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dead1 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Dead11pngcopy = function() {
	this.initialize(ss["game_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["game_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Attack2pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Dead10pngcopy = function() {
	this.initialize(ss["game_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Dead2 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dead11 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Dead3pngcopy = function() {
	this.initialize(ss["game_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead12 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead3 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dead5 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Dead2pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dead4pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Dead6pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dead12pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Dead6 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead8 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Dead7 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Dead9 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Dead4 = function() {
	this.initialize(ss["game_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Dead8pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead__001pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Dead9pngcopy = function() {
	this.initialize(ss["game_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Dead__000pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Dead__004pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dead__005pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Dead__002pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Dead__003pngcopy2 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Dead__007pngcopy2 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Attack3 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Dead7pngcopy = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.DeadBush = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Dead5pngcopy = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Idle10 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Dead__009pngcopy2 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Idle1pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Dead__006pngcopy2 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Dead__008pngcopy2 = function() {
	this.initialize(ss["game_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Attack2 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.book = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Idle1 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Idle12pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4241,439);


(lib.Idle14 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Idle13pngcopy = function() {
	this.initialize(ss["game_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Idle12 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Idle14pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Idle2 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Idle2pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Idle3 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["game_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Idle11pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Idle3pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Idle5 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Idle5pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Idle6 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Idle6pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Idle7 = function() {
	this.initialize(ss["game_atlas_13"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Idle10pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Idle8 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Idle__000pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Idle7pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Idle__002pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Idle__003pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Idle__001pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Idle__005pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Idle4 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Idle__007pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Idle__006pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Idle4pngcopy = function() {
	this.initialize(ss["game_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Idle__008pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Idle9pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Jump__002pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Jump__000pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Jump__001pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Idle__009pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Jump__003pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Jump__007pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Jump__005pngcopy2 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Jump__006pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Run__000pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Jump__008pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Jump__009pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Run__003pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Run__001pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Run__002pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Run__006pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Run__007pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Run__008pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Run__009pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Run__004pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Run__005pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Tile1 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Tile2pngcopy = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Tile3 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Idle9 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tree = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Idle__004pngcopy2 = function() {
	this.initialize(ss["game_atlas_17"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Idle8pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Walk1 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Walk10pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Walk2 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Idle11 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Jump__004pngcopy2 = function() {
	this.initialize(ss["game_atlas_16"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Walk10 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Walk3 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Walk5pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Walk4pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Walk3pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Walk4 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Walk5 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Walk6pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Walk8pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Walk9 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Walk8 = function() {
	this.initialize(ss["game_atlas_14"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Walk6 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Walk7 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.woodboardvector22 = function() {
	this.initialize(ss["game_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Idle13 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Walk1pngcopy = function() {
	this.initialize(ss["game_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Idle15 = function() {
	this.initialize(ss["game_atlas_15"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Walk7pngcopy = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Walk9pngcopy = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Walk2pngcopy = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Idle15pngcopy = function() {
	this.initialize(ss["game_atlas_11"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3528,193);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{attacki:0,deadi:8,idlei:20,walki:35,attack:45,dead:53,idle:65,walk:80});

	// timeline functions:
	this.frame_7 = function() {
		this.gotoAndPlay('attacki');
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.gotoAndPlay('walki');
	}
	this.frame_52 = function() {
		this.gotoAndPlay('attack');
	}
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.gotoAndPlay('walk');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(12).call(this.frame_19).wait(25).call(this.frame_44).wait(8).call(this.frame_52).wait(12).call(this.frame_64).wait(25).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.Attack1();
	this.instance.setTransform(-137,-196,0.5583,0.7452);

	this.instance_1 = new lib.Attack2();
	this.instance_1.setTransform(-137,-196,0.5583,0.7452);

	this.instance_2 = new lib.Attack3();
	this.instance_2.setTransform(-137,-196,0.5583,0.7452);

	this.instance_3 = new lib.Attack4();
	this.instance_3.setTransform(-137,-196,0.5583,0.7452);

	this.instance_4 = new lib.Attack5();
	this.instance_4.setTransform(-137,-196,0.5583,0.7452);

	this.instance_5 = new lib.Attack6();
	this.instance_5.setTransform(-137,-196,0.5583,0.7452);

	this.instance_6 = new lib.Attack7();
	this.instance_6.setTransform(-137,-196,0.5583,0.7452);

	this.instance_7 = new lib.Attack8();
	this.instance_7.setTransform(-137,-196,0.5583,0.7452);

	this.instance_8 = new lib.Dead1();
	this.instance_8.setTransform(-137,-196,0.5583,0.7452);

	this.instance_9 = new lib.Dead2();
	this.instance_9.setTransform(-137,-196,0.5583,0.7452);

	this.instance_10 = new lib.Dead3();
	this.instance_10.setTransform(-137,-196,0.5583,0.7452);

	this.instance_11 = new lib.Dead4();
	this.instance_11.setTransform(-137,-196,0.5583,0.7452);

	this.instance_12 = new lib.Dead5();
	this.instance_12.setTransform(-137,-196,0.5583,0.7452);

	this.instance_13 = new lib.Dead6();
	this.instance_13.setTransform(-137,-196,0.5583,0.7452);

	this.instance_14 = new lib.Dead7();
	this.instance_14.setTransform(-137,-196,0.5583,0.7452);

	this.instance_15 = new lib.Dead8();
	this.instance_15.setTransform(-137,-196,0.5583,0.7452);

	this.instance_16 = new lib.Dead9();
	this.instance_16.setTransform(-137,-196,0.5583,0.7452);

	this.instance_17 = new lib.Dead10();
	this.instance_17.setTransform(-137,-196,0.5583,0.7452);

	this.instance_18 = new lib.Dead11();
	this.instance_18.setTransform(-137,-196,0.5583,0.7452);

	this.instance_19 = new lib.Dead12();
	this.instance_19.setTransform(-137,-196,0.5583,0.7452);

	this.instance_20 = new lib.Idle1();
	this.instance_20.setTransform(-137,-196,0.5583,0.7452);

	this.instance_21 = new lib.Idle2();
	this.instance_21.setTransform(-137,-196,0.5583,0.7452);

	this.instance_22 = new lib.Idle3();
	this.instance_22.setTransform(-137,-196,0.5583,0.7452);

	this.instance_23 = new lib.Idle4();
	this.instance_23.setTransform(-137,-196,0.5583,0.7452);

	this.instance_24 = new lib.Idle5();
	this.instance_24.setTransform(-137,-196,0.5583,0.7452);

	this.instance_25 = new lib.Idle6();
	this.instance_25.setTransform(-137,-196,0.5583,0.7452);

	this.instance_26 = new lib.Idle7();
	this.instance_26.setTransform(-137,-196,0.5583,0.7452);

	this.instance_27 = new lib.Idle8();
	this.instance_27.setTransform(-137,-196,0.5583,0.7452);

	this.instance_28 = new lib.Idle9();
	this.instance_28.setTransform(-137,-196,0.5583,0.7452);

	this.instance_29 = new lib.Idle10();
	this.instance_29.setTransform(-137,-196,0.5583,0.7452);

	this.instance_30 = new lib.Idle11();
	this.instance_30.setTransform(-137,-196,0.5583,0.7452);

	this.instance_31 = new lib.Idle12();
	this.instance_31.setTransform(-137,-196,0.5583,0.7452);

	this.instance_32 = new lib.Idle13();
	this.instance_32.setTransform(-137,-196,0.5583,0.7452);

	this.instance_33 = new lib.Idle14();
	this.instance_33.setTransform(-137,-196,0.5583,0.7452);

	this.instance_34 = new lib.Idle15();
	this.instance_34.setTransform(-137,-196,0.5583,0.7452);

	this.instance_35 = new lib.Walk1();
	this.instance_35.setTransform(-137,-196,0.5583,0.7452);

	this.instance_36 = new lib.Walk2();
	this.instance_36.setTransform(-137,-196,0.5583,0.7452);

	this.instance_37 = new lib.Walk3();
	this.instance_37.setTransform(-137,-196,0.5583,0.7452);

	this.instance_38 = new lib.Walk4();
	this.instance_38.setTransform(-137,-196,0.5583,0.7452);

	this.instance_39 = new lib.Walk5();
	this.instance_39.setTransform(-137,-196,0.5583,0.7452);

	this.instance_40 = new lib.Walk6();
	this.instance_40.setTransform(-137,-196,0.5583,0.7452);

	this.instance_41 = new lib.Walk7();
	this.instance_41.setTransform(-137,-196,0.5583,0.7452);

	this.instance_42 = new lib.Walk8();
	this.instance_42.setTransform(-137,-196,0.5583,0.7452);

	this.instance_43 = new lib.Walk9();
	this.instance_43.setTransform(-137,-196,0.5583,0.7452);

	this.instance_44 = new lib.Walk10();
	this.instance_44.setTransform(-137,-196,0.5583,0.7452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[]},1).wait(45));

	// Layer_1
	this.instance_45 = new lib.Attack1();
	this.instance_45.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_46 = new lib.Attack2();
	this.instance_46.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_47 = new lib.Attack3();
	this.instance_47.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_48 = new lib.Attack4();
	this.instance_48.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_49 = new lib.Attack5();
	this.instance_49.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_50 = new lib.Attack6();
	this.instance_50.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_51 = new lib.Attack7();
	this.instance_51.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_52 = new lib.Attack8();
	this.instance_52.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_53 = new lib.Dead1();
	this.instance_53.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_54 = new lib.Dead2();
	this.instance_54.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_55 = new lib.Dead3();
	this.instance_55.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_56 = new lib.Dead4();
	this.instance_56.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_57 = new lib.Dead5();
	this.instance_57.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_58 = new lib.Dead6();
	this.instance_58.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_59 = new lib.Dead7();
	this.instance_59.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_60 = new lib.Dead8();
	this.instance_60.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_61 = new lib.Dead9();
	this.instance_61.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_62 = new lib.Dead10();
	this.instance_62.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_63 = new lib.Dead11();
	this.instance_63.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_64 = new lib.Dead12();
	this.instance_64.setTransform(109.15,-196,0.5583,0.7452,0,0,180);

	this.instance_65 = new lib.Idle1();
	this.instance_65.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_66 = new lib.Idle2();
	this.instance_66.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_67 = new lib.Idle3();
	this.instance_67.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_68 = new lib.Idle4();
	this.instance_68.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_69 = new lib.Idle5();
	this.instance_69.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_70 = new lib.Idle6();
	this.instance_70.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_71 = new lib.Idle7();
	this.instance_71.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_72 = new lib.Idle8();
	this.instance_72.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_73 = new lib.Idle9();
	this.instance_73.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_74 = new lib.Idle10();
	this.instance_74.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_75 = new lib.Idle11();
	this.instance_75.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_76 = new lib.Idle12();
	this.instance_76.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_77 = new lib.Idle13();
	this.instance_77.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_78 = new lib.Idle14();
	this.instance_78.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_79 = new lib.Idle15();
	this.instance_79.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_80 = new lib.Walk1();
	this.instance_80.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_81 = new lib.Walk2();
	this.instance_81.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_82 = new lib.Walk3();
	this.instance_82.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_83 = new lib.Walk4();
	this.instance_83.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_84 = new lib.Walk5();
	this.instance_84.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_85 = new lib.Walk6();
	this.instance_85.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_86 = new lib.Walk7();
	this.instance_86.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_87 = new lib.Walk8();
	this.instance_87.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_88 = new lib.Walk9();
	this.instance_88.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.instance_89 = new lib.Walk10();
	this.instance_89.setTransform(109.05,-196,0.5583,0.7452,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},45).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-196,456.2,392);


(lib.zf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"attacki":0,"deadi":8,"idlei":20,"walki":35,"attack":45,"dead":53,"idle":65,"walk":80});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.gotoAndPlay('walki');
	}
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.gotoAndPlay('walk');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(25).call(this.frame_44).wait(20).call(this.frame_64).wait(25).call(this.frame_89).wait(1));

	// Layer_1_copy
	this.instance = new lib.Attack1pngcopy();
	this.instance.setTransform(-125,-187,0.4454,0.6362);

	this.instance_1 = new lib.Attack2pngcopy();
	this.instance_1.setTransform(-125,-187,0.4454,0.6362);

	this.instance_2 = new lib.Attack3pngcopy();
	this.instance_2.setTransform(-125,-187,0.4454,0.6362);

	this.instance_3 = new lib.Attack4pngcopy();
	this.instance_3.setTransform(-125,-187,0.4454,0.6362);

	this.instance_4 = new lib.Attack5pngcopy();
	this.instance_4.setTransform(-125,-187,0.4454,0.6362);

	this.instance_5 = new lib.Attack6pngcopy();
	this.instance_5.setTransform(-125,-187,0.4454,0.6362);

	this.instance_6 = new lib.Attack7pngcopy();
	this.instance_6.setTransform(-125,-187,0.4454,0.6362);

	this.instance_7 = new lib.Attack8pngcopy();
	this.instance_7.setTransform(-125,-187,0.4454,0.6362);

	this.instance_8 = new lib.Dead1pngcopy();
	this.instance_8.setTransform(-125,-187,0.4454,0.6362);

	this.instance_9 = new lib.Dead2pngcopy();
	this.instance_9.setTransform(-125,-187,0.4454,0.6362);

	this.instance_10 = new lib.Dead3pngcopy();
	this.instance_10.setTransform(-125,-187,0.4454,0.6362);

	this.instance_11 = new lib.Dead4pngcopy();
	this.instance_11.setTransform(-125,-187,0.4454,0.6362);

	this.instance_12 = new lib.Dead5pngcopy();
	this.instance_12.setTransform(-125,-187,0.4454,0.6362);

	this.instance_13 = new lib.Dead6pngcopy();
	this.instance_13.setTransform(-125,-187,0.4454,0.6362);

	this.instance_14 = new lib.Dead7pngcopy();
	this.instance_14.setTransform(-125,-187,0.4454,0.6362);

	this.instance_15 = new lib.Dead8pngcopy();
	this.instance_15.setTransform(-125,-187,0.4454,0.6362);

	this.instance_16 = new lib.Dead9pngcopy();
	this.instance_16.setTransform(-125,-187,0.4454,0.6362);

	this.instance_17 = new lib.Dead10pngcopy();
	this.instance_17.setTransform(-125,-187,0.4454,0.6362);

	this.instance_18 = new lib.Dead11pngcopy();
	this.instance_18.setTransform(-125,-187,0.4454,0.6362);

	this.instance_19 = new lib.Dead12pngcopy();
	this.instance_19.setTransform(-125,-187,0.4454,0.6362);

	this.instance_20 = new lib.Idle1pngcopy();
	this.instance_20.setTransform(-125,-187,0.4454,0.6362);

	this.instance_21 = new lib.Idle2pngcopy();
	this.instance_21.setTransform(-125,-187,0.4454,0.6362);

	this.instance_22 = new lib.Idle3pngcopy();
	this.instance_22.setTransform(-125,-187,0.4454,0.6362);

	this.instance_23 = new lib.Idle4pngcopy();
	this.instance_23.setTransform(-125,-187,0.4454,0.6362);

	this.instance_24 = new lib.Idle5pngcopy();
	this.instance_24.setTransform(-125,-187,0.4454,0.6362);

	this.instance_25 = new lib.Idle6pngcopy();
	this.instance_25.setTransform(-125,-187,0.4454,0.6362);

	this.instance_26 = new lib.Idle7pngcopy();
	this.instance_26.setTransform(-125,-187,0.4454,0.6362);

	this.instance_27 = new lib.Idle8pngcopy();
	this.instance_27.setTransform(-125,-187,0.4454,0.6362);

	this.instance_28 = new lib.Idle9pngcopy();
	this.instance_28.setTransform(-125,-187,0.4454,0.6362);

	this.instance_29 = new lib.Idle10pngcopy();
	this.instance_29.setTransform(-125,-187,0.4454,0.6362);

	this.instance_30 = new lib.Idle11pngcopy();
	this.instance_30.setTransform(-125,-187,0.4454,0.6362);

	this.instance_31 = new lib.Idle12pngcopy();
	this.instance_31.setTransform(-125,-187,0.4454,0.6362);

	this.instance_32 = new lib.Idle13pngcopy();
	this.instance_32.setTransform(-125,-187,0.4454,0.6362);

	this.instance_33 = new lib.Idle14pngcopy();
	this.instance_33.setTransform(-125,-187,0.4454,0.6362);

	this.instance_34 = new lib.Idle15pngcopy();
	this.instance_34.setTransform(-125,-187,0.4454,0.6362);

	this.instance_35 = new lib.Walk1pngcopy();
	this.instance_35.setTransform(-125,-187,0.4454,0.6362);

	this.instance_36 = new lib.Walk2pngcopy();
	this.instance_36.setTransform(-125,-187,0.4454,0.6362);

	this.instance_37 = new lib.Walk3pngcopy();
	this.instance_37.setTransform(-125,-187,0.4454,0.6362);

	this.instance_38 = new lib.Walk4pngcopy();
	this.instance_38.setTransform(-125,-187,0.4454,0.6362);

	this.instance_39 = new lib.Walk5pngcopy();
	this.instance_39.setTransform(-125,-187,0.4454,0.6362);

	this.instance_40 = new lib.Walk6pngcopy();
	this.instance_40.setTransform(-125,-187,0.4454,0.6362);

	this.instance_41 = new lib.Walk7pngcopy();
	this.instance_41.setTransform(-125,-187,0.4454,0.6362);

	this.instance_42 = new lib.Walk8pngcopy();
	this.instance_42.setTransform(-125,-187,0.4454,0.6362);

	this.instance_43 = new lib.Walk9pngcopy();
	this.instance_43.setTransform(-125,-187,0.4454,0.6362);

	this.instance_44 = new lib.Walk10pngcopy();
	this.instance_44.setTransform(-125,-187,0.4454,0.6362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[]},1).wait(45));

	// Layer_1
	this.instance_45 = new lib.Attack1pngcopy();
	this.instance_45.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_46 = new lib.Attack2pngcopy();
	this.instance_46.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_47 = new lib.Attack3pngcopy();
	this.instance_47.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_48 = new lib.Attack4pngcopy();
	this.instance_48.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_49 = new lib.Attack5pngcopy();
	this.instance_49.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_50 = new lib.Attack6pngcopy();
	this.instance_50.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_51 = new lib.Attack7pngcopy();
	this.instance_51.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_52 = new lib.Attack8pngcopy();
	this.instance_52.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_53 = new lib.Dead1pngcopy();
	this.instance_53.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_54 = new lib.Dead2pngcopy();
	this.instance_54.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_55 = new lib.Dead3pngcopy();
	this.instance_55.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_56 = new lib.Dead4pngcopy();
	this.instance_56.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_57 = new lib.Dead5pngcopy();
	this.instance_57.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_58 = new lib.Dead6pngcopy();
	this.instance_58.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_59 = new lib.Dead7pngcopy();
	this.instance_59.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_60 = new lib.Dead8pngcopy();
	this.instance_60.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_61 = new lib.Dead9pngcopy();
	this.instance_61.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_62 = new lib.Dead10pngcopy();
	this.instance_62.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_63 = new lib.Dead11pngcopy();
	this.instance_63.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_64 = new lib.Dead12pngcopy();
	this.instance_64.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_65 = new lib.Idle1pngcopy();
	this.instance_65.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_66 = new lib.Idle2pngcopy();
	this.instance_66.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_67 = new lib.Idle3pngcopy();
	this.instance_67.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_68 = new lib.Idle4pngcopy();
	this.instance_68.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_69 = new lib.Idle5pngcopy();
	this.instance_69.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_70 = new lib.Idle6pngcopy();
	this.instance_70.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_71 = new lib.Idle7pngcopy();
	this.instance_71.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_72 = new lib.Idle8pngcopy();
	this.instance_72.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_73 = new lib.Idle9pngcopy();
	this.instance_73.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_74 = new lib.Idle10pngcopy();
	this.instance_74.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_75 = new lib.Idle11pngcopy();
	this.instance_75.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_76 = new lib.Idle12pngcopy();
	this.instance_76.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_77 = new lib.Idle13pngcopy();
	this.instance_77.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_78 = new lib.Idle14pngcopy();
	this.instance_78.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_79 = new lib.Idle15pngcopy();
	this.instance_79.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_80 = new lib.Walk1pngcopy();
	this.instance_80.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_81 = new lib.Walk2pngcopy();
	this.instance_81.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_82 = new lib.Walk3pngcopy();
	this.instance_82.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_83 = new lib.Walk4pngcopy();
	this.instance_83.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_84 = new lib.Walk5pngcopy();
	this.instance_84.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_85 = new lib.Walk6pngcopy();
	this.instance_85.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_86 = new lib.Walk7pngcopy();
	this.instance_86.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_87 = new lib.Walk8pngcopy();
	this.instance_87.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_88 = new lib.Walk9pngcopy();
	this.instance_88.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.instance_89 = new lib.Walk10pngcopy();
	this.instance_89.setTransform(134.7,-181,0.4601,0.6266,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},45).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-187,359.7,398.9);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,32.5,32.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,400);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.book();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,78);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Idle__000pngcopy2();
	this.instance.setTransform(0,0,0.6234,0.6484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.8,324.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Idle11();
	this.instance.setTransform(0,0,0.4814,0.6104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,316.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Idle14pngcopy();
	this.instance.setTransform(229.9,0,0.4413,0.4276,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.9,246.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(-2,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,50,149);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bush1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,90);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.DeadBush();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,74);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tree();
	this.instance.setTransform(0,0,0.5524,0.6151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,147);


(lib.resetBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(21,10.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.resetBtn, new cjs.Rectangle(0,0,81,57.5), null);


(lib.iamReady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(239,170.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_28();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(204,168.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_3
	this.instance_3 = new lib.CachedBmp_31();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iamReady, new cjs.Rectangle(-0.5,-0.5,551,401), null);


(lib.projectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_27();
	this.instance.setTransform(-10.9,-6.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.projectile, new cjs.Rectangle(-10.9,-6.2,15.5,6), null);


(lib.platGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4241,439);


(lib.qpad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.qpad, new cjs.Rectangle(0,0,169,119), null);


(lib.heroimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-13.05,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heroimg, new cjs.Rectangle(-13,-10,25.5,18.5), null);


(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"attack":0,"dead":10,"idle":20,jump:30,run:40,down:50,"attacki":53,"deadi":63,"idlei":73,jumpi:83,runi:93,downi:103});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndPlay('idle')
		;
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.gotoAndPlay('run');
	}
	this.frame_52 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_82 = function() {
		this.gotoAndPlay('idlei')
		;
	}
	this.frame_92 = function() {
		this.stop();
	}
	this.frame_102 = function() {
		this.gotoAndPlay('runi');
	}
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(3).call(this.frame_52).wait(10).call(this.frame_62).wait(10).call(this.frame_72).wait(10).call(this.frame_82).wait(10).call(this.frame_92).wait(10).call(this.frame_102).wait(3).call(this.frame_105).wait(1));

	// Layer_1_copy
	this.instance = new lib.Attack__000pngcopy2();
	this.instance.setTransform(-102,-214,0.5062,0.7239);

	this.instance_1 = new lib.Attack__001pngcopy2();
	this.instance_1.setTransform(-102,-214,0.5062,0.7239);

	this.instance_2 = new lib.Attack__002pngcopy2();
	this.instance_2.setTransform(-102,-214,0.5062,0.7239);

	this.instance_3 = new lib.Attack__003pngcopy2();
	this.instance_3.setTransform(-102,-214,0.5062,0.7239);

	this.instance_4 = new lib.Attack__004pngcopy2();
	this.instance_4.setTransform(-102,-214,0.5062,0.7239);

	this.instance_5 = new lib.attak();
	this.instance_5.setTransform(-102,-214,0.5062,0.7239);

	this.instance_6 = new lib.Attack__006pngcopy2();
	this.instance_6.setTransform(-102,-214,0.5062,0.7239);

	this.instance_7 = new lib.Attack__007pngcopy2();
	this.instance_7.setTransform(-102,-214,0.5062,0.7239);

	this.instance_8 = new lib.Attack__008pngcopy2();
	this.instance_8.setTransform(-102,-214,0.5062,0.7239);

	this.instance_9 = new lib.Attack__009pngcopy2();
	this.instance_9.setTransform(-102,-214,0.5062,0.7239);

	this.instance_10 = new lib.Dead__000pngcopy2();
	this.instance_10.setTransform(-102,-223,0.5062,0.7239);

	this.instance_11 = new lib.Dead__001pngcopy2();
	this.instance_11.setTransform(-102,-223,0.5062,0.7239);

	this.instance_12 = new lib.Dead__002pngcopy2();
	this.instance_12.setTransform(-102,-223,0.5062,0.7239);

	this.instance_13 = new lib.CachedBmp_6();
	this.instance_13.setTransform(-74.65,-100.65,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_7();
	this.instance_14.setTransform(-79.2,-75.7,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_8();
	this.instance_15.setTransform(-80.75,-75.55,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_9();
	this.instance_16.setTransform(-83.8,-75.95,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_10();
	this.instance_17.setTransform(-83.8,-75.95,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_11();
	this.instance_18.setTransform(-83.8,-75.95,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_12();
	this.instance_19.setTransform(-83.8,-75.95,0.5,0.5);

	this.instance_20 = new lib.Idle__000pngcopy2();
	this.instance_20.setTransform(-102,-214,0.5062,0.7239);

	this.instance_21 = new lib.Idle__001pngcopy2();
	this.instance_21.setTransform(-102,-214,0.5062,0.7239);

	this.instance_22 = new lib.Idle__002pngcopy2();
	this.instance_22.setTransform(-102,-214,0.5062,0.7239);

	this.instance_23 = new lib.Idle__003pngcopy2();
	this.instance_23.setTransform(-102,-214,0.5062,0.7239);

	this.instance_24 = new lib.Idle__004pngcopy2();
	this.instance_24.setTransform(-102,-214,0.5062,0.7239);

	this.instance_25 = new lib.Idle__005pngcopy2();
	this.instance_25.setTransform(-102,-214,0.5062,0.7239);

	this.instance_26 = new lib.Idle__006pngcopy2();
	this.instance_26.setTransform(-102,-214,0.5062,0.7239);

	this.instance_27 = new lib.Idle__007pngcopy2();
	this.instance_27.setTransform(-102,-214,0.5062,0.7239);

	this.instance_28 = new lib.Idle__008pngcopy2();
	this.instance_28.setTransform(-102,-214,0.5062,0.7239);

	this.instance_29 = new lib.Idle__009pngcopy2();
	this.instance_29.setTransform(-102,-214,0.5062,0.7239);

	this.instance_30 = new lib.Jump__000pngcopy2();
	this.instance_30.setTransform(-102,-214,0.5062,0.7239);

	this.instance_31 = new lib.Jump__001pngcopy2();
	this.instance_31.setTransform(-102,-214,0.5062,0.7239);

	this.instance_32 = new lib.Jump__002pngcopy2();
	this.instance_32.setTransform(-102,-214,0.5062,0.7239);

	this.instance_33 = new lib.Jump__003pngcopy2();
	this.instance_33.setTransform(-102,-214,0.5062,0.7239);

	this.instance_34 = new lib.Jump__004pngcopy2();
	this.instance_34.setTransform(-102,-214,0.5062,0.7239);

	this.instance_35 = new lib.Jump__005pngcopy2();
	this.instance_35.setTransform(-102,-214,0.5062,0.7239);

	this.instance_36 = new lib.Jump__006pngcopy2();
	this.instance_36.setTransform(-102,-214,0.5062,0.7239);

	this.instance_37 = new lib.Jump__007pngcopy2();
	this.instance_37.setTransform(-102,-214,0.5062,0.7239);

	this.instance_38 = new lib.Jump__008pngcopy2();
	this.instance_38.setTransform(-102,-214,0.5062,0.7239);

	this.instance_39 = new lib.Jump__009pngcopy2();
	this.instance_39.setTransform(-102,-214,0.5062,0.7239);

	this.instance_40 = new lib.Run__000pngcopy2();
	this.instance_40.setTransform(-102,-214,0.5062,0.7239);

	this.instance_41 = new lib.Run__001pngcopy2();
	this.instance_41.setTransform(-102,-214,0.5062,0.7239);

	this.instance_42 = new lib.Run__002pngcopy2();
	this.instance_42.setTransform(-102,-214,0.5062,0.7239);

	this.instance_43 = new lib.Run__003pngcopy2();
	this.instance_43.setTransform(-102,-214,0.5062,0.7239);

	this.instance_44 = new lib.Run__004pngcopy2();
	this.instance_44.setTransform(-102,-214,0.5062,0.7239);

	this.instance_45 = new lib.Run__005pngcopy2();
	this.instance_45.setTransform(-102,-214,0.5062,0.7239);

	this.instance_46 = new lib.Run__006pngcopy2();
	this.instance_46.setTransform(-102,-214,0.5062,0.7239);

	this.instance_47 = new lib.Run__007pngcopy2();
	this.instance_47.setTransform(-102,-214,0.5062,0.7239);

	this.instance_48 = new lib.Run__008pngcopy2();
	this.instance_48.setTransform(-102,-214,0.5062,0.7239);

	this.instance_49 = new lib.Run__009pngcopy2();
	this.instance_49.setTransform(-102,-214,0.5062,0.7239);

	this.instance_50 = new lib.Dead__009pngcopy2();
	this.instance_50.setTransform(-102,-211,0.5062,0.7239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11,p:{y:-223}}]},1).to({state:[{t:this.instance_12,p:{y:-223}}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_11,p:{y:-211}}]},1).to({state:[{t:this.instance_12,p:{y:-211}}]},1).to({state:[{t:this.instance_50}]},1).to({state:[]},1).wait(53));

	// Layer_1
	this.instance_51 = new lib.Attack__000pngcopy2();
	this.instance_51.setTransform(111.25,-220,0.5062,0.7239,0,0,180);

	this.instance_52 = new lib.Attack__001pngcopy2();
	this.instance_52.setTransform(111.25,-220,0.5062,0.7239,0,0,180);

	this.instance_53 = new lib.Attack__002pngcopy2();
	this.instance_53.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_54 = new lib.Attack__003pngcopy2();
	this.instance_54.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_55 = new lib.Attack__004pngcopy2();
	this.instance_55.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_56 = new lib.attak();
	this.instance_56.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_57 = new lib.Attack__006pngcopy2();
	this.instance_57.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_58 = new lib.Attack__007pngcopy2();
	this.instance_58.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_59 = new lib.Attack__008pngcopy2();
	this.instance_59.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_60 = new lib.Attack__009pngcopy2();
	this.instance_60.setTransform(138.25,-220,0.5062,0.7239,0,0,180);

	this.instance_61 = new lib.Dead__000pngcopy2();
	this.instance_61.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_62 = new lib.Dead__001pngcopy2();
	this.instance_62.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_63 = new lib.Dead__002pngcopy2();
	this.instance_63.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_64 = new lib.Dead__003pngcopy2();
	this.instance_64.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_65 = new lib.Dead__004pngcopy2();
	this.instance_65.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_66 = new lib.Dead__005pngcopy2();
	this.instance_66.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_67 = new lib.Dead__006pngcopy2();
	this.instance_67.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_68 = new lib.Dead__007pngcopy2();
	this.instance_68.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_69 = new lib.Dead__008pngcopy2();
	this.instance_69.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_70 = new lib.Dead__009pngcopy2();
	this.instance_70.setTransform(138.6,-233,0.5062,0.7239,0,0,180);

	this.instance_71 = new lib.Idle__000pngcopy2();
	this.instance_71.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_72 = new lib.Idle__001pngcopy2();
	this.instance_72.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_73 = new lib.Idle__002pngcopy2();
	this.instance_73.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_74 = new lib.Idle__003pngcopy2();
	this.instance_74.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_75 = new lib.Idle__004pngcopy2();
	this.instance_75.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_76 = new lib.Idle__005pngcopy2();
	this.instance_76.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_77 = new lib.Idle__006pngcopy2();
	this.instance_77.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_78 = new lib.Idle__007pngcopy2();
	this.instance_78.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_79 = new lib.Idle__008pngcopy2();
	this.instance_79.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_80 = new lib.Idle__009pngcopy2();
	this.instance_80.setTransform(90.8,-211,0.5062,0.7239,0,0,180);

	this.instance_81 = new lib.Jump__000pngcopy2();
	this.instance_81.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_82 = new lib.Jump__001pngcopy2();
	this.instance_82.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_83 = new lib.Jump__002pngcopy2();
	this.instance_83.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_84 = new lib.Jump__003pngcopy2();
	this.instance_84.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_85 = new lib.Jump__004pngcopy2();
	this.instance_85.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_86 = new lib.Jump__005pngcopy2();
	this.instance_86.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_87 = new lib.Jump__006pngcopy2();
	this.instance_87.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_88 = new lib.Jump__007pngcopy2();
	this.instance_88.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_89 = new lib.Jump__008pngcopy2();
	this.instance_89.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_90 = new lib.Jump__009pngcopy2();
	this.instance_90.setTransform(139,-220,0.5062,0.7239,0,0,180);

	this.instance_91 = new lib.Run__000pngcopy2();
	this.instance_91.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_92 = new lib.Run__001pngcopy2();
	this.instance_92.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_93 = new lib.Run__002pngcopy2();
	this.instance_93.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_94 = new lib.Run__003pngcopy2();
	this.instance_94.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_95 = new lib.Run__004pngcopy2();
	this.instance_95.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_96 = new lib.Run__005pngcopy2();
	this.instance_96.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_97 = new lib.Run__006pngcopy2();
	this.instance_97.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_98 = new lib.Run__007pngcopy2();
	this.instance_98.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_99 = new lib.Run__008pngcopy2();
	this.instance_99.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.instance_100 = new lib.Run__009pngcopy2();
	this.instance_100.setTransform(138.35,-217,0.5062,0.7239,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51}]},53).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63,p:{y:-233}}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70,p:{y:-233}}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79,p:{y:-211}}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_79,p:{y:-192}}]},1).to({state:[{t:this.instance_63,p:{y:-223}}]},1).to({state:[{t:this.instance_70,p:{y:-223}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-233,344.6,455.6);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-15.8,-14.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-15.8,-14.9,27,23), null);


(lib.collis1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-119.25,0,0.0677,0.0677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.collis1, new cjs.Rectangle(-119.2,0,238.9,13.1), null);


(lib.cir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-6,-3.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cir, new cjs.Rectangle(-6,-3.9,13.5,13.5), null);


(lib.boo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.book();
	this.instance.setTransform(76,0,0.76,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,78);


(lib.board2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-32,-10.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-10.2,64,21);


(lib.biladZombie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Bone1pngcopy();
	this.instance.setTransform(-332.4,-131.75,0.4073,0.4074,0,46.3399,43.6613);

	this.instance_1 = new lib.Bone4();
	this.instance_1.setTransform(-357,30,1.3906,1.3586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_6
	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(-511.5,-222.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.5,-222.4,571,429);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(0,3.95,0.392,0.3499,0,0,-0.29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,784,404), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(103.5,158.4,1,1,0,0,0,103.5,158.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,316.8);


(lib.runrbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Run__003pngcopy2();
	this.instance.setTransform(7.3,1.05,0.0455,0.0594);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(15.8,15.8,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.runrbtn, new cjs.Rectangle(-0.5,-0.5,32.5,32.5), null);


(lib.runlbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Run__003pngcopy2();
	this.instance.setTransform(24.35,1.05,0.0455,0.0594,0,0,180);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(15.8,15.8,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.runlbtn, new cjs.Rectangle(-0.5,-0.5,32.5,32.5), null);


(lib.mid_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(1531.45,255.7,0.2966,0.5385,0,0,0,91.2,45.1);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(1696.9,97,1,2.6216,0,0,0,66,37);

	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(1934.1,115.7,0.7471,1.2989,0,0,0,79.1,73.7);

	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(1358.9,154.5,1,2.9697,0,0,0,66,37);

	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(1596.1,175.65,0.7471,1.4714,0,0,0,79.1,73.7);

	this.instance_5 = new lib.Symbol4("synched",0);
	this.instance_5.setTransform(1086.55,272.1,0.6371,0.4572,0,0,0,91.1,45.1);

	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.setTransform(957,226.3,1,2.6216,0,0,0,66,37);

	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.setTransform(1194.2,245,0.7471,1.2989,0,0,0,79.1,73.7);

	this.instance_8 = new lib.Symbol4("synched",0);
	this.instance_8.setTransform(789.55,275.05,0.4064,1.5195,0,0,0,91,45.1);

	this.instance_9 = new lib.Symbol3("synched",0);
	this.instance_9.setTransform(642.05,230.3,1,2.6216,0,0,0,66,37);

	this.instance_10 = new lib.Symbol2("synched",0);
	this.instance_10.setTransform(879.25,249,0.7471,1.2989,0,0,0,79.1,73.7);

	this.instance_11 = new lib.Symbol4("synched",0);
	this.instance_11.setTransform(213.5,241.25,0.4064,1.5195,0,0,0,91,45.1);

	this.instance_12 = new lib.Symbol3("synched",0);
	this.instance_12.setTransform(66,196.5,1,2.6216,0,0,0,66,37);

	this.instance_13 = new lib.Symbol2("synched",0);
	this.instance_13.setTransform(303.2,215.2,0.7471,1.2989,0,0,0,79.1,73.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mid_bg, new cjs.Rectangle(0,0,1993.1,344.2), null);


(lib.lifes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"0":0,"1":1,"2":2,"3":3,"4":4});

	// Layer_3
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-4.2,-4.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// stork
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(-0.05,1.1,0.2166,0.1524,0,0,0,22.6,72.9);
	this.instance_1.filters = [new cjs.ColorFilter(0.46, 0.46, 0.46, 1, 129.06, 0, 1.62, 0)];
	this.instance_1.cache(-4,-4,54,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// fill
	this.instance_2 = new lib.CachedBmp_20();
	this.instance_2.setTransform(-5,11.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_21();
	this.instance_3.setTransform(-5,7.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_22();
	this.instance_4.setTransform(-5,1.05,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_23();
	this.instance_5.setTransform(-5,-4.25,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_24();
	this.instance_6.setTransform(-5,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-10.3,10.8,22.700000000000003);


(lib.jumpbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Jump__003pngcopy2();
	this.instance.setTransform(27.1,-2,0.0504,0.0558,0,0,180);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(15.8,15.8,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumpbtn, new cjs.Rectangle(-0.5,-2,32.5,34), null);


(lib.myIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Idle__000_png_copy_2
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(246.75,238.85,0.1917,0.2929,0,0,0,90,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:250.75,y:238.4},19).to({x:243.75,y:238.85},20).wait(1));

	// Idle__14__png_copy
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(424.95,201.35,0.3641,0.5311,0,0,0,115.4,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:197.8},19).wait(1).to({regX:114.9,regY:123.1,x:424.8},0).wait(1).to({y:198.15},0).wait(1).to({y:198.65},0).wait(1).to({y:199.25},0).wait(1).to({y:199.75},0).wait(1).to({y:200.1},0).wait(1).to({y:200.3},0).wait(1).to({y:200.4},0).wait(1).to({y:200.5},0).wait(1).to({y:200.55},0).wait(1).to({y:200.65},0).wait(1).to({y:200.7},0).wait(1).to({y:200.75},0).wait(1).to({y:200.8},0).wait(1).to({startPosition:0},0).wait(1).to({y:200.85},0).wait(1).to({startPosition:0},0).wait(1).to({y:200.9},0).wait(1).to({y:201},0).wait(1).to({regX:115.4,regY:123.5,x:424.95,y:201.35},0).wait(1));

	// Idle__11__png
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.setTransform(58.45,188.95,0.345,0.4535,0,0,0,103.2,158.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:180.95},19).to({y:188.95},20).wait(1));

	// book_png
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.setTransform(434.4,112.2,0.5269,0.2849,0,0,0,50.1,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:39.4,scaleX:0.4288,scaleY:0.4068,skewX:-60.3154,skewY:-29.6857,y:112.15},19).to({regY:39.1,scaleX:0.5269,scaleY:0.2849,skewX:0,skewY:0,y:112.2},20).wait(1));

	// title
	this.instance_4 = new lib.biladZombie("synched",0);
	this.instance_4.setTransform(269,121,0.3451,0.3005,0,0,0,-226.1,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// Layer_6
	this.instance_5 = new lib.Tree();
	this.instance_5.setTransform(443,250,0.2795,0.6097);

	this.instance_6 = new lib.DeadBush();
	this.instance_6.setTransform(62,276,0.5248,1.6756);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(40));

	// Layer_7
	this.instance_7 = new lib.Symbol12("synched",0);
	this.instance_7.setTransform(274.95,199.95,1,1,0,0,0,279.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,560,400);


(lib.downbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Dead__006pngcopy2();
	this.instance.setTransform(30.4,3.55,0.0482,0.041,0,0,180);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(15.8,15.8,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.downbtn, new cjs.Rectangle(-0.5,-0.5,32.5,32.5), null);


(lib.book1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer_1
	this.instance = new lib.boo("synched",0);
	this.instance.setTransform(-1.3,-1.55,0.3214,0.355,0,0,0,32.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.3,skewY:180},9).to({regX:32.8,skewY:0},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-25.8,26.9,52.400000000000006);


(lib.book_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boo("synched",0);
	this.instance.setTransform(-9.8,-13.7,0.2105,0.2519,0,0,0,37.6,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book_img, new cjs.Rectangle(-17.7,-23.5,16,19.7), null);


(lib.boardmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.board2("synched",0);
	this.instance.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boardmc, new cjs.Rectangle(-32,-10.2,64,21), null);


(lib.attackbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.attak();
	this.instance.setTransform(25.85,0,0.0383,0.0622,0,0,180);

	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(15.8,17.25,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.attackbtn, new cjs.Rectangle(-0.5,0,32.5,35.2), null);


(lib.allPlat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.platGraphic("synched",0);
	this.instance.setTransform(2120.5,219.5,1,1,0,0,0,2120.5,219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.allPlat, new cjs.Rectangle(0,0,4241,439), null);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var that = this;
		var platGround = [this.plat];
		
		createjs.Touch.enable(stage);
		
		var ground_colis = [this.colis_bloc1, this.colis1, this.colis2, this.colis3, this.colis4, this.colis5,
			this.colis6, this.colis7, this.colis8, this.colis9, this.colis10,
			this.colis11, this.colis12, this.colis13, this.colis14, this.colis15,
			this.colis16, this.colis_bloc17, this.colis18, this.colis_bloc19, this.colis20,
			this.colis_bloc21, this.colis_bloc22, this.colis_bloc23, this.last
		
		
		];
		
		
		//     zombie init
		
		var listZm_tace = [this.zm0, this.zm1, this.zm2, this.zm3, this.zm4, this.zm3b,
			this.zm4b, this.zm5
		]
		var listZm = [];
		
		for (let i = 0; i < listZm_tace.length; i++) {
			let zm = null;
			if (i % 2 === 0) {
				zm = new lib.zm();
			} else zm = new lib.zf();
			var con = new createjs.Container();
			con.name = listZm_tace[i].name;
		
			con.x = listZm_tace[i].x;
			con.y = listZm_tace[i].y;
			zm.scaleX = zm.scaleY = 0.25;
			zm.framerate = 10;
			zm.name = listZm_tace[i].name;
			listZm.push(con);
		
			con.addChild(zm);
			stage.addChild(con);
		
			listZm_tace[i].visible = false;
		}
		
		//      boook init
		
		var listBook_tace = [this.boo1, this.boo2, this.boo3, this.boo4]
		var list_book = [];
		for (let i = 0; i < listBook_tace.length; i++) {
		
			var boo = new lib.book1();
			boo.x = listBook_tace[i].x;
			boo.y = listBook_tace[i].y - 30;
			boo.name = listBook_tace[i].name;
			list_book.push(boo);
			stage.addChild(boo);
		
			listBook_tace[i].visible = false;
		}
		
		var listSakf = [this.sakf1, this.sakf2];
		var colis = ground_colis.concat(listZm, list_book, listSakf);
		var plat = platGround.concat(colis);
		
		
		
		
		that.game_blocked = false;
		var life_level = 4;
		var score = 0;
		var score_book = 0;
		that.hero = this.hero;
		
		that.hero.foot = that.hero.getTransformedBounds().height / 2;
		var currentDir = 0;
		var current_colide_foot;
		var allowAttack = true;
		var u = 'u';
		var d = 'd';
		
		
		var handleKey = {
			ArrowUp: u,
			ArrowDown: u,
			Space: u,
			ArrowLeft: u,
			ArrowRight: u
		};
		
		var isColidFoot = false;
		var c = new lib.cir();
		c.x = that.hero.x;
		c.y = that.hero.y + that.hero.foot;
		stage.addChild(c);
		
		
		
		for (let i = 0; i < plat.length; i++) {
			plat[i].allowOverrite = true;
		
			plat[i].firstX = plat[i].x;
			plat[i].firstY = plat[i].y;
		
		}
		
		that.mid_bg.firstX = that.mid_bg.x;
		that.mid_bg.firstY = that.mid_bg.y;
		
		
		that.hero.firstX = that.hero.x;
		that.hero.firstY = that.hero.y;
		
		idle(that.hero);
		
		function attack(mc) {
		
			var d = currentDir == -1 ? 'attack' : 'attacki';
			if (mc.stt != 'jump' && allowAttack) {
		
				mc.gotoAndPlay(d);
				mc.stt = 'attack';
				move_plat('attack', currentDir);
		
				allowAttack = false;
			}
		}
		function down(mc) {
		
			var d = currentDir == -1 ? 'down' : 'downi';
			move_plat('idle');
			mc.gotoAndPlay(d);
			mc.stt = 'down';
		}
		function idle(mc) {
		
			var d = currentDir == -1 ? 'idle' : 'idlei';
			move_plat('idle');
			mc.gotoAndPlay(d);
			mc.stt = 'idle';
		}
		
		function block(mc, side) {
		
			if (mc.stt == 'block') return;
			var dir = side == 'blocked1' ? 1 : -1;
			move_plat('block', dir);
			mc.gotoAndPlay("idle");
			mc.stt = 'block';
		
			console.log('bloooked', side);
		
			createjs.Sound.play("bip");
		
		}
		function run(mc, iscoli_jump = false) {
		
		
		
			var isCol = iscoli_jump || isColidFoot;
			if (mc.stt != 'run' && isCol) {
		
				var d = currentDir == -1 ? 'run' : 'runi';
				mc.gotoAndPlay(d);
		
		
		
			}
		
			if (isCol) {
				console.log('isCol varaible from run method', isCol);
				mc.stt = 'run';
				move_plat('run', currentDir);
		
			}
		}
		
		function jump(mc) {
		
		
			var d = currentDir == -1 ? 'jump' : 'jumpi';
		
			if (mc.stt != 'jump' && mc.y > 60) {
				mc.gotoAndPlay(d);
		
				move_plat('jump', currentDir);
				jump_motion(mc);
				mc.stt = 'jump';
			}
		
		}
		
		function dead(mc) {
		
			if (mc.stt != 'dead') {
				mc.gotoAndPlay("dead");
				mc.stt = 'dead';
		
			}
		
		
		}
		
		
		///////////////////////////  tablet event /////////////////////////
		
		
		
		
		that.jumpBtn.addEventListener('mousedown',(e) => {
			 alert('mousedown 0');
			if (true || e.nativeEvent instanceof MouseEvent) {

    alert('mousedown 1');
			handleKey.ArrowUp = d;

				
			}})
				that.jumpBtn.addEventListener('click',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.ArrowUp = u;
				
			}})
				
		that.downBtn.addEventListener('mousedown',(e) => {
			
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.ArrowDown = d ;
				
			}})
				that.downBtn.addEventListener('click',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.ArrowDown = u;
				
				
			}})
				
				that.attackBtn.addEventListener('mousedown',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.Space = d ;
				
				
				}})
				that.attackBtn.addEventListener('click',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.Space = u;
				
			}})
				that.LrunBtn.addEventListener('click',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.ArrowLeft = u ;
				
				}})
				
				that.LrunBtn.addEventListener('mousedown',(e) => {
					
				if (e.nativeEvent instanceof MouseEvent) {
				handleKey.ArrowLeft = d ;
			}})
				that.RrunBtn.addEventListener('mousedown',(e) => {
					if (e.nativeEvent instanceof MouseEvent) {
				
				handleKey.ArrowRight = d ;
				
			}})
					that.RrunBtn.addEventListener('click',(e) => {
						if (e.nativeEvent instanceof MouseEvent) {
					
				handleKey.ArrowRight = u;
				
				}})
				
		document.addEventListener('keydown', (e) => {
			if (e.code === "ArrowUp") {
		
				handleKey.ArrowUp = d;
		
			}
			if (e.code === "ArrowDown") {
		
				handleKey.ArrowDown = d;
		
			}
			if (e.code === "Space") {
				handleKey.Space = d;
		
		
			}
			if (e.code === "ArrowLeft") {
				handleKey.ArrowLeft = d;
		
		
			}
			if (e.code === "ArrowRight") {
				handleKey.ArrowRight = d;
		
		
			}
		
		});
		
		document.addEventListener('keyup', (e) => {
		
		
		
			if (e.code === "ArrowRight") { //ArrowUp
		
				handleKey.ArrowRight = u;
		
				if (that.hero.stt != 'dead')
					idle(that.hero);
		
		
			}
			if (e.code === "ArrowLeft") { //ArrowDown
		
		
				handleKey.ArrowLeft = u;
				if (that.hero.stt != 'dead')
					idle(that.hero);
		
			}
			if (e.code === "Space") {
		
				handleKey.Space = u;
		
			}
			if (e.code === "ArrowUp") {
				handleKey.ArrowUp = u;
		
		
			}
			if (e.code === "ArrowDown") {
				handleKey.ArrowDown = u;
		
		
			}
		});
		
		
		function handleHeroKey() {
		
			console.log(that.hero.stt);
			if (that.hero.stt == 'dead') return;
		
			if (handleKey.ArrowRight == d) { //ArrowUp
				if (that.hero.stt != 'blocked1' && that.hero.stt != 'jump') {
		
					currentDir = 1;
					run(that.hero);
				}
		
			} else if (handleKey.ArrowLeft == d) { //ArrowDown
				if (that.hero.stt != 'blocked-1' && that.hero.stt != 'jump') {
		
					currentDir = -1;
					run(that.hero);
				}
			}
		
			if (handleKey.ArrowUp == d) { //Space
		
				if (isColidFoot) {
		
					jump(that.hero);
		
				}
			}
			if (handleKey.Space == u) { //ArrowLeft
		
				allowAttack = true;
			} else if (handleKey.Space == d) {
		
				attack(that.hero);
			}
		
			if (handleKey.ArrowDown == d) { //ArrowRight
				if (that.hero.stt != 'down') {
					down(that.hero);
				}
			} else if (handleKey.ArrowDown == u) { //ArrowRight
		
				if (that.hero.stt == 'down') {
		
					idle(that.hero);
		
				}
			}
		
		
		}
		
		
		
		var myEasing = function (k) {
			var t = (k * 100);
			var d = 100;
			var ts = (t /= d) * t;
			var tc = ts * t;
			return (0.699999999999999 * tc * ts + -1.75 * ts * ts + 3.9 * tc + -4.1 * ts + 2.25 * t);
		};
		
		
		function move_plat(motio, dir = 1) {
		
			//console.log('plat motion from move_plat', motio);
			if (motio == 'run') {
		
				var step = dir == 1 ? 4 : -4;
				for (var i = 0; i < plat.length; i++) {
		
					createjs.Tween.get(plat[i], {
						loop: 0
					})
						.to({
							x: plat[i].x - step
		
						}, 1);
				}
		
				createjs.Tween.get(that.mid_bg, {
					loop: 0
				})
					.to({
						x: that.mid_bg.x - step / 2
		
					}, 1);
		
		
			}
		
			if (motio == 'attack') {
		
				var step = dir == 1 ? 6 : -6;
				for (var i = 0; i < plat.length; i++) {
		
					createjs.Tween.get(plat[i], {
						loop: 0
					})
						.to({
							x: plat[i].x - step
		
						}, 1);
				}
		
				createjs.Tween.get(that.mid_bg, {
					loop: 0
				})
					.to({
						x: that.mid_bg.x - step / 2
		
					}, 1);
		
		
			}
		
			if (motio == 'block') {
		
				var step = dir == -1 ? 10 : -10;
				for (var i = 0; i < plat.length; i++) {
					createjs.Tween.get(plat[i], {
						override: true
					})
				}
		
				for (var i = 0; i < plat.length; i++) {
		
					createjs.Tween.get(plat[i], {
						loop: 0
					})
						.to({
							x: plat[i].x - step
		
						}, 1);
				}
		
				createjs.Tween.get(that.mid_bg, {
					override: true
				})
				createjs.Tween.get(that.mid_bg, {
					loop: 0
				})
					.to({
						x: that.mid_bg.x - step / 2
		
					}, 1);
		
		
		
			} else if (motio == 'idle') {
				for (var i = 0; i < plat.length; i++) {
		
					if (plat[i].allowOverrite) {
						createjs.Tween.get(plat[i], {
							override: true
						})
		
					} else {
		
						plat[i].motion(plat[i]);
					}
				}
		
		
				createjs.Tween.get(that.mid_bg, {
					override: true
				})
		
		
		
		
			} else if (motio == 'jump') {
		
				var step = dir == 1 ? 90 : -90;
				for (var i = 0; i < plat.length; i++) {
		
					createjs.Tween.get(plat[i], {
						loop: 0
					})
						.to({
							x: plat[i].x - step
		
						}, 420);
				}
				createjs.Tween.get(that.mid_bg, {
					loop: 0
				})
					.to({
						x: that.mid_bg.x - step / 2
		
					}, 420);
		
		
			}
		}
		
		
		function jump_motion(mc) {
		
			var cw = currentDir == 1 ? 0 : -0;
		
			createjs.Tween.get(mc, {
				onComplete: handleComplete,
				loop: 0
			})
				.to({
					x: mc.x + 0,
					y: mc.y - 140,
					//rotation: cw
				}, 200)
				.wait(20)
				.to({
					x: mc.x + 0,
					y: mc.y,
					//rotation: cw + cw
				}, 200);
		
			createjs.Sound.play("jump");
		
		}
		
		function handleComplete() {
			//idle(that.hero);
			handlePrevStt();
			console.log(' jump done');
		}
		
		function handlePrevStt() {
			console.log(' hero stt from handlePrevStt', that.hero.stt);
			console.log(' handleKey.ArrowUp == d ', handleKey.ArrowUp == d);
			if (handleKey.ArrowDown == d || handleKey.ArrowUp == d) {
				console.log('stt is run from handlePrevStt');
				run(that.hero, true);
			} else {
				idle(that.hero);
			}
		
		}
		
		function walkZmAhead(zm) {
		
			if (zm.stt == 'walk') return;
		
			zm.gotoAndPlay('walk');
			zm.stt = 'walk';
		
			createjs.Tween.get(zm, {
				loop: 0
			})
		
			.to({
				x: zm.x - 40,
				y: zm.y
		
			}, 1000).set({
				stt: 'walkend'
			});
		
		
		
		
		}
		
		function back(zm) {
		
			if (zm.stt == 'walki') return;
			zm.stt = 'walki';
			zm.gotoAndPlay('walki');
		
			createjs.Tween.get(zm, {
				loop: 0
			})
		
			.to({
				x: zm.x + 40,
				y: zm.y
		
			}, 1000).set({
				stt: 'walkiend'
			});
		
		}
		
		
		function loopZm(zm) {
		
			if (zm.stt == 'walkend') {
		
				back(zm);
			} else if (zm.stt == 'walkiend') {
		
				walkZmAhead(zm);
		
			}
		
		}
		
		
		var projectDelay = true;
		var projectileArray = [];
		function throwProject(zm_con, dir) {
		
			if (!projectDelay) return;
		
			projectDelay = false;
			let count = 0;
			projectileArray = [];
			for (let i = 0; i < 3; i++) {
		
				let laps = (i + 1) * 60;
				let dis = dir == 1 ? 250 : -250;
				var proj = new lib.projectile();
				proj.x = zm_con.x + zm_con.getChildAt(0).x;
				proj.y = zm_con.y - 20;
				proj.name = 'project';
				projectileArray.push(proj);
				stage.addChild(proj);
				createjs.Tween.get(proj, {
					loop: 0
				})
					.wait(laps)
					.to({
						x: zm_con.x + dis,
						y: zm_con.y - 20
		
					}, 1000).set({
						visible: false
					}).call(setdelay);
		
			}
		
			function setdelay() {
		
				setTimeout(function () {
					count += 1;
					if (count == 3) projectDelay = true;
				}, 1000);
			}
		
			var fire = createjs.Sound.play("fire");
			fire.volume = 0.4;
		}
		
		
		function projectAttack(zm_con) {
		
			if (zm_con.stt_attack == 'isZmReady' && zm_con.getChildAt(0).stt == 'walki') {
		
				throwProject(zm_con, 1);
		
			} else if (zm_con.stt_attack == 'isZmReadyi' && zm_con.getChildAt(0).stt == 'walk') {
		
				throwProject(zm_con, -1);
			}
		
		}
		
		function handleZmprojec(zm_con) {
		
			zm_con.stt_attack = zm_con.x - that.hero.x < 200 && zm_con.x - that.hero.x > 0 ? 'isZmReadyi' :
				(zm_con.x - that.hero.x > -200 && zm_con.x - that.hero.x < 0 ? 'isZmReady' : 'isZmNotReady');
		
		
			//console.log('zm.stt_attack', zm_con.stt_attack);
			if (zm_con.stt_attack != 'isZmNotReady') {
		
				projectAttack(zm_con);
			}
		
		}
		function handleZombie(stt = 'loop', zm) {
		
		
			if (stt == 'attack' && zm.stt != 'attack') {
		
				zm.gotoAndPlay('attack');
		
			}
			if (stt == 'dead' && zm.stt != 'dead') {
		
		
				createjs.Tween.get(zm, {
					override: true
				});
		
				zm.gotoAndPlay('dead');
				zm.stt = 'dead';
				//fall(zm, 8);
				//listZm.splice(listZm.indexOf(zm.parent), 1);
				//colis.splice(colis.indexOf(zm.parent), 1);
		
			} else {
		
				loopZm(zm);
		
			}
		
		
		}
		function handleColideZm(listZmColid) {
		
		
			for (let i = 0; i < listZmColid.length; i++) {
		
				if (listZmColid[i].getChildAt(0).stt == 'dead') continue;
		
				if (that.hero.stt == 'attack') {
		
		
					handleZombie('dead', listZmColid[i].getChildAt(0));
					score += 1;
					updateScore('' + score);
		
				} else if (listZmColid[i].getChildAt(0).stt != 'dead') {
		
					createjs.Tween.get(that.hero, {
						override: true
					});
					dead(that.hero);
					gameOver();
		
				}
			}
		}
		
		
		var allowDownLife = true;
		function handleColideprojectile(listProjet) {
		
			if (allowDownLife && that.hero.stt != 'down' && that.hero.stt != 'dead') {
		
				allowDownLife = false;
		
				if (parseInt((txtaddScore.text).substr(1)) > 0) {
		
					let num = parseInt((txtaddScore.text).substr(1));
					txtaddScore.text = '+' + (num - 1);
		
					return;
				}
		
				let crntLevel = parseInt(life.currentLabel);
				life_level = crntLevel - 1 < 0 ? 0 : crntLevel - 1;
		
		
				life.gotoAndStop(life_level.toString());
		
				if (life_level == 0) {
		
					dead(that.hero);
		
					gameOver();
				}
		
		
		
		
			}
			setTimeout(function () {
				allowDownLife = true;
			}, 1500);
		
		
		}
		
		function gameOver() {
		
			bloc_game(true);
			stop_clock(true);
			show_win('اللعبة إنتهت', '#ff0000');
		
			createjs.Sound.play("gameover");
		
		}
		function dispear(mc) {
		
			createjs.Tween.get(mc, {
				override: true,
				loop: 0
			})
		
			.to({
				x: mc.x,
				y: mc.y - 20,
				rotation: 360,
				alpha: 0.8
			}, 100)
				.to({
					x: mc.x,
					y: mc.y - 40,
					rotation: -360,
					alpha: 0.7
				}, 100)
				.to({
					x: mc.x,
					y: mc.y - 60,
					rotation: 360,
					alpha: 0.1
				}, 100)
				.to({
					x: mc.x,
					y: mc.y,
					alpha: 1
				}, 50)
				.set({
					allowOverrite: true
				})
				.call(add_quiz);
		
		
		}
		
		var allowcolideBook = true;
		function handleColideBook(listBookColid) {
		
			if (!allowcolideBook) return;
			allowcolideBook = false;
		
		
			listBookColid[0].allowOverrite = false;
			console.log('listBookColid', list_book.indexOf(listBookColid[0]));
			//alert(colis.indexOf(listBookColid[i]));
			listBookColid[0].motion = dispear;
			dispear(listBookColid[0]);
			score_book += 1;
			updateScoreBook('' + score_book);
		
			setTimeout(function () {
		
				allowcolideBook = true;
			}, 2500);
		
			createjs.Sound.play("coin");
		
		}
		
		
		function handleColideSakf(mc, listSakf) {
		
			if (mc.stt == 'jump') {
		
				createjs.Tween.get(mc, {
					override: true
				})
			}
			mc.y = mc.y + 20;
			idle(mc);
		
			createjs.Sound.play("bip");
		
		}
		
		for (let i = 0; i < listZm.length; i++) {
			console.log('listZm[i]', listZm[i]);
			listZm[i].getChildAt(0).stt = 'walkend';
		}
		
		
		
		createjs.Ticker.addEventListener("tick", handleTick);
		
		function handleTick(event) {
		
			var list_all_colided = checkHit(that.hero);
			//console.log((that.hero.y), (that.hero.getTransformedBounds().height / 2))
			var list_colided = list_all_colided[0];
		
		
		
		
			if (that.game_blocked) {
		
				checkFootColide(list_colided);
				if (!isColidFoot && that.hero.y < 400) fall(that.hero);
				return;
			}
		
			if (that.hero.y > 500) {
		
				gameOver();
		
			}
		
		
		
			for (let i = 0; i < listZm.length; i++) {
		
				if (listZm[i].getChildAt(0).stt == 'dead') {
					console.log('listZm[i].getChildAt(0).stt', listZm[i].getChildAt(0).stt);
					continue;
				}
				handleZombie('loop', listZm[i].getChildAt(0));
				handleZmprojec(listZm[i]);
			}
		
		
		
			handleHeroKey();
			isColidFoot = false
		
		
		
			checkFootColide(list_colided);
		
			var allColid_hit = list_colided.concat(list_all_colided[1]);
		
			if (list_all_colided[1].length > 0) {
		
				var side = that.hero.x - list_all_colided[1][0].x >= 0 ? 'blocked-1' : 'blocked1';
		
				createjs.Tween.get(that.hero, {
					override: true
				})
				console.log('blok bloc only', that.hero.x, list_all_colided[1][0].x);
				block(that.hero, side);
		
		
			}
			if (isColidFoot && allColid_hit.length == 2 && that.hero.stt != 'jump') {
		
				var comp_colid = allColid_hit[0].y - allColid_hit[1].y;
				var height_colid = comp_colid >= 0 ? allColid_hit[1] : allColid_hit[0];
				console.log('blok colid.x', that.hero.x, height_colid.x);
				var side = that.hero.x - height_colid.x >= 0 ? 'blocked-1' : 'blocked1';
		
				block(that.hero, side);
			}
		
			//console.log('list',list_colided.length , isColidFoot);
		
			c.x = that.hero.x;
			c.y = that.hero.y + that.hero.getTransformedBounds().height / 2;
		
		
			if (list_all_colided[2].length > 0) {
				console.log('list_all_colided [2] zm', list_all_colided[2]);
				handleColideZm(list_all_colided[2]);
			}
		
			if (list_all_colided[4].length > 0) {
				console.log('list_all_colided [4] book', list_all_colided[4]);
				handleColideSakf(that.hero);
				handleColideBook(list_all_colided[4]);
		
			}
			if (list_all_colided[5].length > 0) {
				console.log('list_all_colided [5] projectile', list_all_colided[5]);
		
				handleColideprojectile(list_all_colided[5]);
		
			}
		
			if (list_all_colided[3].length > 0) {
				console.log('list_all_colided [3] sakf', list_all_colided[3]);
				if (that.hero.y > list_all_colided[3][0].y)
					handleColideSakf(that.hero, list_all_colided[3]);
			}
			if (!isColidFoot) {
				if (that.hero.stt != 'jump') {
					console.log('that.hero.stt in fall ', that.hero.stt);
					fall(that.hero, 4);
				}
			}
		
		}
		function checkFootColide(list_colided) {
		
		
			for (let i = 0; i < list_colided.length; i++) {
				//console.log('list_colided', list_colided, list_colided[i].y - (that.hero.y + that.hero.foot));
		
		
				if (list_colided[i].y - (that.hero.y + that.hero.getTransformedBounds().height / 2) > -35 &&
					list_colided[i].y - (that.hero.y + that.hero.getTransformedBounds().height / 2) < 35
				) {
		
		
		
					//console.log('in foot colide', list_colided[i].name);
		
					if (that.hero.stt == 'jump' && current_colide_foot != list_colided[i]) {
						console.log(' jump and in foot colide');
						createjs.Tween.get(that.hero, {
							override: true
						})
							.to({
								rotation: 0
							}).call(handlePrevStt);
		
		
		
		
					}
					//(that.hero.getTransformedBounds().height / 2) - 10)) {
		
					//console.log('is colide with foot' + list_colided[i], list_colided[i].y)
		
					that.hero.y = list_colided[i].y - that.hero.getTransformedBounds().height / 2;
		
					current_colide_foot = list_colided[i];
		
					isColidFoot = true;
		
				}
		
			}
		
		
		}
		
		function fall(mc, speed = 4) {
		
			createjs.Tween.get(mc, {
				loop: 0
			})
				.to({
					x: mc.x,
					y: mc.y + speed
		
				}, 2);
		
		}
		
		
		function checkHit(obj) {
		
			let currentGroundHit = [];
			let currentBlocHit = [];
			let currentZmHit = [];
			let currentBooHit = [];
			let currentSakfHit = [];
			let currentProjectHit = [];
			var rect = {
		
				x: obj.x,
				y: obj.y,
				width: obj.getTransformedBounds().width,
				height: obj.getTransformedBounds().height
			}
		
		
		
			let coli_project = colis.concat(projectileArray);
			for (var u = 0; u < coli_project.length; u++) {
		
		
		
				var rect2 = coli_project[u];
		
				if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2)) {
		
		
		
					if (rect2.name.startsWith('zm')) {
		
						if (Math.abs(rect.x - (rect2.x + rect2.getChildAt(0).x)) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2))
		
							currentZmHit.push(rect2);
		
		
					} else if (rect2.name.startsWith('sakf')) {
		
						currentSakfHit.push(rect2);
					} else if (rect2.name.startsWith('boo')) {
		
						currentBooHit.push(rect2);
					} else if (rect2.name.startsWith('colis_bloc')) {
		
						currentBlocHit.push(rect2);
		
					} else if (rect2.name.startsWith('colis')) {
						currentGroundHit.push(rect2);
		
		
					} else if (rect2.name.startsWith('last')) {
		
						lastLevel();
		
					} else {
		
						currentProjectHit.push(rect2);
					}
		
				}
			}
			return new Array(currentGroundHit, currentBlocHit, currentZmHit, currentSakfHit, currentBooHit, currentProjectHit);
		}
		
		
		function lastLevel() {
		
			bloc_game(true);
			stop_clock(true);
			show_win(' مبروك ', '#00ff00');
		
		
		}
		function stop_clock(boo) {
		
			clock_stoped = boo;
		}
		
		var win_txt = txt_constructor(280, 260, '#fff', '36');
		win_txt.visible = false;
		stage.addChild(win_txt);
		
		function show_win(str, color) {
		
			win_txt.color = color;
			win_txt.x = 80;
			win_txt.y = 260;
			win_txt.text = str;
			win_txt.visible = true;
			createjs.Tween.get(win_txt, {
		
				loop: 0
			})
				.to({
					x: win_txt.x,
					y: win_txt.y,
					alpha: 0
		
				})
				.to({
					x: win_txt.x,
					y: win_txt.y - 160,
					alpha: 1
		
				}, 1200, createjs.Ease.quadOut)
				.call(restartBtn);
		
		
		
		}
		
		function restartBtn() {
		
			resetBtn.visible = true;
		
		
		}
		function updateScore(mytxt) {
		
			createjs.Tween.get(num_score, {
		
				loop: 0
			})
		
			.to({
				x: num_score.x,
				y: num_score.y,
				rotation: 360,
				scaleX: 2,
				scaleY: 2,
		
			}, 100)
				.to({
		
					rotation: 0,
				})
				.to({
					x: num_score.x,
					y: num_score.y,
					rotation: 360,
					scaleX: 1,
					scaleY: 1,
		
				}, 100)
				.to({
		
					rotation: 0,
				}).set({
					text: mytxt
				})
		
		}
		
		function updateScoreBook(booScore) {
			createjs.Tween.get(num_score_book, {
		
				loop: 0
			})
		
			.to({
				x: num_score_book.x,
				y: num_score_book.y,
				rotation: 360,
				scaleX: 2,
				scaleY: 2,
		
			}, 100)
				.to({
					rotation: 0
				})
				.to({
					x: num_score_book.x,
					y: num_score_book.y,
					rotation: 360,
					scaleX: 1,
					scaleY: 1,
		
				}, 100)
				.to({
					rotation: 0
				}).set({
					text: booScore
				})
			//num_score_book.text = booScore ;
		}
		
		var boardimg1 = new lib.boardmc();
		boardimg1.x = 460;
		boardimg1.y = 68;
		boardimg1.scaleX = 1.8;
		boardimg1.scaleY = 1.3;
		stage.addChild(boardimg1);
		var boardimg2 = new lib.boardmc();
		boardimg2.x = 460;
		boardimg2.y = 98;
		boardimg2.scaleX = 1.8;
		boardimg2.scaleY = 1.3;
		stage.addChild(boardimg2);
		
		var txt_score = new createjs.Text();
		txt_score.x = 410;
		txt_score.y = 30;
		txt_score.color = "#ff7700";
		txt_score.font = "18px Cairo";
		txt_score.text = 'مجموع النقاط';
		stage.addChild(txt_score);
		
		var num_score = new createjs.Text();
		num_score.x = 430;
		num_score.y = 70;
		num_score.color = "#ffff00";
		num_score.font = "26px Arial";
		num_score.text = '0';
		stage.addChild(num_score);
		num_score.regX = num_score.getBounds().width / 2;
		num_score.regY = num_score.getBounds().height / 2
		
		
		
		var headimg = new lib.head();
		headimg.x = 490;
		headimg.y = 70;
		stage.addChild(headimg);
		
		
		var bookimg = new lib.book_img();
		bookimg.x = 500;
		bookimg.y = 108;
		stage.addChild(bookimg);
		
		
		
		var num_score_book = new createjs.Text();
		
		num_score_book.x = 430;
		num_score_book.y = 100;
		
		
		num_score_book.color = "#ffff00";
		num_score_book.font = "26px Arial";
		num_score_book.text = '0';
		stage.addChild(num_score_book);
		num_score_book.regX = num_score_book.getBounds().width / 2;
		num_score_book.regY = num_score_book.getBounds().height / 2;
		
		var life = new lib.lifes();
		life.x = 370;
		life.y = 70;
		stage.addChild(life);
		life.gotoAndStop(4);
		
		var heroimg = new lib.heroimg();
		heroimg.x = 370;
		heroimg.y = 44;
		stage.addChild(heroimg);
		
		var txtaddScore = txt_constructor(364, 84, "#ffffff", '10');
		txtaddScore.text = '+' + 0;
		stage.addChild(txtaddScore);
		
		
		var clockText = txt_constructor(240, 34, "#66ff99", '26', 'Orbitron');
		stage.addChild(clockText);
		
		var m = 0;
		var s = 0;
		var clock_stoped = false;
		
		function currentTime() {
		
		
			var me;
			var se;
			var ms = updateTime(m, s);
			m = ms[0];
			s = ms[1];
		
			if (s < 10) {
				se = "0" + s;
			} else se = s;
		
			if (m < 10) {
				me = "0" + m;
			} else me = m;
		
			clockText.text = se + " : " + me;
			var t = setTimeout(function () {
				currentTime()
			}, 1000); /* setting timer */
		}
		
		function updateTime(min, sec) {
		
			if (clock_stoped) {
				return new Array(min, sec);
			}
		
			if (sec > 59) {
		
				min += 1;
				sec = 0;
			} else {
				sec += 1;
			}
		
		
			return new Array(min, sec);
		}
		currentTime();
		
		
		var resetBtn = new lib.resetBtn();
		resetBtn.x = 110;
		resetBtn.y = 160;
		resetBtn.visible = false;
		stage.addChild(resetBtn);
		
		resetBtn.addEventListener('click', restartGame);
		
		//////    intro /////////
		
		var ready = new lib.iamReady();
		function add_ready() {
		
			stage.addChild(ready);
			bloc_game(true);
			stop_clock(true);
			ready.addEventListener('click', add_intro);
		
		
		
		}
		add_ready();
		
		
		
		var intro = new lib.myIntro();
		function add_intro() {
		
			stage.addChild(intro);
			bloc_game(true);
			stop_clock(true);
			intro.addEventListener('click', startGame);
			createjs.Sound.play("intro");
		
			ready.removeEventListener('click', add_intro);
			ready.visible = false;
		
		}
		
		
		function startGame() {
		
			createjs.Sound.stop();
		
			bloc_game(false);
			stop_clock(false);
			intro.removeEventListener('click', startGame);
			intro.visible = false;
		
		}
		
		function restartGame() {
		
			resetBtn.visible = false;
			win_txt.visible = false;
		
		
		
			for (let i = 0; i < plat.length; i++) {
				plat[i].allowOverrite = true;
		
				plat[i].x = plat[i].firstX;
				plat[i].y = plat[i].firstY;
		
			}
		
		
			that.mid_bg.x = that.mid_bg.firstX;
			that.mid_bg.y = that.mid_bg.firstY;
		
		
		
		
			for (let i = 0; i < listZm.length; i++) {
		
				listZm[i].getChildAt(0).x = 0;
				listZm[i].getChildAt(0).stt = 'walkend';
			}
			updateScoreBook('0');
			updateScore('0');
			life.gotoAndStop(4);
			txtaddScore.text = '+' + 0;
		
			m = 0;
			s = 0;
			score_book = 0;
			score = 0;
		
			bloc_game(false);
			stop_clock(false);
		
			idle(that.hero);
			that.hero.x = that.hero.firstX;
			that.hero.y = that.hero.firstY;
		
		
		}
		// ................   questions    ........
		
		var quiz_con = new createjs.Container();
		quiz_con.visible = false;
		stage.addChild(quiz_con);
		
		var qpad = new lib.qpad();
		qpad.x = 50;
		qpad.y = 10;
		qpad.scaleX = 1.8;
		qpad.scaleY = 2;
		
		quiz_con.addChild(qpad);
		
		
		var cor_txt = txt_constructor(0, 0, "#00ff00", '28');
		cor_txt.visible = false;
		stage.addChild(cor_txt);
		
		var correct_pos = 0;
		var listOfTxt = [];
		
		var firstGraphics = new createjs.Graphics().beginLinearGradientFill(["#864A33", "#ffffff"], [0, 1], 0, 0, 160, 0)
			.drawRoundRectComplex(0, 0, 160, 20, 4, 4, 4, 4)
			.endFill();
		
		function get_rec() {
			var rec_quiz = new createjs.Shape();
			rec_quiz.graphics.beginLinearGradientFill(["#864A33", "#ffffff"], [0, 1], 0, 0, 160, 0);
			rec_quiz.graphics.drawRoundRectComplex(0, 0, 160, 20, 4, 4, 4, 4);
			rec_quiz.graphics.endFill();
		
			return rec_quiz;
		}
		
		function reset_quiz_graphic() {
		
			for (let u = 0; u < listOfTxt.length; u++) {
		
				listOfTxt[u].getChildAt(0).set({
					graphics: firstGraphics
				});
			}
		}
		function getText(xs, ys, size) {
		
			var prop_con = new createjs.Container();
			let _txt = txt_constructor(150, 0, "#000000", size, "Arial");
		
			prop_con.x = xs;
			prop_con.y = ys;
			_txt.textAlign = 'right';
			_txt.text = 'fooofooo';
		
			prop_con.addChild(get_rec());
			prop_con.addChild(_txt);
		
			prop_con.addEventListener('click', correct);
			listOfTxt.push(prop_con);
			quiz_con.addChild(prop_con);
			return prop_con;
		
		}
		
		var txt_question = txt_constructor(0, 0, '#F4D03F', '26');
		var question_con = new createjs.Container();
		question_con.addChild(txt_question);
		question_con.x = 180;
		question_con.y = 30;
		quiz_con.addChild(question_con);
		
		for (let i = 0; i < 5; i++) {
		
			getText(100, 80 + (i * 25), 20);
		}
		
		
		
		function singleQuiz(num, str) {
		
			return num.toString() + ')' + '   ' + str;
		}
		
		
		function set_questionOntxt(type) {
		
			let list_q = getQ(type);
			question_con.getChildAt(0).text = list_q[0];
		
			correct_pos = getRndInteger(0, 4);
			listOfTxt[correct_pos].getChildAt(1).text = singleQuiz(correct_pos + 1, list_q[1]);
		
			for (let i = 0; i < 5; i++) {
		
				if (i === correct_pos) continue;
				console.log('list_q[2][i]', list_q[2][i]);
				listOfTxt[i].getChildAt(1).text = singleQuiz(i + 1, list_q[2][i]);
		
			}
		
		}
		
		function getQ(type) {
		
			if (type == 'fraction') {
				var q = getQfraction();
		
		
			}
			return q;
		}
		
		function getQfraction() {
		
			var propo = [];
			var bast = getRndInteger(1, 9);
			var maqam = getRndInteger(1, 9);
		
		
			// correct answer
		
			var m0 = getRndInteger(2, 9);
		
			var correct1 = (bast * m0);
			var correct2 = (maqam * m0);
			// threee wrong propositions
			while (propo.length < 5) {
		
				var m1 = getRndInteger(1, 9) * m0;
				var m2 = getRndInteger(1, 9) * m0;
		
				if (m1 / m2 != (bast / maqam) && !propo.includes(m1.toString() + '/' + m2.toString())) {
		
					propo.push(m1.toString() + '/' + m2.toString());
		
				}
			}
		
			return new Array((bast.toString() + '/' + maqam.toString()) + ' تساوي  ' + ' : ',
				correct1.toString() + '/' + correct2.toString(),
				propo);
		}
		function bloc_game(boo) {
		
			that.game_blocked = boo;
		}
		function add_quiz() {
		
		
			bloc_game(true);
			reset_quiz_graphic();
			quiz_con.visible = true;
			quiz_con.mouseEnabled = true;
		
			set_questionOntxt('fraction');
		}
		function remove_quiz() {
		
			bloc_game(false);
			quiz_con.visible = false;
		}
		function correction_anime(txt, str) {
		
		
			txt.text = str;
			txt.x = 260;
			txt.y = 300;
			txt.visible = true;
			createjs.Tween.get(txt, {
		
				loop: 0
			})
		
			.to({
				x: txt.x,
				y: txt.y - 94,
		
		
			}, 1800, createjs.Ease.bounceOut)
				.wait(300)
				.set({
					visible: false
				})
				.call(remove_quiz);
		}
		
		function txt_constructor(xs, ys, color, size, font = 'Arial') {
		
			var txt = new createjs.Text();
		
			txt.x = xs;
			txt.y = ys;
			txt.color = color;
			txt.font = size + 'px ' + font;
		
			return txt;
		}
		
		var corrGraphics = new createjs.Graphics().beginLinearGradientFill(["#ffffff", "#00ff00"], [0, 1], 0, 0, 160, 0)
			.drawRoundRectComplex(0, 0, 160, 20, 4, 4, 4, 4)
			.endFill();
		
		function correct(e) {
			//next_btn.gotoAndStop(1);
		
			quiz_con.mouseEnabled = false;
		
			let corr = listOfTxt[correct_pos].getChildAt(0);
			corr.set({
				graphics: corrGraphics
			})
		
			if (listOfTxt.indexOf(e.currentTarget) == correct_pos) {
				cor_txt.color = '#0f0';
				correction_anime(cor_txt, 'صحيح');
		
				add_life();
		
			} else {
		
				cor_txt.color = '#f00';
				correction_anime(cor_txt, 'خطأ');
		
				createjs.Sound.play("block");
			}
		
		}
		
		
		function add_life() {
			let crntLevel = parseInt(life.currentLabel);
			life_level = crntLevel + 1 > 4 ? 4 : crntLevel + 1;
		
		
			life.gotoAndStop(life_level.toString());
		
			if (crntLevel + 1 > 4) {
				let num = parseInt((txtaddScore.text).substr(1));
				txtaddScore.text = '+' + (num + 1)
			}
			createjs.Sound.play("powerup");
		}
		
		
		function getRndInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		
		//////////////  sound  //////////////////////
		
		
		createjs.Sound.on("fileload", handleFileLoad);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSounds(
			[{
				id: "intro",
				src: "intro.mp3"
			}, {
				id: "block",
				src: "block.mp3"
			}, {
				id: "fire",
				src: "fire.mp3"
			}, {
				id: "coin",
				src: "coin.mp3"
			}, {
				id: "gameover",
				src: "gameover.mp3"
			}, {
				id: "jump",
				src: "jump.mp3"
			}, {
				id: "powerup",
				src: "powerup.mp3"
			}], "mysound/");
		
		
		function handleFileLoad(event) {
			// A sound has been preloaded. This will fire TWICE
			console.log("Preloaded:", event.id, event.src);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tablet
	this.attackBtn = new lib.attackbtn();
	this.attackBtn.name = "attackBtn";
	this.attackBtn.setTransform(38.05,343.6,1,1,0,0,0,15.8,17.6);

	this.LrunBtn = new lib.runlbtn();
	this.LrunBtn.name = "LrunBtn";
	this.LrunBtn.setTransform(440.55,346.75,1,1,0,0,0,15.8,15.8);

	this.RrunBtn = new lib.runrbtn();
	this.RrunBtn.name = "RrunBtn";
	this.RrunBtn.setTransform(516.5,346.75,1,1,0,0,0,15.8,15.8);

	this.downBtn = new lib.downbtn();
	this.downBtn.name = "downBtn";
	this.downBtn.setTransform(478.3,380.25,1,1,0,0,0,15.8,15.8);

	this.jumpBtn = new lib.jumpbtn();
	this.jumpBtn.name = "jumpBtn";
	this.jumpBtn.setTransform(478.3,311.75,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jumpBtn},{t:this.downBtn},{t:this.RrunBtn},{t:this.LrunBtn},{t:this.attackBtn}]}).wait(1));

	// book
	this.boo4 = new lib.book1();
	this.boo4.name = "boo4";
	this.boo4.setTransform(-2672.8,44.95,0.4211,0.5244,0,0,180,0,-0.8);

	this.boo3 = new lib.book1();
	this.boo3.name = "boo3";
	this.boo3.setTransform(-955.9,100.85,0.4211,0.5244,0,0,180,0,-1);

	this.boo1 = new lib.book1();
	this.boo1.name = "boo1";
	this.boo1.setTransform(-98.9,166.85,0.4211,0.5244,0,0,180,0,-1);

	this.boo2 = new lib.book1();
	this.boo2.name = "boo2";
	this.boo2.setTransform(-740.85,142.75,0.4211,0.5244,0,0,180,0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boo2},{t:this.boo1},{t:this.boo3},{t:this.boo4}]}).wait(1));

	// hero
	this.hero = new lib.hero();
	this.hero.name = "hero";
	this.hero.setTransform(279.6,255.85,0.2307,0.2615,0,0,180,-0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.hero).wait(1));

	// zm
	this.zm0 = new lib.zm();
	this.zm0.name = "zm0";
	this.zm0.setTransform(510.95,215.45,0.2586,0.2554,0,0,0,-17,-2.6);

	this.zm5 = new lib.zm();
	this.zm5.name = "zm5";
	this.zm5.setTransform(-3464.75,264.35,0.2586,0.2554,0,0,0,-17,-2.6);

	this.zm4b = new lib.zm();
	this.zm4b.name = "zm4b";
	this.zm4b.setTransform(-3144.75,163.25,0.2586,0.2554,0,0,0,-17,-2.6);

	this.zm3b = new lib.zm();
	this.zm3b.name = "zm3b";
	this.zm3b.setTransform(-2061.8,316.5,0.2586,0.2484,0,0,0,-17,-2.4);

	this.zm3 = new lib.zm();
	this.zm3.name = "zm3";
	this.zm3.setTransform(-1778.8,312.95,0.2586,0.2484,0,0,0,-17,-2.4);

	this.zm4 = new lib.zm();
	this.zm4.name = "zm4";
	this.zm4.setTransform(-2829.9,232.4,0.2586,0.2554,0,0,0,-17,-2.6);

	this.zm2 = new lib.zm();
	this.zm2.name = "zm2";
	this.zm2.setTransform(-962.85,193.35,0.2586,0.2554,0,0,0,-17,-2.6);

	this.zm1 = new lib.zm();
	this.zm1.name = "zm1";
	this.zm1.setTransform(20.25,280.45,0.2586,0.2554,0,0,0,-17,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zm1},{t:this.zm2},{t:this.zm4},{t:this.zm3},{t:this.zm3b},{t:this.zm4b},{t:this.zm5},{t:this.zm0}]}).wait(1));

	// sakf
	this.sakf1 = new lib.collis1();
	this.sakf1.name = "sakf1";
	this.sakf1.setTransform(-1951.5,214.55,3.1356,0.6311,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.sakf1).wait(1));

	// collisio
	this.colis_bloc1 = new lib.collis1();
	this.colis_bloc1.name = "colis_bloc1";
	this.colis_bloc1.setTransform(559.15,166.1,0.6511,1.3014,0,90,-90,0.1,-0.1);

	this.last = new lib.collis1();
	this.last.name = "last";
	this.last.setTransform(-3638.25,119.8,0.1165,7.3808,0,0,180);

	this.colis_bloc23 = new lib.collis1();
	this.colis_bloc23.name = "colis_bloc23";
	this.colis_bloc23.setTransform(-1437,286.25,0.6511,1.3014,0,90,-90,0.1,-0.1);

	this.colis_bloc21 = new lib.collis1();
	this.colis_bloc21.name = "colis_bloc21";
	this.colis_bloc21.setTransform(-2655.55,229,0.0943,2.6408,0,0,180);

	this.colis_bloc22 = new lib.collis1();
	this.colis_bloc22.name = "colis_bloc22";
	this.colis_bloc22.setTransform(-2696.25,228.1,0.1221,2.3027,0,0,180);

	this.colis20 = new lib.collis1();
	this.colis20.name = "colis20";
	this.colis20.setTransform(-2680.1,179.2,0.3121,1,0,0,180);

	this.colis_bloc17 = new lib.collis1();
	this.colis_bloc17.name = "colis_bloc17";
	this.colis_bloc17.setTransform(-3322.4,271.9,0.2761,0.8203,0,-90,90);

	this.colis16 = new lib.collis1();
	this.colis16.name = "colis16";
	this.colis16.setTransform(-3609.55,252.1,0.5104,1.0005,0,0,180);

	this.colis15 = new lib.collis1();
	this.colis15.name = "colis15";
	this.colis15.setTransform(-3435.7,324.65,0.8327,1,0,0,180);

	this.sakf2 = new lib.collis1();
	this.sakf2.name = "sakf2";
	this.sakf2.setTransform(-2835.45,144.15,0.3792,1,0,0,180);

	this.colis_bloc19 = new lib.collis1();
	this.colis_bloc19.name = "colis_bloc19";
	this.colis_bloc19.setTransform(-1589.05,112.2,0.8874,1,0,-90,90);

	this.colis18 = new lib.collis1();
	this.colis18.name = "colis18";
	this.colis18.setTransform(-2486.7,315.75,0.4605,1,0,0,180);

	this.colis14 = new lib.collis1();
	this.colis14.name = "colis14";
	this.colis14.setTransform(-3263.7,185.85,0.5062,1,0,0,180);

	this.colis13 = new lib.collis1();
	this.colis13.name = "colis13";
	this.colis13.setTransform(-3142.6,218.65,0.4356,1,0,0,180);

	this.colis12 = new lib.collis1();
	this.colis12.name = "colis12";
	this.colis12.setTransform(-3021.2,249.65,0.5022,1,0,0,180);

	this.colis11 = new lib.collis1();
	this.colis11.name = "colis11";
	this.colis11.setTransform(-2731.85,285.9,1.4521,1,0,0,180);

	this.colis10 = new lib.collis1();
	this.colis10.name = "colis10";
	this.colis10.setTransform(-2836.75,132.1,0.5023,1,0,0,180);

	this.colis9 = new lib.collis1();
	this.colis9.name = "colis9";
	this.colis9.setTransform(-1942.85,369.9,4.0295,1,0,0,180);

	this.colis8 = new lib.collis1();
	this.colis8.name = "colis8";
	this.colis8.setTransform(-1334.8,183.85,0.9507,1,0,0,180);

	this.colis6 = new lib.collis1();
	this.colis6.name = "colis6";
	this.colis6.setTransform(-764.9,289.75,0.544,1,0,0,180);

	this.colis7 = new lib.collis1();
	this.colis7.name = "colis7";
	this.colis7.setTransform(-1005.85,248.75,1.4108,1,0,0,180);

	this.colis1 = new lib.collis1();
	this.colis1.name = "colis1";
	this.colis1.setTransform(500.95,270.4,0.5002,1,0,0,180,0.1,0);

	this.colis5 = new lib.collis1();
	this.colis5.name = "colis5";
	this.colis5.setTransform(-425.95,293.8,1.5314,1,0,0,180);

	this.colis4 = new lib.collis1();
	this.colis4.name = "colis4";
	this.colis4.setTransform(-101.9,290.85,0.527,1,0,0,180);

	this.colis3 = new lib.collis1();
	this.colis3.name = "colis3";
	this.colis3.setTransform(47.05,336.85,0.6904,1,0,0,180);

	this.colis2 = new lib.collis1();
	this.colis2.name = "colis2";
	this.colis2.setTransform(301.95,316.85,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.colis2},{t:this.colis3},{t:this.colis4},{t:this.colis5},{t:this.colis1},{t:this.colis7},{t:this.colis6},{t:this.colis8},{t:this.colis9},{t:this.colis10},{t:this.colis11},{t:this.colis12},{t:this.colis13},{t:this.colis14},{t:this.colis18},{t:this.colis_bloc19},{t:this.sakf2},{t:this.colis15},{t:this.colis16},{t:this.colis_bloc17},{t:this.colis20},{t:this.colis_bloc22},{t:this.colis_bloc21},{t:this.colis_bloc23},{t:this.last},{t:this.colis_bloc1}]}).wait(1));

	// plat
	this.plat = new lib.allPlat();
	this.plat.name = "plat";
	this.plat.setTransform(-1554.2,218.35,1,1,0,0,180,2120.3,219.6);

	this.timeline.addTween(cjs.Tween.get(this.plat).wait(1));

	// BG_mid
	this.mid_bg = new lib.mid_bg();
	this.mid_bg.name = "mid_bg";
	this.mid_bg.setTransform(-558.4,101.6,1,1.1242,0,0,180,996.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.mid_bg).wait(1));

	// BG_png
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.setTransform(158.1,200.8,1,1,0,0,179.708,391.9,201.8);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3399.9,197,3966,284.6);
// library properties:
lib.properties = {
	id: 'BE03B248F90A964988AACC6E00D4C689',
	width: 550,
	height: 400,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png?1629123408879", id:"Bitmap2"},
		{src:"images/CachedBmp_4.png?1629123408879", id:"CachedBmp_4"},
		{src:"images/game_atlas_1.png?1629123408725", id:"game_atlas_1"},
		{src:"images/game_atlas_2.png?1629123408726", id:"game_atlas_2"},
		{src:"images/game_atlas_3.png?1629123408726", id:"game_atlas_3"},
		{src:"images/game_atlas_4.png?1629123408726", id:"game_atlas_4"},
		{src:"images/game_atlas_5.png?1629123408727", id:"game_atlas_5"},
		{src:"images/game_atlas_6.png?1629123408727", id:"game_atlas_6"},
		{src:"images/game_atlas_7.png?1629123408727", id:"game_atlas_7"},
		{src:"images/game_atlas_8.png?1629123408728", id:"game_atlas_8"},
		{src:"images/game_atlas_9.png?1629123408728", id:"game_atlas_9"},
		{src:"images/game_atlas_10.png?1629123408728", id:"game_atlas_10"},
		{src:"images/game_atlas_11.png?1629123408729", id:"game_atlas_11"},
		{src:"images/game_atlas_12.png?1629123408729", id:"game_atlas_12"},
		{src:"images/game_atlas_13.png?1629123408730", id:"game_atlas_13"},
		{src:"images/game_atlas_14.png?1629123408730", id:"game_atlas_14"},
		{src:"images/game_atlas_15.png?1629123408731", id:"game_atlas_15"},
		{src:"images/game_atlas_16.png?1629123408732", id:"game_atlas_16"},
		{src:"images/game_atlas_17.png?1629123408735", id:"game_atlas_17"}
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
an.compositions['BE03B248F90A964988AACC6E00D4C689'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
