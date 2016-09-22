//Form JS File
function frmRotateAnimation_button1265832301552_onClick_seq0(eventobject) {
    animation90.call(this);
};

function addWidgetsfrmRotateAnimation() {
    var button1265832301552 = new kony.ui.Button({
        "id": "button1265832301552",
        "top": "50dp",
        "left": "50dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Rotate Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmRotateAnimation_button1265832301552_onClick_seq0
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
    var button12392409171679 = new kony.ui.Button({
        "id": "button12392409171679",
        "top": "250dp",
        "left": "75dp",
        "width": "225dp",
        "height": "13dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "btnLineSkin",
        "focusSkin": "btnFocus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmRotateAnimation.add(button1265832301552, button12392409171679);
    frmRotateAnimation.setDefaultUnit(kony.flex.DP);
};

function frmRotateAnimationGlobals() {
    var MenuId = [];
    frmRotateAnimation = new kony.ui.Form2({
        "id": "frmRotateAnimation",
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
        "addWidgets": addWidgetsfrmRotateAnimation
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