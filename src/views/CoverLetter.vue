<template>
  <div id="cl" class="cover-letter">
    <header class="letter-header">
      <h1>Timofei Emilian</h1>
      <div class="contact-info">
        <p>
          <i class="fas fa-map-marker-alt"></i> Turin, Italy |
          <a href="mailto:emilianmail96@gmail.com">
            <i class="fas fa-envelope"></i> emilianmail96@gmail.com
          </a>
        </p>
      </div>
    </header>

    <main class="letter-content">
      <section class="salutation">
        <h2>Dear Hiring Manager,</h2>
      </section>

      <section class="paragraph" v-for="(para, index) in paragraphs" :key="index">
        <i class="paragraph-icon fas" :class="para.icon"></i>
        <p>{{ para.text }}</p>
      </section>

      <section class="closing">
        <h3>Sincerely,</h3>
        <div class="signature">
          <i class="fas fa-pen-nib"></i>
          <h3>Timofei Emilian</h3>
        </div>
      </section>
    </main>

    <footer class="letter-footer">
      <div class="social-links">
        <a href="https://github.com/anonymouspython96" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/timofeiemilian96/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        {
          icon: 'fa-user-tie',
          text: "I am writing to express my interest in the Junior Front-End Web Developer position at Joinrs. With a background in web development, a Bachelor's degree in Computer Science from First Tech Academy (Boolean - Italy), and hands-on experience at WeGlad, I am eager to contribute to your team and grow within an innovative and supportive environment."
        },
        {
          icon: 'fa-briefcase',
          text: "During my time at WeGlad, I developed responsive interfaces using modern web technologies while collaborating with cross-functional teams. My work with React.js and Vue.js focused on creating user-centric solutions that followed best UI/UX practices, including performance optimization and technical debt reduction."
        },
        {
          icon: 'fa-code',
          text: "My portfolio demonstrates front-end development expertise through projects like my personal website built with Vue.js. I prioritize responsive design, accessibility, and performance optimization, with additional examples available on GitHub."
        },
        {
          icon: 'fa-rocket',
          text: "I'm drawn to Joinrs' commitment to nurturing junior talent through remote opportunities and mentorship. This aligns perfectly with my desire to grow in a supportive environment that values continuous learning."
        }
      ]
    };
  }
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