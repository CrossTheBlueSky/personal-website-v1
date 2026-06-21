<template>
  <div class="container-wrapper">
    <RouterLink class="return"to ="/">Back to home</RouterLink>
  <div class="project-container">
    <div class="project-card">
        <div class="project-info">
          <h2>Ebb — Mental State Journal</h2>
        <h4><em>Track mood trends over time</em></h4>
        <p>Journaling app that tracks moods associated with entries and charts them over time.</p>
        <br>
        <h5>Stack:</h5>
        <p>TypeScript, React, Python, PostgreSQL, TailwindCSS, ChartJS</p>
        <a href="https://github.com/CrossTheBlueSky/ebb-journaling-v2" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div class="project-screenshot">
            <img src="../assets/floatin.png" alt="pixel-derek-floating-on-river">
        </div>
    </div>
    <div class="project-card">
        <div class="project-info">
          <h2>D&D Nearby: 5e Character Builder</h2>
        <h4><em>Because sometimes beyond is too far</em></h4>
        <p>Streamlines the process and automates the math required to make a character for D&D 5th Edition.</p>
        <br>
        <h5>Stack:</h5>
        <p>React, Redux, Node, Express, MongoDB, MantineUI</p>
            <a href="https://github.com/CrossTheBlueSky/DnD-Nearby-5e-Character-Builder" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div class="project-screenshot">
            <img src="../assets/buildin.png" alt="pixel-derek-in-armor-image">
        </div>
    </div>
    <div class="project-card">
      <div class="project-screenshot">
            <img src="../assets/runnin.png" alt="pixel-derek-running-image">
        </div>
        <div class="project-info">
          <h2>SnapSwap</h2>
        <h4><em>Swap photos across the cloud</em></h4>
        <p>Connects users across the cloud and allows them to swap photos using AWS services.</p>
        <br>
        <h5>Stack:</h5>
        <p>AWS, S3, DynamoDB, Cognito, Lambda, EC2, SAM</p>
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
  color: rgb(191, 76, 253);
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
