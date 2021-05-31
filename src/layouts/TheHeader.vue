<script>
import TheLogin from '@/layouts/TheLogin.vue';

export default {
  name: 'TheHeader',
  components: {
    TheLogin,
  },
};
</script>

<template>
  <header class="bg-white border-bottom border-primary border-4 sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand">
          <img src="/src/assets/images/logo.jpg" alt="拼拼" width="111" height="40" />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li>
              <a class="px-4 nav-link" href="#">關於</a>
            </li>
            <li>
              <a class="px-4 nav-link" href="#">挖寶</a>
            </li>
            <li>
              <a class="px-4 nav-link" href="#">我有個大膽的想法</a>
            </li>
          </ul>
          <div>
            <button
              class="btn btn-primary px-8 me-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              登入</button
            ><button class="btn btn-outline-secondary px-8" type="button">註冊</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <the-login></the-login>
</template>
