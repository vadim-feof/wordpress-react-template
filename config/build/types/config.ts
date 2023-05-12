
export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string;
    build: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    proxy: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    proxy: string;
}
