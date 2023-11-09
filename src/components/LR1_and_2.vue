<template>
  <div class="block">
    <div class="block__text">
      ЛР№1-2
    </div>
    <CalcProductLr1 @addToCart="addToCart"/>
    <Basket @deleteItem="deleteItem" v-for="item in basket"
            :key="item.id"
            :id="item.id"
            :code="item.code"
            :mass="item.mass"
            :final="item.final">
    </Basket>
    <div class="block__text">Итоговая сумма: {{ sumPrice }} рублей</div>
  </div>
</template>

<script setup>
import CalcProductLr1 from "./task_components/calcProductLr1.vue";
import {ref} from "vue";
import Basket from "./task_components/basket.vue";

const basket = ref([]);
let sumPrice = ref(0)

function addToCart(data) {
  data.id += 1;
  basket.value.push(data);
  let flag = 1
  calcSum(flag)
}

function deleteItem(data) {
  basket.value = basket.value.filter(item => item.id !== data)
  let flag = 0
  calcSum(flag)
}

function calcSum(flag) {
  sumPrice.value = 0;
  for (let i = 0; i < basket.value.length; i++) {
    if (flag === 1) {
      sumPrice.value += Math.abs(parseFloat(basket.value[i].final))
    } else {
      console.log(basket.value)
      sumPrice.value += parseFloat(basket.value[i].final)
      console.log(sumPrice.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  height: auto;
  min-height: 77.2vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem 0;

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
  }
}
</style>