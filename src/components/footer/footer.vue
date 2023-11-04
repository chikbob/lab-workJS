<template>
  <div class="footer">
    <div class="footer__block">
      <a href="https://github.com/chikbob" target="_blank" class="footer__text">
        chikbob
      </a>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  background: #131313;

  width: 100%;
  height: 4.5rem;
  margin: auto;

  border-top: 2px solid #f5f5f5;

  &__block {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  &__text {
    color: #f5f5f5;
    text-decoration: none;
  }
}
</style>