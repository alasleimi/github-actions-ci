window.BENCHMARK_DATA = {
  "lastUpdate": 1778494702306,
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
      },
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
          "id": "934bd5a945d7213adf063c5b3abd797d166a8808",
          "message": "Refine map benchmark constant",
          "timestamp": "2026-05-11T12:17:43+02:00",
          "tree_id": "6e76f36a4296747ecec4014e7f322621014e7e6c",
          "url": "https://github.com/alasleimi/github-actions-ci/commit/934bd5a945d7213adf063c5b3abd797d166a8808"
        },
        "date": 1778494701904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_VectorAccumulate/256",
            "value": 52.04554604534543,
            "unit": "ns/iter",
            "extra": "iterations: 1330851\ncpu: 52.04577973041311 ns\nthreads: 1"
          },
          {
            "name": "BM_VectorAccumulate/4096",
            "value": 728.8208897364118,
            "unit": "ns/iter",
            "extra": "iterations: 95444\ncpu: 728.8286324965426 ns\nthreads: 1"
          },
          {
            "name": "BM_VectorAccumulate/65536",
            "value": 11602.238510953684,
            "unit": "ns/iter",
            "extra": "iterations: 6071\ncpu: 11602.303080217433 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/128",
            "value": 599.4373649093687,
            "unit": "ns/iter",
            "extra": "iterations: 117051\ncpu: 599.4433024920761 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/1024",
            "value": 10488.616996841693,
            "unit": "ns/iter",
            "extra": "iterations: 6966\ncpu: 10488.706431237437 ns\nthreads: 1"
          },
          {
            "name": "BM_SortIntegers/8192",
            "value": 286836.6380090402,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 286682.1764705884 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/32",
            "value": 199.58147421765491,
            "unit": "ns/iter",
            "extra": "iterations: 361507\ncpu: 199.58443681588466 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/512",
            "value": 3333.563620443277,
            "unit": "ns/iter",
            "extra": "iterations: 21699\ncpu: 3333.229780174199 ns\nthreads: 1"
          },
          {
            "name": "BM_StringFind/4096",
            "value": 26070.79474485897,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 26071.182787509533 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/64",
            "value": 157.62740505269514,
            "unit": "ns/iter",
            "extra": "iterations: 442298\ncpu: 157.60033959005017 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/1024",
            "value": 2541.4366714335806,
            "unit": "ns/iter",
            "extra": "iterations: 25873\ncpu: 2541.4822015228237 ns\nthreads: 1"
          },
          {
            "name": "BM_UnorderedMapLookup/16384",
            "value": 40396.78476630066,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 40397.070975187475 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}