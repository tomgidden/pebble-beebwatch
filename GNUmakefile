run: build/beebwatch-2.pbw
	pebble install --logs --phone 192.168.7.67

install: build/beebwatch-2.pbw
	pebble install --phone 192.168.7.67

clean:
	pebble clean
	rm src/js/pebble-js-app.js

build/beebwatch-2.pbw: src/js/pebble-js-app.js src/beebwatch.c
	pebble build

src/js/pebble-js-app.js: src/javascript/pebble-js-app.src.js src/javascript/configuration.html
	sed -e 's/BASE64MARKER/'`base64 < src/javascript/configuration.html`'/' $< | /usr/local/share/npm/bin/uglifyjs -c -m > $@

