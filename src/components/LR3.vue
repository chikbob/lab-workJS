<template>
  <div class="block">
    <div class="block__text">
      ЛР№3
    </div>
    <div class="block__task">
      Задание №1: Составьте алгоритм и программу с использованием языка программирования JavaScript для расчета
      факториала натурального числа
      <factorial/>
    </div>
    <div class="block__task">
      Задание №2: Разработайте рекурсивную функцию и реализуйте ее с приминением языка программирования JavaScript
      которая будет принимать в качестве аргумента массив чисел, и возвращать количество нечетных чисел в
      массиве (как положительных, так и отрицательных), и выводить информацию о количестве нечетных чисел пользователю.
      <even_and_odd_array/>
    </div>
  </div>
</template>

<script setup>
import factorial from "./task_components/factorial.vue";
import even_and_odd_array from "./task_components/even_and_odd_array.vue";

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

  &__task {
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