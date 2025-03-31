<template class="">

        <p style="text-align: center;" >عرض: {{ windowWidth }} پیکسل ({{ pxToInches(windowWidth) }} اینچ)</p>

        <p style="text-align: center;">ارتفاع: {{ windowHeight }} پیکسل ({{ pxToInches(windowHeight) }} اینچ)</p>

        <p style="text-align: center;">سایز دستگاه: {{ deviceSize }} پیکسل ({{ pxToInches(deviceSize) }} اینچ)</p>

</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const windowWidth = ref(window.innerWidth);
        const windowHeight = ref(window.innerHeight);
        const deviceSize = ref(Math.sqrt((windowHeight.value * windowHeight.value) + (windowWidth.value * windowWidth.value)));

        const updateDimensions = () => {
            windowWidth.value = window.innerWidth;
            windowHeight.value = window.innerHeight;
            deviceSize.value = Math.sqrt((windowHeight.value * windowHeight.value) + (windowWidth.value * windowWidth.value))
        };

        const pxToInches = (pixels) => {
            return (pixels / 96).toFixed(2);
        };

        onMounted(() => {
            window.addEventListener('resize', updateDimensions);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', updateDimensions);
        });

        return {
            windowWidth,
            windowHeight,
            deviceSize,
            pxToInches
        };
    }
};  
</script>