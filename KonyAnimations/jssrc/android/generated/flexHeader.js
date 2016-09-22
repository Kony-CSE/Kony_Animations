//Template File
function initializeflexHeader() {
    var image2568962376467 = new kony.ui.Image2({
        "id": "image2568962376467",
        "top": "0dp",
        "left": "3dp",
        "width": "450dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "konylogo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    flexContainer568962376466 = new kony.ui.FlexContainer({
        "id": "flexContainer568962376466",
        "top": "2dp",
        "left": "0dp",
        "width": "100%",
        "height": "54dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,2]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer568962376466.setDefaultUnit(kony.flex.DP)
    flexContainer568962376466.add(image2568962376467);
};