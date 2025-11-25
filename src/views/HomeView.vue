<template>
  <BannerBar />
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BannerBar from '../components/BannerBar.vue';
import BurgerForm from '../components/BurgerForm.vue';

export default {
  name: "HomeView",
  components: {
    BannerBar,
    BurgerForm
  }
}
</script>
