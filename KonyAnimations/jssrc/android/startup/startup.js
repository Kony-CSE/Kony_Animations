//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyAnimations",
    appName: "KonyAnimations",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.0.0.3",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    secureurl: "https://10.0.0.3:443/middleware/MWServlet",
    url: "http://10.0.0.3:80/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeflexHeader();
    initializeflexFooter();
    frmDimensionalPropGlobals();
    frmDualAnimationGlobals();
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
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6000
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmDualAnimation.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;