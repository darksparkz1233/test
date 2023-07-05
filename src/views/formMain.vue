<script setup>
import formInputsArea from '../components/formInputsArea.vue';
import { useMq } from 'vue3-mq'

const mq = useMq()
</script>

<template>
    <div 
        class="form-content-container"
        :class="mq.phone ? 'form-content-container-phone' : 'form-content-container'"
    >
    
    <div class="form-content">

        <div class="form-title-container-phone">
            <h1 
                :class="mq.phone ? 'form-title-phone' : 'form-title'" 
                class="form-title"
            >
                New user?
            </h1>

            <span 
                :class="mq.phone ? 'form-subtitle-phone' : 'form-subtitle'" 
                class="form-subtitle"
            >
                Use the form below to create your account.
            </span>
        </div>

        <div class="form-inputs-container">
            <formInputsArea />
        </div>

    </div>

     
    </div>
</template>

<style scoped>
* {
    font-family: 'Work Sans';
}

.form-content-container {
    padding: 2.41rem 1.41rem 2.03rem 1.3rem;
}
.form-content-container-phone {
    padding-top: 0.41rem;
    padding-right: 0.60rem;
    padding-left: 0.80rem;
}
.form-content {
    position: relative;
    display: flex;
    flex-direction: column;
}

.form-title {
    font-size: 1.375rem;
    font-weight: 500;
}

.form-subtitle {
    font-size: 0.875rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
}

/* Responsive area */
.form-title-phone {
    font-size: 1.35rem;
}
.form-subtitle-phone {
    font-size: 0.75rem;
}

</style>
