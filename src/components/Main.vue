<template>
  <main id="main">
    <section class="intro">
      <h2>{{ magicStrings[0].h2.first }}</h2>
      <p>{{ magicStrings[0].intro.description }}</p>
    </section>
    <section class="my-face"></section>
  </main>
  <div id="cv">
    <section class="summary-section">
      <h2>{{ magicStrings[0].h2.second }}</h2>
      <p>{{ magicStrings[0].summary.description }}</p>
    </section>

    <section class="skills-section">
      <h2>{{ magicStrings[0].h2.third }}</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <ul>
            <li>{{ magicStrings[0].skills.metadata }}</li>
            <li>{{ magicStrings[0].skills.computationalThinking }}</li>
            <li>{{ magicStrings[0].skills.problemSolving }}</li>
            <li>{{ magicStrings[0].skills.github }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="education-section">
      <h2>{{ magicStrings[0].h2.fourth }}</h2>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.excel.title }}</h3>
        <p>{{ magicStrings[0].education.excel.subject }}</p>
        <br />
        <p class="location">{{ magicStrings[0].education.excel.location }}</p>
        <p class="date">{{ magicStrings[0].education.excel.date }}</p>
      </div>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.boolean.title }}</h3>
        <p>{{ magicStrings[0].education.boolean.description1 }}</p>
        <p>{{ magicStrings[0].education.boolean.description2 }}</p>
        <p>{{ magicStrings[0].education.boolean.description3 }}</p>
        <p>{{ magicStrings[0].education.boolean.description4 }}</p>
        <p>{{ magicStrings[0].education.boolean.description5 }}</p>
        <p>{{ magicStrings[0].education.boolean.description6 }}</p>
        <hr />
        <p class="location">{{ magicStrings[0].education.boolean.location }}</p>
        <p class="date">{{ magicStrings[0].education.boolean.date }}</p>
      </div>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.diploma.title }}</h3>
        <br />
        <p class="description">
          {{ magicStrings[0].education.diploma.description }}
        </p>
        <p class="location">{{ magicStrings[0].education.diploma.location }}</p>
        <p class="date">{{ magicStrings[0].education.diploma.date }}</p>
      </div>
    </section>

    <section class="experience-section">
      <h2>{{ magicStrings[0].h2.fifth }}</h2>
      <div class="job">
        <div class="job-header">
          <h3>{{ magicStrings[0].experience.weglad.title }}</h3>
          <p class="company">{{ magicStrings[0].experience.weglad.company }}</p>
          <p class="job-details">
            {{ magicStrings[0].experience.weglad.details }}
          </p>
        </div>
        <ul class="job-responsibilities">
          <li
            v-for="responsibility in magicStrings[0].experience.weglad
              .responsibilities"
            :key="responsibility"
          >
            <i class="fas fa-code"></i>
            {{ responsibility }}
          </li>
        </ul>
      </div>
      <div class="job">
        <div class="job-header">
          <h3>{{ magicStrings[0].experience.photoSeller.title }}</h3>
          <p class="company">
            {{ magicStrings[0].experience.photoSeller.company }}
          </p>
          <p class="job-details">
            {{ magicStrings[0].experience.photoSeller.details }}
          </p>
        </div>
        <ul class="job-responsibilities">
          <li
            v-for="responsibility in magicStrings[0].experience.photoSeller
              .responsibilities"
            :key="responsibility"
          >
            <i class="fa-solid fa-money-bill-wave"></i>
            {{ responsibility }}
          </li>
        </ul>
      </div>
      <div class="job">
        <div class="job-header">
          <h3>{{ magicStrings[0].experience.aiesec.title }}</h3>
          <p class="company">{{ magicStrings[0].experience.aiesec.company }}</p>
          <p class="job-details">
            {{ magicStrings[0].experience.aiesec.details }}
          </p>
        </div>
        <ul class="job-responsibilities">
          <li
            v-for="responsibility in magicStrings[0].experience.aiesec
              .responsibilities"
            :key="responsibility"
          >
            <i class="fa-solid fa-people-group"></i>
            {{ responsibility }}
          </li>
        </ul>
      </div>
    </section>

    <section class="projects-section">
      <h2>{{ magicStrings[0].h2.sixth }}</h2>
      <div class="project">
        <h3>{{ magicStrings[0].projects.portfolio.title }}</h3>
        <ul>
          <li
            v-for="detail in magicStrings[0].projects.portfolio.details"
            :key="detail"
          >
            <i
              :class="
                detail.includes('Vue.js')
                  ? 'fas fa-laptop-code'
                  : 'fas fa-mobile'
              "
            ></i>
            {{ detail }}
          </li>
        </ul>
      </div>
    </section>

    <section class="languages-section">
      <h2>{{ magicStrings[0].h2.seventh }}</h2>
      <div class="language-list">
        <div class="language">
          <span class="flag-icon">🇬🇧</span>
          <span>{{ magicStrings[0].languages.english }}</span>
        </div>
        <div class="language">
          <span class="flag-icon">🇮🇹</span>
          <span>{{ magicStrings[0].languages.italian }}</span>
        </div>
        <div class="language">
          <span class="flag-icon">🇷🇴</span>
          <span>{{ magicStrings[0].languages.romanian }}</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "../assets/main.css";
export default {
  data() {
    return {
      magicStrings: [
        {
          h2: {
            first: "Who I am",
            second: "Professional Summary",
            third: "Skills",
            fourth: "Education",
            fifth: "Professional Experience",
            sixth: "Project",
            seventh: "Languages",
          },
          intro: {
            description:
              "Hi, I'm Emilian. My favorite tech language is JavaScript. I'm passionate about the entire world of web development, particularly front-end. I love the world of web development—it's my favorite hobby, and it's what keeps me going. Every website is like a piece of art waiting to be discovered. Every animation, every color, every font. Every detail matters, which is why I try not to rely too heavily on frameworks (even though I know them). That said:",
          },
          summary: {
            description:
              "A passionate and highly motivated Junior Front-End Developer with expertise in HTML, CSS, JavaScript, Vue.js, React, and modern JavaScript frameworks. Experienced in developing responsive and user-friendly websites, collaborating in team environments, and utilizing best practices for web design and performance optimization. Seeking a challenging role to leverage my skills and grow within a dynamic and innovative company.",
          },
          skills: {
            metadata: "Metadata",
            computationalThinking: "Computational thinking",
            problemSolving: "Problem solving",
            github:
              "GitHub profile with the source code of my website: https://github.com/anonymouspython96",
          },
          education: {
            excel: {
              title: "Microsoft Office Specialist: Excel Certification",
              subject: "Excel",
              location: "Italy",
              date: "Graduated: September 2024",
            },
            boolean: {
              title: "First Tech Academy (Boolean - Italy)",
              description1:
                "Creation of dynamic and responsive web applications",
              description2: "Acquired skills in HTML, CSS, SCSS, JS",
              description3: "UI/UX design",
              description4: "SEO",
              description5: "BOOTSTRAP, Vue.js",
              description6: "Code control via GIT",
              location: "Italy",
              date: "Graduated: July 2024",
            },
            diploma: {
              title:
                "Diploma in Administration, Finance, and Marketing Specialization in Business Information Systems",
              description: "Istituto Germano Sommellier",
              location: "Italy",
              date: "July 2017",
            },
          },
          experience: {
            weglad: {
              title: "Front End Web Developer (Remote)",
              company: "WeGlad - Country: Italy",
              details: "August 2024 - September 2024",
              responsibilities: [
                "Responsive development of the WeGlad application and its components",
                "Design and content creation",
                "UI/UX",
                "SEO practices",
                "Use of React.js and Redux",
                "SCSS, HTML5, JS",
                "BOOTSTRAP",
                "Resolving issues related to magic strings and magic numbers",
                "Testing using the Cypress method",
              ],
            },
            photoSeller: {
              title: "Photo Seller",
              company: "Foto di Alex Lo Votrico - City: Bari - Country: Italy",
              details: "July 2016 – December 2024",
              responsibilities: [
                "Sale of photographs",
                "Client negotiation",
                "Strategies to maximize profits",
                "Distribution of high-quality photos during events",
              ],
            },
            aiesec: {
              title: "Team Leader Sales",
              company: "AIESEC Country: Italy",
              details: "March 2017 – March 2018",
              responsibilities: [
                "Managed a team of 4 sales members",
                "Sold volunteering projects to schools",
                "Mentored junior salespeople",
                "Team activities managed via CRM",
                "Monitored team performance",
              ],
            },
          },
          projects: {
            portfolio: {
              title: "Personal Portfolio Website (side-project)",
              details: [
                "Built with Vue.js, HTML5, CSS3 and JavaScript to showcase development skills",
                "Fully responsive design for all device sizes",
              ],
            },
          },
          languages: {
            english: "English (Fluent)",
            italian: "Italian (Fluent)",
            romanian: "Romanian (Fluent)",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  padding: 48px 96px;
  background-color: var(--color-white);
  color: var(--color-black);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro h2 {
  font-size: 3rem;
  color: var(--color-red);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.intro h2::after {
  content: "";
  display: block;
  width: 100px;
  height: 4px;
  background: var(--color-red);
  margin: 1rem auto;
}

.intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;
}

.my-face {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 3rem auto;
  border: 5px solid var(--color-red);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  background-image: url("../assets/img/me.jpg");
  background-size: cover;
  background-position: center -80px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

hr {
  width: 50%;
  margin: 1rem 0;
}

.my-face:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}
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
  padding: 1.5rem 0;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.job,
.project,
.education-item {
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

.skill-category li {
  padding: 0;
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

@media (max-width: 1082px) {
  .my-face {
    width: 220px;
    height: 220px;
    background-position: center -60px;
  }
  main {
    padding: 48px;
  }

  .intro h2 {
    font-size: 2.5rem;
  }
}

@media (max-width: 879px) {
  .my-face {
    width: 180px;
    height: 180px;
    background-position: center -60px;
  }
  main {
    padding: 32px;
  }

  .intro {
    padding: 1rem;
  }

  .intro h2 {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1.1rem;
  }
}

@media (max-width: 549px) {
  .my-face {
    width: 180px;
    height: 180px;
    background-position: center -60px;
  }
  main {
    padding: 24px 16px;
  }

  .intro h2 {
    font-size: 1.8rem;
  }

  .intro p {
    font-size: 1rem;
    text-align: left;
  }

  .my-face {
    width: 150px;
    height: 150px;
    border-width: 3px;
  }
}

@media (max-width: 375px) {
  .my-face {
    width: 125px;
    height: 125px;
    background-position: center -40px;
    background-size: 110% auto;
  }
}
</style>
