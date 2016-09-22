//Template File
function initializeflexFooter() {
    var image2568962376472 = new kony.ui.Image2({
        "id": "image2568962376472",
        "top": "0dp",
        "left": "0dp",
        "width": "445dp",
        "height": "51dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "konylogo4.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    flexContainer568962376471 = new kony.ui.FlexContainer({
        "id": "flexContainer568962376471",
        "top": "1dp",
        "left": "1dp",
        "width": "99.11%",
        "height": "52dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[1,1]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer568962376471.setDefaultUnit(kony.flex.DP)
    flexContainer568962376471.add(
    image2568962376472);
};