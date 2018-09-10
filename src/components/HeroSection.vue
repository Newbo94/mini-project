<template>
    <section class="herosection">
        <h1 class="herosection__title">{{title}}</h1>
        <h4 class="herosection__subtitle">{{subtitle}} </h4>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    props: ['title', 'subtitle', 'img']
}
</script>
