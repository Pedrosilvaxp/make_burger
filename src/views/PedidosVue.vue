<template>
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    
    <DashboardView />
  </div>
</template>

<script>
import DashboardView from "../components/DashboardView.vue";

export default {
  name: "PedidosVue",
  components: {
    DashboardView
  }
}
</script>