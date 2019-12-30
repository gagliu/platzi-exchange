<template>
  <main>
    <px-header />
    <!-- Este componente lo provee el vue router
    Permite establecer el html que se va reemplazar a medida que se cambia la ruta -->
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
//import PxAssetsTable from "@/components/PxAssetsTable";

//Es la misma configuracion que se realizaba para crear una instancia o componente
//name permite asignar un nombre para el componente
export default {
  name: "app",
  //Se importa el componente donde se quiere usar y declararlo dentro de la propiedad componentes en el componente padre para decirle que esta disponible para ser utilizado
  components: { PxHeader }
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
