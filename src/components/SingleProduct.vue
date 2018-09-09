<template>

    <div class="product">
        <figure class="product__item">
            <figcaption class="product__price">{{price}} </figcaption>
            <img class="product__image" :src="img" alt="test">
        <div class="product__content product__content--hovered">
                <h5>{{title}}</h5>
                <p>{{description}}</p>
              <font-awesome-icon icon="shopping-cart" class="product__icon"></font-awesome-icon>
              <font-awesome-icon icon="heart" class="product__icon"></font-awesome-icon>
              <font-awesome-icon icon="times" class="product__icon"></font-awesome-icon>
        </div>
        </figure>
    
    </div>

</template>

<script>
export default {
    name: "SingleProduct",
    props: ["title", "price", "description", "img"],
   
}
</script>
