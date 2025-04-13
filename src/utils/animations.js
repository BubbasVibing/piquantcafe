/**
 * Animation utilities for scroll-triggered animations
 */

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});

// Main function to initialize scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animation-trigger');
  
  // Set up the intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add animation class when element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Optional: unobserve after animation is triggered
        // Uncomment this line if you want animations to happen only once
        // observer.unobserve(entry.target);
      } else {
        // Optional: remove the class if you want the animation to replay
        // when scrolling back into view
        // entry.target.classList.remove('animate');
      }
    });
  }, {
    threshold: 0.1,  // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -50px 0px'  // Adjust trigger point (negative means it triggers earlier)
  });
  
  // Observe all elements with animation-trigger class
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Export for use in other files
export { initScrollAnimations }; 