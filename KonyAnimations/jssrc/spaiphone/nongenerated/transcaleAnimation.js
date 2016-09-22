function translateAnim() {
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.translate(100, 100);
    var transformProp2 = kony.ui.makeAffineTransform();
    transformProp2.scale(2, 2);
    var transformProp3 = kony.ui.makeAffineTransform();
    transformProp3.rotate(90);
    var animDefinitionOne = {
        0: {
            "transform": transformProp1
        },
        50: {
            "transform": transformProp2
        },
        100: {
            "transform": transformProp3
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    var config = {
        "duration": 5,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    }
    frmTranslateAnimation.image212392409171695.animate(animDef, config);
}