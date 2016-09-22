function scaleUPAnimation() {
    frmScaleAnimation.image212392409171688.width = "176dp"
    frmScaleAnimation.image212392409171688.height = "176dp";
    var t1 = kony.ui.makeAffineTransform();
    var t2 = kony.ui.makeAffineTransform();
    t1.scale(0, 0);
    t2.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "transform": t1
        },
        100: {
            "transform": t2
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    var config = {
        "duration": 3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    frmScaleAnimation.image212392409171688.animate(animDef, config);
}

function scaleDownAnimation() {
    frmScaleAnimation.image212392409171688.width = "176dp"
    frmScaleAnimation.image212392409171688.height = "176dp";
    var t1 = kony.ui.makeAffineTransform();
    var t2 = kony.ui.makeAffineTransform();
    t1.scale(1, 1);
    t2.scale(0.5, 0.5);
    var animDefinitionOne = {
        0: {
            "transform": t1
        },
        100: {
            "transform": t2
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    var config = {
        "duration": 3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    frmScaleAnimation.image212392409171688.animate(animDef, config);
}

function scaleFlipAnimation() {
    frmScaleAnimation.image212392409171688.width = "176dp"
    frmScaleAnimation.image212392409171688.height = "176dp";
    var t1 = kony.ui.makeAffineTransform();
    var t2 = kony.ui.makeAffineTransform();
    var t3 = kony.ui.makeAffineTransform();
    var t4 = kony.ui.makeAffineTransform();
    t1.scale(0, 0);
    t2.scale(1, 1);
    t3.scale(-1, -1);
    t4.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "transform": t1
        },
        25: {
            "transform": t2
        },
        50: {
            "transform": t3
        },
        100: {
            "transform": t4
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    var config = {
        "duration": 6,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    frmScaleAnimation.image212392409171688.animate(animDef, config);
}