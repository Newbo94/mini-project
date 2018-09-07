<template>
     <header class="MainHeader">
         <div class="fullWidthWrapper">

         
        <div class="topBanner">
            <ul class="currencyDropdown currencyDropdown--dropdown">
                Currency:
                <li class="currencyDropdown--active">GBP</li>
                <div class="currencyDropdown__content">
                    <li class="currencyDropdown__content--hovered"><a href="#">EURO</a></li> 
                    <li class="currencyDropdown__content--hovered"><a href="#">DKK</a></li>
                </div>
                <font-awesome-icon icon="angle-down" class="currencyDropdown__icon"></font-awesome-icon>

            </ul>
            <div class="userLogin">
                <a class="userLogin__item" href="#">Register</a>
                <a class="userLogin__item" href="">Sign in</a>

            </div>

            <div class="cart">    
               <font-awesome-icon icon="shopping-cart" class="cart__icon"></font-awesome-icon>
                <p class="cart__count">empty</p>
                <font-awesome-icon icon="angle-down" class="cart__dropdown"></font-awesome-icon>
            </div>
        </div>
        </div>
        <nav>
            <div class="topLogo"><router-link to="/">Home</router-link> </div>
            <ul class="topNavigation">
                <li><a href="#" class="topNavigation__link">Men</a>
                    <div>
                        <p class="topNavigation__heading">Casual</p>
                        <a href="#" class="topNavigation__link">Jackets</a>
                        <a href="#" class="topNavigation__link">Hoodies</a>
                        <a href="#" class="topNavigation__link">Polo Shirt</a>
                        <a href="#" class="topNavigation__link">Sportswear</a>
                        <a href="#" class="topNavigation__link">Chinos</a>
                        <a href="#" class="topNavigation__link">T-Shirts</a>
                    </div>
                    <div>
                        <p class="topNavigation__heading">Formal</p>
                        <a href="#" class="topNavigation__link">Jackets</a>
                        <a href="#" class="topNavigation__link">Shirts</a>
                        <a href="#" class="topNavigation__link">Suits</a>
                        <a href="#" class="topNavigation__link">Toursers</a>
                    </div>
                    <div class="promotion">
                        <h4 class="promotion__heading">Autumn sale! Up to 50% off</h4>
                    </div>
                </li>
                <li><a href="#" class="topNavigation__link"> Womens</a></li>
                <li><a href="#" class="topNavigation__link">The brand</a></li>
                <li><a href="#" class="topNavigation__link">Local stores</a></li>
                <li><a href="#" class="topNavigation__link">Look Book</a></li>
            </ul>
            <input class="searchBar" type="search" placeholder="search">
        </nav>
    </header>

</template>




<script>
export default {
  name: "MainHeader"
};
</script>
