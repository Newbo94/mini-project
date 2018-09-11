<template>
    <div class="sign-up">
        <hero title="Welcome to Ave" subtitle="sign in or register"> </hero>
         <section class="loginwrapper">
             <div class="signin">
               <h4 class="signin__title">Sign in</h4>
               <input class="signin__email" placeholder="Your email..." type="email">
                <input class="signin__password" placeholder="Your password.." type="text">
                <button class="primaryButton">Sign in</button>
                <a href="#">Forgot your password</a> <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
             </div>
            <div class="register">
                <input type="text" placeholder="Your Email..">
                <input type="text" placeholder="You passowrd..">
                <input type="text" placeholder="Confirm password">
                <input type="checkbox"> <p>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p>
                <button class="primaryButton">Create Button</button>
                <p> By clicking ‘Create Account’, you 
agree to our</p>
                <a href="#">Pricay Policy</a><font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
            </div>

         </section>
    </div>
</template>


<script>
import hero from '@/components/HeroSection.vue';

export default {
    name: 'sign-up',
    components: {
        hero
    }
}
</script>
