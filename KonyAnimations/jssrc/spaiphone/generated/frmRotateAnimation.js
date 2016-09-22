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
    }, {});
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
    }, {});
    frmRotateAnimation.add(
    button1265832301552, button12392409171679);
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
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmRotateAnimation
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
    frmRotateAnimation.setDefaultUnit(kony.flex.DP);
};