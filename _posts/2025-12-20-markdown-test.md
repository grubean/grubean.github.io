---
layout: post
title:  "Markdown 语法渲染测试"
date:   2025-12-15 09:00:00 +0800
image: https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEM2alpQqGJIz7OKzxgQZh6mWJlOBuzTwACRzoAAljPEVZjQytWhpq5DTYE.png
---

这是一篇用来测试 **Grubean Blog** 样式的文章。你应该能看到非常圆润的图片圆角和类似 iOS 的排版。

公式： $xyz$ 

## 1. 图片样式测试
下面应该是一张大图，圆角应该很大（24px），并且有阴影。

![测试图片](https://images.unsplash.com/photo-1506744038136-46273834b3fb)

## 2. 引用块测试
> "Design is not just what it looks like and feels like. Design is how it works."
> 
> — Steve Jobs

## 3. 表格样式测试
表格应该有斑马纹背景，且边角是圆润的。

| 功能 | 状态 | 备注 |
| :--- | :---: | :--- |
| 玻璃态按钮 | ✅ | 看起来像 iOS 26 |
| 壁纸分层滑动 | ✅ | 丝般顺滑 |
| 暗黑模式 | ✅ | 保护视力 |
| 自动发布 | ✅ | 极简流程 |

## 4. 代码块测试
```python
def hello_grubean():
    print("Welcome to your new blog!")
    return "Keep it simple."