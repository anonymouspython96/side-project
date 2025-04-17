<template>
  <div id="cl" class="cover-letter">
    <header class="letter-header">
      <h2>{{ otherMagicStrings[0].firstH2 }}</h2>
      <div class="contact-info">
        <p>
          <i class="fas fa-map-marker-alt"></i> {{ otherMagicStrings[0].p }}
        </p>
      </div>
    </header>

    <main class="letter-content">
      <section class="salutation">
        <h2>{{ otherMagicStrings[0].secondH2 }}</h2>
      </section>

      <section class="paragraph">
        <p>{{ paragraph[0].coverLetter }}</p>
      </section>

      <section class="closing">
        <h3>{{ otherMagicStrings[0].firstH3 }}</h3>
        <div class="signature">
          <i class="fas fa-pen-nib"></i>
          <h3><em>{{ otherMagicStrings[0].secondH3 }}</em></h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherMagicStrings: [
        {
          firstH2: "Cover Letter",
          p: "Turin, Italy",
          secondH2: "Dear Hiring Manager,",
          firstH3: "Sincerely,",
          secondH3: "Timofei Emilian",
        },
      ],
      paragraph: [
        {
          coverLetter: `I am excited to apply for the Front End Developer position at your company. I am a dynamic and
          results-driven developer with a strong background in creating responsive, SEO-optimized user
          interfaces, supported by advanced technical skills in React.js, Redux, HTML5, CSS, and JavaScript.
          During my recent internship as a Front End Developer at WeGlad, I contributed to the development
          of a web application using React.js and Redux Toolkit, focusing on intuitive UI/UX design and visual
          consistency. By leveraging tools like Cypress for automated testing, I ensured high performance and
          code maintainability while addressing technical challenges such as magic strings and magic
          numbers. This experience sharpened my debugging, problem-solving, and agile project management
          skills.
          Beyond technical expertise, I bring cross-functional experience from sales and leadership roles. As a
          Sales Team Leader at AIESEC, I coordinated a team of four, implementing CRM systems and data
          analysis to optimize sales strategies. This role strengthened my ability to work under pressure,
          communicate effectively, and adapt to fast-changing scenarios—skills I consider equally valuable in
          software development.
          My education includes an intensive Front End Development course at Boolean, where I mastered
          modern technologies like Vue.js, Bootstrap, and Git, and a Diploma in Business Information
          Systems, which laid the foundation for my passion for programming. My profile is further enhanced
          by an advanced Excel certification and proficiency in tools like Cypress and SCSS.
          I am particularly motivated to join an innovative team where I can contribute creativity and technical
          rigor. Among my personal projects, I developed a CV website (built with Vue.js) and maintain an
          active GitHub profile, where I experiment with front-end solutions and best practices.
          I am available for an interview and look forward to your response.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.cover-letter {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--color-white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.letter-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-red);
  padding-bottom: 1rem;
}

.contact-info {
  font-size: 1.1rem;
}

.letter-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.paragraph {
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.paragraph-icon {
  color: var(--color-red);
  margin-top: 0.3rem;
  min-width: 1.5rem;
}

.signature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-links a {
  color: var(--color-dark-gray);
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--color-red);
}

@media (max-width: 768px) {
  .cover-letter {
    padding: 1.5rem;
    margin: 1rem;
  }

  .paragraph {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .contact-info {
    font-size: 1rem;
  }

  .letter-content {
    font-size: 1rem;
  }
}
</style>
