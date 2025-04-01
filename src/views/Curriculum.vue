<template>
  <div id="cv">
    <section class="summary-section">
      <h2>Professional Summary</h2>
      <p>
        A passionate and highly motivated Junior Front-End Developer with
        expertise in HTML, CSS, JavaScript, Vue.js, React, and modern JavaScript
        frameworks. Experienced in developing responsive and user-friendly
        websites, collaborating in team environments, and utilizing best
        practices for web design and performance optimization. Seeking a
        challenging role to leverage my skills and grow within a dynamic and
        innovative company.
      </p>
    </section>

    <section class="skills-section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Front-End Technologies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3/Sass</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3>Frameworks/Libraries</h3>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3>Tools & Methods</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>VS Code</li>
            <li>Responsive Design</li>
            <li>Jest/Cypress</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="education-section">
      <h2>Education</h2>
      <div class="education-item">
        <h3>First Tech Academy (Boolean - Italy)</h3>
        <p class="location">Turin, Italy</p>
        <p class="date">Graduated: July 2024</p>
        <p class="description">Full-stack web development intensive program</p>
      </div>
    </section>

    <section class="experience-section">
      <h2>Professional Experience</h2>
      <div class="job">
        <div class="job-header">
          <h3>Junior Front-End Developer</h3>
          <p class="company">WeGlad</p>
          <p class="job-details">Apprenticeship | Remote | August 2024 - September 2024</p>
        </div>
        <ul class="job-responsibilities">
          <li>
            <i class="fas fa-code"></i>
            Developed responsive interfaces using media queries and modern CSS
          </li>
          <li>
            <i class="fas fa-paint-brush"></i>
            Implemented UI/UX best practices for content layout and positioning
          </li>
          <li>
            <i class="fas fa-cogs"></i>
            Utilized React.js and Redux for state management
          </li>
          <li>
            <i class="fas fa-bug"></i>
            Improved code quality by resolving magic strings/numbers issues
          </li>
          <li>
            <i class="fas fa-mobile-alt"></i>
            Conducted cross-device testing with Cypress
          </li>
        </ul>
      </div>
    </section>

    <section class="projects-section">
      <h2>Projects</h2>
      <div class="project">
        <h3>Personal Portfolio Website</h3>
        <ul>
          <li>
            <i class="fas fa-laptop-code"></i>
            Built with Vue.js, HTML5, and CSS3 to showcase development skills
          </li>
          <li>
            <i class="fas fa-mobile"></i>
            Fully responsive design for all device sizes
          </li>
        </ul>
      </div>
    </section>

    <section class="languages-section">
      <h2>Languages</h2>
      <div class="language-list">
        <div class="language">
          <span class="flag-icon">🇬🇧</span>
          <span>English (Fluent)</span>
        </div>
        <div class="language">
          <span class="flag-icon">🇮🇹</span>
          <span>Italian (Fluent)</span>
        </div>
        <div class="language">
          <span class="flag-icon">🇷🇴</span>
          <span>Romanian (Fluent)</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "../assets/main.css";
export default {
  name: "About",
};
</script>

<style scoped>
#cv {
  background-color: var(--color-white);
  color: var(--color-black);
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  color: var(--color-red);
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-light-gray);
}

h3 {
  color: var(--color-dark-gray);
  font-size: 1.6rem;
  margin: 1.2rem 0;
}

section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background-color: var(--color-white);
  border-radius: 6px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: var(--color-light-gray);
  padding: 1.5rem;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.job, .project, .education-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--color-light-gray);
  border-radius: 6px;
}

.job-header {
  margin-bottom: 1.2rem;
}

.company {
  font-weight: bold;
  color: var(--color-dark-gray);
}

.job-details {
  font-style: italic;
  color: var(--color-medium-gray);
}

ul {
  padding-left: 1.5rem;
}

li {
  list-style-type: none;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  display: flex;
  align-items: center;
}

li i {
  position: absolute;
  left: 0;
  color: var(--color-red);
  width: 1.5rem;
  text-align: center;
}

.language-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.language {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: var(--color-light-gray);
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
}

.flag-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  #cv {
    padding: 20px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.8rem;
  }
  
  h3 {
    font-size: 1.4rem;
  }
  
  .language-list {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>