<template>
     <header class="mainheader">
         <div class="fullWidthWrapper">
        <div class="topBanner">
            <ul class="currencyDropdown currencyDropdown--dropdown">
                Currency:
                <select name="Currency" id="currencyDropdown" class="currencyDropdown">
                    <option class="currencyDropdown__content" value="GBP">GBP</option>
                    <option class="currencyDropdown__content" value="EURO">EURO</option>
                    <option class="currencyDropdown__content" value="DKK">DKK</option>
                    <font-awesome-icon icon="angle-down" class="currencyDropdown__icon"></font-awesome-icon>
                </select>
            </ul>
            <div class="userLogin">
                <router-link to="/sign-up" class="userLogin__item"> Register</router-link>
                <router-link to="/sign-up" class="userLogin__item"> Sign in </router-link>
            </div>
            <div class="cart">    
               <font-awesome-icon icon="shopping-cart" class="cart__icon"></font-awesome-icon>
                <p class="cart__count">empty</p>
                <font-awesome-icon icon="angle-down" class="cart__dropdown"></font-awesome-icon>
            </div>
        </div>
        </div>
        <nav>
            <div class="toplogo"><router-link to="/" class="toplogo__link"><strong>Avenue </strong>Fashion</router-link> </div>
            <ul class="topNavigation">
                <li class="topNavigation__dropdownlink"><a href="#" class="topNavigation__link">Men</a>
                    <font-awesome-icon icon="angle-down" class="topNavigation__icon"></font-awesome-icon>

                <div class="topNavigation__dropdown">
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
                        <h4 class="promotion__heading"> <strong>Autumn sale!</strong> <br> Up to 50% off</h4>
                    </div>
                </div>
                </li>
    <li class="topNavigation__dropdownlink"><a href="#" class="topNavigation__link">women</a>
                    <font-awesome-icon icon="angle-down" class="topNavigation__icon"></font-awesome-icon>

                <div class="topNavigation__dropdown">
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
                        <h4 class="promotion__heading"> <strong>Autumn sale!</strong> <br> Up to 50% off</h4>
                    </div>
                </div>
                </li>                <li><router-link to="/brand" class="topNavigation__link">The Brand</router-link></li>
                <li><a href="#" class="topNavigation__link">Local stores</a></li>
                <li><a href="#" class="topNavigation__link">Look Book</a></li>
            </ul>
            <input class="searchbar" type="search" placeholder="Search...">
            <font-awesome-icon icon="bars" class="hamburgermenu" size="2x"></font-awesome-icon>

        </nav>
    </header>

</template>




<script>
export default {
  name: "MainHeader"
};
</script>
