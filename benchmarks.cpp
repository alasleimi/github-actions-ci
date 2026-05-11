#include <algorithm>
#include <cstdint>
#include <numeric>
#include <string>
#include <unordered_map>
#include <vector>

#include <benchmark/benchmark.h>

namespace {

std::vector<int> make_numbers(std::size_t size) {
  std::vector<int> values(size);
  std::uint32_t state = 0x9e3779b9U;
  for (auto& value : values) {
    state = state * 1664525U + 1013904223U;
    value = static_cast<int>(state & 0x7fffffffU);
  }
  return values;
}

void BM_VectorAccumulate(benchmark::State& state) {
  const auto values = make_numbers(static_cast<std::size_t>(state.range(0)));

  for (auto _ : state) {
    const auto sum = std::accumulate(values.begin(), values.end(), std::int64_t{0});
    benchmark::DoNotOptimize(sum);
  }

  state.SetItemsProcessed(state.iterations() * state.range(0));
}

void BM_SortIntegers(benchmark::State& state) {
  const auto input = make_numbers(static_cast<std::size_t>(state.range(0)));

  for (auto _ : state) {
    auto work = input;
    std::sort(work.begin(), work.end());
    benchmark::DoNotOptimize(work.data());
    benchmark::ClobberMemory();
  }

  state.SetItemsProcessed(state.iterations() * state.range(0));
}

void BM_StringFind(benchmark::State& state) {
  const std::string token = "needle";
  const auto repeats = static_cast<std::size_t>(state.range(0));
  std::string haystack;
  haystack.reserve(repeats * 32U);
  for (std::size_t i = 0; i < repeats; ++i) {
    haystack += "haystack-chunk-";
    haystack += std::to_string(i);
    haystack += ';';
  }
  haystack += token;

  for (auto _ : state) {
    const auto pos = haystack.find(token);
    benchmark::DoNotOptimize(pos);
  }

  state.SetBytesProcessed(state.iterations() * static_cast<std::int64_t>(haystack.size()));
}

void BM_UnorderedMapLookup(benchmark::State& state) {
  const auto size = static_cast<int>(state.range(0));
  std::unordered_map<int, int> table;
  table.reserve(static_cast<std::size_t>(size));
  for (int i = 0; i < size; ++i) {
    table.emplace(i, i * 3);
  }

  for (auto _ : state) {
    int total = 0;
    for (int i = 0; i < size; ++i) {
      total += table.find(i)->second;
    }
    benchmark::DoNotOptimize(total);
  }

  state.SetItemsProcessed(state.iterations() * state.range(0));
}

}  // namespace

BENCHMARK(BM_VectorAccumulate)->Arg(256)->Arg(4096)->Arg(65536);
BENCHMARK(BM_SortIntegers)->Arg(128)->Arg(1024)->Arg(8192);
BENCHMARK(BM_StringFind)->Arg(32)->Arg(512)->Arg(4096);
BENCHMARK(BM_UnorderedMapLookup)->Arg(64)->Arg(1024)->Arg(16384);

BENCHMARK_MAIN();

