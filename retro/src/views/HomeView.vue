<template>
  <div class="container-wrapper">
  <div class="container">
    <h1>Hi there! I'm Derek.</h1>
    <p>I make things for computers.</p>
    <div class="content">
      <nav class="nav">
        <RouterLink to="/projects">What kind of things?</RouterLink>
        <RouterLink to="/about">Who are you, exactly?</RouterLink>
        <RouterLink to="/contact">I want to reach out</RouterLink>
      </nav>
      <div class="image-container">
        <img src="/src/assets/pixel-avatar.png" alt="retro-pixel-avatar-of-derek-mercedes">
      </div>
    </div>
  </div>
  </div>
</template>


<style scoped>
.container-wrapper {
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 53vw;
  height: 58vh;
}
.container {
  display: flex;
  flex-direction: column;
  height:100%;
  align-items: center;
  font-size: 1.2rem
}

.content {
  margin-top: 1rem;
  width:100%;
  display: flex;
  flex: 1;
}

.nav {
  display: flex;
  margin-left: 10rem;
  flex-direction: column;
}

.nav a {
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-right: 5rem;

}

.image-container img {
  max-width: 60%;
  max-height: 60%;
  object-fit: cover;
}
</style>