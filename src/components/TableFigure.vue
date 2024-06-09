<template>
    <figure class="table">
        <img src="./../assets/table-big.svg" alt="table icon">
        <figcaption class="table-legend">
          <button class="quantity-handlers" @click="removePeopleQuantity">-</button>
          <h3>{{ peopleQuantity }}</h3>
          <button class="quantity-handlers" @click="addPeopleQuantity">+</button>
        </figcaption>
      </figure>
</template>

<script setup>
    import { ref } from 'vue'

    let peopleQuantity = ref(0)
    const addPeopleQuantity = () => {
        if (peopleQuantity.value >= 0 && peopleQuantity.value < 8) {
            peopleQuantity.value += 1
        }
    }
    const removePeopleQuantity = () => {
        if (peopleQuantity.value > 0 && peopleQuantity.value <= 8) {
            peopleQuantity.value -= 1
        }                         
    }
</script>
<style>
    .table{
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        height: 186px;
        width: 185px;
        position: relative;
    }

    .table-legend{
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #8BB5BE;
        height: 58px;
        font-size: 35px;
        font-weight: 600;
        border-radius: 0 0 15px 15px;
    }

    .quantity-handlers{
        background-color: transparent;
        height: 28px;
        width: 28px;
        border-radius: 100%;
        border: 3px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: inherit;
        font-weight: inherit;
    }
</style>