<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next';
import logoImg from '@/assets/webbea-logo.png';
</script>

<template>
  <footer class="footer">
    <div class="container footer-top">

      <!-- Brand Column -->
      <div class="footer-col footer-brand">
        <div class="footer-logo-wrap">
          <img :src="logoImg" alt="Webbea Logo" class="footer-logo" />
        </div>
        <p class="footer-brand-desc">
          Qatar's premier digital agency — transforming ambitious ideas into high-performance web, app, and marketing experiences.
        </p>
        <div class="social-links">
          <a href="https://www.facebook.com/webbea" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
            <Facebook :size="18" />
          </a>
          <a href="https://twitter.com/webbeaqa" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter / X">
            <Twitter :size="18" />
          </a>
          <a href="https://www.instagram.com/webbea.qa/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
            <Instagram :size="18" />
          </a>
          <a href="https://www.linkedin.com/company/webbea" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <Linkedin :size="18" />
          </a>
        </div>
      </div>

      <!-- Services Column -->
      <div class="footer-col">
        <h4 class="footer-heading">Services</h4>
        <nav aria-label="Services links">
          <router-link to="/work" class="footer-link">SEO &amp; Digital Marketing</router-link>
          <router-link to="/work" class="footer-link">Web Development</router-link>
          <router-link to="/work" class="footer-link">App Development</router-link>
          <router-link to="/work" class="footer-link">Custom ERP Solutions</router-link>
          <router-link to="/work" class="footer-link">E-Commerce</router-link>
          <router-link to="/work" class="footer-link">Cloud Services</router-link>
        </nav>
      </div>

      <!-- Company Column -->
      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <nav aria-label="Company links">
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/about" class="footer-link">About Us</router-link>
          <router-link to="/work" class="footer-link">Portfolio</router-link>
          <router-link to="/packages" class="footer-link">Packages &amp; Pricing</router-link>
          <router-link to="/contact" class="footer-link">Contact Us</router-link>
        </nav>
      </div>

      <!-- Resources Column -->
      <div class="footer-col">
        <h4 class="footer-heading">Resources</h4>
        <nav aria-label="Resources links">
          <router-link to="/blog" class="footer-link">Blog &amp; Insights</router-link>
          <router-link to="/faq" class="footer-link">FAQ</router-link>
          <router-link to="/packages" class="footer-link">SEO Packages</router-link>
          <router-link to="/contact" class="footer-link">Free Consultation</router-link>
        </nav>
      </div>

      <!-- Contact Column -->
      <div class="footer-col">
        <h4 class="footer-heading">Get in Touch</h4>
        <div class="footer-contact-list">
          <a href="mailto:Webbeaqa@gmail.com" class="footer-contact-item">
            Webbeaqa@gmail.com
          </a>
          <a href="tel:+97430954643" class="footer-contact-item">
            +974 30954643
          </a>
          <span class="footer-contact-item location">
            Doha, Qatar
          </span>
          <router-link to="/contact" class="footer-cta-btn">
            Book a Call →
          </router-link>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p class="footer-copyright">© 2026 Webbea Digital Agency. All rights reserved.</p>
        <div class="footer-bottom-links">
          <router-link to="/faq" class="footer-bottom-link">Privacy Policy</router-link>
          <router-link to="/faq" class="footer-bottom-link">Terms of Service</router-link>
          <a href="/sitemap.xml" class="footer-bottom-link">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ---- Footer Shell ---- */
.footer {
  background: #17181c;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: auto;
}

/* ---- Top Grid ---- */
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr repeat(4, 1fr);
  gap: 3rem;
  padding-top: 5rem;
  padding-bottom: 4rem;
}

@media (max-width: 1100px) {
  .footer-top {
    grid-template-columns: repeat(3, 1fr);
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}

/* ---- Brand Column ---- */
.footer-brand {
  padding-right: 2rem;
}

.footer-logo-wrap {
  margin-bottom: 1.25rem;
}

.footer-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}

.footer-brand-desc {
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.75rem;
  max-width: 280px;
}

/* ---- Social Links ---- */
.social-links {
  display: flex;
  gap: 0.65rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  color: #9ca3af;
  transition: all 0.25s ease;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.08);
}

.social-icon:hover {
  background: #6366f1;
  color: #fff;
  border-color: #6366f1;
  transform: translateY(-3px);
}

/* ---- Columns ---- */
.footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.5rem;
}

.footer-link {
  display: block;
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 0.7rem;
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.4;
}

.footer-link:hover {
  color: #fff;
}

/* ---- Contact Column ---- */
.footer-contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-contact-item {
  color: #9ca3af;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.4;
}

a.footer-contact-item:hover {
  color: #fff;
}

.footer-contact-item.location {
  cursor: default;
}

.footer-cta-btn {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.65rem 1.5rem;
  background: #6366f1;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  align-self: flex-start;
}

.footer-cta-btn:hover {
  background: #4f46e5;
  transform: translateY(-2px);
}

/* ---- Bottom Bar ---- */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 1.5rem 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  color: #6b7280;
  font-size: 0.85rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-link {
  color: #6b7280;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-link:hover {
  color: #9ca3af;
}
</style>
