<template>
  <div class="header">
    <div class="header__block-main">
      <router-link class="header__link-main" to="/">Домой</router-link>
    </div>
    <div class="header__block">
      <router-link class="header__link" to="/lr1_and_2">ЛР№1-2</router-link>
      <router-link class="header__link" to="/lr3">ЛР№3</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  background: #131313;

  width: 100%;
  height: 4.5rem;
  margin: auto;

  border-bottom: 2px solid #f5f5f5;

  &__block {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 90%;

    &-main {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 15%;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    color: #f5f5f5;
    text-decoration: none;

    margin: 0 2rem;

    &-main {
      color: #f5f5f5;
      text-decoration: none;
    }
  }
}
</style>