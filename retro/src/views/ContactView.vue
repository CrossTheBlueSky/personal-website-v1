<template>
  <div class ="contact-container-wrapper">
  <div class="contact-container">
  <RouterLink class="return" to="/">Back to Home</RouterLink>
  <h1 style="margin-bottom: 2rem;"> Find me on:</h1>
    <div class="contact">
      <div class="contact-row">
        <img src="/src/assets/gmail.svg" alt="gmail" width="50px" height="50px">
      <a href="mailto:mercedes.derek@gmail.com">Email</a>
      </div>
      <div class="contact-row">
        <img src="/src/assets/linkedin-blue-svgrepo-com.svg" alt="linkedin" width="50px" height="50px">
      <a icon="" href="https://www.linkedin.com/in/derek-mercedes">Linkedin</a>
    </div>
    <div class="contact-row">
      <img src="/src/assets/github-outline-svgrepo-com.svg" alt="github" width="50px" height="50px">
      <a icon="github" href="https://github.com/crossthebluesky">Github</a>
  </div>
    <div class="contact-row">
      <img src="/src/assets/dev.to.svg" alt="dev.to" width="50px" height="50px">
      <a icon="dev" href="https://dev.to/crossthebluesky">Dev.to</a>
    </div>
    </div>
  </div>
  </div>
  </template>
  
  <style>

    .return{
      margin-left: 8rem;
      width: 100%;
    }

    .contact-container-wrapper {
      align-items: start;
      justify-content: center;
      flex-direction: column;
      width: 53vw;
      height: 58vh;
    }
    .contact-container {
      display: flex;
  flex-direction: column;
  height:100%;
  align-items: center;
  font-size: 1.2rem
    }
  
    .contact {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
    }
    .contact-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

    }

  </style>