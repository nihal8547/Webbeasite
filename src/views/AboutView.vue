<script setup lang="ts">
import { Target, Users, Lightbulb, Briefcase, Award, Rocket } from 'lucide-vue-next';
</script>

<template>
  <div class="about-page-model">
    <!-- Hero Section -->
    <section class="about-hero-model section-padding">
      <div class="container text-center">
        <span class="model-overline">WHO WE ARE</span>
        <h1 class="model-page-title animate-fade-in">Best SEO Agency in Qatar</h1>
        <p class="model-hero-desc animate-fade-in">
          Webbea is the leading Digital Marketing Agency in Doha. We are a team of visionaries committed to delivering top-tier web and mobile experiences.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section-model">
      <div class="container mission-layout-model">
         <div class="mission-content-model animate-fade-in-left">
            <div class="header-with-icon-model">
                <Target class="icon-lg-model" />
                <h3>Our Mission</h3>
            </div>
            <p>To empower businesses by bridging the gap between complex technology and intuitive user experiences. We strive to create digital assets that not only function flawlessly but also inspire and convert.</p>
         </div>
         <div class="mission-content-model animate-fade-in-right">
            <div class="header-with-icon-model">
                <Lightbulb class="icon-lg-model" />
                <h3>Our Vision</h3>
            </div>
            <p>To be the global standard for premium software design, where every pixel has a purpose and every line of code adds value. We envision a web that is faster, more beautiful, and more accessible for everyone.</p>
         </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section-model section-padding">
        <div class="container">
            <div class="model-section-header text-center">
                <h2 class="model-section-title">Our Core Values</h2>
                <p class="model-section-desc">The principles that guide every pixel we push and every line of code we write.</p>
            </div>
            
            <div class="values-grid-model">
                <div class="value-card-model">
                    <Rocket class="value-icon-model" />
                    <h4>Innovation First</h4>
                    <p>We don't settle for the status quo. We constantly explore new technologies to keep you ahead.</p>
                </div>
                <div class="value-card-model">
                    <Award class="value-icon-model" />
                    <h4>Extreme Ownership</h4>
                    <p>We take full responsibility for our work. Your project's success is our personal benchmark.</p>
                </div>
                <div class="value-card-model">
                    <Users class="value-icon-model" />
                    <h4>Client Partnership</h4>
                    <p>We are not just vendors; we are partners in your growth journey, supporting you at every step.</p>
                </div>
                 <div class="value-card-model">
                    <Briefcase class="value-icon-model" />
                    <h4>Business Focus</h4>
                    <p>We design for ROI. Beautiful code means nothing if it doesn't solve real business problems.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section-model">
        <div class="container">
            <div class="stats-grid-model">
                <div class="stat-box-model">
                    <span class="stat-num-model">20+</span>
                    <span class="stat-label-model">Projects Delivered</span>
                </div>
                 <div class="stat-box-model">
                    <span class="stat-num-model">3+</span>
                    <span class="stat-label-model">Years Experience</span>
                </div>
                 <div class="stat-box-model">
                    <span class="stat-num-model">100%</span>
                    <span class="stat-label-model">Client Satisfaction</span>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section-model section-padding">
        <div class="container text-center">
            <h2>Ready to transform your ideas?</h2>
            <router-link to="/contact" class="btn-model-white btn-lg">Let's Talk</router-link>
        </div>
    </section>
  </div>
</template>

<style scoped>
.about-page-model {
  background-color: #fff;
  min-height: 100vh;
}

.about-hero-model {
    padding-top: 150px;
    padding-bottom: 5rem;
    background-color: #17181c;
}

.model-overline {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 1.5rem;
}

.model-page-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -1px;
}

.model-hero-desc {
    font-size: 1.25rem;
    color: #d1d5db;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Mission */
.mission-section-model {
  background-color: #fff;
  padding-top: 4rem;
}

.mission-layout-model {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

@media (max-width: 768px) {
    .mission-layout-model {
        grid-template-columns: 1fr;
    }
}

.mission-content-model {
    padding: 3.5rem;
    height: 100%;
    border: 1px solid #e5e7eb;
    background: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-content-model:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.header-with-icon-model {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.mission-content-model h3 {
    font-size: 2rem;
    margin: 0;
    color: #111827;
}

.mission-content-model p {
    color: #6b7280;
    line-height: 1.7;
    font-size: 1.05rem;
}

.icon-lg-model {
    width: 32px;
    height: 32px;
    color: #111827;
}

/* Values */
.values-section-model {
    background-color: #f4f4f5;
    border-top: 1px solid #e5e7eb;
    border-bottom: 1px solid #e5e7eb;
    padding: 6rem 0;
}

.model-section-header {
    margin-bottom: 4rem;
}

.model-section-title {
    font-size: 2.5rem;
    color: #111827;
    margin-bottom: 1rem;
}

.model-section-desc {
    color: #6b7280;
    font-size: 1.1rem;
}

.values-grid-model {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.value-card-model {
    padding: 2.5rem;
    text-align: center;
    background: #fff;
    border: 1px solid #e5e7eb;
    transition: transform 0.3s ease;
}

.value-card-model:hover {
    transform: translateY(-5px);
    border-color: #111827;
}

.value-icon-model {
    width: 40px;
    height: 40px;
    margin-bottom: 1.5rem;
    color: #111827;
}

.value-card-model h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #111827;
}

.value-card-model p {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Stats */
.stats-section-model {
    padding: 6rem 0;
    background-color: #fff;
}

.stats-grid-model {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
}

@media (max-width: 768px) {
    .stats-grid-model {
        grid-template-columns: 1fr;
    }
}

.stat-box-model {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 4rem 2rem;
    text-align: center;
    background: #fff;
    border-right: 1px solid #e5e7eb;
}

.stat-box-model:last-child {
    border-right: none;
}

@media (max-width: 768px) {
    .stat-box-model {
        border-right: none;
        border-bottom: 1px solid #e5e7eb;
    }
    .stat-box-model:last-child {
        border-bottom: none;
    }
}

.stat-num-model {
    font-size: 4rem;
    font-weight: 800;
    color: #111827;
    line-height: 1;
}

.stat-label-model {
    color: #6b7280;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.85rem;
    margin-top: 0.5rem;
}

/* CTA */
.cta-section-model {
    background-color: #17181c;
    padding: 6rem 0;
}

.cta-section-model h2 {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    color: #fff;
}

.btn-model-white {
    display: inline-block;
    padding: 1rem 3rem;
    background: #fff;
    color: #111827;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-model-white:hover {
    background: #f4f4f5;
    transform: translateY(-2px);
}

.btn-lg {
    font-size: 1.1rem;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>
