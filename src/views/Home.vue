<template>  
  <div class="home">
        <section class="heroSection">
         <div class="heroSection__wrapper">   
            <h1 class="heroSection__title">AVE</h1>
            <a href="#" class="heroSection__button primaryButton primaryButton--hovered">Shop men's collection</a>
         </div> 
        </section>
        <hr>
        
<div id="tabs">
    <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Popular</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">New arrivals</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Best sellers</a>
        <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Sepcial offer</a>
        <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">Coming soon</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
                <listproduct/>
             <!-- <singleproduct v-for="products in product" :key="products.productId" :price="products.productPrice" :description="products.productSubName"  :title="products.productName" :img="products.productImg" :thumb1="products.productThumb[0]" :thumb2="products.productThumb[1]"></singleproduct> -->
            
        </div>
        <div v-if="activetab === 2" class="tabcontent">
           Tab two
        </div>
        <div v-if="activetab === 3" class="tabcontent">
           Tab three
        </div>
           <div v-if="activetab === 4" class="tabcontent">
           Tab four
        </div>
           <div v-if="activetab ===5" class="tabcontent">
            Tab five
        </div>
    </div>
</div>

        
        <hr>
            <section class="lookbookwrapper">
              <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/men_look_book.png')"></lookbookpreview>
              <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/women_look_book.png')"></lookbookpreview>
      <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/photo_silhouette.png')"></lookbookpreview>
            </section>

    </div>
</template>

<script>
import singleproduct from "@/components/SingleProduct.vue";
import lookbookpreview from "@/components/LookBookPreview.vue";
import listproduct from "@/components/ListProduct.vue";

export default {
  name: "home",

  components: {
    singleproduct,
    lookbookpreview,
    listproduct
  },

  data() {
    return {
      activetab: 1,

    }
  }
};
</script>