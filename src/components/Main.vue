<template>
  <main id="main">
    <section class="intro">
      <h2>{{ magicStrings[0].h2.first }}</h2>
      <p>{{ magicStrings[0].intro.description }}</p>
    </section>
    <section class="my-face"></section>
  </main>
  <div id="cv">

    <section class="skills-section">
      <h2>{{ magicStrings[0].h2.third }}</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <ul>
            <li>{{ magicStrings[0].skills.description }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="education-section">
      <h2>{{ magicStrings[0].h2.fourth }}</h2>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.excel.title }}</h3>
        <p class="location">{{ magicStrings[0].education.excel.location }}</p>
        <p class="date">{{ magicStrings[0].education.excel.date }}</p>
      </div>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.boolean.title }}</h3>
        <p>{{ magicStrings[0].education.boolean.description1 }}</p>
      </div>
      <div class="education-item">
        <h3>{{ magicStrings[0].education.diploma.title }}</h3>
        <br />
        <p class="description">
          {{ magicStrings[0].education.diploma.description }}
        </p>
      </div>
    </section>

    <section class="experience-section">
      <h2>{{ magicStrings[0].h2.fifth }}</h2>
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
              "Hi, I'm Emilian. My favorite tech language is CSS. I'm passionate about the entire world of web development, particularly front-end. I love the world of web development—it's my favorite hobby, and it's what keeps me going. Every website is like a piece of art waiting to be discovered. Every animation, every color, every font. Every detail matters, which is why I try not to rely too heavily on frameworks (even though I know them). That said:",
          },
          skills: {
            description: `Semantic HTML TAGS / Advanced Styling / Responsive Design / Querying / Vue.js / React.js / Curiosity /
              Object Oriented Program (OOP) / React (Redux Toolkit) / Bootstrap / Git / Cypress / Microsoft Access /
              Advanced Excel / search engine optimisation / UI/UX / Debugging & Troubleshooting / Critical Thinking &
              Problem Solving / CRM / Sales / DOM Manipulation`
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
                `This intensive course served as a powerful skills accelerator, transforming me into a true web craftsman. Through its
                hands-on approach, I learned to create dynamic, responsive web applications while mastering the art of writing clean
                code in HTML, CSS, SCSS, and JavaScript.
                The experience blended theory and practice in an impactful way: I designed compelling, intuitive user interfaces
                while refining UI/UX design principles and SEO strategies to ensure projects not only stood out visually but also
                achieved strong online visibility. The program provided complete immersion in cutting-edge tools and frameworks
                like Bootstrap and Vue.js, enabling me to build flexible, modular layouts. Through Git version control, I developed
                essential skills for effective collaboration and maintaining top-tier code quality.
                With its innovation-driven approach and emphasis on problem-solving, this training ignited the confidence I needed
                to tackle challenges in modern web development, making my profile more competitive and success-oriented.`
            },
            diploma: {
              title:
                "Diploma in Administration, Finance, and Marketing Specialization in Business Information Systems",
              description: `This educational program marked my first concrete introduction to the intersection of business and technology.
                While providing a strong foundation in business disciplines like accounting, marketing, and financial management,
                the course stood out for its robust technical component in information systems through its Business Information
                Systems specialization.
                During my studies, I developed practical skills in SQL and Microsoft Access, learning to design and manage relational
                databases for business data organization and analysis. I also gained fundamental knowledge of HTML, CSS, and
                JavaScript, which laid the groundwork for my subsequent passion for web development. The program further helped me cultivate a logical, problem-solving                 approach - essential for addressing complex
                business scenarios with digital tools.
                This experience served as the spark: it began my transformation from student to developer, blending methodology,
                precision, and an ever-growing thirst for innovation.`
            },
          },
          experience: {
            photoSeller: {
              title: "Photo Seller",
              company: "Foto di Alex Lo Votrico - City: Bari - Country: Italy",
              details: "July 2016 – December 2024",
              responsibilities: [
                `In this role, I operated in a highly competitive environment where mastering advanced sales techniques and
                negotiation strategies was critical to differentiating our offerings in the market.
                I leveraged photography skills to enhance the aesthetic quality of products, tailoring the visual style to appeal to
                circus and exhibition audiences who value originality and visual impact. I managed the sale and promotion of
                photographs at events and performances, emphasizing strong communication, visual storytelling, and personalized
                solutions to meet the demands of discerning clients.
                Additionally, I applied market research and competitor analysis techniques to refine sales strategies in a fast-paced
                and ever-evolving environment.`
              ],
            },
            aiesec: {
              title: "Team Leader Sales",
              company: "AIESEC Country: Italy",
              details: "March 2017 – March 2018",
              responsibilities: [
                `During my volunteer experience with AIESEC, I led a team of four sales representatives promoting volunteer projects
                in schools within a competitive environment that required continuous refinement of sales strategies.
                In addition to mentoring junior sales team members, I implemented CRM systems for external clients – essential
                tools for tracking sales progress, analyzing customer volume and availability, and enabling timely, targeted
                interventions. Concurrently, I managed team performance monitoring through Excel, setting clear objectives and
                implementing data-driven strategies informed by feedback to ensure consistent performance improvement.
                This experience, which combined sales dynamics with rigorous data analysis, allowed me to refine my leadership,
                problem-solving, and results-driven approach – critical competencies for operating effectively in rapidly evolving
                market environments.`
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
