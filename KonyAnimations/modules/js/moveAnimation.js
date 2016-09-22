function moveLeftAnimation(){
frmMoveAnimation.image2568962376478.animate(getMLAnimationObject(),animMLConfig(),{animationStart:startMLCallBack,animationEnd:endMLCallBack});
}

function getMLAnimationObject()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"1dp",
         "left":"25dp"
        },
       100 : 
	   {
         "top":"1dp",
         "left":"225dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}

function animMLConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMLCallBack()
{
	var Xco=frmMoveAnimation.image2568962376478.left
	var Yco=frmMoveAnimation.image2568962376478.top;
	frmMoveAnimation.label12392409171677.text="X:"+Xco+"..."+"Y:"+Yco;
}
function endMLCallBack(){
	moveBottomAnimation();
}

function moveBottomAnimation(){
frmMoveAnimation.image2568962376478.animate(getMBAnimationObject(),animMBConfig(),{animationStart:startMBCallBack,animationEnd:endMBCallBack});
}

function getMBAnimationObject()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"1dp",
         "left":"225dp"
        },
       100 : 
	   {
         "top":"350dp",
         "left":"225dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}

function animMBConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMBCallBack()
{
	var Xco=frmMoveAnimation.image2568962376478.left
	var Yco=frmMoveAnimation.image2568962376478.top;
	frmMoveAnimation.label12392409171677.text="X:"+Xco+"..."+"Y:"+Yco;
}

function endMBCallBack(){
	moveRightAnimation();
}

function moveRightAnimation(){
frmMoveAnimation.image2568962376478.animate(getMRAnimationObject(),animMRConfig(),{animationStart:startMRCallBack,animationEnd:endMRCallBack});
}

function getMRAnimationObject()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"350dp",
         "left":"225dp"
        },
       100 : 
	   {
         "top":"350dp",
         "left":"25dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}

function animMRConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMRCallBack()
{
	var Xco=frmMoveAnimation.image2568962376478.left
	var Yco=frmMoveAnimation.image2568962376478.top;
	frmMoveAnimation.label12392409171677.text="X:"+Xco+"..."+"Y:"+Yco;
}
function endMRCallBack(){
	moveTopAnimation();
}

function moveTopAnimation(){
frmMoveAnimation.image2568962376478.animate(getMTAnimationObject(),animMTConfig(),{animationStart:startMTCallBack,animationEnd:endMTCallBack});
}

function getMTAnimationObject()
{
	var animDefinition = 
	{
       0 : 
	   {
         "top":"350dp",
         "left":"25dp"
        },
       100 : 
	   {
         "top":"1dp",
         "left":"25dp"
	  }
      } ;
	animDef = kony.ui.createAnimation(animDefinition);
	return animDef;
}

function animMTConfig(){
	var config = {
	   "duration":2,
	   "iterationCount":1,
	   "delay":0,
	   "direction":kony.anim.DIRECTION_NONE,
	   "fillMode":kony.anim.FILL_MODE_FORWARDS
	};
	return config;
}

function startMTCallBack()
{
	var Xco=frmMoveAnimation.image2568962376478.left
	var Yco=frmMoveAnimation.image2568962376478.top;
	frmMoveAnimation.label12392409171677.text="X:"+Xco+"..."+"Y:"+Yco;
	
}
function endMTCallBack(){
	getCoordinates();
}

function getCoordinates()
{
	var Xco=frmMoveAnimation.image2568962376478.left
	var Yco=frmMoveAnimation.image2568962376478.top;
	frmMoveAnimation.label12392409171677.text="X:"+Xco+"..."+"Y:"+Yco;
}