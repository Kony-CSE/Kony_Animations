//Form JS File
function frmTranslateAnimation_button12392409171694_onClick_seq0(eventobject) {
    translateAnim.call(this);
};

function addWidgetsfrmTranslateAnimation() {
    var button12392409171694 = new kony.ui.Button({
        "id": "button12392409171694",
        "top": "15dp",
        "left": "25dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Translate",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmTranslateAnimation_button12392409171694_onClick_seq0
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
    var image212392409171695 = new kony.ui.Image2({
        "id": "image212392409171695",
        "top": "100dp",
        "left": "75dp",
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
    frmTranslateAnimation.add(button12392409171694, image212392409171695);
    frmTranslateAnimation.setDefaultUnit(kony.flex.DP);
};

function frmTranslateAnimationGlobals() {
    var MenuId = [];
    frmTranslateAnimation = new kony.ui.Form2({
        "id": "frmTranslateAnimation",
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
        "addWidgets": addWidgetsfrmTranslateAnimation
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