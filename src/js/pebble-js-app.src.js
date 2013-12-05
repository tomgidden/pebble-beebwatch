function save(j, key) {
    var o = JSON.parse(j);
    var d = {'1':o.sechand,'2':o.showtime,'3':o.showdate,'4':o.is24h};
    try {
        Pebble.sendAppMessage(d);
        if(key) localStorage.setItem(key, j);
    } catch (e) {}
}

Pebble.addEventListener('appmessage', function(e) {
    key = e.payload.action;
    if (typeof(key) != 'undefined') {
        var settings = localStorage.getItem('conf');
        if (typeof(settings) == 'string')
            save(settings);
    }
});

Pebble.addEventListener('showConfiguration', function(e) {
    var o = Pebble.openURL('data:text/html;base64,BASE64MARKER');
});

Pebble.addEventListener('webviewclosed', function(e) {
    if ((typeof(e.response) == 'string') && (e.response.length > 0)) {
        save(e.response,'conf');
    }
});
