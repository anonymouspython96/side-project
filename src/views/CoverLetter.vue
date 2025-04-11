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

      <section
        class="paragraph"
        v-for="(para, index) in paragraphs"
        :key="index"
      >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        {
          icon: "fa-user-tie",
          text: "I am writing to express my interest in the Junior Front-End Developer position at your company. With a solid foundation in web development, a certification from First Tech Academy (Boolean - Italy), and hands-on experience in real-world projects, I am eager to bring my skills, curiosity, and problem-solving mindset to a team that values innovation and growth.",
        },
        {
          icon: "fa-briefcase",
          text: "My recent experience at WeGlad allowed me to contribute to the development of responsive and accessible user interfaces using React.js and Vue.js. Working in cross-functional teams, I focused on performance optimization, UI/UX improvements, and maintaining clean, scalable code. This experience strengthened my ability to transform design ideas into intuitive digital experiences.",
        },
        {
          icon: "fa-code",
          text: "I’ve also built a variety of personal projects — including a portfolio website using Vue.js — where I emphasized responsiveness, accessibility, and maintainability. You can view more of my work and code samples on my GitHub.",
        },
        {
          icon: "fa-rocket",
          text: "What drives me is the opportunity to continuously learn and build things that have real impact. I’m especially motivated to work in environments that invest in junior developers, offer mentorship, and encourage experimentation. I believe that growing developers grow great products. Thank you for considering my application. I look forward to the opportunity to contribute to your team and learn alongside experienced professionals.",
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
