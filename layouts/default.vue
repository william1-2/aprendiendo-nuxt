<!--otro componente-->
<template>
    <div>
        <navbar>
        </navbar>
        <h1>esto se repite en todas las paginas </h1>
        <Nuxt />  <!--es todo el contenido-->
        esto es un footer
    </div>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components:{navbar}
}
</script>

