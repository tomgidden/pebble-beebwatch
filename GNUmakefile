all: build/beebwatch_noseconds_analogue.pbw build/beebwatch_noseconds.pbw build/beebwatch_analogue.pbw build/beebwatch.pbw

clean:
	./waf clean

build/beebwatch_noseconds_analogue.pbw:
	echo 'const int seconds = false; const int digital_time = false;' > src/config.h
	echo '#define APP_NAME "Beebwatch (M,A)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCB }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch_noseconds.pbw:
	echo 'const int seconds = false; const int digital_time = true;' > src/config.h
	echo '#define APP_NAME "Beebwatch (M)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCC }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch_analogue.pbw:
	echo 'const int seconds = true; const int digital_time = false;' > src/config.h
	echo '#define APP_NAME "Beebwatch (A)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCD }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch.pbw:
	echo 'const int seconds = true; const int digital_time = true;' > src/config.h
	echo '#define APP_NAME "Beebwatch"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCE }' >> src/config.h
	./waf build
