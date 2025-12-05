<template>
    <div id="nav" class="bg-white flex items-center justify-around p-3 text-sm sm:text-base">
        <img id="logo" :src="logo" :alt="alt">

        <div class="flex align-middle justify-around gap-x-2">
            <router-link to="/">Home</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["logo", "alt"]
}
</script>

<style scoped>
#nav #logo_url {
    margin: auto;
    margin-left: 0;
}

#logo {
    width: 40px;
    height: 40px;
}

#nav a {
    text-decoration: none;
    transition: .5s;
}
#nav a:hover {
    color: rgba(70, 70, 18, 0.345);
}
</style>