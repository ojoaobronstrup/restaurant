<template>
  <header class="header">
    <img src="./../assets/icon-restaurant.svg" alt="restaurant icon">
    <img src="./../assets/icon-hamburguer.svg" alt="restaurant icon">
  </header>
  <body class="home-container">
    <div class="table-list">
      <h2 class="table-list-title">LISTA DE MESAS</h2>
      <div class="select-floor-buttons">
        <button class="select-floor-button" :class="{ active: floor === 1 }" @click="firstFloor">Primeiro Piso</button>
        <button class="select-floor-button" :class="{ active: floor === 2 }" @click="secondFloor">Segundo Piso</button>
      </div>
    </div>
    <div class="tables">
      <TableFigure/>
      <TableFigure/>
      <TableFigure/>
      <TableFigure/>
    </div>
  </body>
  <footer>

  </footer>
</template>

<script setup>
  import { ref } from 'vue';
  import TableFigure from './TableFigure.vue'

    let floor = ref(1)
    const firstFloor = () => {
      floor.value = 1;
      console.log(floor.value)
    }
    const secondFloor = () => {
      floor.value = 2;
      console.log(floor.value)
    }

</script>

<style>
  .header{
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
  }

  .home-container{
    height: 80vh;
    padding: 0 20px 20px 20px;
  }

  .table-list{
    height: 129px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid lightgray;
  }

  .table-list-title{
    font-size: 30px;
    font-weight: 600;
  }

  .select-floor-buttons{
    display: flex;
    gap: 20px;
  }

  .select-floor-button{
    height: 40px;
    width: 120px;
    font-weight: 500;
    font-size: 15px;
    background-color: #FAFAFA;
    color: #A9A9A9;
    border: none;
    border-radius: 5px;
  }

  .select-floor-button.active{
    background-color: #E8C5A3;
    color: black;
  }

  .tables{
    margin-top: 28px;
    height: 364px;
    width: 385px;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
</style>
