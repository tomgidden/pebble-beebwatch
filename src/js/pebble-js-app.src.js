/*global console:true, Pebble:true, window:true */
var config = {};

Pebble.addEventListener('ready', function () {
    // Load configuration from localStorage
    var json = window.localStorage.getItem('beeb');

    // and if it's there, parse it so we can use it.
    if (typeof json === 'string') {
        config = JSON.parse(json);
    }
});

Pebble.addEventListener('showConfiguration', function () {
    // Load the configuration HTML.  This is drawn from the
    // configuration.html file. The GNUmakefile will use Perl to backslash
    // any single quotes (but NOT other escape characters!!!) and insert
    // it into the code below. This code will substitute _CONFDATA_ in the
    // HTML file with the JSON for the current config data, and then
    // encode the entire HTML with URL encoding, and open it as a URL.
    // This way, the HTML can be bundled with the app.
    Pebble.openURL('data:text/html,'+encodeURI('_HTMLMARKER_'.replace('_CONFDATA_', JSON.stringify(config), 'g')));
});

Pebble.addEventListener('webviewclosed', function (e) {
    // The web view has closed (probably SAVE)

    if ((typeof e.response === 'string') && (e.response.length > 0)) {
        // There's a response: assume it's the correct settings from the
        // HTML form, store it in localStorage (necessary?) and push to
        // the Pebble.
        config = JSON.parse(e.response);
        window.localStorage.setItem('beeb', e.response);
        Pebble.sendAppMessage(config);
    }
});
