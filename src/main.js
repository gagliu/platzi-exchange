import Vue from "vue"; //Importa la libreria descargada con NPM
import App from "./App.vue"; //Importa el componente App

Vue.config.productionTip = false;

new Vue({
  render: h => h(App) //Reemplaza el seteo de la app dentro del componente
}).$mount("#app"); //Mount hace lo mismo que el
