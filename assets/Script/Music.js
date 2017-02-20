var Gloable = require('Gloable');

cc.Class({
  extends: cc.Component,

  properties: {
    onMusic: cc.SpriteFrame,
    offMusic: cc.SpriteFrame
  },

  // use this for initialization
  init: function (game) {
    this.game = game;
    this.updateSp();
    this.node.on('touchend', function () {
      this.switchState();
    }.bind(this));
  },

  switchState: function () {
    Gloable.musicState = !Gloable.musicState;
    this.updateSp();
  },
  
  updateSp: function () {
    var sp;
    if (Gloable.musicState) {
      sp = this.onMusic;
      this.game.soundMng.playBGMSound();
    } else {
      sp = this.offMusic;
      this.game.soundMng.pauseBGMSound();
    }
    this.node.getComponent(cc.Sprite).spriteFrame = sp;
  },
  
  onDisable: function () {
    this.game.soundMng.pauseBGMSound();
  }

  // called every frame, uncomment this function to activate update callback
  // update: function (dt) {

  // },
});
