load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

ts_library(
    name = "rendezvous-lib",
    srcs = [
        "rendezvous.ts",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "@npm//@types/node",
    ]
)

ts_library(
    name = "client-lib",
    srcs = [
        "client.ts",
    ],
    visibility = ["//visibility:public"],
    deps = [
        "@npm//@types/node",
    ]
)

filegroup(
    name = "rendezvous.js",
    srcs = [
        ":rendezvous-lib"
    ],
    # Change to es6_sources to get the 'prodmode' JS
    output_group = "es5_sources",
)

filegroup(
    name = "client.js",
    srcs = [
        ":client-lib"
    ],
    # Change to es6_sources to get the 'prodmode' JS
    output_group = "es5_sources",
)

nodejs_binary(
    name = "rendezvous",
    entry_point = ":rendezvous.ts",
    data = [
        ":rendezvous.js",
    ],
)

nodejs_binary(
    name = "client",
    entry_point = ":client.ts",
    data = [
        ":client.js",
    ],
)