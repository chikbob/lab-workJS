<template>
  <div class="block">
    <div class="block__text">
      ЛР№1
    </div>
    <div class="block__factorial">
      Задание №1: Составьте алгоритм и программу с использованием языка программирования JavaScript для расчета
      факториала натурального числа
      <Factorial/>
    </div>
  </div>
</template>

<script setup>
import Factorial from "./task_components/factorial.vue";

</script>

<style lang="scss" scoped>
.block {
  height: 84vh;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem 0;
  }

  &__factorial {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: justify;

    width: 60%;

    margin: 2rem auto;
  }
}
</style>