---
layout: default
title: 首页
---

## 最新文章

<ul>
  {% for post in site.posts %}
    <li>
      <span style="color: #888; font-size: 0.8em;">{{ post.date | date: "%Y-%m-%d" }}</span>
      &nbsp; <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
