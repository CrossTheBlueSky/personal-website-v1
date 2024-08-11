<template>
  <div class="container-wrapper">
  <div class="container">
    <div class="home-intro">
    <h1>Hi there! I'm Derek.</h1>
    <p>I make things for computers.</p>
    </div>
    <div class="content">
      <nav class="nav">
        <RouterLink to="/projects">What kind of things?</RouterLink>
        <RouterLink to="/about">Who are you, exactly?</RouterLink>
        <RouterLink to="/contact">How can I reach you?</RouterLink>
        <a href="https://derekmercedes.com/modern">Can I get a modern layout?</a>
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

.home-intro{
  color: rgb(191, 76, 253);
}
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>