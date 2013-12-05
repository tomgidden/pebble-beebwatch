build: build/beebwatch-2.pbw

run: build/beebwatch-2.pbw
	pebble install --logs --phone 192.168.7.67

install: build/beebwatch-2.pbw
	pebble install --phone 192.168.7.67

clean:
	pebble clean
	rm src/js/pebble-js-app.js

build/beebwatch-2.pbw: src/js/pebble-js-app.js src/beebwatch.c appinfo.json
	pebble build

src/js/pebble-js-app.js: src/js/pebble-js-app.src.js src/js/configuration.html
#	sed -e 's/URLENCODEMARKER/'`perl -pe's/([^-_.~A-Za-z0-9])/sprintf("%%%02X",ord($$1))/seg;' src/js/configuration.html`'/' $< > $@
	sed -e 's/URLENCODEMARKER/'`perl -pe's/([^-_.~A-Za-z0-9])/sprintf("%%%02X",ord($$1))/seg;' src/js/configuration.html`'/' $< | /usr/local/share/npm/bin/uglifyjs -c -m > $@
#	sed -e 's/BASE64MARKER/'`base64 < src/js/configuration.html`'/' $< | /usr/local/share/npm/bin/uglifyjs -c -m > $@
#	sed -e 's/BASE64MARKER/'`base64 < src/js/configuration.html`'/' $< > $@

