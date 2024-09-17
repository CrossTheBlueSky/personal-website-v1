<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="image-container">
        <img src="/src/assets/pixel-avatar.png" alt="retro-pixel-avatar-of-derek-mercedes">
      </div>
      <div class="home-intro">
        <h1>Hi there! I'm Derek</h1>
        <p>I build apps that make life easier and make people more productive</p>
      </div>
      <nav class="nav">
        <RouterLink to="/projects">My Projects</RouterLink>
        <RouterLink to="/about">About Me</RouterLink>
        <RouterLink to="/contact">Contact Me</RouterLink>
        <a href="/resume" target="_blank">My Resume</a>
        <a href="https://derekmercedes.com/modern">Modern Layout</a>
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

/* Tablet and small desktop styles */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
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

/* Large desktop styles */
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