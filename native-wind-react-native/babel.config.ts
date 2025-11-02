interface BabelApi {
    cache(value: boolean): void;
}

interface BabelPresetOptions {
    jsxImportSource?: string;
    [key: string]: unknown;
}

type BabelPreset = string | [string, BabelPresetOptions];

interface BabelConfig {
    presets: BabelPreset[];
    plugins?: Array<string | Record<string, unknown>>;
    [key: string]: unknown;
}

module.exports = function (api: BabelApi): BabelConfig {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
    };
};