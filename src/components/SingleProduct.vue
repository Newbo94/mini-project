<template>

    <div class="product">
        <figure class="product__item">
            <figcaption class="product__price">&pound;{{price}} </figcaption>
              <img class="product__thumbnail product__thumbnail--hovered" :src="thumb1" alt="test">
            <img class="product__thumbnail product__thumbnail--hovered" :src="thumb2" alt="test">
            <img class="product__image  " :src="img" alt="test">
          

        <div class="product__content product__content--hovered">
            <font-awesome-icon icon="info-circle" class="product__thumbicon" size="4x"></font-awesome-icon>

          
                <h5>{{title}}</h5>
                <p>{{description}}</p>
              <font-awesome-icon icon="shopping-cart" class="product__icon" size="1x"></font-awesome-icon>
              <font-awesome-icon icon="heart" class="product__icon" size="1x"></font-awesome-icon>
              <font-awesome-icon icon="times" class="product__icon" size="1x"></font-awesome-icon>
        </div>
        </figure>
    </div>

</template>

<script>
export default {
  name: "SingleProduct",
  props: ["title", "price", "description", "img", "thumb1", "thumb2"]
};
</script>
