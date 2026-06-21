import $ from 'jquery'
import gsap, { Power2 } from 'gsap'

/**
 * Turns on and off the screen element.
 *
 * @returns {void}
 */
function screenOn(isTurnedOn: boolean): void {

  const SELECTOR_SCREEN_ELEMENT: string = '.screen';
  const SELECTOR_SWITCHER_TV: string = '#switcher-tv';
  
  let offTimeline: gsap.core.Timeline;
  let onTimeline: gsap.core.Timeline;
  
  
  /**
   * Builds the timeline for turning on and off the screen element.
   *
   * @returns {void}
   */
  onTimeline = gsap.timeline({
    paused: false
  })

  onTimeline
  .to(SELECTOR_SCREEN_ELEMENT, {
    duration: .01,
    width: '0',
    height: '0',
    background: '#000000',
  })
  .to(SELECTOR_SCREEN_ELEMENT, {
    duration: .2,
    width: '93vw',
    height: '2px',
    background: '#ffffff',
    ease: Power2.easeOut})
  .to(SELECTOR_SCREEN_ELEMENT, {
    duration: .2,
    width: '93vw',
    height: '87.5vh',
    background: '#000000',
    ease: Power2.easeOut
  })

    offTimeline = gsap.timeline({
      paused: true
    });
    
    offTimeline
    .to(SELECTOR_SCREEN_ELEMENT, {
      duration: .2,
      width: '93vw',
      height: '2px',
      background: '#ffffff',
      ease: Power2.easeOut
    })
    .to(SELECTOR_SCREEN_ELEMENT, {
      duration: .2,
      width: '0',
      height: '0',
      background: '#ffffff'
    });
  
  
  /**
   * Toggles the switcher TV to turn on or off the screen element.
   *
   * @returns {void}
   */
  function toggleSwitcherTV(): void {
    if (isTurnedOn) {
     offTimeline.restart();
    }
    
    if (!isTurnedOn) {
      offTimeline.reverse();
    }
    
    isTurnedOn = !isTurnedOn;

  }
  
  
  // Bindings
  $(document).on('click', SELECTOR_SWITCHER_TV, function() {
    toggleSwitcherTV();

  });
}

export default screenOn