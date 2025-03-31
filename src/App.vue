<template>

  <barObj />

  <router-view></router-view>

  <sizeWidth />


</template>

<script>  
import { ref, provide } from 'vue';  

export default {  
  setup() {  
    const brightnessValue = ref('brightness(1)');   

    const setBrightness = (value) => {  
      brightnessValue.value = value;  
    };  

    provide('setBrightness', setBrightness);  
    provide('brightnessValue', brightnessValue);  

    return {  
      brightnessValue,  
    };  
  },  
}  
</script>  