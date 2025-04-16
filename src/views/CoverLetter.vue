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

      <section
        class="paragraph"
        v-for="(para, index) in paragraphs"
        :key="index"
      >
        <i class="paragraph-icon fas" :class="para.icon"></i>
        <p>{{ para.text }}</p>
      </section>

      <section class="closing">
        <h3>{{ otherMagicStrings[0].firstH3 }}</h3>
        <div class="signature">
          <i class="fas fa-pen-nib"></i>
          <h3>{{ otherMagicStrings[0].secondH3 }}</h3>
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
          secondH3: "Timofei Emilian"
        }
      ],
      paragraphs: [
        {
          icon: "fa-user-tie",
          text: "I am excited to apply for the Junior Front-End Developer position at your company, where I aim to leverage my robust technical foundation in web development, certified training from First Tech Academy (Boolean - Italy), and hands-on project experience to contribute to a team passionate about crafting innovative digital solutions.",
        },
        {
          icon: "fa-briefcase",
          text: "During my tenure at WeGlad, I honed my expertise in developing responsive, accessibility-first interfaces using React.js and Vue.js. Collaborating within agile, cross-functional teams, I prioritized performance optimization and UI/UX enhancements while ensuring code scalability and readability. This experience not only sharpened my technical execution but also deepened my commitment to transforming design concepts into intuitive, user-centric interfaces that align with business objectives.",
        },
        {
          icon: "fa-code",
          text: "Beyond professional work, I actively expand my skillset through self-driven projects. For example, I engineered a dynamic portfolio website using Vue.js, showcasing modern web principles like mobile-first responsiveness and semantic HTML5. My GitHub profile features detailed code repositories that highlight my dedication to writing clean, maintainable code and experimenting with emerging tools. What excites me most about this opportunity is the reputation for nurturing junior talent through mentorship and collaborative innovation. ",
        },
        {
          icon: "fa-rocket",
          text: "I thrive in environments where curiosity is rewarded, iteration is embraced, and developer growth is viewed as integral to product excellence. I’m particularly eager to contribute fresh perspectives to your team while learning from seasoned professionals who value both technical rigor and creative problem-solving.",
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
