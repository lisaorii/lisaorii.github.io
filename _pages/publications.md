<!-- ---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true -->
---

{% include base_path %}

You can also find my articles on [Google Scholar](https://scholar.google.com/citations?user=qEfndNsAAAAJ&hl=en&oi=sra).

<!-- {% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %} -->

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<sup>*</sup> Equal authorship statement
