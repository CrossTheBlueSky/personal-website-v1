<template>
  <div class="container-wrapper">
    <RouterLink class="return" to="/">Back to Home</RouterLink>
    <div class="experience-container">
      <h1>Experience</h1>
      <p class="intro">Enterprise accessibility engineering at AudioEye and freelance full-stack development in Denver.</p>

      <article class="job">
        <div class="job-header">
          <div>
            <h2>Implementation Developer</h2>
            <p class="company">AudioEye, Inc.</p>
          </div>
          <span class="status">Current</span>
        </div>
        <ul>
          <li>Developed custom JavaScript accessibility solutions for enterprise websites, improving accessibility compliance to over 95% WAI compliance across multiple client implementations.</li>
          <li>Built and enhanced internal engineering tools using modern JavaScript practices, reducing manual effort for recurring development and support workflows.</li>
          <li>Engineered cross-browser solutions by identifying compatibility issues and implementing standardized fixes, improving reliability across supported environments.</li>
          <li>Collaborated with QA and product stakeholders to validate functionality, troubleshoot defects, and ensure successful production releases.</li>
          <li>Authored technical documentation that improved onboarding efficiency and knowledge sharing across teams.</li>
        </ul>
      </article>

      <article class="job">
        <div class="job-header">
          <div>
            <h2>Full Stack Software Engineer</h2>
            <p class="company">Freelance · Denver, CO</p>
          </div>
        </div>
        <ul>
          <li>Designed and delivered full-stack web applications using React, Node.js, MongoDB, and AWS by gathering requirements directly from clients and owning implementation through deployment.</li>
          <li>Built REST APIs and backend services that supported scalable application functionality while maintaining clean and reusable architecture.</li>
          <li>Led cloud migrations and deployment initiatives, improving maintainability and operational efficiency.</li>
          <li>Integrated third-party APIs and external services to extend application functionality while maintaining secure and reliable data flows.</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<style>
.return {
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

.experience-container {
  display: flex;
  flex-direction: column;
  width: calc(100% - 5rem);
  height: calc(100% - 3rem);
  padding-right: 5rem;
  padding-bottom: 3rem;
  margin-left: 4rem;
  overflow-y: auto;
}

.intro {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.45;
}

.job {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(191, 76, 253, 0.25);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.job h2 {
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
}

.company {
  font-size: 0.95rem;
}

.status {
  font-family: monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.8;
}

.job ul {
  margin-top: 1rem;
  padding-left: 1.25rem;
}

.job li {
  font-size: 0.9rem;
  line-height: 1.45;
  margin-bottom: 0.6rem;
}
</style>
