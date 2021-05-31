<script>
export default {
  name: 'ProductFaq',
};
</script>

<template>
  <div id="faq" class="tab-pane fade">
    <div class="accordion" id="faqs">
      <div class="accordion-item">
        <h2 class="accordion-header -fs-1 tracking-1" id="q1">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q1"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q1</span>
            影片拍完之後可以編輯嗎？
          </button>
        </h2>
        <div id="collapse-q1" class="accordion-collapse collapse show" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header -fs-1 tracking-1" id="q2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q2"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q2</span>
            有提供保固或維修服務嗎？
          </button>
        </h2>
        <div id="collapse-q2" class="accordion-collapse collapse" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header -fs-1 tracking-1" id="q3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q3"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q3</span
            >補充包底片要去哪裡購買呢？
          </button>
        </h2>
        <div id="collapse-q3" class="accordion-collapse collapse" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header -fs-1 tracking-1" id="q4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q4"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q4</span
            >印出來的拍立得照片需要充電嗎？
          </button>
        </h2>
        <div id="collapse-q4" class="accordion-collapse collapse" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header -fs-1 tracking-1" id="q5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q5"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q5</span
            >運送方式及付款方式有哪些呢？
          </button>
        </h2>
        <div id="collapse-q5" class="accordion-collapse collapse" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>

      <div class="accordion-item mb-0">
        <h2 class="accordion-header -fs-1 tracking-1" id="q6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-q6"
          >
            <span class="bg-primary font-display fw-bold lh-1 p-2 rounded-2 me-3">Q6</span
            >退換貨方式及規則
          </button>
        </h2>
        <div id="collapse-q6" class="accordion-collapse collapse" data-bs-parent="#faqs">
          <div class="accordion-body ps-16">
            <p class="-fs-1 text-secondary tracking-1 lh-lg">
              可以進行簡易的編輯，內建 5
              種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
            </p>
          </div>
        </div>
        <div class="accordion-decoration"></div>
      </div>
    </div>
  </div>
</template>
