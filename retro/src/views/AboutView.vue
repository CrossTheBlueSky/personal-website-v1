<template>
  <div class="about-container-wrapper">
    <RouterLink class="about-return" to="/">Back to Home</RouterLink>
  <div class="about-container">
  <div class="about">
    <div class="about-text">
    <h1>About Me</h1>
    <p>
    I&apos;m Derek Mercedes, an AWS-certified full-stack developer based in Denver, Colorado, with expertise in JavaScript, TypeScript, React, and Python. I build responsive web applications and RESTful APIs using microservices and cloud technologies.
    My path into tech runs from game development and AI at Full Sail University through hospitality management to full-stack engineering.
    When I&apos;m not coding, you&apos;ll find me doing circus acrobatics, playing video and tabletop games, and spending time with my dog.
    Technology is at its best when it strengthens the human element—that&apos;s what drives me as a developer.
    Feel free to explore my projects, or reach out if you&apos;d like to collaborate or chat about tech.
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
