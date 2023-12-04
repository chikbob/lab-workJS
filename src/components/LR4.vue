<template>
  <div class="layout">
    <div class="block">
      <div class="block__text">
        Лабораторная работа №4
      </div>
      <div class="block__text" id="myDiv">
        Some text
      </div>
      <div class="block__text" :class="{ switch: isChanged }">
        <button @click="changeColor" class="block__button">
          Изменить цвет
        </button>
      </div>
      <div class="block__text">
        <input class="block__input" placeholder="Введите значение" v-model="text">
      </div>
      <div class="block__text" :class="{ switch: isChanged }">
        <button @click="createObject({id, text})" class="block__button">
          Добавить обьект
        </button>
      </div>
      <div class="block__list">
        <div v-for="item in userTexts" :key="item.id">
          <div class="block__list-item">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let isChanged = ref(false)
let text = ref('')
let id = ref(1)
let userTexts = ref([{id: id.value, text: 'aboba'}])

function changeColor() {
  isChanged.value = !isChanged.value
  if (isChanged.value === true) {
    document.getElementById('myDiv').style.backgroundColor = 'yellow';
    document.getElementById('myDiv').style.marginLeft = '50px';
    document.getElementById('myDiv').style.marginTop = '50px';
  } else {
    document.getElementById('myDiv').style.backgroundColor = 'transparent';
    document.getElementById('myDiv').style.margin = '2rem auto';
  }
}

function createObject(data) {
  userTexts.value.push(data)
}
</script>

<style lang="scss" scoped>
.layout {
  height: auto;
  min-height: 77.2vh;
}

.block {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem auto;
  }

  &__button {
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

  &__input {
    width: 15rem;
    border: #212121 solid 3px;
    background-color: #363636;
    color: #e5e5e5;
    border-radius: 0.5rem;

    font-family: Marmelad, sans-serif;
    font-size: 1.5rem;
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 0 0 2rem;

    &-item {
      display: flex;
      justify-content: center;
    }
  }
}
</style>