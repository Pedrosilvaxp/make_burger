<template>
    <div id="main-banner" class="text-left">
        <h1 class="rounded-xl bg-white text-dark text-left p-4 px-5"><div class="opacity-40">Make Your</div><strong class="text-yellow-300 opacity-">Burger</strong></h1>
    </div>
</template>

<script>
export default {
    name: 'BannerBar',
}
</script>

<style scoped>
#main-banner {
    background-image: url('/public/img/burger.jpg');
    background-position: 0 -200px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
#main-banner h1 {
    font-size: 60px;
}
</style>
