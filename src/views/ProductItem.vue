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
                        <div class="singleproduct__reviews">
                            <font-awesome-icon icon="star" color="#ded3aa" class="singleproduct__reviewicon"></font-awesome-icon>
                            <font-awesome-icon icon="star" color="#ded3aa" class="singleproduct__reviewicon"></font-awesome-icon>
                            <font-awesome-icon icon="star" color="#ded3aa" class="singleproduct__reviewicon"></font-awesome-icon>
                            <font-awesome-icon icon="star" color="#ded3aa" class="singleproduct__reviewicon"></font-awesome-icon>
                            <font-awesome-icon icon="star"  class="singleproduct__reviewicon"></font-awesome-icon>
                            <p>3 Review(s)</p>
                        </div> |
                        <div class="singleproduct__addreview">
                            <a href="#">Add a Review </a>
                        </div> |
                        <div class="singleproduct__share">
                            <p>Share:</p>
                            <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" size="1x" class="socialmediabox__icon">
                                </font-awesome-icon>
                            </a>
                            <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" size="1x" class="socialmediabox__icon">
                                </font-awesome-icon>
                            </a>
                            <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="1x" class="socialmediabox__icon">
                                </font-awesome-icon>
                            </a>
                            <a class="singleproduct__socialicon singleproduct__socialicon--hovered" href="#">
                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'pinterest' }" size="1x" class="socialmediabox__icon">
                                </font-awesome-icon>
                            </a>
                        </div>

                    </div>
                    <div class="singleproduct__price">
                        <h3 class="singleproduct__price--reduced">&pound;107</h3>
                        <h3 class="signleporduct__price--normal">&pound;89,99</h3>
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
                    <div class="singleproduct__description">
                        <p>
                            Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue
                            metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem
                            a pretium justo interdum.
                        </p>
                        <li>Elasticated cuffs</li>
                        <li>Casual fit</li>
                        <li>100% Cotton</li>
                        <li>Free shipping with 4 days delivery</li>
                    </div>
                    <div class="singleproduct__options">
                        <div class="singleproduct__color">
                            <p>Colour</p>
                            <select name="Select Colour" id="">
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="Black">Black</option>
                            </select>
                        </div>
                        <div class="singleproduct__size">
                            <p>Size</p>
                            <select name="Select Size" id="">
                                <option value="small">Small</option>
                                <option value="Mid">Mid</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>
                        <div class="singleproduct__qty">
                            <p>QTY</p>
                            <input type="number" min="1" max="" value="1">
                        </div>
                    </div>
                    <div class="singleproduct__buttons">
                        <button class="primaryButton">
                            <font-awesome-icon icon="shopping-cart" class="singleproduct__reviewicon"></font-awesome-icon>
                            Add to cart
                        </button>
                        <button class="primaryButton">
                            <font-awesome-icon icon="heart" class="singleproduct__reviewicon"></font-awesome-icon>
                            Add to lookbook
                        </button>
                    </div>
                    <div class="singleproduct__compare">
                    </div>
                </div>
                <!--- SingleProduct___content -->
            </div>
            <div class="singleproduct__tabwrapper">
                <div class="singleproduct__tab" id="tabs">
                    <div class="singleproduct__tabsbuttons">
                        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Description</a>
                        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">video</a>
                        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Size and Specs</a>
                        <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Dilvery and
                            Returns</a>
                        <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">Reviews</a>
                    </div>

                    <div class="singleproduct__tabcontent">
                        <div v-if="activetab === 1" class="singleproduct__tab">
                            <p>Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna,
                                interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget
                                ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus
                                risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam
                                congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor
                                eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.

                                Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut
                                venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie
                                risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget
                                sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci
                                faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id
                                dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit
                                nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus
                                ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra.
                                Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate.
                                Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius,
                                nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.</p>
                        </div>
                        <div v-if="activetab === 2" class="singleproduct__tab">
                            Content for tab two
                        </div>
                        <div v-if="activetab === 3" class="singleproduct__tab">
                            Content for tab three
                        </div>
                        <div v-if="activetab === 4" class="singleproduct__tab">
                            Content for tab four
                        </div>
                        <div v-if="activetab ===5" class="singleproduct__tab">
                            Content for tab five
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    </div>
</template>

<script>
    import hero from "@/components/HeroSection.vue";
    export default {
        name: "productpage",
        components: {
            hero
        },
        data() {
            return {
                activetab: 1
            };
        }
    };
</script>