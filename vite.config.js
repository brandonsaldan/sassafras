import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineConfig, loadEnv } from 'vite';
import strip from '@rollup/plugin-strip';

const {gitDescribeSync} = require('git-describe');
const fs = require('fs')


export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

    process.env.VITE_APP_GIT_HASH = gitDescribeSync().hash
    process.env.VITE_APP_GIT_VERSION = fs.readFileSync(".version").toString();
    
    return defineConfig({
        plugins: [viteCommonjs(), vue(), (mode == "production" ? strip({ include: '**/*.+(vue|js)' }): [])],

        server: {
            port: "8080",
        },
    });
}