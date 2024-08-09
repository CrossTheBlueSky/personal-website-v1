import {projectCard} from '../components/ProjectCard.vue'

<template>
  <div class="container-wrapper">
    <RouterLink class="return"to ="/">Back to home</RouterLink>
  <div class="project-container">
    <div class="project-card">
        <div class="project-info">
          <h2>D&D Nearby</h2>
        <h4><em>Because sometimes beyond is too far</em></h4>
        <p>An App I made to streamline the creation of characters for 5e Dungeons and Dragons.</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Redux, Node, Express, MongoDB, MantineUI</p>
            <a href="https://github.com/CrossTheBlueSky/DnD-Nearby-5e-Character-Builder">View Project</a>
        </div>
        <div class="project-screenshot">
            <img src="/src/assets/pixel-dragon.jfif" alt="pixel-dragon-image">
        </div>
    </div>
    <div class="project-card">
      <div class="project-screenshot">
            <img src="/src/assets/milestone-splash-1.png" alt="mountaintop-image">
        </div>
        <div class="project-info">
          <h2>Milestone Fitness</h2>
        <h4><em>Every step is a goal achieved.</em></h4>
        <p> A fitness app that utilizes machine learning to break down large fitness goals into smaller steps.</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, Bootstrap</p>
        <a href="https://github.com/CrossTheBlueSky/Milestone-Fitness-App">View Project</a>
        </div>
    </div>
    <div class="project-card">
        <div class="project-info">
          <h2>Ebb - A Journaling App </h2>
        <h4><em> Find your flow </em></h4>
        <p> A journaling app that tracks and visualizes your mood patterns over time</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, TailwindCSS, ChartJS</p>
        <a href="https://github.com/CrossTheBlueSky/Ebb---Mood-Tracking-and-Journaling">View Project</a>
        </div>
        <div class="project-screenshot">
            <img src="/src/assets/ebb-placeholder.jpeg" alt="flowing-water-image">
        </div>
    </div>
  </div>
</div>
  </template>

<style>
.return{
  margin-left: 5rem;
}

.container-wrapper {

  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 53vw;
  height: 58vh;
}

.project-container{
  display: flex;
  flex-direction: column;
  width: calc(100% - 5rem);
  height: calc(100% - 3rem);
  padding-right: 5rem;
  padding-bottom: 3rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 4rem;

}
.project-card {
    display: flex;
    width: 40vw;
    margin: 2rem 5rem;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.project-info {
    flex: 1;
    padding: 20px;
}
.project-screenshot {
    flex: 1;
}
.project-screenshot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

<!-- <template>
  
  <div class="container">
    <RouterLink to ="/">Back to home</RouterLink>
  <div class="project-card">
        <div class="project-info">
            <h2>Project Title</h2>
            <p>Project description goes here. This can include details about the project, technologies used, and key features.</p>
            <a href="#">View Project</a>
        </div>
        <div class="image-container">
            <img src="/src/assets/pixel-dragon.jfif" alt="project-image">
        </div>
    </div>
  </div>
     <div class="projects">
      <div class = "nearby-text">
        <h2>D&D Nearby</h2>
        <h4><em>Because sometimes beyond is too far</em></h4>
        <p>An App I made to streamline the creation of characters for 5e Dungeons and Dragons.</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Redux, Node, Express, MongoDB, MantineUI</p>
      </div>
      <div class = "nearby-image">
        <img src = "../assets/pixel-dragon.jfif" alt = "pixel dragon" width = "300">
      </div>
      <div class = "milestone-text">
        <h2>Milestone Fitness</h2>
        <h4><em>Every step is a goal achieved.</em></h4>
        <p> A fitness app that utilizes machine learning to break down larger fitness goals into smaller steps.</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, Bootstrap</p>
      </div>
      <div class = "milestone-image">
        <img src= "../assets/milestone-splash-1.png" alt = "milestone" width = "300">
      </div>
      <div class = "ebb-text">
        <h2>Ebb - A Journaling App </h2>
        <h4><em> Find your flow </em></h4>
        <p> A journaling app that tracks and visualizes your mood patterns over time</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Python, SQLAlchemy, Flask, TailwindCSS, ChartJS</p>
      </div>
      <div class = "ebb-image">
        <img src = "../assets/ebb-placeholder.jpeg" alt = "ebb" width = "300">

      </div>
    </div>
  </div>
  </template>
  
  
  <style>

.container {
  display: flex;
  flex-direction: column;
  height: 50vh;
}

.project-card{
  display: flex;
flex: 1;
}

.project-info {
            flex: 1;
            padding: 20px;
        }


.image-container {
  flex: 1;
  max-width: 30vh;
  justify-content: center;
  align-items: start;
  padding: 1rem;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
}
  
  </style> -->