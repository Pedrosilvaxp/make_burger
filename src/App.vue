<template>
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <FooterLink/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterLink from '@/components/FooterLink.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterLink
  },
  data() {
    return {
      logo_src: "./img/logoin.png",
      app_name: "Make your burger",
      larguraTela: window.innerWidth,
      ativarMenuMobile: false,
    }
  }
}
</script>

<style>
* {
  font-family: Poppins;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

#logo {
    width: 40px;
    height: 40px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}

@media (max-width: 600px) {
    header {z-index: 1;}
}
</style>
