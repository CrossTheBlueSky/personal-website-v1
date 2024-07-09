<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import $ from 'jquery'
import gsap, { Power2 } from 'gsap'
import 'animate.css'
import { onMounted } from 'vue';

onMounted(() => {
  screenOn()
})
/**
 * Turns on and off the screen element.
 *
 * @returns {void}
 */
function screenOn(): void {

  const SELECTOR_SCREEN_ELEMENT: string = '.screen';
  const SELECTOR_SWITCHER_TV: string = '#switcher-tv';
  
  let isTurnedOn: boolean = true;
  
  let timeline: gsap.core.Timeline;
  
  /**
   * Builds the timeline for turning on and off the screen element.
   *
   * @returns {void}
   */
  function buildTimeline(): void {
    timeline = gsap.timeline({
      paused: true
    });
    
    timeline
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
      width: '100vw',
      height: '2px',
      background: '#ffffff',
      ease: Power2.easeOut
    })
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
      width: '0',
      height: '0',
      background: '#ffffff'
    });
  }
  
  /**
   * Toggles the switcher TV to turn on or off the screen element.
   *
   * @returns {void}
   */
  function toggleSwitcherTV(): void {
    if (isTurnedOn) {
      timeline.restart();
    }
    
    if (!isTurnedOn) {
      timeline.reverse();
    }
    
    isTurnedOn = !isTurnedOn;
  }
  
  // Initialize
  $(document).ready(buildTimeline);
  
  // Bindings
  $(document).on('click', SELECTOR_SWITCHER_TV, function() {
    toggleSwitcherTV();
  });

}

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="screen">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to ="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <RouterView />
    </div>
    </div>

  </header>
  <button id="switcher-tv">Turn on/off</button>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 20px;
  font-weight: 700;
  font-size: 16px;
}

.screen {
  background-color: var(--color-background-soft);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  content: " ";
  overflow: hidden;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
