<template>
  <div class="factorial">
    <div class="factorial__block">
      <div class="factorial__block-text">
        Ввод:
      </div>
      <input class="factorial__block-input" type="number" v-model="factorial">
    </div>
    <div class="factorial__number">Ответ: {{ calcFactorial(factorial) }}</div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let factorial = ref(0)

function calcFactorial(num) {
  let answer = 1;
  if (num === 0 || num === 1) {
    return answer;
  } else if (num > 170) {
    return "Бесконечность"
  } else if (num > 1) {
    for (let i = num; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "Число не подходит!"
  }
}


</script>

<style lang="scss" scoped>
.factorial {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 0 1rem 0;

    &-text {

    }

    &-input {
      width: 5rem;
      border: #212121 solid 3px;
      background-color: #363636;
      color: #e5e5e5;
      border-radius: 0.5rem;
      margin: 0 0 0 1rem;

      font-family: Marmelad, sans-serif;
      font-size: 1.5rem;
    }
  }



  &__number {
    display: flex;

  }

}

</style>