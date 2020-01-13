<template>
  <div>
    <px-assets-table v-bind:assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    //Propiedad data para guardar los assets
    return {
      assets: []
    };
  },

  created() {
    //Hoook created se ejecuta cuando se crea el componente para hacer la interaccion con la api y poder setear el array de assets
    //Se obtiene la lista de assets y se asigna esa lista de assets a mi array
    api.getAssets().then(assets => (this.assets = assets));
  }
};
</script>
