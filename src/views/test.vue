<template>
<div class="test">
<product v-for="products in product" :key="products.productId" :price="products.productPrice" :description="products.productSubName"  :title="products.productName" :img="products.productImg"  ></product>

</div>
        

</template>

<script>
import axios from "axios";
import product from "@/components/SingleProduct.vue";
export default {
    name: "test",
    components: {
        product
    },
        data() {
        return {
            products: null, 
           
        }
    },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("products.json")
        .then(response => (this.product = response.data));
    }
  }
  }
  


</script>
