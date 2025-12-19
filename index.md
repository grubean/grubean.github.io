---
layout: default
title: 首页
---

## 最新发布

<div class="post-grid">
  {% for post in site.posts %}
  <a href="{{ post.url }}" class="post-card">
      
      <div class="post-card-image-container">
          {% if post.image %}
            <img src="{{ post.image }}" class="post-card-image" alt="{{ post.title }}">
          {% else %}
            <div style="width:100%; height:100%; background: #eee; display: flex; align-items: center; justify-content: center; color: #ccc;">NO IMAGE</div>
          {% endif %}
      </div>

      <div class="post-card-content">
          <span class="post-card-meta">{{ post.date | date: "%Y.%m.%d" }}</span>
          <h3 class="post-card-title">{{ post.title }}</h3>
      </div>

  </a>
  {% endfor %}
</div>