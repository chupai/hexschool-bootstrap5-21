<script>
export default {
  name: 'ProductComment',
};
</script>

<template>
  <div id="product-comment" class="tab-pane fade">
    <div class="d-none d-lg-block -fs-1 border-start border-3 border-primary p-4 mb-8">
      只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a
        href=""
        class="tracking-1 text-danger text-decoration-none"
        >聯絡提案人</a
      >！
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center gap-4 mb-4">
          <img
            src="@/assets/images/product/user1.jpg"
            alt="留言者1"
            class="rounded-pill"
            width="60"
            height="60"
          />
          <div class="tracking-2">
            <h5>廖小杰</h5>
            <p class="-fs-1 text-secondary">2020年5月22日 11:32</p>
          </div>
        </div>
        <p class="tracking-1 mb-4">
          晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！
        </p>
        <div class="bg-light rounded-1 p-4">
          <h6 class="-fs-1 text-danger">提案者回復</h6>
          <p class="tracking-1">你要嘛起床的時候開燈，要嘛給我們更多錢開發阿</p>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center gap-4 mb-4">
          <img
            src="@/assets/images/product/user2.jpg"
            alt="留言者2"
            class="rounded-pill"
            width="60"
            height="60"
          />
          <div class="tracking-2">
            <h5>卡阿伯</h5>
            <p class="-fs-1 text-secondary">2020年5月22日 11:32</p>
          </div>
        </div>
        <p class="tracking-1 mb-4">希望有更多花色可以選擇！我女兒最近喜歡綠色</p>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center gap-4 mb-4">
          <img
            src="@/assets/images/product/user2.jpg"
            alt="留言者2"
            class="rounded-pill"
            width="60"
            height="60"
          />
          <div class="tracking-2">
            <h5>賈師</h5>
            <p class="-fs-1 text-secondary">2020年5月22日 11:32</p>
          </div>
        </div>
        <p class="tracking-1 mb-4">
          可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣
        </p>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex align-items-center gap-4 mb-4">
          <img
            src="@/assets/images/product/user2.jpg"
            alt="留言者2"
            class="rounded-pill"
            width="60"
            height="60"
          />
          <div class="tracking-2">
            <h5>竹白</h5>
            <p class="-fs-1 text-secondary">2020年5月22日 11:32</p>
          </div>
        </div>
        <p class="tracking-1 mb-4">test123 看一下我是不是真的可以留言</p>
      </div>
    </div>
  </div>
</template>
