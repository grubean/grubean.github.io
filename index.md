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
            <div style="width:100%; height:100%; background: linear-gradient(to bottom right, #e0e0e0, #f5f5f7);"></div>
          {% endif %}
      </div>

      <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <span class="card-date">{{ post.date | date: "%Y.%m.%d" }}</span>
      </div>
  </a>
  {% endfor %}
</div>