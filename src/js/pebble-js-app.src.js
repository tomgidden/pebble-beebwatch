/*global console:true, Pebble:true, window:true */
var config = {};

Pebble.addEventListener('ready', function () {
    console.log('loaded');
    // Load configuration from localStorage
    var json = window.localStorage.getItem('beeb');
    if (typeof json === 'string') {
        config = JSON.parse(json);
    }
});

Pebble.addEventListener('appmessage', function (e) {
    var key = e.payload.action;
    if (key !== undefined) {
        console.log('appmessage got ' + key + " " + JSON.stringify(e.payload));
        Pebble.sendAppMessage({0:0});
    }
});

Pebble.addEventListener('showConfiguration', function () {
//    Pebble.openURL('data:text/html;base64,BASE64MARKER');
    Pebble.openURL('data:text/html,URLENCODEMARKER'.replace("CONFDATA", encodeURI(JSON.stringify(config)), 'g'));
});

Pebble.addEventListener('webviewclosed', function (e) {
    if ((typeof e.response === 'string') && (e.response.length > 0)) {
        console.log("Sending " + e.response + " to Pebble");
        config = JSON.parse(e.response);
        window.localStorage.setItem('beeb', e.response);
        Pebble.sendAppMessage(config);
    }
});
