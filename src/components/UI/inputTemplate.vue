<script setup>
defineProps({
    label: {
        type: String, Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="input-wrapper">
        <p v-if="label" class="input-name"> {{ label }}</p>
        <input 
            type="text" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        >
        
        <div class="underline"></div>
    </div>
</template>

<style scoped>
input {
    outline: none;
    border: none;
    background: none;
    font-family: 'Work Sans', sans-serif;
}
    
.input-wrapper {
    display: grid;
    row-gap: 0.35rem;
}
    
.input-name {
    width: 14.50rem;

    margin-top: 1rem;
    color: #7C7C7C;
    
    font-size: 0.75rem;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
}


/* Gray underline for input fields */
.underline {
    position: relative;
    top: 0.015rem;
    background: #F2F2F2;
    height: 1px;
}


</style>
