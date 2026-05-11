window.BENCHMARK_DATA = {
  "lastUpdate": 1778489609923,
  "repoUrl": "https://github.com/alasleimi/github-actions-ci",
  "entries": {
    "C++ Google Benchmark": [
      {
        "commit": {
          "author": {
            "email": "asleimi@yahoo.fr",
            "name": "Ala Sleimi",
            "username": "alasleimi"
          },
          "committer": {
            "email": "asleimi@yahoo.fr",
            "name": "Ala Sleimi",
            "username": "alasleimi"
          },
          "distinct": true,
          "id": "e444a238d2c67ae7d24152b2ab026f1121949423",
          "message": "Add C++ benchmark tracking harness",
          "timestamp": "2026-05-11T10:47:49+02:00",
          "tree_id": "3ead3d077fd1391e1f26788283c73aa970e6afae",
          "url": "https://github.com/alasleimi/github-actions-ci/commit/e444a238d2c67ae7d24152b2ab026f1121949423"
        },
        "date": 1778489609335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_VectorAccumulate/256",
            "value": 47.472104494775465,
            "unit": "ns/iter",
            "extra": "iterations: 1482945\ncpu: 47.464690868508285 ns\nthreads: 1"
          },
          {
            "name": "BM_VectorAccumulate/4096",
            "value": 645.361864797559,
            "unit": "ns/iter",
            "extra": "iterations: 108430\ncpu: 645.3591164806788 ns\nthreads: 1"
          },
          {
            "name": "BM_VectorAccumulate/65536",
            "value": 10318.57827616521,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 10309.980797420112 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/128",
            "value": 578.4303496737144,
            "unit": "ns/iter",
            "extra": "iterations: 119540\ncpu: 578.3621549272211 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/1024",
            "value": 10344.512839433313,
            "unit": "ns/iter",
            "extra": "iterations: 6776\ncpu: 10344.450855962223 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/8192",
            "value": 335880.2796208534,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 335852.075829384 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/32",
            "value": 216.3341878198619,
            "unit": "ns/iter",
            "extra": "iterations: 323001\ncpu: 216.3364292989803 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/512",
            "value": 3354.1251676569054,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 3351.9858210385137 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/4096",
            "value": 27245.557153967336,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 27242.54237947124 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/64",
            "value": 139.68373127396976,
            "unit": "ns/iter",
            "extra": "iterations: 499572\ncpu: 139.66591402240314 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/1024",
            "value": 2244.48003857286,
            "unit": "ns/iter",
            "extra": "iterations: 31110\ncpu: 2244.4978784956597 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/16384",
            "value": 36197.19077242284,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 36197.317262830526 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}