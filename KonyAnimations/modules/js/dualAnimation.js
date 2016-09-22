function moveDownAnimation(){
frmDualAnimation.image21237364084434531.animate(getMDAnimationObject(),animMDConfig(),{animationStart:startMDCallBack,animationEnd:endMDCallBack});
}

function getMDAnimationObject()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"10dp",
         "left":"5dp"
        },
       100 : 
	   {
         "top":"350dp",
         "left":"5dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}


function animMDConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMDCallBack()
{
	//logic
}

function endMDCallBack(){
//logic
}

function moveDownAnimation2(){
frmDualAnimation.image21237125756434844.animate(getMDAnimationObject2(),animMDConfig2(),{animationStart:startMDCallBack2,animationEnd:endMDCallBack2});
}

function getMDAnimationObject2()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"10dp",
         "left":"260dp"
        },
       100 : 
	   {
         "top":"350dp",
         "left":"260dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}


function animMDConfig2(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMDCallBack2()
{
	//logic
}

function endMDCallBack2(){
//logic
}


function flipScaleAnimation()
{
	frmDualAnimation.image21237364084434533.width = "135dp"
    frmDualAnimation.image21237364084434533.height = "135dp";

   var t1 = kony.ui.makeAffineTransform();
   var t2 = kony.ui.makeAffineTransform();
   var t3 = kony.ui.makeAffineTransform();
   var t4 = kony.ui.makeAffineTransform();

   t1.scale(0,0);
   t2.scale(1,1);
   t3.scale(-1, -1);
   t4.scale(1,1);

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
    "duration":6,
    "iterationCount":1,
    "delay":0,
    "fillMode":kony.anim.FILL_MODE_FORWARDS
 };
 
 frmDualAnimation.image21237364084434533.animate(animDef, config);
}

function dualCall()
{
	moveDownAnimation();
	moveDownAnimation2();
	flipScaleAnimation();
}