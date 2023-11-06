<template>
  <div class="footer">
    <div class="footer__block">
      <a href="https://www.donationalerts.com/r/chikbob" target="_blank" class="footer__text">
        <img class="footer__img" src="./assets/donationAlerts/SVG/DA_Alert_White.svg" alt="donation_alerts">
      </a>
      <a href="https://github.com/chikbob/lab-workJS" target="_blank" class="footer__text">
        <img class="footer__img" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
             alt="git hub">
      </a>
    </div>
    <div class="footer__block-mini">
      <div class="footer__text-mini">© Все права защищены</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background: #131313;

  width: 100%;
  height: auto;
  margin: auto;

  border-top: 2px solid #f5f5f5;

  &__block {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    height: 3rem;

    margin: 2rem 0 0 0;

    &-mini {
      margin: 1rem 0;
    }
  }

  &__text {
    color: #f5f5f5;
    text-decoration: none;

    height: 3rem;

    margin: 0 1rem;

    &-mini {
      font-size: 1rem;

      color: #c4c4c4;
      text-decoration: none;
    }
  }

  &__img {
    width: 3rem;
    height: 3rem;

  }
}
</style>