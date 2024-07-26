<template>
  <div class="home">
    <div class = "wrapper">
    <div class = "text">
    <h1>I'm Derek Mercedes. </h1>
    <h1>I make things for computers</h1>
    </div>
    <div class = "image">
    <img src="../assets/derek.png" alt="derek" width="250">
    </div>
    </div>
  </div>
</template>


<style>

.wrapper {
  display: flex;
  justify-content:  space-between;
  margin: 5rem;
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>