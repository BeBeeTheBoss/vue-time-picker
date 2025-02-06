<template>
    <div class="clock" :style="'outline: 10px solid ' + props.bg">
        <div class="numerals" :style="'color:' + props.bg">
            <div :class="n == selectedNumber ? 'clicked' : ''" v-for="n in 12" :key="n" :style="[getNumberLocation(n), n == selectedNumber ? { 'background-color': props.bg } : {}]"
                style="cursor:pointer" class="numeral" @click="setHandAngle(n),$emit('clicked',n)">
                {{ n == 12 && hourOrMinute == "minute" ? "00" : n * multiplyNumber }}
            </div>
        </div>
        <div class="hand" :style="{ transform: `translateX(-50%) rotate(${angle}deg)` }"></div>
        <div class="center"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    bg : {type:String, default: 'black'},
    number : Number,
    hourOrMinute: String
});

const angle = ref('');
props.hourOrMinute == "hour" ? angle.value = (props.number * 30) : angle.value = (props.number/5 * 30);
const selectedNumber = ref('');
props.hourOrMinute == "hour" ? selectedNumber.value = props.number : props.number == 0 ? selectedNumber.value = 12 : selectedNumber.value = props.number/5;
const multiplyNumber = ref('');



if (props.hourOrMinute == "hour") {
    multiplyNumber.value = 1;
} else {
    multiplyNumber.value = 5;
}

const getNumberLocation = (n) => {

    const angle = (n * 30);

    return {
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-100px) rotate(${-angle}deg)`,
        position: 'absolute',
        left: '50%',
        top: '50%',
    };
}

const setHandAngle = (n) => {
    
    selectedNumber.value = n;
    angle.value = (n * 30);
}

</script>

<style scoped>
/* .numeral:hover {
    background-color: #333;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
} */

.clicked {
    background-color: #333;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
}

.clock {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    outline: 10px solid #333;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: repeating-radial-gradient(circle at 50% 50%,
            rgba(200, 200, 200, .2) 0%, rgba(200, 200, 200, .2) 2%,
            transparent 2%, transparent 3%, rgba(200, 200, 200, .2) 3%,
            transparent 3%), conic-gradient(white 0%, silver 10%,
            white 35%, silver 45%, white 60%, silver 70%,
            white 80%, silver 95%, white 100%);
    box-shadow: inset 0 0 20px #0007;
}


.hand {
    position: absolute;
    width: 5px;
    height: 80px;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) rotate(0deg);
    border-radius: 3px 3px 1px 1px;
    box-shadow: 0 0 5px #0005, inset 1.5px 3px 0px #333, inset -1.5px -3px 0px #333;
    z-index: 1;
    animation: watch 43200s linear infinite;
}

.center {
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
    position: absolute;
}

.time-display {
    position: absolute;
    bottom: -40px;
    font-size: 20px;
    font-weight: bold;
}

.numerals {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

.numerals div {
    position: absolute;
    font-size: 16px;
    font-weight: bold;
}
</style>