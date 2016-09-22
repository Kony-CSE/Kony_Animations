//Form JS File
function frmScaleAnimation_button12392409171686_onClick_seq0(eventobject) {
    scaleUPAnimation.call(this);
};

function frmScaleAnimation_button12392409171687_onClick_seq0(eventobject) {
    scaleDownAnimation.call(this);
};

function frmScaleAnimation_button12392409171689_onClick_seq0(eventobject) {
    scaleFlipAnimation.call(this);
};

function addWidgetsfrmScaleAnimation() {
    var button12392409171686 = new kony.ui.Button({
        "id": "button12392409171686",
        "top": "25dp",
        "left": "15dp",
        "width": "132dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Scale Up",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmScaleAnimation_button12392409171686_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409171687 = new kony.ui.Button({
        "id": "button12392409171687",
        "top": "25dp",
        "left": "175dp",
        "width": "132dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Scale Down",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmScaleAnimation_button12392409171687_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var image212392409171688 = new kony.ui.Image2({
        "id": "image212392409171688",
        "top": "120dp",
        "left": "90dp",
        "width": "176dp",
        "height": "176dp",
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
        "containerWeight": 40
    }, {});
    var button12392409171689 = new kony.ui.Button({
        "id": "button12392409171689",
        "top": "342dp",
        "left": "36dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Scale Flip",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmScaleAnimation_button12392409171689_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmScaleAnimation.add(
    button12392409171686, button12392409171687, image212392409171688, button12392409171689);
};

function frmScaleAnimationGlobals() {
    var MenuId = [];
    frmScaleAnimation = new kony.ui.Form2({
        "id": "frmScaleAnimation",
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
        "addWidgets": addWidgetsfrmScaleAnimation
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
    frmScaleAnimation.setDefaultUnit(kony.flex.DP);
};