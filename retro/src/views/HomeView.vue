<template>
  <div class="home">
    <div class = "wrapper">
    <div class = "text">
    <h1>I'm Derek Mercedes. </h1>
    <h2>I make things for computers.</h2>
    </div>
    <div class="choices">
      <RouterLink to ="/projects">What kind of things?</RouterLink>
      <RouterLink to="/about">Who are you, exactly?</RouterLink>
      <RouterLink to="/contact">I want to reach out</RouterLink>
      <!-- <a href="https://derekmercedes.com/modern" >I hate this retro look</a> -->
    </div>
    <div class = "self-image">
    <img src="../assets/derek.png" alt="derek" width="350px">
    </div>

    </div>
  </div>
</template>


<style>

.choices {
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 4rem;

  
}

.text {
  grid-area: 1 / 1 / 2 / 2; 
}

.text h1 {
  display: block;
  font-size: 2.5rem;
  align-self: center;
}

.text h2 {
  display: block;
  color: cornflowerblue;
  margin-top: 1.5rem;
  align-self: center;
}

.self-image {
  grid-area: 1 / 2 / 3 / 3; 
  padding-left: 5rem;
  padding-top: .5rem;
}

.wrapper {
  width: 100vw;
  margin: 10vw;
  display: grid;

grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 5rem;
grid-row-gap: 0px;

}

@media (min-width: 1024px) {

  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>