<template>

    <div class="product">
        <figure class="product__item">
            <figcaption class="product__price">{{title}} </figcaption>
            <img class="product__image" :src="img" alt="test">
        </figure>
    
    </div>

</template>

<script>
export default {
    name: "signleproduct",
    props: ["title", "price", "description", "img"],
   
}
</script>
