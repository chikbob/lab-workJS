<template>
  <div class="home">
    <div class="home__text">ДОБРО ПОЖАЛОВАТЬ!</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {
  height: 84vh;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 84vh;

    font-size: 10rem;

    -webkit-text-stroke: 3px black;
    -webkit-text-fill-color: transparent;
  }
}
</style>