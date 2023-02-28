import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  },
	css: {
		preprocessorOptions: {
			less: {
				additionalData: '@import "./src/style/index.less";',
			}
	  }
	},
	server: {
		host: '0.0.0.0', //ip地址
		port: 8080, //端口号
		open: false, //启动后是否自动打开浏览器
		hrm: true,
		proxy: {
			"/api": {
				target: "http://117.78.26.78",
				changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
				ws: true, // 是否启用  websockets;
				rewrite: (path) => path.replace(/^\/api/, ""),
				pathRewrite: {
					// 去掉 路径中的  /api  的这一截
					"^/api": ""
				}
			},
		},
	}
})
