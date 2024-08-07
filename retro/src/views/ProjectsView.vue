<template>
  <RouterLink to ="/">Back to home</RouterLink>
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
  </template>
  
  
  <style>


.projects {
display: grid;
padding: 2rem;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 87.5vh;
margin: 5vh 5vw 0 5vw;
overflow: auto;

}

.nearby-text { grid-area: 1 / 1 / 2 / 2; }
.nearby-image { grid-area: 1 / 2 / 2 / 3; }
.milestone-image { grid-area: 2 / 1 / 3 / 2; }
.milestone-text { grid-area: 2 / 2 / 3 / 3; }
.ebb-text { grid-area: 3 / 1 / 4 / 2; }
.ebb-image { grid-area: 3 / 2 / 4 / 3; }

  
  @media (min-width: 1024px) {
  }
  
  </style>