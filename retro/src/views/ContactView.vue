<template>
  <RouterLink to="/">Back to Home</RouterLink>
    <div class="contact">
      <h1 style="margin-bottom: 10px;"> Find me on:</h1>
      <a href="mailto:mercedes.derek@gmail.com">Email</a>
      <br>
      <a href="https://www.linkedin.com/in/derek-mercedes">Linkedin</a>
      <br>
      <a href="https://github.com/crossthebluesky">Github</a>
      <br>
      <a href="https://dev.to/crossthebluesky">Dev.to</a>
    </div>
  </template>
  
  <style>
  
  @media (min-width: 1024px) {
    .contact {
      display: flex;
      flex-direction:column;
      font-size: 1.2rem;
        margin: 3rem;
        min-height: 100vh;
        
      align-items: center;
    }
  }
  
  </style>