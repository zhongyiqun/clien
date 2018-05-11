/**
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var BackpackPanel = (function (_super) {
        __extends(BackpackPanel, _super);
        function BackpackPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/ui/panel/BackpackSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        BackpackPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        BackpackPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return BackpackPanel;
    }(eui.Component));
    game.BackpackPanel = BackpackPanel;
    __reflect(BackpackPanel.prototype, "game.BackpackPanel");
})(game || (game = {}));
//# sourceMappingURL=BackpackPanel.js.map