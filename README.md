# GitHub Actions C++ Benchmark Tracking

This repository is a small Google Benchmark harness for testing benchmark history
visualization on GitHub Pages.

The GitHub Action runs on every push to `main`, builds `benchmarks.cpp` with the
`Makefile`, emits `benchmark_result.json`, and publishes benchmark history with
`benchmark-action/github-action-benchmark`.

## Local use

On Ubuntu:

```sh
make deps-ubuntu
make bench
make json
```

Targets:

- `make` builds `build/benchmarks`
- `make bench` runs the benchmark table in the terminal
- `make json` writes `benchmark_result.json`
- `make clean` removes generated files

## GitHub Pages dashboard

After the first successful workflow run, benchmark history is written to the
`gh-pages` branch under `dev/bench`.

Expected dashboard URL:

```text
https://alasleimi.github.io/github-actions-ci/dev/bench/
```

GitHub Pages on the GitHub Free plan only works from public repositories. If
this repository remains private, Pages requires GitHub Pro, Team, Enterprise
Cloud, or Enterprise Server.

