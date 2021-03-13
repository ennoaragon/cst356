  
<template>
    <div>
        <h1>Student Login</h1>
        <form>

            <div class="form-entry">
                Email: <input id='email' type="text" v-model="email"/>
                <span id='email-error' v-bind:style="{visibility: emailErrorVisibility}">Please enter your Email.</span>
            </div>

            <div class="form-entry">
                Password: <input id='password-name' :type="passwordFieldType" v-model="password" />
                <span id='password-name-error' v-bind:style="{visibility: passwordErrorVisibility}">Your password.</span>
                <button @click="switchVisibility()">Show / Hide</button>
            </div>

            <!-- <div class="form-entry">
                Birthdate:
                <br/>
                Month: <input id='birth-month' type="text" v-model="birthDay" size="2" maxlength="2"/>
                Day: <input id='birth-day' type="text" v-model="birthMonth" size="2" maxlength="2"/>
                Year: <input id='birth-year' type="text" v-model="birthYear" size="4" maxlength="4"/>
            </div> -->

            <div class="form-entry">
                <input type="button" value="Login" v-on:click="submitLogin()"/>
            </div>

        </form>
    </div>
</template>

<script>
    // import { getAge } from '../Modules/AgeCalculator';
    export default {
        name: 'Login',
        methods: {
            submitLogin: function() {
                this.emailErrorVisibility = 'hidden';
                this.passwordErrorVisibility = 'hidden';
                if (this.email.length == 0) {
                    this.emailErrorVisibility = 'visible';
                }
                if (this.password.length == 0) {
                    this.passwordErrorVisibility = 'visible';
                }
                return;
                // // let age = getAge(this.birthDay, this.birthMonth, this.birthYear);
                // // alert('Submitting Registration with age: ' + age);
            },
            switchVisibility(){
              this.passwordFieldType = this.passwordFieldType === 'password' ? "text" : 'password' 
            }
        },
        data () {
            return {
                email: '',
                password: '',
                passwordFieldType: 'password',
                emailErrorVisibility: 'hidden',
                passwordErrorVisibility: 'hidden'
            }
        }
    }
</script>

<style scoped>
    form {
        background-color: white;
        padding: 10px;
    }
    .form-entry {
        padding: 10px;
        background-color: lightgray;
    }
    #email-error #password-name-error {
      color: red
    }
   
</style>