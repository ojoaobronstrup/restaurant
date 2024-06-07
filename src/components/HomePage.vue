<template>
  <header class="header">
    <img src="./../assets/icon-restaurant.svg" alt="restaurant icon">
    <img src="./../assets/icon-hamburguer.svg" alt="restaurant icon">
  </header>
  <body>
    <div>
      <h2>LISTA DE MESAS</h2>
      <div>
        <button @click="firstFloor" @blur="nothingSelected">Primeiro Piso</button>
        <button @click="secondFloor" @blur="nothingSelected">Segundo Piso</button>
      </div>
    </div>
  </body>
  <footer>

  </footer>
</template>

<script>
  export default {
    data() {
      return {
        floor: 0,
      }
    },

    methods: {
      firstFloor() {
        this.floor = 1;
        console.log(this.floor)
      },
      secondFloor() {
        this.floor = 2;
        console.log(this.floor)
      },
      nothingSelected() {
        this.floor = 0;
        console.log(this.floor)
      }
    }
  }
</script>

<style>
  .header{
    width: 100vw;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
  }
</style>
