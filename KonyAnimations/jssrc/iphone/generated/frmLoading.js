//Form JS File
function frmLoading_button12392409175077_onClick_seq0(eventobject) {
    frmLoading.image212392409175078.zIndex = "3";
};

function addWidgetsfrmLoading() {
    var image212392409174860 = new kony.ui.Image2({
        "id": "image212392409174860",
        "top": "20dp",
        "left": "44dp",
        "width": "98dp",
        "height": "91dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "loading.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 21
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button12392409175077 = new kony.ui.Button({
        "id": "button12392409175077",
        "top": "20dp",
        "left": "175dp",
        "width": "100dp",
        "height": "100dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Custom Border",
        "skin": "btnCustomB",
        "focusSkin": "btnFocus",
        "onClick": frmLoading_button12392409175077_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var image212392409175078 = new kony.ui.Image2({
        "id": "image212392409175078",
        "top": "155dp",
        "left": "126dp",
        "width": "100dp",
        "height": "100dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "app_tile_image.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT,
        "skin": "imgCircle"
    });
    var button12392409175081 = new kony.ui.Button({
        "id": "button12392409175081",
        "top": "286dp",
        "left": "35dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Button",
        "skin": "btnCustomB",
        "focusSkin": "btnFocus"
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
    frmLoading.add(image212392409174860, button12392409175077, image212392409175078, button12392409175081);
    frmLoading.setDefaultUnit(kony.flex.DP);
};

function frmLoadingGlobals() {
    var MenuId = [];
    frmLoading = new kony.ui.Form2({
        "id": "frmLoading",
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
        "addWidgets": addWidgetsfrmLoading
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