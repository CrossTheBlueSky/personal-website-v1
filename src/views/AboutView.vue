<template>
  <div class="about-container-wrapper">
    <RouterLink class="about-return" to="/">Back to Home</RouterLink>
    <div class="about-container">
      <div class="about">
        <div class="about-text">
          <h1>About</h1>
          <p>
            Software engineer with experience across the full stack — React frontends, Express APIs, and AWS services including Lambda, DynamoDB, and API Gateway. I have delivered end-to-end solutions on freelance engagements and at AudioEye, where I develop enterprise accessibility implementations. REST APIs, cloud architecture, accessibility, GitHub workflows, and AI-assisted development with Cursor are central to how I work.
          </p>
          <div class="highlights">
            <div class="highlight">
              <h3>End-to-end delivery</h3>
              <p>I take responsibility for scoping, implementation, and deployment. On freelance engagements and internal tools, I have carried projects from initial requirements through production release.</p>
            </div>
            <div class="highlight">
              <h3>QA and product collaboration</h3>
              <p>At AudioEye, I work with QA and product to validate functionality, resolve defects, and ship releases that perform reliably across environments.</p>
            </div>
            <div class="highlight">
              <h3>Accessibility and cross-browser engineering</h3>
              <p>Custom JavaScript for enterprise accessibility — 95%+ WAI compliance on client sites — along with standardized cross-browser fixes and documentation that supports team onboarding.</p>
            </div>
          </div>
          <div class="how-i-work">
            <h3>How I work</h3>
            <p>
              I learn quickly through hands-on work. I document decisions, contribute clearly in technical discussions, and follow through on commitments. When trade-offs arise, I prioritize practical solutions that meet requirements without unnecessary complexity.
            </p>
          </div>
        </div>
        <div class="about-image">
          <img src="/src/assets/new_site_photo.png" alt="derek-mercedes" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about-return {
  margin-left: 5rem;
}

.about-container-wrapper {
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 53vw;
  height: 58vh;
}

.about-container {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95%;
  overflow-y: auto;
}

.about {
  display: flex;
  width: 50vw;
  margin: 0 4rem;
}

.about-text {
  flex: 1;
  padding: 20px;
  color: rgb(191, 76, 253);
}

.about-text p {
  line-height: 1.5;
}

.highlights {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight h3,
.how-i-work h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.highlight p,
.how-i-work p {
  font-size: 0.9rem;
  line-height: 1.45;
}

.how-i-work {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(191, 76, 253, 0.3);
}

.about-image {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.about-image img {
  margin-top: 4rem;
  width: 70%;
  height: 80%;
  object-fit: cover;
}
</style>
