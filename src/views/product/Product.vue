<script>
import tooltip from '@/directives/tooltip';
import ProductShow from './components/ProductShow.vue';
import ProductFaq from './components/ProductFaq.vue';
import ProductProcess from './components/ProductProcess.vue';
import ProductComment from './components/ProductComment.vue';
import ProductForm from './components/ProductForm.vue';

export default {
  name: 'Product',
  components: {
    ProductShow,
    ProductFaq,
    ProductProcess,
    ProductComment,
    ProductForm,
  },
  directives: {
    tooltip,
  },
};
</script>

<template>
  <section class="py-4 py-lg-12 bg-light">
    <div class="container">
      <span class="badge bg-secondary px-4 mb-1"> 魔法科技 </span>
      <h1 class="h2 fw-bold mb-6 tracking-3">拍出會動的照片｜LivePhotos 魔法拍立得</h1>
      <div class="row">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <img
            src="@/assets/images/product/image.jpg"
            alt="拍出會動的照片｜LivePhotos 魔法拍立得"
            class="img-fluid rounded-4"
          />
        </div>
        <div class="col-lg-5">
          <span class="-fs-1 text-dark font-display"> 目標 $600,000 </span>
          <p class="h2 font-display fw-bold mt-2">$280,047</p>
          <div class="progress rounded-pill" style="">
            <div class="text-secondary progress-bar bg-primary" style="width: 41%">41%</div>
          </div>
          <div class="d-flex mt-6">
            <div class="flex-fill">
              <span class="-fs-1 text-dark">贊助人數</span>
              <p class="h2 font-display fw-bold mt-2">1374<span class="h3 fw-bold"> 人</span></p>
            </div>
            <div class="flex-fill">
              <span class="-fs-1 text-dark">募資倒數</span>
              <p class="h2 font-display fw-bold mt-2">27<span class="h3 fw-bold"> 天</span></p>
            </div>
          </div>
          <div class="d-flex gap-md-6 text-dark justify-content-between justify-content-md-start">
            <div v-tooltip:top="'認證標章'" class="d-flex align-items-center">
              <img
                src="/src/assets/icons/good01.svg"
                alt="認證標章"
                class="w-5 h-5 w-lg-6 w-lg-6"
              />
              <span class="d-block d-lg-none ms-2 -fs-2">認證標章</span>
            </div>
            <div v-tooltip:top="'品質保證'" class="d-flex align-items-center">
              <img
                src="/src/assets/icons/good02.svg"
                alt="品質保證"
                class="w-5 h-5 w-lg-6 w-lg-6"
              />
              <span class="d-block d-lg-none ms-2 -fs-2">品質保證</span>
            </div>
            <div v-tooltip:top="'原生創意'" class="d-flex align-items-center">
              <img
                src="/src/assets/icons/good03.svg"
                alt="原生創意"
                class="w-5 h-5 w-lg-6 w-lg-6"
              />
              <span class="d-block d-lg-none ms-2 -fs-2">原生創意</span>
            </div>
            <div v-tooltip:top="'人氣王'" class="d-flex align-items-center">
              <img src="/src/assets/icons/good04.svg" alt="人氣王" class="w-5 h-5 w-lg-6 w-lg-6" />
              <span class="d-block d-lg-none ms-2 -fs-2">人氣王</span>
            </div>
          </div>
          <div class="bg-white border-start border-3 border-primary text-dark p-4 my-6">
            <p>
              專案募資中！<br />在
              <span class="fw-bold">2021/06/14 23:59</span> 募資結束前，您都可以贊助我們！
            </p>
          </div>
          <div class="row g-2">
            <div class="col-12">
              <button class="btn btn-primary btn-lg fw-bold w-100" type="button">贊助專案</button>
            </div>
            <div class="col-7">
              <button
                class="
                  btn btn-outline-secondary btn-lg btn-icon-hover-danger
                  fw-bold
                  w-100
                  border-2
                "
                type="button"
              >
                <i class="icon fas fa-heart custom-heart pe-1"></i>
                追蹤專案
              </button>
            </div>
            <div class="col-5">
              <button class="btn btn-outline-secondary btn-lg fw-bold w-100 border-2" type="button">
                <i class="fas fa-share-alt pe-1"></i>
                分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container px-0 px-lg-3">
      <ul id="myTab" class="nav nav-tabs justify-content-between justify-content-lg-start">
        <li class="nav-item">
          <button
            type="button"
            class="nav-link px-4 px-lg-5 py-4 py-lg-6 tracking-1 active"
            data-bs-toggle="tab"
            data-bs-target="#show"
          >
            專案介紹
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link px-4 px-lg-5 py-4 py-lg-6 tracking-1"
            data-bs-toggle="tab"
            data-bs-target="#faq"
          >
            常見問題
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link px-4 px-lg-5 py-4 py-lg-6 tracking-1"
            data-bs-toggle="tab"
            data-bs-target="#process"
          >
            目前進度
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="nav-link px-4 px-lg-5 py-4 py-lg-6 tracking-1"
            data-bs-toggle="tab"
            data-bs-target="#comment"
          >
            留言
          </button>
        </li>
      </ul>
    </div>
  </section>

  <section class="border-top border-1 border-info">
    <div class="container py-8 py-lg-12">
      <div class="row">
        <div class="col-lg-8">
          <div class="tab-content">
            <product-show></product-show>
            <product-faq></product-faq>
            <product-process></product-process>
            <product-comment></product-comment>
          </div>
          <product-form class="d-none d-lg-block"></product-form>
        </div>
        <div class="col-lg-4 mt-8 mt-lg-0">
          <aside>
            <div class="border border-2 border-light rounded-3 p-4 mb-8">
              <div class="d-flex align-items-center mb-4">
                <img
                  src="@/assets/images/product/store.jpg"
                  alt="缺錢事務所"
                  class="img-fluid rounded-circle border border-primary border-2 me-4"
                />
                <div>
                  <h5 class="tracking-2">缺錢事務所</h5>
                  <p class="tracking-1">已發起 1 個專案</p>
                </div>
              </div>
              <p class="tracking-1 mb-4 d-none d-lg-block">
                需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
              </p>
              <div class="d-flex justify-content-between">
                <div class="d-flex gap-2">
                  <a
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      btn btn-secondary
                      rounded-circle
                    "
                    style="width: 30px; height: 30px"
                  >
                    <i class="fab fa-facebook-f text-white lh-lg"></i>
                  </a>
                  <a
                    class="
                      d-flex
                      justify-content-center
                      align-items-center
                      btn btn-secondary
                      rounded-circle
                    "
                    style="width: 30px; height: 30px"
                  >
                    <i class="fab fa-youtube text-white lh-lg"></i>
                  </a>
                </div>
                <button class="btn btn-outline-secondary btn-sm -fs-2 px-4" type="button">
                  <i class="far fa-comment-dots me-2 text-secondary"></i>
                  聯絡我們
                </button>
              </div>
            </div>
            <h5
              class="
                text-center
                fw-bold
                tracking-3
                bg-light
                rounded-1
                border-start border-end border-primary border-4
                py-2
                mb-4
              "
            >
              選擇一個方案來支持
            </h5>
            <div class="d-flex flex-column gap-4">
              <div class="card border-info overflow-hidden" v-for="n of 3" :key="n">
                <img src="@/assets/images/product/plan.jpg" class="card-img-top" alt="團購方案" />
                <div class="card-body">
                  <div class="d-flex justify-content-between border-bottom border-info pb-2 mb-2">
                    <span class="tracking-2">限時優惠</span>
                    <span class="font-display">2 days 20:05:20</span>
                  </div>
                  <h3 class="h5 card-title tracking-3 fw-bold">買一送一，只有兩百組別錯過</h3>
                  <p class="card-subtitle fs-4 font-display fw-bold">NT$ 1600</p>
                  <div class="d-flex gap-2 mb-1">
                    <span class="badge -fs-2 bg-info text-secondary px-4 mb-1">已被贊助88次</span>
                    <span class="badge -fs-2 bg-secondary px-4 mb-1"
                      >限量<span class="text-primary">200</span>個</span
                    >
                  </div>
                  <p class="card-text text-secondary tracking-1 mb-4">
                    受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
                  </p>
                  <button class="btn btn-primary tracking-1 fw-bold w-100 py-3">贊助此專案</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="col-12 d-block d-lg-none">
          <product-form></product-form>
        </div>
      </div>
    </div>
  </section>
</template>
