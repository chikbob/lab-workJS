<template>
  <div class="basket">
    <div class="basket__block">
      Код товара: {{ pCode }}<br>
      Масса товара: {{ pMass }} грамм.<br>
      Цена товара: {{ pFinal }} рублей
    </div>
    <div class="basket__block">
      <button @click="$emit('deleteItem', id)" class="basket__block-button">Удалить</button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  id: Number,
  code: Number,
  mass: Number,
  final: Number
})

let id = props.id
let pCode = props.code
let pMass = props.mass
let pFinal = props.final

</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;

  &__block {
    margin: 0 10rem;

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