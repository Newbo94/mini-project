<template>  
  <div class="home">
        <section class="heroSection">
            <h1 class="heroSection__title">AVE</h1>
            <button class="primaryButton primaryButton--hovered">Shop men's collection</button>
        </section>

        <hr>
<div class="wrappper">
        <singleproduct :img="require('@/assets/images/standard/item1.png')" title="£89,99"></singleproduct> 
        <singleproduct :img="require('@/assets/images/standard/item2.png')" title="£89,99"></singleproduct> 
        <singleproduct :img="require('@/assets/images/standard/item3.png')" title="£89,99"></singleproduct> 
        <singleproduct :img="require('@/assets/images/standard/item4.png')" title="£89,99"></singleproduct> 
        <singleproduct :img="require('@/assets/images/standard/item5.png')" title="£89,99"></singleproduct> 
        <singleproduct :img="require('@/assets/images/standard/item6.png')"title="£89,99" ></singleproduct> 
</div>
    </div>
</template>

<script>
import singleproduct from "@/components/SingleProduct.vue";

export default {
  name: 'home', 
  components: {
    singleproduct
  }
};
</script>
