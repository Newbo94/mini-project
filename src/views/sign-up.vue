<template>
    <div class="sign-up">
        <hero title="Welcome to Ave" subtitle="sign in or register"> </hero>
         <section class="loginwrapper">
             <form class="signin" action="/something" method="post" @submit="checkForm">

               <h4 class="signin__title">Sign in</h4>
            
               <p v-if="errors.length">
                 Correct error(s)
                 <ul>
                   <li v-for="error in errors" :key="error">{{error}}</li>
                 </ul>
               </p>
               <input id="email" v-model="email"  name="email"  required="required" class="signin__email" placeholder="Your email..." type="email">
                <input id="password" v-model="password" name="password" required="required" class="signin__password" placeholder="Your password.." type="password">
                <button value="Submit" type="submit" class="signin__button primaryButton">Sign in</button>
               
                <span class="signin__wrapper">
                <a href="#">Forgot your password</a>  <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon></span>
                
             
              </form> 
                  
            <form class="register" action="/something" method="post" @submit="checkFormRegisteration">
                <h4 class="register__title">Register</h4>
                  
               <p v-if="rerrors.length">
                 Correct error(s)
                 <ul>
                   <li v-for="rerror in rerrors" :key="rerror">{{rerror}}</li>
                 </ul>
               </p>
                <input v-model="remail"   name="email"  required="required" class="register__email" type="email" placeholder="Your Email..">
                <input v-model="rpassword"  name="password"  required="required"   class="register__password" type="password" placeholder="Your password..">
                <input v-model="cpassword"  name="password"  required="required"  class="register__password" type="password" placeholder="Confirm password..">
              <span class="register__wrapper"><input class="register__checkbox" type="checkbox"> <p class="register__checkboxtext">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</p></span>
                <button  value="Submit" type="submit" class="register__button primaryButton">Create account</button>
               
               <span class="register__accountwrapper"> <p class="register__accountp"> By clicking ‘Create Account’, you 
agree to our <a href="#">Pricay Policy</a></p>
               <font-awesome-icon icon="long-arrow-alt-right"></font-awesome-icon>
                            </span>

          
                           </form>
         </section>
    </div>
</template>


<script>
import hero from "@/components/HeroSection.vue";


export default {
  name: "sign-up",
  components: {
    hero
  },
  data() {
    return{
    errors:[],
    email: null,
    password: null,
    rerrors:[],
    remail: null,
    rpassword: null,
    cpassword: null
    }
  },
  methods: {
    checkForm: function(e) {
      if(this.email && this.password) return true;
      this.errors = [];
      if (!this.email) this.errors.push("Your Email is required");
      if (!this.password) this.errors.push("Your password is required");
      e.preventDefault();
    },
    checkFormRegisteration: function(e){
     if(this.remail && this.rpassword && this.cpassword) return true;
      this.rerrors = [];
      if (!this.remail) this.rerrors.push("Your Email is required");
      if (!this.rpassword) this.rerrors.push("Password is required");
      if (!this.cpassword) this.rerrors.push("Password is required");

      e.preventDefault();
    }
  }
};
</script>
