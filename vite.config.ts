import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // plugins: [vue()],
  return {
    // 设置项目根目录
    root: './otherRoot',
    // public服务路径
    base: '/',
    // 会覆盖构建时的模式
    mode: 'development',
    plugins: [vue()],
  }
})
