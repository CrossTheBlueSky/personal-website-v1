<template>
  <teleport to="body">
    <div class="resume-overlay">
    <iframe class="resume-iframe" src="/src/assets/resume.pdf" width="100%" height="600px"></iframe>
    <button @click="$router.push('/')" class="close-button">Close</button>
    </div>
  </teleport>
</template>
  

<style scoped>
.resume-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

.resume-iframe {
  flex-grow: 1;
  border: none;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>