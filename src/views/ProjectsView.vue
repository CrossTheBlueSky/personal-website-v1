<template>
  <div class="container-wrapper">
    <RouterLink class="return" to="/">Back to Home</RouterLink>
    <div class="project-container">
      <h1>Selected Projects</h1>
      <p class="intro">Selected projects spanning frontend, backend, and cloud infrastructure.</p>

      <div class="project-card">
        <div class="project-info">
          <h2>SnapSwap</h2>
          <p class="stack-label">React · AWS Lambda · DynamoDB · API Gateway · S3</p>
          <ul>
            <li>Built a serverless image-sharing platform using React and AWS services, enabling users to upload, store, and retrieve media through a scalable cloud architecture.</li>
            <li>Implemented event-driven processing using DynamoDB Streams and Lambda functions, automating backend workflows and reducing manual operational requirements.</li>
            <li>Designed infrastructure using AWS SAM and API Gateway, streamlining deployment and environment management.</li>
          </ul>
        </div>
        <div class="project-screenshot">
          <img src="../assets/buildin.png" alt="snapswap-project">
        </div>
      </div>

      <div class="project-card">
        <div class="project-screenshot">
          <img src="../assets/floatin.png" alt="ebb-journaling-app">
        </div>
        <div class="project-info">
          <h2>Ebb</h2>
          <p class="stack-label">React · TypeScript · Node.js · MongoDB</p>
          <ul>
            <li>Developed a full-stack journaling application using React, TypeScript, Express, and MongoDB, providing users with secure mental-state tracking and historical insights.</li>
            <li>Implemented authentication, protected routes, and user-specific data management to ensure secure access and data integrity.</li>
            <li>Designed responsive user experiences using Tailwind UI, improving usability across desktop and mobile devices.</li>
          </ul>
          <a href="https://github.com/CrossTheBlueSky/ebb-journaling-v2">View on GitHub</a>
        </div>
      </div>
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

.intro {
  font-size: 0.95rem;
  margin: 0 5rem 1rem;
  line-height: 1.45;
}

.project-container h1 {
  margin-left: 5rem;
}

.project-container {
  display: flex;
  flex-direction: column;
  width: calc(100% - 5rem);
  height: calc(100% - 3rem);
  padding-right: 5rem;
  padding-bottom: 3rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.project-card {
  display: flex;
  width: 40vw;
  margin: 2rem 5rem;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.project-info {
  flex: 1;
  padding: 20px;
}

.project-info h2 {
  margin-bottom: 0.5rem;
}

.stack-label {
  font-family: monospace;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  opacity: 0.85;
}

.project-info ul {
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.project-info li {
  font-size: 0.9rem;
  line-height: 1.45;
  margin-bottom: 0.5rem;
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
