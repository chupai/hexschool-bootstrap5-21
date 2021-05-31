<script>
import TheHeader from '@/layouts/TheHeader.vue';
import TheFooter from '@/layouts/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
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
