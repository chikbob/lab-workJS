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
    <div class="block__task">
      Задание №3: Инициализируйте массив следующим образом: const myArr = [3, 35, 18, 20, 16, 23, 5];
      <br> Затем составьте программу с использованием языка JavaScript для определения количества элементов массива,
      которые больше чем величина среднего значения всех элементов массива.
      <find_average_in_array/>
    </div>
  </div>
</template>

<script setup>
import factorial from "./task_components/factorial.vue";
import even_and_odd_array from "./task_components/even_and_odd_array.vue";
import find_average_in_array from "./task_components/find_average_in_array.vue";
</script>

<style lang="scss" scoped>
.block {
  height: auto;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    margin: 2rem auto;

    //background: rgba(215, 215, 215, 0.4);
  }

  &__task {
    //background: rgba(215, 215, 215, 0.4);

    text-align: justify;

    width: 55%;

    margin: 2rem auto;

    &:last-child {
      margin: 2rem auto 0;
    }
  }
}
</style>