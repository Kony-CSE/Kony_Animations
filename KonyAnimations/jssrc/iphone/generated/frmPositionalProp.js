//Form JS File
function frmPositionalProp_button12392409171708_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.top = "50";
};

function frmPositionalProp_button12392409173477_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.left = "25";
};

function frmPositionalProp_button12392409173628_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.left = "100";
};

function frmPositionalProp_button12392409173703_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.top = "200";
};

function frmPositionalProp_button12392409174759_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.centerX = "150";
};

function frmPositionalProp_button12392409174760_onClick_seq0(eventobject) {
    frmPositionalProp.image212392409174056.centerY = "150";
};

function addWidgetsfrmPositionalProp() {
    var button12392409171708 = new kony.ui.Button({
        "id": "button12392409171708",
        "top": "10dp",
        "left": "5dp",
        "width": "70dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Top",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409171708_onClick_seq0
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
    var button12392409173477 = new kony.ui.Button({
        "id": "button12392409173477",
        "top": "10dp",
        "left": "80dp",
        "width": "65dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Left",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409173477_onClick_seq0
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
    var button12392409173628 = new kony.ui.Button({
        "id": "button12392409173628",
        "top": "10dp",
        "left": "150dp",
        "width": "81dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Right",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409173628_onClick_seq0
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
    var button12392409173703 = new kony.ui.Button({
        "id": "button12392409173703",
        "top": "10dp",
        "left": "237dp",
        "width": "91dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Bottom",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409173703_onClick_seq0
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
    var image212392409174056 = new kony.ui.Image2({
        "id": "image212392409174056",
        "top": "120dp",
        "left": "120dp",
        "width": "125dp",
        "height": "125dp",
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
        "containerWeight": 28
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button12392409174759 = new kony.ui.Button({
        "id": "button12392409174759",
        "top": "332dp",
        "left": "29dp",
        "width": "131dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Center X",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409174759_onClick_seq0
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
    var button12392409174760 = new kony.ui.Button({
        "id": "button12392409174760",
        "top": "332dp",
        "left": "182dp",
        "width": "133dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Center Y",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPositionalProp_button12392409174760_onClick_seq0
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
    frmPositionalProp.add(button12392409171708, button12392409173477, button12392409173628, button12392409173703, image212392409174056, button12392409174759, button12392409174760);
    frmPositionalProp.setDefaultUnit(kony.flex.DP);
};

function frmPositionalPropGlobals() {
    var MenuId = [];
    frmPositionalProp = new kony.ui.Form2({
        "id": "frmPositionalProp",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmSkin",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmPositionalProp
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