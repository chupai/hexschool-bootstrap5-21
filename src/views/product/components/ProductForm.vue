<script>
export default {
  name: 'ProductForm',
};
</script>

<template>
  <div class="mt-8 mt-lg-12">
    <div class="mb-6">
      <img
        src="@/assets/icons/heart.svg"
        alt="贊助專案"
        class="d-block mx-auto mb-1"
        width="43"
        height="36"
      />
      <div class="position-relative d-flex justify-content-center">
        <h4 class="fw-bold fw-bold tracking-2 px-4 bg-white z-10">贊助專案</h4>
        <div
          class="
            position-absolute
            border-bottom border-primary border border-2
            w-100
            top-50
            start-0
            translate-middle-y
          "
        ></div>
      </div>
    </div>
    <form class="row gy-6 needs-validation">
      <div class="col-12">
        <label for="select1" class="form-label">贊助方案</label>
        <select id="select1" class="form-select">
          <option selected disabled hidden>請選擇一個方案</option>
          <option value="1">方案一</option>
          <option value="2">方案二</option>
          <option value="3">方案三</option>
        </select>
      </div>
      <div class="col-12">
        <label for="text1" class="form-label">收件人姓名</label>
        <input type="text" class="form-control" id="text1" />
      </div>
      <div class="col-12">
        <label for="text2" class="form-label">連絡電話</label>
        <input type="text" class="form-control" id="text2" />
      </div>
      <div class="col-12">
        <label for="email1" class="form-label">連絡信箱</label>
        <input type="email" class="form-control is-invalid" id="email1" />
        <div class="invalid-feedback">請輸入正確的郵件格式</div>
      </div>
      <div class="col-12">
        <label for="select2" class="form-label">付款方式</label>
        <select id="select2" class="form-select">
          <option>信用卡付款</option>
          <option>超商付款</option>
          <option>ATM 轉帳</option>
        </select>
      </div>
      <div class="col-12 col-lg-4 mx-auto">
        <button class="btn btn-primary btn-lg fw-bold w-100" type="submit">贊助專案</button>
      </div>
    </form>
  </div>
</template>
