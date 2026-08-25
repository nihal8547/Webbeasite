<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Minus, CheckCircle, ArrowUpRight } from 'lucide-vue-next';
import heroBg from '@/assets/hero_bg.png';

// Client Logos
import logo1 from '@/assets/Logo  (1).png';
import logo2 from '@/assets/Logo  (2).png';
import logo3 from '@/assets/Logo  (3).png';
import logo4 from '@/assets/Logo  (4).png';
import logo5 from '@/assets/Logo  (5).png';
import logo6 from '@/assets/Logo  (6).png';
import logo7 from '@/assets/Logo  (7).png';

// Service Images
import imgDigital from '@/assets/service_digital_marketing_real.png';
import imgCustom from '@/assets/service_web_development_real.png';
import imgApp from '@/assets/service_app_development_real.png';
import imgERP from '@/assets/service_erp_system_real.png';
import imgEcom from '@/assets/service_ecommerce_real.png';
import imgCloud from '@/assets/service_cloud_real.png';

const activeAccordion = ref<number | null>(0);
const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="cinematic-hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${heroBg})` }">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container hero-container">
        <div class="hero-bottom-content">
          <h1 class="hero-title animate-fade-in">
            Qatar's Premier SEO &<br>Digital Marketing Agency
          </h1>
          <p class="hero-subtitle animate-fade-in" style="animation-delay: 0.2s;">
            Webbea specializes in high-performance Web Development, Custom ERPs, and Data-Driven SEO in Doha. We transform businesses with tailored digital solutions.
          </p>
          <div class="hero-actions animate-fade-in" style="animation-delay: 0.4s;">
            <router-link to="/contact" class="btn btn-solid-white">
              Book a Call <ArrowUpRight class="icon-sm-right" />
            </router-link>
            <router-link to="/work" class="btn btn-outline-white">
              View Case Studies
            </router-link>
          </div>
        </div>
        
        <div class="hero-bottom-bar">
          <span>Build with intention</span>
          <span>Scale with confidence</span>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-model section-padding">
      <div class="container">
        <div class="model-section-header">
            <span class="model-overline">SERVICES</span>
            <h2 class="model-section-title">Webbea Services Designed <br>for Real Business Outcomes</h2>
        </div>
        
        <div class="services-model-grid">
          <!-- Digital Marketing -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgDigital" alt="Digital Marketing" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">Digital Marketing</h3>
            </div>
            <p class="service-desc-outside">Dominate search results and engage your audience.</p>
            <ul class="service-model-list">
              <li>SEO & AEO Optimization</li>
              <li>Social Media Handling</li>
            </ul>
          </div>

          <!-- Custom Development -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgCustom" alt="Custom Development" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">Custom Development</h3>
            </div>
            <p class="service-desc-outside">Tailor-made websites and platforms built for scale.</p>
            <ul class="service-model-list">
              <li>Website Redesign & Features</li>
              <li>SPA & PWA Applications</li>
            </ul>
          </div>
          
          <!-- App Development -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgApp" alt="App Development" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">App Development</h3>
            </div>
            <p class="service-desc-outside">Seamless mobile experiences for iOS and Android.</p>
            <ul class="service-model-list">
              <li>Native & Cross-Platform</li>
              <li>App Store Optimization</li>
            </ul>
          </div>
          
          <!-- Custom ERP -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgERP" alt="Custom ERP" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">Custom ERP</h3>
            </div>
            <p class="service-desc-outside">Streamline operations with bespoke enterprise software.</p>
            <ul class="service-model-list">
              <li>HR, Payroll & CRM Systems</li>
              <li>Automated Workflows</li>
            </ul>
          </div>

          <!-- E-Commerce -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgEcom" alt="E-Commerce" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">E-Commerce</h3>
            </div>
            <p class="service-desc-outside">Turn visitors into loyal customers with optimized stores.</p>
            <ul class="service-model-list">
              <li>Payment Gateway Integration</li>
              <li>Cart Optimization & Inventory</li>
            </ul>
          </div>
          
          <!-- Cloud Services -->
          <div class="service-model-card">
            <div class="service-image-box">
              <img :src="imgCloud" alt="Cloud Services" />
              <div class="service-gradient"></div>
              <router-link to="/contact" class="service-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
              <h3 class="service-title-overlay">Cloud Services</h3>
            </div>
            <p class="service-desc-outside">Scalable cloud infrastructure for modern applications.</p>
            <ul class="service-model-list">
              <li>AWS/Azure/GCP Setup</li>
              <li>DevOps & CI/CD</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
    
    <!-- Valuable Clients Section -->
    <section class="clients-model">
      <div class="container-fluid">
        <div class="logos-ticker-model">
          <div class="ticker-track-model">
            <!-- First set of logos -->
            <div class="logo-item-model"><img :src="logo1" alt="Client 1" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo2" alt="Client 2" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo3" alt="Client 3" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo4" alt="Client 4" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo5" alt="Client 5" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo6" alt="Client 6" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo7" alt="Client 7" class="client-logo-model" /></div>
            
            <!-- Duplicated set for seamless loop -->
            <div class="logo-item-model"><img :src="logo1" alt="Client 1" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo2" alt="Client 2" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo3" alt="Client 3" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo4" alt="Client 4" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo5" alt="Client 5" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo6" alt="Client 6" class="client-logo-model" /></div>
            <div class="logo-item-model"><img :src="logo7" alt="Client 7" class="client-logo-model" /></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Us / Advantage (Model Accordion) -->
    <section class="advantage-model section-padding">
      <div class="container model-split-layout">
        <!-- Left Side: Title & CTA -->
        <div class="model-left-pane">
            <span class="model-overline">WHY CHOOSE WEBBEA?</span>
            <h2 class="model-section-title">The Webbea <br>Advantage</h2>
            
            <div class="model-cta-card">
              <div class="cta-card-content">
                <p class="cta-card-title">Ready to start your project?</p>
                <p class="cta-card-subtitle">Click to book a call.</p>
              </div>
              <router-link to="/contact" class="cta-arrow-btn">
                <ArrowUpRight class="icon-sm" />
              </router-link>
            </div>
        </div>

        <!-- Right Side: Accordion List -->
        <div class="model-right-pane">
          <div class="accordion-item" :class="{ active: activeAccordion === 0 }">
            <button class="accordion-header" @click="toggleAccordion(0)">
              <span>Modern Tech Stack</span>
              <Plus v-if="activeAccordion !== 0" class="accordion-icon" />
              <Minus v-else class="accordion-icon" />
            </button>
            <div class="accordion-content" v-show="activeAccordion === 0">
              <p>We use the most common and powerful technologies for all types of builds and custom additions, ensuring your project is future-proof and highly maintainable.</p>
            </div>
          </div>

          <div class="accordion-item" :class="{ active: activeAccordion === 1 }">
            <button class="accordion-header" @click="toggleAccordion(1)">
              <span>Lightning Fast Performance</span>
              <Plus v-if="activeAccordion !== 1" class="accordion-icon" />
              <Minus v-else class="accordion-icon" />
            </button>
            <div class="accordion-content" v-show="activeAccordion === 1">
              <p>Optimized for 100/100 Lighthouse scores and instant load times. We ensure your application performs brilliantly even under heavy traffic.</p>
            </div>
          </div>

          <div class="accordion-item" :class="{ active: activeAccordion === 2 }">
            <button class="accordion-header" @click="toggleAccordion(2)">
              <span>Enterprise Security</span>
              <Plus v-if="activeAccordion !== 2" class="accordion-icon" />
              <Minus v-else class="accordion-icon" />
            </button>
            <div class="accordion-content" v-show="activeAccordion === 2">
              <p>Bank-grade encryption and secure architecture by default. We protect your data and your users with the highest security standards in the industry.</p>
            </div>
          </div>

          <div class="accordion-item" :class="{ active: activeAccordion === 3 }">
            <button class="accordion-header" @click="toggleAccordion(3)">
              <span>Built to Scale</span>
              <Plus v-if="activeAccordion !== 3" class="accordion-icon" />
              <Minus v-else class="accordion-icon" />
            </button>
            <div class="accordion-content" v-show="activeAccordion === 3">
              <p>Architecture that grows with your user base, from startup to enterprise. Our solutions scale seamlessly as your business expands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Packages Section -->
    <section class="packages-model section-padding">
      <div class="container">
        <div class="model-section-header">
             <span class="model-overline">PRICING</span>
             <h2 class="model-section-title">Tailored Solutions</h2>
             <p class="model-section-desc">Flexible engagement models designed to fit your specific needs and budget.</p>
        </div>

        <div class="packages-grid-model">
           <!-- Starter -->
           <div class="package-card-model">
              <div class="pkg-header-model">
                  <div class="pkg-name-model">Starter</div>
                  <h3 class="pkg-title-model">Launch Pad</h3>
                  <p class="pkg-desc-model">Everything you need to establish a professional digital presence.</p>
              </div>
              <div class="pkg-divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="pkg-check-icon" /> UI/UX Design</li>
                <li><CheckCircle class="pkg-check-icon" /> Mobile Responsive</li>
                <li><CheckCircle class="pkg-check-icon" /> Search Engine Optimization</li>
                <li><CheckCircle class="pkg-check-icon" /> 1 Month Maintenance</li>
              </ul>
              <div class="pkg-footer-model">
                  <router-link to="/contact" class="btn-model-outline full-width">Request Quote</router-link>
              </div>
           </div>
           
           <!-- Professional -->
           <div class="package-card-model popular-model">
              <div class="popular-tag-model">Recommended</div>
              <div class="pkg-header-model">
                  <div class="pkg-name-model">Professional</div>
                  <h3 class="pkg-title-model">Business Growth</h3>
                  <p class="pkg-desc-model">Comprehensive solutions for businesses ready to scale up.</p>
              </div>
              <div class="pkg-divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="pkg-check-icon" /> Custom Web Application</li>
                <li><CheckCircle class="pkg-check-icon" /> Advanced Analytics Integration</li>
                <li><CheckCircle class="pkg-check-icon" /> Social Media Management</li>
                <li><CheckCircle class="pkg-check-icon" /> Content Management System</li>
                <li><CheckCircle class="pkg-check-icon" /> 3 Months Priority Support</li>
              </ul>
               <div class="pkg-footer-model">
                  <router-link to="/contact" class="btn-model-solid full-width">Start Project</router-link>
              </div>
           </div>
           
           <!-- Enterprise -->
           <div class="package-card-model">
              <div class="pkg-header-model">
                  <div class="pkg-name-model">Enterprise</div>
                  <h3 class="pkg-title-model">Digital Transformation</h3>
                  <p class="pkg-desc-model">Full-scale ecosystem development for complex organizations.</p>
              </div>
              <div class="pkg-divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="pkg-check-icon" /> Custom ERP & CRM Solutions</li>
                <li><CheckCircle class="pkg-check-icon" /> Native Mobile Apps (iOS/Android)</li>
                <li><CheckCircle class="pkg-check-icon" /> Dedicated Development Team</li>
                <li><CheckCircle class="pkg-check-icon" /> Cloud Infrastructure Setup</li>
                <li><CheckCircle class="pkg-check-icon" /> 24/7 SLA Support</li>
              </ul>
               <div class="pkg-footer-model">
                  <router-link to="/contact" class="btn-model-outline full-width">Contact Sales</router-link>
              </div>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Cinematic Hero */
.cinematic-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%);
  z-index: -1;
}

.hero-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  z-index: 1;
}

.hero-bottom-content {
  max-width: 800px;
  margin-bottom: 4rem;
  text-align: left;
  margin-left: 0;
  margin-right: auto;
  align-self: flex-start;
  width: 100%;
  animation: fadeInUp 1s ease forwards;
}

.hero-title {
  font-family: var(--font-main);
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 1.5rem;
  color: #fff;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-solid-white {
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  padding: 0.875rem 1.75rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-solid-white:hover {
  background-color: #f3f4f6;
  transform: translateY(-2px);
}

.btn-outline-white {
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.875rem 1.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

.icon-sm-right {
  width: 18px;
  height: 18px;
}

.hero-bottom-bar {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Utilities used in other sections */
.text-primary {
  color: var(--color-primary);
}

.pulse-dot {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
}

.hero-title {
  font-size: 2.25rem; /* Reduced from 2.75rem */
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.glow-text {
  text-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem; /* Reduced from 3.5rem */
  }
}
@media (min-width: 1200px) {
    .hero-title {
        font-size: 3.75rem; /* Reduced from 4.5rem */
    }
}

.hero-subtitle {
  font-size: 1rem; /* Reduced from 1.1rem */
  color: var(--color-text-muted);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem; /* Reduced from 3rem */
}

.premium-btn {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.premium-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 15px 25px -5px rgba(168, 85, 247, 0.6);
}

.premium-btn::after {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
}

.premium-btn:hover::after {
  opacity: 1;
}

.premium-btn-outline {
  backdrop-filter: blur(5px);
  border-color: rgba(255, 255, 255, 0.2);
}

.premium-btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero-stats {
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
}

.glass-stats {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem 2.5rem;
  margin-top: 2rem;
  justify-content: space-between;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* Hero Visual */
.image-wrapper {
  position: relative;
  z-index: 1;
}

.premium-wrapper {
  perspective: 1000px;
}

.hero-img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.image-wrapper:hover .hero-img {
  transform: scale(1.02) rotateY(-5deg) rotateX(2deg);
}

.intense-glow {
  background: linear-gradient(45deg, #6366f1, #ec4899, #a855f7);
  filter: blur(80px);
  opacity: 0.3;
  animation: spinGlow 10s linear infinite;
  position: absolute;
  top: 50%; left: 50%;
  width: 80%; height: 80%;
  z-index: -1;
}

@keyframes spinGlow {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

.float-card {
  position: absolute;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.premium-glass {
  background: rgba(15, 16, 22, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.card-1 {
  top: 20%;
  left: -20px;
  animation: float 5s ease-in-out infinite 0.5s;
}

.card-2 {
  bottom: 20%;
  right: -20px;
  animation: float 7s ease-in-out infinite 1s;
}

.card-3 {
  top: -20px;
  right: 10%;
  animation: float 6s ease-in-out infinite 2s;
}

.icon-sm {
  width: 18px;
  height: 18px;
  color: var(--color-accent);
}

/* Services Model */
.services-model {
  background-color: #f4f4f5; /* Light grey as per model */
}

.model-section-header {
  margin-bottom: 3rem;
  text-align: left;
}

.model-overline {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  display: block;
  margin-bottom: 1rem;
}

.model-section-title {
  font-size: 3.5rem;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.1;
  color: #111827;
}

@media (max-width: 768px) {
  .model-section-title {
    font-size: 2.5rem;
  }
}

.services-model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-model-card {
  display: flex;
  flex-direction: column;
}

.service-image-box {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  margin-bottom: 1.25rem;
  background: #000;
}

.service-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-model-card:hover .service-image-box img {
  transform: scale(1.05);
}

.service-gradient {
  display: none;
}

.service-arrow-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: all 0.3s ease;
}

.service-arrow-btn:hover {
  background-color: var(--color-primary);
  color: #fff;
}

.service-title-overlay {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background-color: #fff;
  color: #111827;
  padding: 0.5rem 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.service-desc-outside {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.service-model-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-model-list li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
}

.service-model-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* Advantage Model (Accordion Layout) */
.advantage-model {
  background-color: #f4f4f5; /* Match model background */
  border-top: 1px solid #d1d5db; /* Separation border */
}

.model-split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;
}

@media (max-width: 968px) {
  .model-split-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.model-left-pane {
  position: sticky;
  top: 120px;
}

.model-left-pane .model-overline {
  color: #111827;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.model-left-pane .model-section-title {
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 3rem;
  color: #111827;
  line-height: 1.1;
}

.model-cta-card {
  background: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: transform 0.3s ease;
  max-width: 400px;
}

.model-cta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.05);
}

.cta-card-title {
  color: #111827;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.cta-card-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
}

.cta-arrow-btn {
  color: #111827;
  display: flex;
}

/* Accordion Right Pane */
.accordion-item {
  border-bottom: 1px solid #d1d5db;
}

.accordion-item:first-child {
  border-top: 1px solid #d1d5db;
}

.accordion-header {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15rem;
  color: #4b5563;
  font-family: var(--font-main);
  cursor: pointer;
  transition: color 0.3s ease;
}

.accordion-item.active .accordion-header {
  color: #111827;
  font-weight: 500;
}

.accordion-icon {
  width: 20px;
  height: 20px;
  color: #9ca3af;
}

.accordion-item.active .accordion-icon {
  color: #111827;
}

.accordion-content {
  padding-bottom: 1.5rem;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.6;
}


/* Packages Model Layout */
.packages-model {
    background-color: #fff;
    padding-bottom: 8rem;
    padding-top: 5rem;
}

.model-section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.model-section-desc {
    color: #6b7280;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.packages-grid-model {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    align-items: stretch;
}

.package-card-model {
    background-color: #fff;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.package-card-model:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.package-card-model.popular-model {
    border: 2px solid #111827;
    transform: scale(1.02);
}

.package-card-model.popular-model:hover {
    transform: scale(1.02) translateY(-5px);
}

.popular-tag-model {
    background-color: #111827;
    color: #fff;
    text-align: center;
    padding: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.pkg-header-model {
    padding: 3rem 2.5rem 1.5rem;
}

.package-card-model.popular-model .pkg-header-model {
    padding-top: 2rem;
}

.pkg-name-model {
    font-size: 0.85rem;
    font-weight: 700;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.pkg-title-model {
    font-size: 2.5rem;
    color: #111827;
    line-height: 1.1;
    margin-bottom: 1rem;
    font-weight: 400;
}

.pkg-desc-model {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.5;
}

.pkg-divider-model {
    height: 1px;
    background-color: #e5e7eb;
    margin: 0 2.5rem;
}

.pkg-features-model {
    flex-grow: 1;
    padding: 2.5rem;
    list-style: none;
    margin: 0;
}

.pkg-features-model li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
    color: #4b5563;
    font-size: 0.95rem;
    line-height: 1.4;
}

.pkg-check-icon {
    width: 20px;
    height: 20px;
    color: #111827;
    flex-shrink: 0;
    margin-top: 2px;
}

.pkg-footer-model {
    padding: 0 2.5rem 3rem;
}

/* Model Buttons */
.btn-model-outline {
    display: inline-block;
    text-align: center;
    padding: 1rem 2rem;
    border: 1px solid #111827;
    background: transparent;
    color: #111827;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-model-outline:hover {
    background: #f4f4f5;
}

.btn-model-solid {
    display: inline-block;
    text-align: center;
    padding: 1rem 2rem;
    border: 1px solid #111827;
    background: #111827;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-model-solid:hover {
    background: #000;
}

.btn-model-outline.full-width, .btn-model-solid.full-width {
    display: block;
    width: 100%;
    box-sizing: border-box;
}

/* Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Valuable Clients Ticker */
/* Clients Model Ticker */
.clients-model {
  background-color: #17181c; /* Match Contact page dark background */
  padding: 3.5rem 0;
}

.container-fluid {
  max-width: 100%;
  padding: 0 4rem; /* Proper left and right margins */
}

.logos-ticker-model {
  position: relative;
  width: 100%;
  display: flex;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.ticker-track-model {
  display: flex;
  width: calc(180px * 14 + 4rem * 14);
  animation: scrollModel 40s linear infinite;
  gap: 4rem;
  align-items: center;
}

.logo-item-model {
  width: 180px;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-logo-model {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) opacity(50%) brightness(0) invert(1);
  transition: all 0.3s ease;
}

.logo-item-model:hover .client-logo-model {
  filter: grayscale(100%) opacity(100%) brightness(0) invert(1);
}

@keyframes scrollModel {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-180px * 7 - 4rem * 7)); }
}

@media (max-width: 768px) {
  .ticker-track-model {
    width: calc(120px * 14 + 2rem * 14);
    gap: 2rem;
  }
  .logo-item-model {
    width: 120px;
    height: 40px;
  }
  @keyframes scrollModel {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-120px * 7 - 2rem * 7)); }
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
