<template>
    <div class="productwrapper">
     <div v-for="products in product" :key="products.productId" class="product">
       
            <figure class="product__item">
            <figcaption class="product__price">&pound; {{products.productPrice}} </figcaption>
              <img class="product__thumbnail product__thumbnail--hovered" :src="products.productThumb[0]" alt="test">
            <img class="product__thumbnail product__thumbnail--hovered" :src="products.productThumb[0]" alt="test">
            <img class="product__image  " :src="products.productImg" alt="test">
          

        <div class="product__content product__content--hovered">
             <router-link :to="`/product/${products.productId}`"> 
            <font-awesome-icon icon="info-circle" class="product__thumbicon" size="4x"></font-awesome-icon>
</router-link>
          
                <h5>{{products.productName}}</h5>
                <p>{{products.productSubName}}}</p>
              <font-awesome-icon icon="shopping-cart" class="product__icon" size="1x"></font-awesome-icon>
              <font-awesome-icon icon="heart" class="product__icon" size="1x"></font-awesome-icon>
              <font-awesome-icon icon="times" class="product__icon" size="1x"></font-awesome-icon>
        </div>
       
        </figure>
    </div>


    </div>






</template>

<script>
import axios from "axios";
import preproduct from "@/components/SingleProduct.vue";
export default {
  name: "productwrapper",
  components: {
    preproduct
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/products.json")
        .then(response => (this.product = response.data));
    }
  },

  data() {
    return {
      product: null
    };
  }
};
</script>
