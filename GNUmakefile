run: build/beebwatch-2.pbw
	pebble install --logs --phone 192.168.7.67

install: build/beebwatch-2.pbw
	pebble install --phone 192.168.7.67

clean:
	pebble clean
	rm src/js/pebble-js-app.min.js

build/beebwatch-2.pbw: src/js/pebble-js-app.min.js src/beebwatch.c
	pebble build

src/js/pebble-js-app.min.js: src/js/pebble-js-app.src.js src/js/configuration.html
	sed -e 's/BASE64MARKER/'`base64 < src/js/configuration.html`'/' $< | /usr/local/share/npm/bin/uglifyjs -c -m > $@

