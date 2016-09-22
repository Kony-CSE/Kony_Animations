//Form JS File
function frmDimensionalProp_button12392409174849_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.width = "125";
};

function frmDimensionalProp_button12392409174850_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.height = "125";
};

function frmDimensionalProp_button12392409174851_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.minWidth = "75";
};

function frmDimensionalProp_button12392409174852_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.minHeight = "75";
};

function frmDimensionalProp_button12392409174854_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.maxWidth = "250";
};

function frmDimensionalProp_button12392409174855_onClick_seq0(eventobject) {
    frmDimensionalProp.image212392409174853.maxHeight = "250";
};

function addWidgetsfrmDimensionalProp() {
    var button12392409174849 = new kony.ui.Button({
        "id": "button12392409174849",
        "top": "10dp",
        "left": "5dp",
        "width": "75dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Width",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174849_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174850 = new kony.ui.Button({
        "id": "button12392409174850",
        "top": "10dp",
        "left": "85dp",
        "width": "73dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Height",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174850_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174851 = new kony.ui.Button({
        "id": "button12392409174851",
        "top": "10dp",
        "left": "165dp",
        "width": "85dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "min Width",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174851_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174852 = new kony.ui.Button({
        "id": "button12392409174852",
        "top": "10dp",
        "left": "256dp",
        "width": "85dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "min Height",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174852_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var image212392409174853 = new kony.ui.Image2({
        "id": "image212392409174853",
        "top": "120dp",
        "left": "110dp",
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
    }, {});
    var button12392409174854 = new kony.ui.Button({
        "id": "button12392409174854",
        "top": "316dp",
        "left": "13dp",
        "width": "132dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "max Width",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174854_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174855 = new kony.ui.Button({
        "id": "button12392409174855",
        "top": "316dp",
        "left": "210dp",
        "width": "138dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Max Height",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDimensionalProp_button12392409174855_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmDimensionalProp.add(button12392409174849, button12392409174850, button12392409174851, button12392409174852, image212392409174853, button12392409174854, button12392409174855);
    frmDimensionalProp.setDefaultUnit(kony.flex.DP);
};

function frmDimensionalPropGlobals() {
    var MenuId = [];
    frmDimensionalProp = new kony.ui.Form2({
        "id": "frmDimensionalProp",
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
        "addWidgets": addWidgetsfrmDimensionalProp
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