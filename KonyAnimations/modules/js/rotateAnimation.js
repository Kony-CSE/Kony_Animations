function animation90() {
    frmRotateAnimation.button12392409171679.animate(getAnimationObject90(), animConfig90(), 
    {animationStart: function() {}, animationEnd:end90CallBack});
}

function getAnimationObject90() {

    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(90);  
    var animDefinitionOne = {            
        100: {"transform": transformProp1}
         };
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}

function animConfig90() {
    var config = {
        "duration": 0.1,
        "iterationCount":1,
        "delay": 0,
         "direction":kony.anim.DIRECTION_NONE,
	     "fillMode":kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}

function end90CallBack()
{
	animation180();
}

function animation180() {
    frmRotateAnimation.button12392409171679.animate(getAnimationObject180(), animConfig180(), 
    {animationStart: function() {}, animationEnd:end180CallBack});
}

function getAnimationObject180() {

    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(180);  
    var animDefinitionOne = {            
        100: {"transform": transformProp1}
         };
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}

function animConfig180() {
    var config = {
        "duration": 0.1,
        "iterationCount":1,
        "delay": 0,
         "direction":kony.anim.DIRECTION_NONE,
	     "fillMode":kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}
function end180CallBack()
{
	animation270();
}

function animation270() {
    frmRotateAnimation.button12392409171679.animate(getAnimationObject270(), animConfig270(), {
        animationStart: function() {}, animationEnd:end270CallBack});
}

function getAnimationObject270() {

    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(270);  
    var animDefinitionOne = {            
        100: {"transform": transformProp1}
         };
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}

function animConfig270() {
    var config = {
        "duration": 0.1,
        "iterationCount":1,
        "delay": 0,
         "direction":kony.anim.DIRECTION_NONE,
	     "fillMode":kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}
function end270CallBack()
{
	animation360();
}

function animation360() {
    frmRotateAnimation.button12392409171679.animate(getAnimationObject360(), animConfig360(), {
        animationStart: function() {}, animationEnd:end360CallBack});
}

function getAnimationObject360() {

    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(360);  
    var animDefinitionOne = {            
        100: {"transform": transformProp1}
         };
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}

function animConfig360() {
    var config = {
        "duration": 0.1,
        "iterationCount":1,
        "delay": 0,
         "direction":kony.anim.DIRECTION_NONE,
	     "fillMode":kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}
function end360CallBack()
{
	animation90();
}