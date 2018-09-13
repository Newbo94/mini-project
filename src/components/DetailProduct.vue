<template>
  <div v-if="product" class="productpage">
        <hero title="Product view" subtitle="Mens - Casuals - Hoodies &amp; Sweathshirts - Ave classic sweatshirt"></hero>
        <section class="singleproduct">
            <div class="singleproduct__imgwrapper">
                <div class="singleproduct__img">
                    <img :src="product.productImg" :alt="product.productSubName">
                </div>
            </div>
            <div class="singleproduct__contentwrapper">
                <div class="singleproduct__content">
                    <h2 class="singleproduct__title">{{product.productName}}</h2>
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
                        <h3 class="singleproduct__price--reduced">&pound;{{product.productSalePrice}}</h3>
                        <h3 class="signleporduct__price--normal">&pound;{{product.productPrice}}</h3>
                    </div>

                    <div class="singleproduct__stock">
                        <h4><strong>Avaliability:</strong> In Stock</h4>
                    </div>

                    <div class="singleproduct__code">
                        <h4><strong>Product Code:</strong> {{product.productCode}}</h4>
                    </div>
                    <div class="singleproduct__tags">
                        <h4><strong>Tags:</strong></h4>
                        <a href="#"> Classic </a>
                        <a href="#"> Casual </a>
                        <a href="#"> V-neck </a>
                    </div>
                    <div class="singleproduct__description">
                        <p>
        {{product.productDescriptoion}}
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
                            <p>{{product.productDescriptoion}} </p>
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
import axios from "axios";

export default {
    name: "productpage",


  data() {
    return {
      product: null,
        activetab: 1

    };
  },

  mounted() {
    this.getProductById();
  },
  methods: {
    getProductById() {
        let productId = this.$route.params.id;
      axios
        .get("/products.json")
        .then (response =>  {
        this.product = response.data.find(r => r.productId === productId);
    })
    
  } 
  }

  }
</script>