<template>
  <footer id="footer">
    <article class="social-links">
      <section>
        <a
          href="mailto:emilianmail96@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Invia email"
        >
          <i class="fa-regular fa-envelope"></i>
          <span class="sr-only">Email</span>
        </a>
      </section>
      <section>
        <a 
          href="https://www.linkedin.com/in/timofeiemilian96/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fa-brands fa-linkedin-in"></i>
          <span class="sr-only">LinkedIn</span>
        </a>
      </section>
      <section>
        <a 
          href="https://github.com/anonymouspython96" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fa-brands fa-github"></i>
          <span class="sr-only">GitHub</span>
        </a>
      </section>
    </article>
    <article class="legal-info">
      <p>&copy; Copyright Emilian Timofei 2025. All rights reserved.</p>
      <p><a href="#" aria-label="Privacy Policy">Privacy Policy</a></p>
      <p><a href="#" aria-label="Terms and Conditions">Terms & Conditions</a></p>
    </article>
  </footer>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100%;
  padding: 32px;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-top: 2px solid var(--color-red);
}

.social-links {
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.social-links section {
  transition: transform 0.3s ease;
}

.social-links section:hover {
  transform: translateY(-5px);
}

.legal-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 48px;
  color: var(--color-white);
  max-width: 1200px;
  text-align: center;
}

p {
  margin: 0;
  color: var(--color-gblack);
}

a {
  text-decoration: none;
  color: var(--color-gblack);
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

a:hover {
  color: var(--color-red);
}

i {
  font-size: 2.4rem;
  color: var(--color-white);
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover i {
  color: var(--color-red);
  transform: scale(1.1);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Media Queries */
@media (max-width: 879px) {
  footer {
    padding: 24px;
    gap: 24px;
  }
  
  .social-links {
    gap: 32px;
  }
  
  i {
    font-size: 2rem;
  }
}

@media (max-width: 549px) {
  footer {
    padding: 16px;
  }
  
  .social-links {
    gap: 24px;
  }
  
  .legal-info {
    flex-direction: column;
    gap: 12px;
  }
  
  i {
    font-size: 1.8rem;
  }
}
</style>