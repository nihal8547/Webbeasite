<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';
import logoImg from '@/assets/webbea-logo.png';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-content">
      <router-link to="/" class="logo-link">
        <img :src="logoImg" alt="Webbea Logo" class="logo-img" />
      </router-link>

      <div class="desktop-menu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/work" class="nav-link">Work</router-link>
        <router-link to="/packages" class="nav-link">Packages</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <router-link to="/faq" class="nav-link">FAQ</router-link>
        <router-link to="/contact" class="btn-model-solid">Contact Us</router-link>
      </div>

      <button class="mobile-toggle" aria-label="Toggle Menu" @click="toggleMenu">
        <Menu v-if="!isMobileMenuOpen" />
        <X v-else />
      </button>

      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <router-link to="/" class="mobile-link" @click="toggleMenu">Home</router-link>
        <router-link to="/about" class="mobile-link" @click="toggleMenu">About</router-link>
        <router-link to="/work" class="mobile-link" @click="toggleMenu">Work</router-link>
        <router-link to="/packages" class="mobile-link" @click="toggleMenu">Packages</router-link>
        <router-link to="/blog" class="mobile-link" @click="toggleMenu">Blog</router-link>
        <router-link to="/faq" class="mobile-link" @click="toggleMenu">FAQ</router-link>
        <router-link to="/contact" class="mobile-link" @click="toggleMenu">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.desktop-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  font-weight: 500;
  color: #ffffff;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.nav-link:hover, .nav-link.router-link-active {
  opacity: 1;
  color: #ffffff;
}

.navbar.scrolled .logo-img {
  filter: brightness(0); /* Turn white logo black */
}

.navbar.scrolled .nav-link {
  color: #111827; /* Dark color for visibility on white background */
}

.navbar.scrolled .nav-link:hover, .navbar.scrolled .nav-link.router-link-active {
  color: #000;
  font-weight: 700;
}

.btn-model-solid {
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.5rem;
  border: 1px solid #ffffff;
  background: #ffffff;
  color: #111827;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-model-solid:hover {
  background: transparent;
  color: #ffffff;
}

.navbar.scrolled .btn-model-solid {
  background: #111827;
  color: #ffffff;
  border-color: #111827;
}

.navbar.scrolled .btn-model-solid:hover {
  background: transparent;
  color: #111827;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
}

.navbar.scrolled .mobile-toggle {
  color: #111827; /* Make toggle black on scroll */
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  gap: 2rem;
  transition: right 0.3s ease;
  z-index: 999;
  border-left: 1px solid var(--color-border);
}

.mobile-menu.open {
  right: 0;
}

.mobile-link {
  font-size: 1.5rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-toggle {
    display: block;
    z-index: 1001;
  }
}
</style>
