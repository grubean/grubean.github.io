---
layout: default
title: Home
---

<div class="post-grid">
  {% for post in site.posts %}
  <a href="{{ post.url }}" class="post-card">
      <div class="card-img-box">
          {% if post.image %}
            <img src="{{ post.image }}" loading="lazy" alt="cover">
          {% else %}
            <div style="width:100%; height:100%; background: #eee;"></div>
          {% endif %}
      </div>
      <div class="card-body">
          <div class="card-title">{{ post.title }}</div>
          <div class="card-date">{{ post.date | date: "%m.%d" }}</div>
      </div>
  </a>
  {% endfor %}
</div>