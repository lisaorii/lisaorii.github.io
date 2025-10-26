---
layout: archive
title: "Contraceptive Decision-Support App in Kenya"
collection: projects
permalink: /projects/kenya-contraceptive-app/
author_profile: true
---

<h1>Contraceptive Decision-Support App in Kenya</h1>

<p>📄 <strong>Peer-Reviewed Publication:</strong>
<a href="https://dl.acm.org/doi/10.1145/3706598.3713508" target="_blank" rel="noopener noreferrer">ACM CHI 2025</a>
</p>

<hr>

<div class="project-meta">
  <ul>
    <li>🎯 <strong>Roles:</strong> User Researcher, Software Engineer</li>
    <li>🗓️ <strong>Timeline:</strong> Jan 2024 – May 2025</li>
    <li>🧰 <strong>Tools:</strong> Figma, Miro, Mural, Flutter (Dart), ATLAS.ti</li>
  </ul>
</div>

<section>
  <h2>Project Overview</h2>
  <p><strong>Problem:</strong> Adolescent girls and young women (AGYW) aged 15–24 in Kenya lack contraceptive decision-support resources tailored to their needs and experiences. Pharmacies are a key access point for contraceptive services, but pharmacy providers have limited capacity to offer AGYW-specific counseling.</p>

  <p><strong>Goal:</strong> Improve the quality and person-centeredness of contraceptive services for AGYW in the pharmacy setting.</p>

  <p><strong>Approach:</strong> Developed an Android app that provides tailored contraceptive decision-support for AGYW in pharmacies in Kenya.</p>

  <p><strong>Steps:</strong></p>
  <ol>
    <li>Guided engineering team to translate Figma designs into an Android app using the Flutter platform.</li>
    <li>Delivered a functional app to co-design workshops with 45+ AGYW and pharmacy staff in Kenya.</li>
    <li>Refined UX based on workshop insights.</li>
    <li>Piloted the app in Kenyan pharmacies with 100+ AGYW across three months.</li>
    <li>Explored integration of AI-enabled chatbots into the app.</li>
  </ol>
</section>

<section>
  <h2>App Development</h2>
  <p>We built an Android app using Flutter, targeting Samsung Galaxy tablets. The design centered on AGYW preferences and needs, achieved through four key principles:</p>

  <ul>
    <li><strong>App Content:</strong> Crafted by a sexual and reproductive health expert based on years of formative research identifying decision-making considerations for AGYW. The app incorporated these key topics.</li>
    <li><strong>Multimedia Content:</strong> Included videos and audio narration to support users with varying literacy levels.</li>
    <li><strong>Multilingual Design:</strong> Offered text, video, and audio in three primary local languages, with the ability to switch languages on each page.</li>
    <li><strong>Decision-Support Tool:</strong> Integrated a quiz-based tool providing contraceptive method recommendations tailored to user preferences.</li>
  </ul>

  <div class="carousel" id="carousel1">
    <figure class="active">
      <img src="/assets/images/mara_app/main_page.png" alt="Main page">
      <figcaption>App content was crafted by a sexual and reproductive health, based on formative work on AGYW contraceptive decision-making considerations.</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/mara_app/language.png" alt="Multilingual multimedia content">
      <figcaption>App was built in 3 languages and with audio and video.</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/mara_app/decision_tool.png" alt="Decision-support tool">
      <figcaption>App provides contraceptive method recommendations tailored to user preferences.</figcaption>
    </figure>
  </div>
  <div class="carousel-buttons" id="carousel1-buttons"></div>

</section>

<section>
  <h2>Co-Design Workshops in Kisumu, Kenya</h2>
  <p>We conducted co-design workshops with 33 AGYW and 10 pharmacy staff in Kisumu, Kenya. Workshop activities included:</p>
  <ul>
    <li><strong>Journey mapping:</strong> Visualized the entire pharmacy visit experience, identifying pain points and moments of joy.</li>
    <li><strong>Free app engagement:</strong> Allowed participants to explore the app freely for familiarization.</li>
    <li><strong>Usability testing:</strong> Conducted 1:1 sessions using 12 structured tasks (each participant completed 3).</li>
    <li><strong>Facilitated app engagement:</strong> Guided discussions around specific app sections and reflections on similarities with pharmacist guidance.</li>
    <li><strong>App feedback:</strong> Used the “I Like, I Wish, What If” method to collect improvement ideas.</li>
    <li><strong>Group discussion:</strong> Semi-structured reflections on how the app could change pharmacy experiences for AGYW.</li>
  </ul>
</section>

<section>
  <h2>Key Findings</h2>
  <ul>
    <li>
      <strong>Pharmacists play differential roles depending on literacy levels.</strong><br>
      Older AGYW (18–24) generally had higher digital and health literacy, requiring more tailored information, whereas younger AGYW (15–17) needed foundational guidance. Pharmacists must adapt their engagement accordingly.
    </li>
    <li>
      <strong>Placing the app in pharmacies extends impact across AGYW groups.</strong><br>
      Older AGYW are easier to reach digitally, but limiting design to them risks excluding younger users. Deploying the app in pharmacies ensures infrastructure and human support for all literacy levels.
    </li>
    <li>
      <strong>Iterative app improvements.</strong><br>
      Several UX/UI updates were made during testing, shown below.
    </li>
  </ul>

  <div class="carousel" id="carousel1">
    <figure class="active">
      <img src="/assets/images/mara_app/main.png" alt="Mara Divas app logo">
      <figcaption>Renamed the app “Mara Divas” to make it more fun and aspirational.</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/mara_app/epill.png" alt="Emergency contraception page">
      <figcaption>Added a page early in the flow for AGYW to learn about emergency contraception.</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/mara_app/figure.png" alt="Illustration of AGYW">
      <figcaption>Updated character illustration to be more relatable to AGYW users.</figcaption>
    </figure>
  </div>
  <div class="carousel-buttons" id="carousel1-buttons"></div>

</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel1');
  const slides = carousel.querySelectorAll('figure');
  const buttonsContainer = document.getElementById('carousel1-buttons');

  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => showSlide(i));
    buttonsContainer.appendChild(btn);
  });

  const buttons = buttonsContainer.querySelectorAll('button');
  let current = 0;

  function showSlide(index) {
    slides[current].classList.remove('active');
    buttons[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    buttons[current].classList.add('active');
  }

  slides[0].classList.add('active');
  buttons[0].classList.add('active');
});
</script>

<style>
  .carousel {
  position: relative;
  width: 60%;
  margin: 2em auto;
  overflow: hidden;
  border-radius: 8px;
}
.carousel figure {
  margin: 0;
  display: none;
  text-align: center;
}
.carousel figure.active {
  display: block;
}
.carousel img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.carousel figcaption {
  text-align: center;
  font-size: 0.9em;
  color: #666;
  margin-top: 0.5em;
  font-style: italic;
}
.carousel-buttons {
  text-align: center;
  margin-top: 10px;
}
.carousel-buttons button {
  border: none;
  background-color: #ccc;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.carousel-buttons button.active {
  background-color: #666;
}
</style>