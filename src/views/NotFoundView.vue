<template>
  <main class="not-found-page">
    <div class="container">
      <p class="code">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <RouterLink to="/" class="btn btn-primary">Back to Webbea</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.not-found-page { min-height: 60vh; display: grid; place-items: center; text-align: center; padding: 96px 20px; }
.code { margin: 0 0 8px; font-size: 6rem; line-height: 1; font-weight: 800; }
h1 { margin: 0 0 12px; font-size: clamp(2rem, 5vw, 3.5rem); }
p:not(.code) { margin: 0 auto 24px; max-width: 560px; line-height: 1.7; }
</style>
