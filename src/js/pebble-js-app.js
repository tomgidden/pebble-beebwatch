var config={};Pebble.addEventListener("ready",function(){var e=window.localStorage.getItem("beeb");"string"==typeof e&&(config=JSON.parse(e),Pebble.sendAppMessage(config))}),Pebble.addEventListener("showConfiguration",function(){Pebble.openURL("data:text/html,"+encodeURI('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>label,input{display:block}label{clear:both;height:32px}input{float:right}body{font-family:"Helvetica Neue",Helvetica,sans-serif}label{clear:none;padding-top:.5em}h1,footer{text-align:center;margin:0;padding:0}footer{position:absolute;bottom:0;left:0;right:0;font-size:16px;line-height:20px;border-top:1px solid lightgray}h1{font-size:24px;padding:0;line-height:2em}input,select{font-size:18px;min-width:28px;height:28px}p{padding:0;margin:-1.2em 48px 0 1.5em;font-size:small}</style></head><body><header><h1><span>Beebwatch</span> for Pebble</h1></header><form onsubmit="return s(this)"><input type="checkbox" id="showdate" class="showhide"><label for="showdate">Display Date:</label><input type="checkbox" id="showtime" class="showhide"><label for="showtime">Digital time:</label><input type=\'checkbox\' id="is24h" class="is24_12"><label for="is24h">24 hour time:</label><input type="checkbox" id="sechand" class="showhide"><label for="sechand">Display seconds:</label><p>(reduces battery life)</p><input type="checkbox" id="leds" class="showhide"><label for="leds">Bluetooth &amp; Battery icons:</label><input type="checkbox" id="invert" class="invert"><label for="invert">Black-on-white:</label><input type="submit" id="save" value="Save"><label for="save">Save settings:</label></form><footer>v.2.0.5, by Tom Gidden</footer><script>function s(e){for(o={},i=0;i<e.length;i++)(j=e[i].id)&&(o[j]=e[i].checked?1:0);return window.location.href="pebblejs://close#"+JSON.stringify(o),!1}var d="_CONFDATA_";for(var i in d)d.hasOwnProperty(i)&&(document.getElementById(i).checked=!!d[i]);</script></body></html>\n<!--.html'.replace('"_CONFDATA_"',JSON.stringify(config),"g")))}),Pebble.addEventListener("webviewclosed",function(e){"string"==typeof e.response&&e.response.length>0&&(config=JSON.parse(e.response),window.localStorage.setItem("beeb",e.response),Pebble.sendAppMessage(config))});