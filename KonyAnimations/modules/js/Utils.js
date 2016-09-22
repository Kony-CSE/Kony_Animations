function moveAnimation()
{
frmMoveAnimation["image2568962376478"].animate(
kony.ui.createAnimation({"100":{"top":"80%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":3},
{"animationEnd" : moveAnimation2()});
}

function moveAnimation2() {
frmMoveAnimation["image2568962376478"].animate(
kony.ui.createAnimation({"100":{"left":"80%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":3},
{"animationEnd" : moveAnimation3()});
}

function moveAnimation3() {
frmMoveAnimation["image2568962376478"].animate(
kony.ui.createAnimation({"100":{"top":"20%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":3},
{"animationEnd" : moveAnimation4()});
}

function moveAnimation4() {
frmMoveAnimation["image2568962376478"].animate(
kony.ui.createAnimation({"100":{"left":"50dp","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":3},
 {"animationEnd" : function(){}});
}