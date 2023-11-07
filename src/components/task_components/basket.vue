<template>
  <div class="basket">
    <div class="basket__block">
      Код товара: {{ code }}<br>
      Масса товара: {{ mass }} грамм.<br>
      Цена товара: {{ final }} рублей
    </div>
<!--    <div class="basket__block">-->
<!--      <button></button>-->
<!--    </div>-->
  </div>
</template>

<script setup>

defineProps({
  code: Number,
  mass: Number,
  final: Number
})
</script>

<style lang="scss" scoped>
.basket {
  margin: 2rem 0;
}
</style>