import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        // @ts-ignore
        new BrowserSyncPlugin({
            proxy: 'wp-react.localhost',
            port: 3000,
            reloadDebounce: 100,
            notify: true,
            ghostMode: false,
            files: [
                `./**/*.php`,
                `./**/*.js`,
                `./**/*.scss`,
                '!**/*.css.map',
                '!**/*.js.map',
            ],
            watchEvents: ["change", "add"],// "add" to reload when js file names are dynamic
        })
    ]
}
