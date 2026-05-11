CXX ?= c++
BUILD_DIR ?= build
TARGET ?= $(BUILD_DIR)/benchmarks
RESULT ?= benchmark_result.json

CPPFLAGS ?=
CXXFLAGS ?= -std=c++17 -O3 -DNDEBUG -Wall -Wextra -pedantic
LDFLAGS ?=
LDLIBS ?= -lbenchmark -lpthread
BENCH_ARGS ?= --benchmark_min_time=0.05s

.PHONY: all bench json clean deps-ubuntu

all: $(TARGET)

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(TARGET): benchmarks.cpp | $(BUILD_DIR)
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) $< -o $@ $(LDFLAGS) $(LDLIBS)

bench: $(TARGET)
	$(TARGET) $(BENCH_ARGS)

json: $(TARGET)
	$(TARGET) $(BENCH_ARGS) --benchmark_out=$(RESULT) --benchmark_out_format=json

clean:
	rm -rf $(BUILD_DIR) $(RESULT)

deps-ubuntu:
	sudo apt-get update
	sudo apt-get install -y build-essential libbenchmark-dev

