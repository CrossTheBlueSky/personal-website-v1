<template>
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
        <img src="/src/assets/pixel-dragon.jfif" alt="Responsive Image">
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 50vh;
}

.content {
  display: flex;
  flex: 1;
}

.nav {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 200px;
}

.nav a {
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.image-container {
  flex: 1;
  max-width: 30vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1rem;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
}
</style>