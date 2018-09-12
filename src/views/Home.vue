<template>  
  <div class="home">
        <section class="heroSection">
         <div class="heroSection__wrapper">   
            <h1 class="heroSection__title">AVE</h1>
            <a class="heroSection__button primaryButton primaryButton--hovered">Shop men's collection</a>
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
              <div class="productwrapper">
                    <singleproduct :img="require('@/assets/images/standard/item2.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." :thumb1="require('@/assets/images/standard/thumb-back.png')" :thumb2="require('@/assets/images/standard/thumb-front.png')" ></singleproduct> 
                    <singleproduct :img="require('@/assets/images/standard/item1.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
                    <singleproduct :img="require('@/assets/images/standard/item3.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
                    <singleproduct :img="require('@/assets/images/standard/item4.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
                    <singleproduct :img="require('@/assets/images/standard/item5.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
                    <singleproduct :img="require('@/assets/images/standard/item6.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
            </div>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
            Content for tab two
        </div>
        <div v-if="activetab === 3" class="tabcontent">
            Content for tab three
        </div>
           <div v-if="activetab === 4" class="tabcontent">
            Content for tab four
        </div>
           <div v-if="activetab ===5" class="tabcontent">
            Content for tab five
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

            <tab></tab> 
    </div>
</template>

<script>
import singleproduct from "@/components/SingleProduct.vue";
import lookbookpreview from '@/components/LookBookPreview.vue';

export default {
  name: "home",
  data() {
            return {
 activetab: 1 
            };
            },

  components: {
    singleproduct,
    lookbookpreview,
    

  },
    
};
</script>