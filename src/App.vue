<script>
import TheHeader from '@/layouts/TheHeader.vue';
import TheFooter from '@/layouts/TheFooter.vue';
import { ref, provide } from 'vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth;
    });
    provide('windowWidth', windowWidth);
  },
};
</script>

<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer />
</template>
