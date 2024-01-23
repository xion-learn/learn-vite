import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // npm run dev --project=one
  // npm run build --project=one
  const npm_config_project = process.env['npm_config_project']
  if (!npm_config_project) {
    throw new Error(
      '缺少指定模块!, 如果是构建指定模块，请使用 --project=[module_name]'
    )
  }
  // 入口文件
  const input = resolve(__dirname, `src/${npm_config_project}/index.html`)

  return {
    root: `./src/${npm_config_project}`,
    build: {
      rollupOptions: {
        input,
        output: {
          dir: `dist/${npm_config_project}`
        }
      }
    },
    plugins: [vue()],
  }
})
