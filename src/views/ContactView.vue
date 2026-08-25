<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const statusMessage = ref({ text: '', type: '' });

const submitForm = async () => {
  isSubmitting.value = true;
  statusMessage.value = { text: 'Sending...', type: 'loading' };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });

    const data = await response.json();

    if (data.success) {
      statusMessage.value = { text: data.message, type: 'success' };
      form.value = { name: '', email: '', subject: '', message: '' };
    } else {
      statusMessage.value = { text: data.message || 'Something went wrong.', type: 'error' };
    }
  } catch (error) {
    statusMessage.value = { text: 'Network error. Please try again later.', type: 'error' };
  } finally {
    isSubmitting.value = false;
    
    setTimeout(() => {
      if (statusMessage.value.type === 'success') {
        statusMessage.value = { text: '', type: '' };
      }
    }, 6000);
  }
};
</script>

<template>
  <div class="contact-page-wrapper">
    <section class="contact-hero-model">
      <div class="container">
        <div class="section-header-model text-center">
           <span class="model-overline">CONTACT US</span>
           <h1 class="page-title-model animate-fade-in">Let's Talk About Your Next Project</h1>
           <p class="section-desc-model animate-fade-in">
             Ready to elevate your digital presence? Reach out to our team of experts and let's build something extraordinary together.
           </p>
        </div>
      </div>
    </section>

    <section class="contact-content-model">
      <div class="container">
        <div class="contact-form-wrapper animate-fade-in">
          <div class="contact-form-box">
            <h3>Get in Touch</h3>
            
            <div v-if="statusMessage.text" :class="['status-alert', statusMessage.type]">
              {{ statusMessage.text }}
            </div>

            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <input type="text" v-model="form.name" placeholder="Your Name" class="contact-input" required :disabled="isSubmitting" />
                <input type="email" v-model="form.email" placeholder="Your Email" class="contact-input" required :disabled="isSubmitting" />
              </div>
              <input type="text" v-model="form.subject" placeholder="Subject" class="contact-input" required :disabled="isSubmitting" />
              <textarea v-model="form.message" placeholder="Your Message" class="contact-textarea" rows="5" required :disabled="isSubmitting"></textarea>
              <button type="submit" class="contact-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page-wrapper {
  background-color: #fff;
  min-height: 100vh;
}

.contact-hero-model {
  background-color: #17181c;
  padding: 150px 0 4rem;
}

.contact-content-model {
  background-color: #fff;
  padding: 4rem 0 8rem;
}

.section-header-model {
    margin-bottom: 4rem;
}

.model-overline {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 1rem;
}

.page-title-model {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -1px;
}

.section-desc-model {
  font-size: 1.15rem;
  color: #d1d5db;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.contact-form-wrapper {
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-form-box {
  background-color: #fff;
  padding: 3rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.contact-form-box h3 {
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 2rem;
  font-weight: 600;
}

.status-alert {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  font-weight: 500;
}
.status-alert.loading {
  background-color: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
}
.status-alert.success {
  background-color: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}
.status-alert.error {
  background-color: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.contact-input, .contact-textarea {
  width: 100%;
  border: 1px solid #d1d5db;
  background: #f8fafc;
  padding: 1.25rem;
  font-size: 1rem;
  color: #111827;
  border-radius: 6px;
  outline: none;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.contact-input:focus, .contact-textarea:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: #fff;
}

.contact-input:disabled, .contact-textarea:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-textarea {
  resize: vertical;
}

.contact-btn {
  background-color: #111827;
  color: #fff;
  border: 1px solid #111827;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.contact-btn:hover:not(:disabled) {
  background-color: #6366f1;
  border-color: #6366f1;
}

.contact-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-hero-model {
    padding: 100px 1rem 3rem;
  }
  .page-title-model {
    font-size: 2.5rem;
  }
  .contact-form-box {
    padding: 1.5rem;
  }
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .contact-input, .contact-textarea {
    padding: 1rem;
  }
  .contact-btn {
    width: 100%;
    align-self: center;
    padding: 1rem;
  }
}
</style>
