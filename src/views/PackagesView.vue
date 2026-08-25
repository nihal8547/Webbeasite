<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next';
</script>

<template>
  <div class="packages-page-wrapper">
    <section class="packages-hero-model">
      <div class="container">
        <div class="section-header-model text-center">
           <span class="model-overline">PRICING</span>
           <h1 class="page-title-model animate-fade-in">Tailored Solutions</h1>
           <p class="section-desc-model animate-fade-in">
             Flexible models for every budget. From E-commerce website development in Qatar to Custom ERP solutions, we have a plan designed to accelerate your growth.
           </p>
        </div>
      </div>
    </section>

    <section class="packages-content-model">
      <div class="container">

      <div class="packages-grid-model animate-fade-in">
           <!-- Starter -->
           <div class="package-card-model">
              <div class="pkg-header-model">
                  <div class="pkg-name-model">Starter</div>
                  <h3 class="pkg-title-model">Launch Pad</h3>
                  <p class="pkg-desc-model">Everything you need to establish a professional digital presence.</p>
              </div>
              <div class="divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="check-icon-model" /> UI/UX Design</li>
                <li><CheckCircle class="check-icon-model" /> Mobile Responsive</li>
                <li><CheckCircle class="check-icon-model" /> Search Engine Optimization</li>
                <li><CheckCircle class="check-icon-model" /> 1 Month Maintenance</li>
              </ul>
              <div class="pkg-footer-model">
                  <router-link to="/contact" class="btn-model-outline full-width">Request Quote</router-link>
              </div>
           </div>
           
           <!-- Professional -->
           <div class="package-card-model popular-model">
              <div class="popular-tag-model">Recommended</div>
              <div class="pkg-header-model">
                  <div class="pkg-name-model text-dark">Professional</div>
                  <h3 class="pkg-title-model">Business Growth</h3>
                  <p class="pkg-desc-model">Comprehensive solutions for businesses ready to scale up.</p>
              </div>
              <div class="divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="check-icon-model" /> Custom Web Application</li>
                <li><CheckCircle class="check-icon-model" /> Advanced Analytics Integration</li>
                <li><CheckCircle class="check-icon-model" /> Social Media Management</li>
                <li><CheckCircle class="check-icon-model" /> Content Management System</li>
                <li><CheckCircle class="check-icon-model" /> 3 Months Priority Support</li>
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
              <div class="divider-model"></div>
              <ul class="pkg-features-model">
                <li><CheckCircle class="check-icon-model" /> Custom ERP & CRM Solutions</li>
                <li><CheckCircle class="check-icon-model" /> Native Mobile Apps (iOS/Android)</li>
                <li><CheckCircle class="check-icon-model" /> Dedicated Development Team</li>
                <li><CheckCircle class="check-icon-model" /> Cloud Infrastructure Setup</li>
                <li><CheckCircle class="check-icon-model" /> 24/7 SLA Support</li>
              </ul>
               <div class="pkg-footer-model">
                  <router-link to="/contact" class="btn-model-outline full-width">Contact Sales</router-link>
              </div>
           </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="faq-section-model animate-fade-in">
        <h2 class="faq-title-model text-center">Frequently Asked Questions</h2>
        <div class="faq-grid-model">
           <div class="faq-item-model">
              <h4>Do you offer custom packages?</h4>
              <p>Yes, we understand that every business is unique. Contact us for a tailored quote.</p>
           </div>
           <div class="faq-item-model">
              <h4>What is included in maintenance?</h4>
              <p>Maintenance includes security updates, server monitoring, and minor content changes.</p>
           </div>
             <div class="faq-item-model">
              <h4>How long does a project take?</h4>
              <p>Timelines vary by complexity. A simple website takes 2-4 weeks, while custom apps can take 3-6 months.</p>
           </div>
             <div class="faq-item-model">
              <h4>Do I own the code?</h4>
              <p>Yes, upon full payment, you own 100% of the intellectual property and code.</p>
           </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.packages-page-wrapper {
  min-height: 100vh;
  background-color: #fff;
}

.packages-hero-model {
  padding-top: 150px;
  padding-bottom: 5rem;
  background-color: #17181c;
}

.packages-content-model {
  padding-top: 4rem;
  padding-bottom: 6rem;
}

.section-header-model {
    margin-bottom: 0;
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

/* Packages Grid */
.packages-grid-model {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
}

@media (max-width: 1024px) {
  .packages-grid-model {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .packages-grid-model {
    grid-template-columns: 1fr;
  }
}

.package-card-model {
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.package-card-model:hover {
  transform: translateY(-5px);
  border-color: #111827;
}

.package-card-model.popular-model {
  border: 2px solid #111827;
  position: relative;
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.package-card-model.popular-model:hover {
  transform: scale(1.02) translateY(-5px);
}

.popular-tag-model {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #111827;
  color: #fff;
  padding: 0.25rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.pkg-header-model {
  margin-bottom: 1.5rem;
}

.pkg-name-model {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6b7280;
  margin-bottom: 1rem;
}

.pkg-name-model.text-dark {
  color: #111827;
}

.pkg-title-model {
  font-size: 2.25rem;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.pkg-desc-model {
  color: #4b5563;
  line-height: 1.6;
}

.divider-model {
  height: 1px;
  background: #e5e7eb;
  margin: 2rem 0;
}

.pkg-features-model {
  list-style: none;
  padding: 0;
  margin: 0 0 3rem 0;
  flex-grow: 1;
}

.pkg-features-model li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: #111827;
  font-size: 1rem;
}

.check-icon-model {
  color: #111827;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.btn-model-outline {
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  border: 1px solid #111827;
  background: transparent;
  color: #111827;
  font-weight: 600;
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
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-model-solid:hover {
  background: #000;
}

.full-width {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

/* FAQ */
.faq-section-model {
  padding-top: 6rem;
  border-top: 1px solid #e5e7eb;
}

.faq-title-model {
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 3rem;
}

.faq-grid-model {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .faq-grid-model {
    grid-template-columns: 1fr;
  }
}

.faq-item-model {
  background: #f4f4f5;
  padding: 2rem;
  border: 1px solid #e5e7eb;
}

.faq-item-model h4 {
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 1rem;
}

.faq-item-model p {
  color: #4b5563;
  line-height: 1.6;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
