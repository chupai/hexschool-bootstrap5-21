<script>
export default {
  name: 'TheLogin',
  components: {},
  props: {},
  emits: [],
  setup(props, { emit }) {
    return {};
  },
};
</script>

<template>
  <teleport to="body">
    <div class="modal fade" id="login" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bold">登入</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-6">
            <div class="mb-4">
              <label for="account" class="form-label">帳號</label>
              <input type="email" class="form-control" id="account" />
            </div>
            <div class="mb-2">
              <label for="password" class="form-label">密碼</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <a href="" class="d-block text-secondary -fs-1 text-decoration-none mb-4">忘記密碼？</a>
            <button class="btn btn-primary btn-lg fw-bold w-100 text-dark mb-12" type="button">
              登入
            </button>
            <div class="d-flex align-items-center justify-content-center">
              <div class="flex-grow-1 border-bottom"></div>
              <p class="-fs-1 text-secondary px-4">
                還沒有帳號？<a href="" class="text-danger text-decoration-none">註冊一個帳號</a>
              </p>
              <div class="flex-grow-1 border-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
