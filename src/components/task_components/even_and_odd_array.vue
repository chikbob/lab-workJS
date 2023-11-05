<template>
  <div class="even_and_odd_array">
    <div class="even_and_odd_array__block">
      <button @click="generateArray" class="even_and_odd_array__block-button">Генерировать</button>
      <div class="even_and_odd_array__block-text">{{ newMassive }}</div>
      <div class="even_and_odd_array__block-text">Количество нечетных чисел: {{ dev3Massive.length }}</div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let newMassive = ref([])
let dev3Massive = [];

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateArray() {
  dev3Massive = [] // Для очистки массива, чтобы не было переполнения
  const massive = [];
  for (let i = 0; i <= randomIntFromInterval(5, 15); i++) {
    massive.push(randomIntFromInterval(-99, 99))
  }
  newMassive.value = massive
  return checkDev3(newMassive.value)
}

function checkDev3(massive) {
  for (let i = 0; i <= massive.length; i++) {
    if (massive[i] % 3 === 0 || massive[i] % 5 === 0 || massive[i] % 7 === 0) {
      dev3Massive.push(massive[i])
    } else {
      console.log('aboba')
    }
  }
  return dev3Massive
}

function calcArray() {

}
</script>

<style lang="scss" scoped>
.even_and_odd_array {
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