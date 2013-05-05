all: build/bbcwatch_noseconds.pbw build/bbcwatch.pbw build/beebwatch_noseconds_analogue.pbw build/beebwatch_noseconds.pbw build/beebwatch_analogue.pbw build/beebwatch.pbw

clean:
	./waf clean

build/bbcwatch_noseconds.pbw:
	cp resources/src/resource_map_bbcwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS false' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME false' >> src/config.h
	echo '#define BEEBWATCH_BIG true' >> src/config.h
	echo '#define RESOURCE_ID_FONT_MALLARD_16 0' >> src/config.h
	echo '#define RESOURCE_ID_FONT_MALLARD_CONDENSED_SUBSET_32 0' >> src/config.h
	echo '#define APP_NAME "BBCWatch (M)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCA }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/bbcwatch.pbw:
	cp resources/src/resource_map_bbcwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS true' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME false' >> src/config.h
	echo '#define BEEBWATCH_BIG true' >> src/config.h
	echo '#define RESOURCE_ID_FONT_MALLARD_16 0' >> src/config.h
	echo '#define RESOURCE_ID_FONT_MALLARD_CONDENSED_SUBSET_32 0' >> src/config.h
	echo '#define APP_NAME "BBCWatch"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCF }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch_noseconds_analogue.pbw:
	cp resources/src/resource_map_beebwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS false' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME false' >> src/config.h
	echo '#define BEEBWATCH_BIG false' >> src/config.h
	echo '#define APP_NAME "Beebwatch (M,A)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCB }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch_noseconds.pbw:
	cp resources/src/resource_map_beebwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS false' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME true' >> src/config.h
	echo '#define BEEBWATCH_BIG false' >> src/config.h
	echo '#define APP_NAME "Beebwatch (M)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCC }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch_analogue.pbw:
	cp resources/src/resource_map_beebwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS true' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME false' >> src/config.h
	echo '#define BEEBWATCH_BIG false' >> src/config.h
	echo '#define APP_NAME "Beebwatch (A)"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCD }' >> src/config.h
	./waf build && mv build/beebwatch.pbw $@

build/beebwatch.pbw:
	cp resources/src/resource_map_beebwatch.json resources/src/resource_map.json
	echo '#define BEEBWATCH_SECONDS true' > src/config.h
	echo '#define BEEBWATCH_DIGITALTIME true' >> src/config.h
	echo '#define BEEBWATCH_BIG false' >> src/config.h
	echo '#define APP_NAME "Beebwatch"' >> src/config.h
	echo '#define MY_UUID { 0x9A, 0x8C, 0x21, 0x23, 0x7D, 0x20, 0x43, 0x24, 0xA1, 0x85, 0x45, 0x69, 0x2A, 0x58, 0x0E, 0xCE }' >> src/config.h
	./waf build
