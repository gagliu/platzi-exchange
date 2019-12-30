import Vue from "vue"; //Importa la libreria descargada con NPM
import App from "./App.vue"; //Importa el componente App
import "@/assets/css/tailwind.css";
//No se va a indicar ningun nombre porque solo se quiere importar el archivo, al ser un archivo css solo solo se requiere que sea cargado por el browser
//@ truco de webpack y vue para hacer referencia de manera RELATIVA al directorio src
//hace referencia al directorio source (src)
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router, //cuando el nombre de la propiedad es igual al de la variable puede escribirse una sola vez
  render: h => h(App) //Reemplaza el seteo de la app dentro del componente
}).$mount("#app"); //Mount hace lo mismo que el
