<template>
  <div class="block">
    <div class="block__text">
      ЛР№1
    </div>
    <CalcProductLr1 @addToCart="addToCart"/>
    <Basket @deleteItem="deleteItem" v-for="item in basket"
            :key="item.id"
            :id="item.id"
            :code="item.code"
            :mass="item.mass"
            :final="item.final">
    </Basket>
  </div>
</template>

<script setup>
import CalcProductLr1 from "./task_components/calcProductLr1.vue";
import {ref} from "vue";
import Basket from "./task_components/basket.vue";

const basket = ref([]);

function addToCart(data) {
  data.id = basket.value.length + 1;
  basket.value.push(data);
}

function deleteItem(data) {
  basket.value = basket.value.filter(item => item.id !== data)
}
</script>

<style lang="scss" scoped>
.block {
  height: auto;
  min-height: 77.5vh;
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