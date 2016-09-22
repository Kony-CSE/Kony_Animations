//Form JS File
function frmDualAnimation_button1237364084434532_onClick_seq0(eventobject) {
    dualCall.call(this);
};

function addWidgetsfrmDualAnimation() {
    var image21237364084434531 = new kony.ui.Image2({
        "id": "image21237364084434531",
        "top": "10dp",
        "left": "5dp",
        "width": "75dp",
        "height": "75dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "icon_ios.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    var button1237364084434532 = new kony.ui.Button({
        "id": "button1237364084434532",
        "top": "22dp",
        "left": "91dp",
        "width": "162dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Start Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDualAnimation_button1237364084434532_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var image21237364084434533 = new kony.ui.Image2({
        "id": "image21237364084434533",
        "top": "80dp",
        "left": "110dp",
        "width": "135dp",
        "height": "135dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "ball.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {});
    var image21237125756434844 = new kony.ui.Image2({
        "id": "image21237125756434844",
        "top": "10dp",
        "left": "260dp",
        "width": "75dp",
        "height": "75dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "icon_ios.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 17
    }, {});
    frmDualAnimation.add(image21237364084434531, button1237364084434532, image21237364084434533, image21237125756434844);
    frmDualAnimation.setDefaultUnit(kony.flex.DP);
};

function frmDualAnimationGlobals() {
    var MenuId = [];
    frmDualAnimation = new kony.ui.Form2({
        "id": "frmDualAnimation",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmSkin",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmDualAnimation
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};