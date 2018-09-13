<template>
  <product></product>
</template>

<script>
    import hero from "@/components/HeroSection.vue";
    import product from "@/components/DetailProduct.vue";
    export default {
        name: "productpage",
        components: {
            hero,
            product
        },
        data() {
            return {
                activetab: 1
            };
        }
    };
</script>