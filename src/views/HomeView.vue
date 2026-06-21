<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="image-container">
        <img src="/src/assets/pixel-avatar.png" alt="retro-pixel-avatar-of-derek-mercedes">
      </div>
      <div class="home-intro">
        <p class="eyebrow">Derek Mercedes · Denver, CO</p>
        <h1>Full-stack software engineer</h1>
        <p class="tagline">
          I design, build, and deploy web applications with JavaScript, React, Node.js, and AWS — independently and with product, QA, and engineering teams. I translate business requirements into reliable systems that run in production.
        </p>
        <p class="skills-line">JavaScript · React · Node.js · AWS · REST APIs · Accessibility</p>
      </div>
      <nav class="nav">
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container-wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  overflow-x: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  max-width: 100%;
}

.home-intro {
  color: rgb(191, 76, 253);
  text-align: center;
}

.eyebrow {
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1rem;
  line-height: 1.5;
  max-width: 36rem;
  margin: 0.75rem auto 0;
}

.skills-line {
  font-family: monospace;
  font-size: 0.85rem;
  margin-top: 0.75rem;
  opacity: 0.85;
}

.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 40vh;
  overflow-y: auto;
  justify-self: center;
  align-items: center;
}

.nav a {
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .home-intro {
    order: 1;
    width: 100%;
    text-align: center;
    margin-right: 2.5rem;
  }

  .nav {
    order: 2;
    width: 20%;
    max-height: none;
    overflow-y: visible;
    margin-left: 10rem;
  }

  .image-container {
    order: 3;
    width: 35%;
    margin-right: 5rem;
  }
}

@media screen and (min-width: 1200px) {
  .container-wrapper {
    max-width: 53vw;
  }

  .container {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: flex-start;
    margin-bottom: 2rem;
    height: 58vh;
  }

  .home-intro {
    order: 1;
    width: 100%;
    text-align: center;
  }

  .nav {
    order: 2;
    width: auto;
    margin-left: 10rem;
    margin-right: 1rem;
    max-height: none;
    overflow-y: visible;
  }

  .image-container {
    order: 3;
    flex: 1;
    margin-right: 5rem;
  }
}
</style>
