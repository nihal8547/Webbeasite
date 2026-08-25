<script setup lang="ts">
import { ref, computed } from 'vue';
import { ArrowUpRight, ExternalLink } from 'lucide-vue-next';

// ---- Existing Project Screenshots ----
import fintechImg from '@/assets/fintech_dashboard.png';
import healthImg from '@/assets/healthcare_app.png';
import ecommerceImg from '@/assets/ecommerce_fashion.png';
import creativeImg from '@/assets/creative_portfolio_site.png';

// ---- Generated / Real Project Images ----
import luxeEstateImg from '@/assets/work_luxe_estate.png';

// ---- Reuse rich service images for missing projects ----
import shopNextImg from '@/assets/service_app_development_real.png';
import seoImg from '@/assets/service_digital_marketing_real.png';
import erpImg from '@/assets/service_erp_system_real.png';

// ---- Social Media Posters — aDam Technical Services ----
import adamFireExtinguisher from '@/assets/social_adam_fire_extinguisher.jpg';
import adamSafetyEquipment from '@/assets/social_adam_safety_equipment.jpg';
import adamHvac from '@/assets/social_adam_hvac.jpg';
import adamFirePiping from '@/assets/social_adam_fire_piping.png';
import adamFireProtectionSolutions from '@/assets/social_adam_fire_protection_solutions.jpg';
import adamWhyChooseUs from '@/assets/social_adam_why_choose_us.png';
import adamFireFightingEquipment from '@/assets/social_adam_fire_fighting_equipment.jpg';
import adamFireSafetyCta from '@/assets/social_adam_fire_safety_cta.jpg';
import adamFireProtectionSavesLives from '@/assets/social_adam_fire_protection_saves_lives.jpg';
import adamFireExtinguisherEducation from '@/assets/social_adam_fire_extinguisher_education.jpg';

// ---- Social Media Posters — Other Clients ----
import azikasGrandOpening from '@/assets/social_azikas_grand_opening.png';
import aziziyToysAtvs from '@/assets/social_aziziy_toys_atvs.jpg';
import aziziyToysBike from '@/assets/social_aziziy_toys_bike.jpg';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  tag?: string;
  featured?: boolean;
}

const activeCategory = ref('All');
const categories = ['All', 'Web Development', 'App Development', 'Marketing', 'ERP', 'Social Media'];

const projects: Project[] = [
  // ---- Featured / Web ----
  {
    id: 1,
    title: 'Nova FinTech',
    subtitle: 'Enterprise ERP & financial management platform built for Qatar investment firms.',
    category: 'ERP',
    image: fintechImg,
    tag: 'ERP System',
    featured: true,
  },
  {
    id: 2,
    title: 'MediCare Connect',
    subtitle: 'Cross-platform healthcare app connecting patients to clinics across Doha.',
    category: 'App Development',
    image: healthImg,
    tag: 'Mobile App',
    featured: true,
  },
  {
    id: 3,
    title: 'Monochrome Fashion',
    subtitle: 'High-converting e-commerce platform with integrated inventory and payment gateway.',
    category: 'Web Development',
    image: ecommerceImg,
    tag: 'E-Commerce',
  },
  {
    id: 4,
    title: 'Flux Creative Studio',
    subtitle: 'Award-winning portfolio website for a design studio based in the Middle East.',
    category: 'Web Development',
    image: creativeImg,
    tag: 'Portfolio Site',
  },
  {
    id: 5,
    title: 'Luxe Estate Qatar',
    subtitle: 'Luxury real estate platform with 3D tours and AI-powered property recommendations.',
    category: 'Web Development',
    image: luxeEstateImg,
    tag: 'Real Estate Web',
  },
  {
    id: 6,
    title: 'ShopNext — Retail App',
    subtitle: 'Native iOS & Android shopping app with AR try-on feature and loyalty rewards.',
    category: 'App Development',
    image: shopNextImg,
    tag: 'Mobile App',
  },
  {
    id: 7,
    title: 'Growth SEO Campaign',
    subtitle: '312% organic traffic growth in 6 months for a Doha-based B2B services company.',
    category: 'Marketing',
    image: seoImg,
    tag: 'SEO Campaign',
    featured: true,
  },
  {
    id: 8,
    title: 'BizManage ERP',
    subtitle: 'Custom HR, payroll, CRM and inventory management system for a 200-person enterprise.',
    category: 'ERP',
    image: erpImg,
    tag: 'Custom ERP',
  },

  // ---- Social Media — aDam Technical Services ----
  { id: 9,  title: 'aDam Fire Safety',            subtitle: 'Fire Extinguisher Campaign',       category: 'Social Media', image: adamFireExtinguisher,         tag: 'Instagram' },
  { id: 10, title: 'aDam Safety Equipment',        subtitle: 'Safety Equipment Showcase',        category: 'Social Media', image: adamSafetyEquipment,          tag: 'Instagram' },
  { id: 11, title: 'aDam HVAC Services',           subtitle: 'HVAC Installation Campaign',       category: 'Social Media', image: adamHvac,                     tag: 'Instagram' },
  { id: 12, title: 'aDam Fire Protection',         subtitle: 'Fire Piping Solutions Poster',     category: 'Social Media', image: adamFirePiping,               tag: 'Instagram' },
  { id: 13, title: 'Complete Fire Protection',     subtitle: 'Fire Protection Solutions',        category: 'Social Media', image: adamFireProtectionSolutions,  tag: 'Instagram' },
  { id: 14, title: 'Why Choose aDam',              subtitle: 'HVAC Benefits & Features',         category: 'Social Media', image: adamWhyChooseUs,              tag: 'Instagram' },
  { id: 15, title: 'Fire Fighting Equipment',      subtitle: 'Equipment Showcase',               category: 'Social Media', image: adamFireFightingEquipment,    tag: 'Instagram' },
  { id: 16, title: 'Fire Safety CTA',              subtitle: 'Call-to-Action Design',            category: 'Social Media', image: adamFireSafetyCta,            tag: 'Instagram' },
  { id: 17, title: 'Fire Protection Saves Lives',  subtitle: 'Awareness Campaign',               category: 'Social Media', image: adamFireProtectionSavesLives, tag: 'Instagram' },
  { id: 18, title: 'Fire Extinguisher Education',  subtitle: 'Safety Education Series',          category: 'Social Media', image: adamFireExtinguisherEducation, tag: 'Instagram' },

  // ---- Social Media — Other Clients ----
  { id: 19, title: 'Azikas Restaurant Opening',   subtitle: 'Grand Opening Announcement',       category: 'Social Media', image: azikasGrandOpening,  tag: 'Instagram' },
  { id: 20, title: 'Aziziy Toys — ATVs',          subtitle: 'Big Adventures Start Here',        category: 'Social Media', image: aziziyToysAtvs,      tag: 'Instagram' },
  { id: 21, title: 'Aziziy Toys — Bikes',         subtitle: 'Kids Adventure Bikes Campaign',    category: 'Social Media', image: aziziyToysBike,      tag: 'Instagram' },
];

const featuredProjects = computed(() => projects.filter(p => p.featured));
const filteredProjects = computed(() => {
  const list = activeCategory.value === 'All' ? projects : projects.filter(p => p.category === activeCategory.value);
  return list;
});

const stats = [
  { number: '20+', label: 'Projects Delivered' },
  { number: '312%', label: 'Avg. Traffic Growth' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '3+', label: 'Years in Qatar' },
];
</script>

<template>
  <div class="work-page">

    <!-- ===================== HERO ===================== -->
    <section class="work-hero">
      <div class="container work-hero-inner">
        <div class="work-hero-text">
          <span class="work-overline">OUR PORTFOLIO</span>
          <h1 class="work-title animate-fade-in">Work That <br>Speaks for Itself</h1>
          <p class="work-desc animate-fade-in">
            From SEO campaigns delivering 312% traffic growth to enterprise ERP systems used by 200-person teams — every project we build is engineered for real business outcomes in Qatar.
          </p>
          <router-link to="/contact" class="work-hero-btn animate-fade-in">
            Start Your Project <ArrowUpRight :size="18" />
          </router-link>
        </div>

        <!-- Stats Strip -->
        <div class="work-stats-strip">
          <div v-for="stat in stats" :key="stat.label" class="work-stat">
            <span class="work-stat-number">{{ stat.number }}</span>
            <span class="work-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FEATURED PROJECTS ===================== -->
    <section class="featured-section section-padding">
      <div class="container">
        <div class="featured-header">
          <span class="section-overline">FEATURED WORK</span>
          <h2 class="section-title">Selected Case Studies</h2>
        </div>

        <div class="featured-grid">
          <article
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            class="featured-card"
            :class="{ 'featured-card--wide': i === 0 }"
          >
            <div class="featured-img-wrap">
              <img :src="project.image" :alt="project.title" class="featured-img" />
              <div class="featured-overlay">
                <router-link to="/contact" class="featured-view-btn" aria-label="View project">
                  <ExternalLink :size="20" />
                </router-link>
              </div>
            </div>
            <div class="featured-info">
              <span class="project-tag">{{ project.tag }}</span>
              <h3 class="featured-title">{{ project.title }}</h3>
              <p class="featured-subtitle">{{ project.subtitle }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================== ALL PROJECTS ===================== -->
    <section class="all-projects-section section-padding">
      <div class="container">
        <div class="projects-header">
          <span class="section-overline">ALL WORK</span>
          <h2 class="section-title">Full Portfolio</h2>
        </div>

        <!-- Category Filter -->
        <div class="category-filters">
          <button
            v-for="cat in categories"
            :key="cat"
            class="cat-filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-img-wrap">
              <img :src="project.image" :alt="project.title" class="project-img" loading="lazy" />
              <div class="project-hover-overlay">
                <router-link to="/contact" class="project-view-link">
                  View Project <ArrowUpRight :size="14" />
                </router-link>
              </div>
            </div>
            <div class="project-info">
              <div class="project-meta-row">
                <span class="project-tag-sm">{{ project.tag }}</span>
                <span class="project-category">{{ project.category }}</span>
              </div>
              <h3 class="project-name">{{ project.title }}</h3>
              <p class="project-sub">{{ project.subtitle }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="work-cta-section">
      <div class="container work-cta-inner">
        <div>
          <h2 class="work-cta-title">Ready to be our next success story?</h2>
          <p class="work-cta-desc">Let's build something extraordinary for your business in Qatar.</p>
        </div>
        <router-link to="/contact" class="work-cta-btn">
          Book a Free Consultation <ArrowUpRight :size="16" />
        </router-link>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ==================== Page ==================== */
.work-page {
  min-height: 100vh;
  background: #fff;
}

/* ==================== Hero ==================== */
.work-hero {
  background: #17181c;
  padding-top: 150px;
  padding-bottom: 0;
}

.work-hero-inner {
  display: flex;
  flex-direction: column;
}

.work-hero-text {
  padding-bottom: 4rem;
  max-width: 720px;
}

.work-overline {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #6366f1;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.work-title {
  font-size: clamp(2.75rem, 5vw, 5rem);
  color: #fff;
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.05;
  margin-bottom: 1.5rem;
}

.work-desc {
  font-size: 1.1rem;
  color: #9ca3af;
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 2.5rem;
}

.work-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.25rem;
  background: #fff;
  color: #111827;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.work-hero-btn:hover {
  background: #6366f1;
  color: #fff;
  transform: translateY(-2px);
}

/* Stats Strip */
.work-stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: auto;
}

@media (max-width: 640px) {
  .work-stats-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

.work-stat {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.work-stat:last-child {
  border-right: none;
}

.work-stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-bottom: 0.35rem;
  letter-spacing: -1px;
}

.work-stat-label {
  font-size: 0.8rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

/* ==================== Featured Section ==================== */
.featured-section {
  background: #f9fafb;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.featured-header,
.projects-header {
  margin-bottom: 3rem;
}

.section-overline {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #6366f1;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  color: #111827;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 0;
}

/* Featured Grid */
.featured-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  grid-template-rows: auto auto;
  gap: 2rem;
}

@media (max-width: 900px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  .featured-card--wide {
    grid-column: 1;
  }
}

.featured-card--wide {
  grid-column: 1;
  grid-row: 1 / 3;
}

.featured-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.35s ease;
}

.featured-card:hover {
  border-color: #111827;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}

.featured-img-wrap {
  position: relative;
  overflow: hidden;
}

.featured-card--wide .featured-img-wrap {
  height: 420px;
}

.featured-card:not(.featured-card--wide) .featured-img-wrap {
  height: 220px;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-img {
  transform: scale(1.04);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17,24,39,0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.featured-card:hover .featured-overlay {
  background: rgba(17,24,39,0.35);
}

.featured-view-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: #fff;
  color: #111827;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  text-decoration: none;
}

.featured-card:hover .featured-view-btn {
  opacity: 1;
  transform: scale(1);
}

.featured-info {
  padding: 1.75rem;
}

.project-tag {
  display: inline-block;
  background: #f3f4f6;
  color: #374151;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.9rem;
}

.featured-title {
  font-size: 1.4rem;
  color: #111827;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.featured-subtitle {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* ==================== All Projects ==================== */
.all-projects-section {
  background: #fff;
  padding-top: 5rem;
  padding-bottom: 7rem;
}

/* Category Filters */
.category-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.cat-filter-btn {
  padding: 0.55rem 1.25rem;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cat-filter-btn:hover {
  border-color: #374151;
  color: #111827;
}

.cat-filter-btn.active {
  background: #111827;
  border-color: #111827;
  color: #fff;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1100px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  border: 1px solid #e5e7eb;
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: #111827;
  box-shadow: 0 12px 30px rgba(0,0,0,0.07);
  transform: translateY(-4px);
}

.project-img-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17,24,39,0);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  transition: background 0.3s ease;
}

.project-card:hover .project-hover-overlay {
  background: rgba(17,24,39,0.45);
}

.project-view-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  background: #fff;
  color: #111827;
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.3s ease;
}

.project-card:hover .project-view-link {
  opacity: 1;
  transform: translateY(0);
}

.project-info {
  padding: 1.5rem;
}

.project-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.project-tag-sm {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6366f1;
  background: #eef2ff;
  padding: 0.2rem 0.65rem;
}

.project-category {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.project-sub {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.55;
  margin: 0;
}

/* ==================== CTA ==================== */
.work-cta-section {
  background: #17181c;
  padding: 6rem 0;
}

.work-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.work-cta-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.work-cta-desc {
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
}

.work-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 2.5rem;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.work-cta-btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* ==================== Animations ==================== */
.animate-fade-in {
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
