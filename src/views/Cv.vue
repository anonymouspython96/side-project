<template>
  <div id="cv">
    <section>
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

    <section>
      <h2>Skills</h2>
      <dl>
        <dt>Front-End Technologies:</dt>
        <dd>HTML, CSS, JavaScript</dd>

        <dt>Frameworks/Libraries:</dt>
        <dd>React, Vue.js, Bootstrap</dd>

        <dt>Version Control:</dt>
        <dd>Git, GitHub</dd>

        <dt>Web Development:</dt>
        <dd>
          Responsive Design, Cross-Browser Compatibility, Debugging, Testing
          (Jest, Cypress)
        </dd>

        <dt>Tools:</dt>
        <dd>VS Code, Chrome DevTools</dd>

        <dt>Other:</dt>
        <dd>Problem-solving, Communication, Teamwork</dd>
      </dl>
    </section>

    <section>
      <h2>Education</h2>
      <p><strong>Private School</strong></p>
      <p>First Tech Academy (Boolean - Italy), Turin, Italy</p>
      <p>Graduated: July 2024</p>
    </section>

    <section>
      <h2>Professional Experience</h2>
      <div>
        <h3>Junior Front-End Web Developer</h3>
        <p>WeGlad · Apprenticeship | Turin, Piedmont, Italy (Remote)</p>
        <p>August 2024 - September 2024 (2 months)</p>
        <ul>
          <li>
            Developed and optimized responsive user interfaces using media
            queries to ensure consistent display across various screen sizes
          </li>
          <li>
            Designed and implemented content positioning and layout, adhering to
            best UI/UX practices
          </li>
          <li>
            Utilized React.js and Redux for efficient state management and
            component-based architecture
          </li>
          <li>
            Worked with SCSS and HTML for styling and structuring web pages
          </li>
          <li>
            Resolved issues related to magic strings and numbers, improving code
            readability
          </li>
          <li>
            Conducted Cypress testing to ensure functionality across multiple
            devices
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Projects</h2>
      <div>
        <h3>Personal Portfolio Website</h3>
        <ul>
          <li>
            Built using HTML, CSS, JavaScript, and Vue.js to showcase
            development skills
          </li>
          <li>Integrated responsive design for cross-device compatibility</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li>English (Fluent)</li>
        <li>Italian (Fluent)</li>
        <li>Romanian (Fluent)</li>
      </ul>
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
* {
  background-color: var(--color-lgrey);
  color: var(--color-bagrey);
}
#cv {
  font-size: 1.4rem;
}

section {
  padding: 24px 48px;
}
h2 {
  padding: 8px 0;
}
p,
li,
dt,
dd,
h3 {
  padding: 8px 0;
}
li {
  list-style: none;
}
dt {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
