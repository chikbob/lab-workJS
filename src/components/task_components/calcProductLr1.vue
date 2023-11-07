<template>
  <div class="calcProductLr1">
    <div class="calcProductLr1__block">
      <div class="calcProductLr1__block-text">
        Код товара:
        <input class="calcProductLr1__block-input" type="number" v-model="code">
      </div>
      <div class="calcProductLr1__block-text">
        Масса товара:
        <input class="calcProductLr1__block-input" type="number" v-model="mass">
      </div>
      <div class="calcProductLr1__block-text">
        {{ checkCode(code, mass) }}
      </div>
      <div class="calcProductLr1__block__text">
        <button @click="addToCart" class="calcProductLr1__block-button">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineEmits} from "vue";

let code = ref(1);
let mass = ref(0);
let newFinal = ref(0);
let newCode = ref(0)
let newMass = ref(0)
let TextFinal = ref("Введенный код отсутствует");

const emits = defineEmits();

function checkCode(code, mass) {
  let final = 0;
  switch (code) {
    case 1:
      final = mass * 0.5;
      break;
    case 2:
      final = mass * 0.6;
      break;
    case 3:
      final = mass * 0.7;
      break;
    case 4:
      final = mass * 0.5;
      break;
    case 5:
      final = mass * 0.6;
      break;
    case 6:
      final = mass * 0.8;
      break;
    case 7:
      final = mass * 0.9;
      break;
    case 8:
      final = mass * 1.25;
      break;
    case 9:
      final = mass * 1.5;
      break;
    case 10:
      final = mass * 2;
      break;
  }
  final = final.toFixed(2);
  if (code > 10) {
    TextFinal.value = "Введенный код отсутствует";
  } else {
    TextFinal.value = "Цена: " + final + " рублей";
  }
  newFinal = final
  newCode = code
  newMass = mass
  return TextFinal.value;
}

function addToCart() {
  console.log(code.value)
  console.log(mass.value)
  if (code.value > 10 || code.value < 1) {
  } else {
    if (mass.value <= 0) {
    } else {
      emits("addToCart", {newCode, newMass, newFinal});
    }
  }


}
</script>

<style lang="scss" scoped>
.calcProductLr1 {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0 0;

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 0 1rem 0;

    &-text {
      margin: 1rem 0;
    }

    &-input {
      width: 7rem;
      border: #212121 solid 3px;
      background-color: #363636;
      color: #e5e5e5;
      border-radius: 0.5rem;
      margin: 0 0 0 1rem;

      font-family: Marmelad, sans-serif;
      font-size: 1.5rem;
    }

    &-button {
      width: fit-content;
      border: #212121 solid 3px;
      background-color: #363636;
      color: #e5e5e5;
      border-radius: 0.5rem;
      padding: 0.5rem;

      font-family: Marmelad, sans-serif;
      font-size: 1.5rem;

      margin: 1rem 0;

      cursor: pointer;
    }
  }

}
</style>