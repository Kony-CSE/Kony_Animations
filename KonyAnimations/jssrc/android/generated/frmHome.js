//Form JS File
function frmHome_button568962376473_onClick_seq0(eventobject) {
    frmMoveAnimation.show();
};

function frmHome_button12392409171678_onClick_seq0(eventobject) {
    frmRotateAnimation.show();
};

function frmHome_button12392409171680_onClick_seq0(eventobject) {
    frmScaleAnimation.show();
};

function frmHome_button12392409171690_onClick_seq0(eventobject) {
    frmTranslateAnimation.show();
};

function frmHome_button12392409171696_onClick_seq0(eventobject) {
    frmPositionalProp.show();
};

function frmHome_button12392409174845_onClick_seq0(eventobject) {
    frmDimensionalProp.show();
};

function frmHome_button12392409174856_onClick_seq0(eventobject) {
    frmLoading.show();
    startTimer.call(this);
};

function addWidgetsfrmHome() {
    var button568962376473 = new kony.ui.Button({
        "id": "button568962376473",
        "top": "15dp",
        "left": "50dp",
        "width": "206dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Move Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button568962376473_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409171678 = new kony.ui.Button({
        "id": "button12392409171678",
        "top": "70dp",
        "left": "50dp",
        "width": "207dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Rotate Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409171678_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409171680 = new kony.ui.Button({
        "id": "button12392409171680",
        "top": "125dp",
        "left": "50dp",
        "width": "205dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Scale Animation",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409171680_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409171690 = new kony.ui.Button({
        "id": "button12392409171690",
        "top": "180dp",
        "left": "50dp",
        "width": "207dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Translate",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409171690_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409171696 = new kony.ui.Button({
        "id": "button12392409171696",
        "top": "235dp",
        "left": "50dp",
        "width": "209dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Positional Properties",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409171696_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174845 = new kony.ui.Button({
        "id": "button12392409174845",
        "top": "290dp",
        "left": "50dp",
        "width": "209dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Dimensional Properties",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409174845_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12392409174856 = new kony.ui.Button({
        "id": "button12392409174856",
        "top": "345dp",
        "left": "50dp",
        "width": "208dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Loading",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button12392409174856_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmHome.add(button568962376473, button12392409171678, button12392409171680, button12392409171690, button12392409171696, button12392409174845, button12392409174856);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "headers": [flexContainer568962376466],
        "footers": [flexContainer568962376471],
        "enabledForIdleTimeout": false,
        "skin": "frmSkin",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
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