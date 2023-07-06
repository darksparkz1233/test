<script setup>
import inputTemplate from './UI/inputTemplate.vue';
import { reactive, computed } from 'vue'
// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required, helpers, email, sameAs } from '@vuelidate/validators';
// Vue3Mq
import { useMq } from 'vue3-mq'
// Axios
import axios from 'axios'
// Vue Router
import { onBeforeRouteLeave, useRouter } from 'vue-router'
// Vue3Mq object
const mq = useMq()
// Regular expression for password validating
const regex = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)

// Form data input fields
const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: {
        password: '',
        confirmPass: '',
    },
})
// A set of validations to each input 
const rules = computed(() => {
    return {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        password: {
            password: { 
                required: helpers.withMessage('', required),
                regex: helpers.withMessage('Password must contain at least 8 characters, one number, one lower and uppercase letters', regex)
            }, 
            confirmPass: { 
                required, 
                // confirmPass should be the same as the password
                sameAs: helpers.withMessage('Passwords do not match', sameAs(formData.password.password)),  
            } 
        },
    }
})
// Create a vuelidate instance
const v$ = useVuelidate(rules, formData)
v$.value.$validate()
// Sign up
const submitForm = async () => {
    const isFormCorrect = await v$.value.$validate()
    // If all inputs are properly validated - send the form data to server-ok.json
    if (isFormCorrect) {
         await axios.post("http://localhost:3000/users", {
            lastName: formData.lastName,
            firstName: formData.firstName,
            password: formData.password,
            email: formData.email,
            confirmPass: formData.password.confirmPass
        })
    }
    else if (!isFormCorrect) {
        alert('Form is not filled correctly!')
    }
}
// Create a router instance
const router = useRouter()
// Prevent the user from leaving the sign up page until he fills the form correctly
onBeforeRouteLeave(() => {
    v$.value.$validate()

    if(v$.value.$invalid) {
        router.push('/')   
    }
})


</script>

<template>
    <div class="container">
        <form>
            <!-- FIRST ROW -->
            <div 
                :class="mq.phone ? 'input-row-phone' : 'input-row'" 
                class="input-row"
            >
                <div class="input-column">
                    <!-- First Name -->
                    <inputTemplate 
                        v-model="formData.firstName" 
                        label="First Name" 
                        type="text" 
                        :class="{error: v$.firstName.$error}"
                    />
                </div>
                <div class="input-column">
                    <!-- Last Name: -->
                    <inputTemplate 
                        v-model="formData.lastName" 
                        label="Last Name" 
                        type="text" 
                        :class="{error: v$.lastName.$error}"
                    />
                </div>
            </div>
            <!-- SECOND ROW -->
            <div 
                :class="mq.phone ? 'input-row-phone' : 'input-row'" 
                class="input-row"
            >
                <div class="input-column">
                    <!-- Nationality -->
                    <p class="input-name">Nationality</p>

                    <div class="select-btn nationality-input">
                        <span>American</span>
                        <img src="../assets/down-arrow.svg" alt="dropdown">
                    </div>
                    <div class="underline"></div>
                </div>
                <div class="input-column">
                    <div class="select-btn">
                        <!-- Email: -->
                        <inputTemplate 
                            v-model="formData.email" 
                            label="E-mail" 
                            type="email"
                            :class="{error: v$.email.$error}" 
                        />
                        <img v-if="!v$.email.$error" class="checkmark" src="../assets/checkmark.svg">
                    </div>
                </div>
            </div>

            <!-- THIRD ROW -->
            <div 
                :class="mq.phone ? 'input-row-phone' : 'input-row'" 
                class="input-row"
            >
                <div class="input-column">
                    <!-- Date of Birth -->
                    <p class="input-name">Date of Birth</p>
                    <div class="birthdate-container">
                        <!-- Day -->
                        <div class="select-wrapper">
                            <div class="select-btn day">
                                <span>21</span>
                                <img src="../assets/down-arrow.svg" alt="dropdown">
                            </div>
                            <div class="underline"></div>
                        </div>
                        <!-- Month -->
                        <div class="select-wrapper">
                            <div class="select-btn month">
                                <span>December</span>
                                <img src="../assets/down-arrow.svg" alt="" srcset="">
                            </div>
                            <div class="underline"></div>

                        </div>
                        <!-- Year -->
                        <div class="select-wrapper">
                            <div class="select-btn year">
                                <span>1995</span>
                                <img src="../assets/down-arrow.svg" alt="" srcset="">
                            </div>
                            <div class="underline"></div>
                        </div>
                    </div>
                </div>

                <div class="input-column">
                    <!-- Gender -->
                    <p class="input-name gender">Gender</p>

                    <div class="gender-inputs">
                        <!-- Male -->
                        <div class="input-male">
                            <input checked name="gender" type="radio"> Male
                        </div>
                        <!-- Female -->
                        <div class="input-female">
                            <input name="gender" type="radio"> Female
                        </div>
                    </div>
                </div>
            </div>
            <!-- FOURTH ROW -->
            <div 
                :class="mq.phone ? 'input-row-phone' : 'input-row'" 
                class="input-row"
            >
                <div class="input-column">
                    <!-- Password -->
                    <inputTemplate 
                        v-model="formData.password.password" 
                        label="Password" 
                        type="password"
                        :class="{error: v$.password.password.$error}" 
                    />
                    <span 
                        class="error-msg" 
                        v-for="error of v$.password.password.$errors"
                    >
                        {{ error.$message }}
                    </span>
                </div>

                <div class="input-column">
                    <!-- Confirm password -->
                    <inputTemplate 
                        v-model="formData.password.confirmPass" 
                        label="Confirm Password" 
                        type="password" 
                        :class="{error: v$.password.confirmPass.$error}" 
                    />
                </div>
            </div>

            <div 
                class="form-bottom-container"
                :class="mq.phone ? 'form-bottom-container-phone' : 'form-bottom-container'"
            >
                <p>
                    Have an account? <a href="#" class="link">Login</a>
                </p>
                <div class="btn-wrapper">
                    <router-link class="btn" to="/registered" @click.prevent="submitForm" >
                            Complete Signup
                    </router-link>
                </div>
            </div>
        </form>

    </div>
</template>

<style scoped>
.input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.82rem;
}

.input-row-phone {
    display: grid;
    grid-template-columns: 1fr;
}

.input-column {
    display: grid;
    row-gap: 0.36rem;
}

.input-name {
    width: 14rem;

    margin-top: 1rem;
    color: #7C7C7C;
    font-size: 0.75rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
}


input,
.input-male,
.input-female {
    outline: none;
    border: none;
    background: none;
    font-family: 'Work Sans', sans-serif;

}

.checkmark {
    position: absolute;
    bottom: 20%;  
    right: 1%;
    width: 0.6875rem;
    height: 0.5rem;
    flex-shrink: 0;

}

/* Give the error class to an invalid input */
.error {
    border-bottom: 2px red solid;
}
/* Error messages */
.error-msg {
    position: absolute;
    bottom: 25%;

    background: white;
    border-radius: 10px;
    color: red;

    font-size: 0.70rem;
}

/* Login Link */
.link {
    font-weight: 500;
    text-decoration: underline;
    color: #5A61ED;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #5A61ED;
    color: #FFF;
    border: 0.5px solid #FFF;

    height: 2rem;
    width: 9.625rem;

    white-space: nowrap;

    text-decoration: none;

    font-size: 0.875rem;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 400;

    cursor: pointer;

    line-height: normal;
}
/* Gray underline for input fields */
.underline {
    position: relative;
    top: 0.015rem;
    background: #F2F2F2;
    height: 1px;
}



/** Date of Birth section 
 * 
 * 
*/
.birthdate-container {
    display: flex;
    gap: 0.61rem;
}
.select-wrapper {
    display: grid;
    row-gap: 0.35rem;
}
.select-btn {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.875rem;
}

.day {
    width: 3.5rem;
}

.month {
    width: 5.6875rem;
}

.year {
    width: 4.25rem;
}

/** End Date of Birth section
 * 
 * 
 */
.input-col {
    width: 14.65625rem;
}


/* Radio buttons for gender selection */
input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin-right: 0.38rem;

    color: #5A61ED;

    width: 0.75rem;
    height: 0.75rem;
    padding: 0;
    border: 0.01em solid #5A61ED;
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="radio"]::before {
    content: "";
    width: 0.45em;
    height: 0.45em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem #5A61ED;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

.gender-inputs {
    display: flex;
    gap: 1.19rem;

}

.input-male,
.input-female {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.875rem;

}

.form-bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.8125rem;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin-top: 6.15rem;
}
.form-bottom-container-phone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column-reverse;

    gap: 1rem;

}


</style>

