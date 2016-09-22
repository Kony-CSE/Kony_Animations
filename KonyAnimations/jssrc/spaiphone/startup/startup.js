//startup.js file
var appConfig = {
    appId: "KonyAnimations",
    appName: "KonyAnimations",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.0.3",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://10.0.0.3:80/middleware/MWServlet",
    secureurl: "https://10.0.0.3:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeflexHeader();
    initializeflexFooter();
    frmDimensionalPropGlobals();
    frmHomeGlobals();
    frmLoadingGlobals();
    frmMoveAnimationGlobals();
    frmPositionalPropGlobals();
    frmRotateAnimationGlobals();
    frmScaleAnimationGlobals();
    frmTranslateAnimationGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};