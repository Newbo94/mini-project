<template>
    <div class="sign-up">
        <hero title="Welcome to Ave" subtitle="sign in or register"> </hero>
         <section class="loginwrapper">
             <div class="signin">
               <h4 class="signin__title">Sign in</h4>
               <input class="signin__email" placeholder="Your email..." type="email">
                <input class="signin__password" placeholder="Your password.." type="text">
                <button class="signin__button primaryButton">Sign in</button>
                <span class="signin__wrapper">
                <a href="#">Forgot your password</a>  <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon></span>
             </div>
            <div class="register">
                <h4 class="register__title">Register</h4>
                <input class="register__email" type="text" placeholder="Your Email..">
                <input class="register__password" type="text" placeholder="You passowrd..">
                <input class="register__password" type="text" placeholder="Confirm password">
              <span class="register__wrapper"><input class="register__checkbox" type="checkbox"> <p class="register__checkboxtext">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p></span>
                <button class="register__button primaryButton">Create account</button>
               
               <span class="register__accountwrapper"> <p class="register__accountp"> By clicking ‘Create Account’, you 
agree to our <a href="#">Pricay Policy</a></p>
               <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
                            </span>

            </div>
         </section>
    </div>
</template>


<script>
import hero from "@/components/HeroSection.vue";

export default {
  name: "sign-up",
  components: {
    hero
  }
};
</script>
