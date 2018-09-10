<template>  
  <div class="home">
        <section class="heroSection">
            <h1 class="heroSection__title">AVE</h1>
            <a class="primaryButton primaryButton--hovered">Shop men's collection</a>
        </section>

        <hr>
            <div class="productwrapper">
                    <singleproduct :img="require('@/assets/images/standard/item2.png')" price="£89,99" title="Womens burnt orange casual tee  £29.95" description="Classic casual t-shirt for women on the move. 
            100% cotton.
            A hard-wearing sports t-shirt with microvent technology." ></singleproduct> 
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
        <hr>
            <section class="lookbookwrapper">
              <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/men_look_book.png')"></lookbookpreview>
              <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/men_look_book.png')"></lookbookpreview>
      <lookbookpreview title="Men’s lookbook" text="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu." :img="require('@/assets/images/standard/photo_silhouette.png')"></lookbookpreview>
            </section>
    </div>
</template>

<script>
import singleproduct from "@/components/SingleProduct.vue";
import lookbookpreview from '@/components/LookBookPreview.vue';

export default {
  name: "home",
  components: {
    singleproduct,
    lookbookpreview

  }
};
</script>