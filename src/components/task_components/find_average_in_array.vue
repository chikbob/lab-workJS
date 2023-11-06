<template>
  <div class="find_average_in_array">
    <div class="find_average_in_array__block">
      <button @click="generateArray" class="find_average_in_array__block-button">Генерировать</button>
      <div class="find_average_in_array__block-text">{{ newMassive }}</div>
      <div class="find_average_in_array__block-text">Среднее арифметическое: {{ average.toFixed(2) }}
        <br>
        Массив: {{ greaterNumbers }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

const newMassive = ref([3, 35, 18, 20, 16, 23, 5]);
let average, greaterNumbers;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArray() {
  const massive = [];
  for (let i = 0; i <= randomIntFromInterval(5, 15); i++) {
    massive.push(randomIntFromInterval(-99, 99));
  }
  newMassive.value = massive;
  const result = findAverage(newMassive.value);
  average = result.averageNum;
  greaterNumbers = result.averageArray;
}

function findAverage(massive) {
  let average = 0;
  let greaterNumbers = [];
  for (let i = 0; i < massive.length; i++) {
    average += massive[i];
  }
  average = average / massive.length;

  for (let i = 0; i < massive.length; i++) {
    if (massive[i] > average) {
      greaterNumbers.push(massive[i]);
    }
  }
  return {
    averageNum: average,
    averageArray: greaterNumbers,
  };
}

onBeforeMount(() => {
  const result = findAverage(newMassive.value);
  average = result.averageNum;
  greaterNumbers = result.averageArray;
});
</script>

<style lang="scss" scoped>
.find_average_in_array {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-button {
      width: fit-content;
      border: #212121 solid 3px;
      background-color: #363636;
      color: #e5e5e5;
      border-radius: 0.5rem;
      padding: 0.5rem;

      font-family: Marmelad, sans-serif;
      font-size: 1.5rem;

      cursor: pointer;
    }

    &-text {
      display: flex;

      margin: 1rem 0 0 0;
    }
  }
}
</style>