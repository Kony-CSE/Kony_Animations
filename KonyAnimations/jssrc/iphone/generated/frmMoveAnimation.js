//Form JS File
function frmMoveAnimation_frmMoveAnimation_postshow_seq0(eventobject) {
    getCoordinates.call(this);
};

function frmMoveAnimation_button568962376477_onClick_seq0(eventobject) {
    moveLeftAnimation.call(this);
};

function addWidgetsfrmMoveAnimation() {
    var button568962376477 = new kony.ui.Button({
        "id": "button568962376477",
        "top": "100dp",
        "left": "100dp",
        "width": "164dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Start Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmMoveAnimation_button568962376477_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var image2568962376478 = new kony.ui.Image2({
        "id": "image2568962376478",
        "top": "1dp",
        "left": "25dp",
        "width": "77dp",
        "height": "78dp",
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
        "containerWeight": 18
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var label12392409171676 = new kony.ui.Label({
        "id": "label12392409171676",
        "top": "157dp",
        "left": "99dp",
        "width": "166dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Image X,Y Coordinates",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var label12392409171677 = new kony.ui.Label({
        "id": "label12392409171677",
        "top": "188dp",
        "left": "100dp",
        "width": "164dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmMoveAnimation.add(button568962376477, image2568962376478, label12392409171676, label12392409171677);
    frmMoveAnimation.setDefaultUnit(kony.flex.DP);
};

function frmMoveAnimationGlobals() {
    var MenuId = [];
    frmMoveAnimation = new kony.ui.Form2({
        "id": "frmMoveAnimation",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmSkin",
        "postShow": frmMoveAnimation_frmMoveAnimation_postshow_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMoveAnimation
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};