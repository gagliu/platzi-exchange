<template>
  <div id="app" class="bg-blue-400">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- Componente HelloWorld -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"; //Se importa el componente HelloWorld

//Es la misma configuracion que se realizaba para crear una instancia o componente
//name permite asignar un nombre para el componente
export default {
  name: "app",
  //Se importa el componente donde se quiere usar y declararlo dentro de la propiedad componentes en el componente padre para decirle que esta disponible para ser utilizado
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
