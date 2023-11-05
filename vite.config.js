import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    publicPath: '/project name/',
    plugins: [vue()],
})
