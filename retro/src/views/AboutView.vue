<template>
  <div class="about-container-wrapper">
    <RouterLink class="about-return" to="/">Back to Home</RouterLink>
  <div class="about-container">
  <div class="about">
    <div class="about-text">
    <h1>About Me</h1>
    <p>
    I'm an AWS-Certified Full-Stack Software Engineer based in Denver, Colorado.
    I build responsive web applications and RESTful APIs with microservices and cloud
    technologies, with a strong background in management and customer-facing work.
    My path into software spans game-development AI at Full Sail University, IT support
    at scale, and freelance full-stack delivery for clients who need reliable APIs,
    e-commerce storefronts, and cloud migrations.
    I care about maintainable code, clear documentation, and shipping work that holds up
    after handoff.
    Credentials: AWS Certified Developer, Full-Stack Software Engineering (Flatiron School),
    B.S. Computer Science — Game Development (Full Sail University).
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
