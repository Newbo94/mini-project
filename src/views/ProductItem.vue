<template>
    <div class="productpage">
    <hero title="Product view" subtitle="Mens - Casuals - Hoodies &amp; Sweathshirts - Ave classic sweatshirt"></hero>
    <section class="singleproduct">
        <div class="singleproduct__imgwrapper">
            <div class="singleproduct__img">
                <img src="../assets/images/standard/item4.png" alt="">
            </div>
        </div>
        <div class="singleproduct__contentwrapper">
            <div class="singleproduct__content">
                <h2 class="singleproduct__title">Ave Classic Sweatshirt</h2>
                <div class="singleproduct__review">
                    <div class="singleproduct__rewviews">
                    <font-awesome-icon icon="star" class="singleproduct__reviewicon"></font-awesome-icon>
                    <font-awesome-icon icon="star" class="singleproduct__reviewicon"></font-awesome-icon>
                    <font-awesome-icon icon="star" class="singleproduct__reviewicon"></font-awesome-icon>
                    <font-awesome-icon icon="star" class="singleproduct__reviewicon"></font-awesome-icon>
                    <font-awesome-icon icon="star" class="singleproduct__reviewicon"></font-awesome-icon>

                    </div> |
                    <div class="singleproduct__addreview">
                        <a href="#">Add a Review </a>
                    </div> |
                    <div class="singleproduct__share">
                        Share:
                    <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="3x" class="socialmediabox__icon">  </font-awesome-icon></a>
                    <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="3x" class="socialmediabox__icon">  </font-awesome-icon></a>
                    <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="3x" class="socialmediabox__icon">  </font-awesome-icon></a>
                    <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }" size="3x" class="socialmediabox__icon">  </font-awesome-icon></a>
                    </div>

                </div>
                <div class="singleproduct__price">
                    <h3 class="singleproduct__price--reduced">107</h3>
                    <h3 class="signleporduct__price--normal">89,99</h3>
                </div>
                
                <div class="singleproduct__stock">
                    <h4><strong>Avaliability:</strong> In Stock</h4>
                </div>
                
                <div class="singleproduct__code">
                    <h4><strong>Product Code:</strong> #499567</h4>

                </div>
                <div class="singleproduct__tags">
                     <h4><strong>Tags:</strong></h4>
                     <a href="#"> Classic </a>
                     <a href="#"> Casual </a>
                     <a href="#"> V-neck </a>
                </div>

                <div class="singleprodcut__description">
                    <p> 
                        Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                    </p>
                        <li>Elasticated cuffs</li>
                        <li>Casual fit</li>
                        <li>100% Cotton</li>
                        <li>Free shipping with 4 days delivery</li>

                </div>

                <div class="singleproduct__options">
                    <select name="Select Colour" id="">
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="Black">Black</option>
                    </select>
                    <select name="Select Size" id="">
                        <option value="small">Small</option>
                        <option value="Mid">Mid</option>
                        <option value="Large">Large</option>
                    </select>
                    <input type="text">
                    <button></button>
                    <button></button>

                </div>

                <div class="singleproduct__compare">

                </div>
                
                <div class="singleproduct__tab">

                </div>
            </div> <!--- SingleProduct___content -->
        </div>
    </section>
</div>
</template>

<script>
import hero from '@/components/HeroSection.vue';
export default {
    name: "productpage",
    components: {
        hero
    }
}
</script>
