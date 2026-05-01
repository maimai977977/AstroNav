MaiMaiNav - 个人导航站
一个基于 Astro 和 Tailwind CSS 构建的现代化个人导航网站，采用毛玻璃效果、动态渐变背景和霓虹光效，提供优雅的卡片视图和文件夹视图，帮助用户高效管理和访问常用网站资源。

✨ 特性
🎨 双视图模式 - 卡片视图 + 文件夹视图，满足不同浏览习惯

🔍 实时搜索 - 支持搜索网站标题、描述和分类，高亮匹配结果

📂 文件夹分组 - 按分类自动分组，支持展开/收起，搜索时自动展开匹配项

🌓 暗色模式 - 内置暗色/亮色主题切换，跟随系统偏好

🖼️ 网站图标 - 自动获取网站 Favicon，加载失败时显示默认图标

📱 响应式设计 - 完美适配桌面端、平板和移动端

✨ 炫酷特效 - 动态渐变背景、霓虹边框、扫光动画、脉冲光效

🚀 高性能 - 基于 Astro 构建，首屏加载极快

📦 数据驱动 - 通过 JSON 文件管理所有链接，易于维护

🛠️ 技术栈
技术	用途
Astro	静态站点生成器，高性能框架
Tailwind CSS	原子化 CSS 框架，快速构建界面
Alpine.js	轻量级 JavaScript 框架，处理交互
TypeScript	类型安全，提升代码质量
HTML5 / CSS3	页面结构与样式
📁 项目结构
text
src/
├── components/           # 组件目录
│   ├── NavCard.astro    # 卡片组件
│   ├── FolderNav.astro  # 文件夹导航组件
│   ├── SearchBar.astro  # 搜索栏组件
│   └── ThemeToggle.astro # 主题切换组件
├── layouts/              # 布局组件
│   ├── Layout.astro      # 主布局（含侧边栏）
│   └── FolderLayout.astro # 文件夹页面专用布局
├── pages/                # 页面
│   ├── index.astro       # 首页（卡片视图）
│   └── folder.astro      # 文件夹视图页面
├── data/                 # 数据文件
│   ├── Navdata.json      # 导航数据（卡片视图）
│   └── roomdata.json     # 文件夹视图数据
├── styles/               # 全局样式
│   └── global.css        # Tailwind 入口
└── assets/               # 静态资源
📦 数据格式
Navdata.json / roomdata.json
json
[
  {
    "id": 1,
    "category": "技术论坛",
    "title": "吾爱破解",
    "description": "安全技术交流与资源共享",
    "tags": ["安全技术", "逆向工程", "资源共享"],
    "status": "online",
    "url": "https://www.52pojie.cn",
    "image": "https://placehold.co/600x400/e2e8f0/64748b?text=52PoJie"
  }
]
字段	类型	说明
id	number	唯一标识
category	string	分类名称（用于文件夹分组）
title	string	网站标题
description	string	网站描述
tags	string[]	标签数组
status	string	状态：online / offline
url	string	网站链接
image	string	图标/截图 URL（可选）
🚀 快速开始
1. 克隆项目
bash
git clone https://github.com/yourusername/astro-nav.git
cd astro-nav
2. 安装依赖
bash
npm install
3. 配置基础路径
修改 astro.config.mjs 中的 base 配置：

javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/AstroNav/',  // 你的部署子目录
  integrations: [tailwind()],
});
4. 准备数据
将你的导航数据放入 src/data/Navdata.json 和 src/data/roomdata.json。

5. 启动开发服务器
bash
npm run dev
访问 http://localhost:4321/AstroNav/

6. 构建生产版本
bash
npm run build
构建产物位于 dist 目录。

7. 部署到 GitHub Pages
bash
npm run deploy
🎯 功能详解
卡片视图（首页）
侧边栏分类菜单，点击筛选卡片

毛玻璃卡片效果，悬停上浮动画

实时搜索（标题 + 描述）

暗色模式切换

文件夹视图
按 category 自动分组

文件夹默认收起，点击展开/收起

搜索时自动展开匹配的文件夹

动态渐变背景（流动光效）

霓虹边框 + 扫光动画

搜索功能
支持搜索标题、描述、分类

实时过滤，即时显示结果

搜索结果数量提示

无结果时显示友好提示

🔧 自定义配置
修改主题色
编辑 tailwind.config.cjs：

javascript
theme: {
  extend: {
    colors: {
      primary: '#1fb6ff',
      secondary: '#7e5bef',
    }
  }
}
修改背景渐变
编辑 folder.astro 中的 drawGradient 函数：

javascript
grad.addColorStop(0, '#0f0c29');  // 起始色
grad.addColorStop(0.3, '#1a1a3e'); // 中间色
grad.addColorStop(0.6, '#1e1b4b'); // 中间色
grad.addColorStop(1, '#0f0c29');   // 结束色
📱 响应式断点
断点	屏幕宽度	卡片列数
手机	< 640px	1 列
平板	640px - 768px	2 列
笔记本	768px - 1024px	3 列
桌面	> 1024px	4 列
🗂️ 部署
GitHub Pages
bash
# 配置 base 路径后
npm run build
npx gh-pages -d dist
Vercel
bash
vercel --prod
Netlify
bash
netlify deploy --prod
📄 许可证
MIT License

🤝 贡献
欢迎提交 Issue 和 Pull Request

📧 联系方式
作者：MaiMai

邮箱：maimai977977@gmail.com

项目地址：https://github.com/maimai977977/AstroNav

⭐ 如果这个项目对你有帮助，请给一个 Star！