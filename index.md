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
            <div style="width:100%; height:100%; background: #e0e0e0;"></div>
          {% endif %}
      </div>
      <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <div class="card-date">{{ post.date | date: "%b %d" }}</div>
      </div>
  </a>
  {% endfor %}
</div>