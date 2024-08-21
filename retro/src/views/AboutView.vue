<template>
  <div class="about-container-wrapper">
    <RouterLink class="about-return" to="/">Back to Home</RouterLink>
  <div class="about-container">
  <div class="about">
    <div class="about-text">
    <h1>About Me</h1>
    <p>
    Hey there! I'm Derek Mercedes, a Full Stack Developer based in Denver, Colorado. 
    My journey into tech has been a bit of an adventure - from crafting AI for video games at Full Sail University to managing teams in the hospitality industry, and finally finding my true calling in web development. 
    When I'm not coding, you'll find me doing circus acrobatics, playing video and tabletop games, and spending time with my dog.
    I believe in the power of technology to solve real-world problems and make life a little more fun along the way. If it can make a difference, I'm all in! 
    So if you're looking for someone who combines technical know-how with creativity and a love for other humans, you're in the right place. 
    Let's create something awesome together!
    </p>
    </div>
  <div class="about-image">
    <img src="/src/assets/new_site_photo.png" alt="derek-mercedes" />
  </div>
</div>
</div>
  </div>
</template>
<style>

.about-return{
  margin-left: 5rem;
}

.about-container-wrapper {
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 53vw;
  height: 58vh;
}

.about-container{
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;

}

.about {
  display: flex;
    width: 50vw;
    margin: 0 4rem;
  }

.about-text{
  flex: 1;
  padding: 20px;
  color: rgb(191, 76, 253);
}

.about-image {
  flex: 1;
  align-items: center;
  justify-content:center;
}

.about-image img {
  margin-top:4rem;
  width: 70%;
  height: 80%;
  object-fit: cover;
}
</style>
