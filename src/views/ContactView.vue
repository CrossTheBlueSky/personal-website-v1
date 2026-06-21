<template>
  <div class="contact-container-wrapper">
    <div class="contact-container">
      <RouterLink class="return" to="/">Back to Home</RouterLink>
      <h1>Contact &amp; Credentials</h1>
      <p class="name-line">Derek Mercedes · Denver, CO</p>

      <div class="contact">
        <div class="contact-row">
          <img src="/src/assets/gmail.svg" alt="gmail" width="50" height="50">
          <a href="mailto:mercedes.derek@gmail.com">mercedes.derek@gmail.com</a>
        </div>
        <div class="contact-row contact-row-text">
          <a href="tel:3214585033">(321) 458-5033</a>
        </div>
        <div class="contact-row">
          <img src="/src/assets/linkedin-blue-svgrepo-com.svg" alt="linkedin" width="50" height="50">
          <a href="https://www.linkedin.com/in/derek-mercedes">LinkedIn</a>
        </div>
        <div class="contact-row">
          <img src="/src/assets/github-color-svgrepo-com.svg" alt="github" width="45" height="45">
          <a href="https://github.com/CrossTheBlueSky">GitHub</a>
        </div>
        <div class="contact-row">
          <img src="/src/assets/dev.to.svg" alt="dev.to" width="50" height="50">
          <a href="https://dev.to/crossthebluesky">Dev.to</a>
        </div>
        <div class="contact-row">
          <a href="/resume.pdf" download class="resume-link">Download resume (PDF)</a>
        </div>
      </div>

      <div class="credentials">
        <div class="credential">
          <h3>AWS Certified Developer</h3>
          <p>Amazon</p>
        </div>
        <div class="credential">
          <h3>Bachelor of Science — Computer Science (Game Development)</h3>
          <p>Full Sail University</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.return {
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
  height: 100%;
  align-items: center;
  font-size: 1.1rem;
  overflow-y: auto;
  color: rgb(191, 76, 253);
}

.name-line {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.75rem;
}

.contact-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.contact-row-text {
  padding-left: 3.5rem;
}

.resume-link {
  font-weight: 600;
}

.credentials {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  text-align: center;
}

.credential h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.credential p {
  font-size: 0.9rem;
  opacity: 0.85;
}
</style>
