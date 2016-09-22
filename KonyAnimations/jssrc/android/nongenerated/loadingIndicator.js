var degree = 0;

function startTimer() {
    kony.timer.schedule("loadingindicator", loading, 0.1, true);
}

function loading() {
    for (degree = 0; degree <= 360; degree++) {
        kony.print("Degree:" + degree);
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.rotate(degree);
        var animDefinitionOne = {
            100: {
                "transform": transformProp1
            }
        }
        animDef = kony.ui.createAnimation(animDefinitionOne);
        var config = {
            "duration": 1,
            "iterationCount": 0,
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS
        }
        frmLoading.image212392409174860.animate(animDef, config);
        if (degree == 360) {
            degree = 0;
        }
    }
}