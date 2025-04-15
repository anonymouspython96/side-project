<template>
  <article id="contacts" class="contacts-container">
    <div class="contacts-content">
      <h2 class="contact-title">Get In Touch</h2>
      <p class="contact-subtitle">Feel free to reach out through any of these channels</p>
      
      <div class="contact-methods">
        <section class="contact-card" v-for="contact in contacts" :key="contact.id">
          <a
            :href="contact.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="contact.ariaLabel"
            class="contact-link"
          >
            <i :class="contact.icon"></i>
            <span class="contact-label">{{ contact.label }}</span>
          </a>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      contacts: [
        {
          id: 1,
          icon: "fa-regular fa-envelope",
          url: "mailto:emilianmail96@gmail.com",
          label: "Email Me",
          ariaLabel: "Send email to Emilian"
        },
        {
          id: 2,
          icon: "fa-brands fa-linkedin-in",
          url: "https://www.linkedin.com/in/timofeiemilian96/",
          label: "LinkedIn",
          ariaLabel: "Visit Emilian's LinkedIn profile"
        },
        {
          id: 3,
          icon: "fa-brands fa-github",
          url: "https://github.com/anonymouspython96",
          label: "GitHub",
          ariaLabel: "Visit Emilian's GitHub profile"
        },
        {
          id: 4,
          icon: "fa-brands fa-whatsapp",
          url: "https://wa.me/+393508324707", // Replace with actual WhatsApp number
          label: "WhatsApp",
          ariaLabel: "Chat with Emilian on WhatsApp"
        }
      ]
    };
  }
};
</script>

<style scoped>
.contacts-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  padding: 2rem;
}

.contacts-content {
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.contact-title {
  font-size: 3rem;
  color: var(--color-red);
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.5rem;
  color: var(--color-dark-gray);
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
}

.contact-card {
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
}

.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--color-black);
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--color-light-gray);
  width: 200px;
  height: 200px;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-link:hover {
  background-color: var(--color-red);
  color: var(--color-white);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.contact-link i {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.contact-link:hover i {
  transform: scale(1.1);
}

.contact-label {
  font-size: 1.2rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-methods {
    gap: 2rem;
  }
  
  .contact-link {
    width: 150px;
    height: 150px;
    padding: 1.5rem;
  }
  
  .contact-link i {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .contact-title {
    font-size: 2.5rem;
  }
  
  .contact-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .contact-methods {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }
  
  .contact-link {
  width: 150px;
  height: 150px;
  max-width: none;
  flex-direction: column;
}
  
  .contact-link i {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .contact-label {
    white-space: nowrap; /* Previene il testo a capo */
    font-size: 1rem; /* Riduci dimensione testo se necessario */
  }
}
</style>