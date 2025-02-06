<script setup>
import Clock from './Clock.vue';
import { ref,defineEmits } from 'vue';
import { split } from "postcss/lib/list";

const props = defineProps({
    modelValue : String,
    bg: {type:String, default: 'black'}
});

const emit = defineEmits(["update:modelValue"]);
const hourOrMinute = ref('hour');
const amOrPm = ref('AM');
const hourData = ref('12');
const minuteData = ref('00');

const switchClock = (type) => {
    hourOrMinute.value = type
}

const changeAmOrPm = (amOrPmData) => {
    amOrPm.value = amOrPmData
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const setHour = (hour) => {
    hourData.value = hour;
    hourData.value = hourData.value.toString().padStart(2, '0');
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const setMinute = (minute) => {
    minuteData.value = minute * 5;
    if (minute == 12) minuteData.value = 0;
    minuteData.value = minuteData.value.toString().padStart(2, '0');
    change24hrFormatAndEmit(hourData.value + ':' + minuteData.value, amOrPm.value);
}

const change12hrFormat = (time) => {

    if (parseInt(split(time, ':')[0]) > 12) {
        hourData.value = parseInt(split(time, ':')[0]) - 12;
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = split(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'PM';
    }else if(parseInt(split(time, ':')[0]) == 12) {
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = split(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'PM';
    }
     else {
        hourData.value = split(time, ':')[0] == 0 ? 12 : split(time, ':')[0];
        hourData.value = hourData.value.toString().padStart(2, '0');
        minuteData.value = split(time, ':')[1];
        minuteData.value = minuteData.value.toString().padStart(2, '0');
        amOrPm.value = 'AM';
    }

}

const change24hrFormatAndEmit = (time, format) => {

    if (format == 'PM' && parseInt(split(time, ':')[0]) == 12) {
        time = parseInt(split(time, ':')[0]) - 12 + ':' + split(time, ':')[1];
    }
    if (format == 'PM') {
        time = parseInt(split(time, ':')[0]) + 12 + ':' + split(time, ':')[1];
    }
    if(format == 'AM' && parseInt(split(time, ':')[0]) == 12) {
        time = '00' + ':' + split(time, ':')[1];
    }
    
    emit("update:modelValue", time );

}

if(!props.modelValue ){
    change12hrFormat('00:00');
}else{
    change12hrFormat(props.modelValue);
}

</script>

<template>
    <div style="margin-bottom:20px;display:flex;align-items: center;width:300px;padding-left:20px">

        <span type="text" id="hourAndMinuteBox" :style="'background-color:' + props.bg" @click="switchClock('hour')">{{ hourData }}</span>
        <div style="font-size:30px;font-weight:bold">:</div>
        <span type="text" id="hourAndMinuteBox" :style="'background-color:' + props.bg" @click="switchClock('minute')">{{ minuteData }}</span>

        <div style="margin-left:8px;margin-right:0">
            <div>
                <span type="text" :class="amOrPm == 'AM' ? 'clicked' : ''" id="amAndPmBox" :style="amOrPm == 'AM' ? 'background-color:' + props.bg : ''"
                    @click="changeAmOrPm('AM')">AM</span>
            </div>
            <div>
                <span type="text" :class="amOrPm == 'PM' ? 'clicked' : ''" id="amAndPmBox" :style="amOrPm == 'PM' ? 'background-color:' + props.bg : ''"
                    @click="changeAmOrPm('PM')">PM</span>
            </div>
        </div>

    </div>

    <div style="width:300px;display:flex;justify-content: center">
        <Clock :number="hourData" hourOrMinute="hour"  v-if="hourOrMinute == 'hour'" @clicked="setHour" :bg="props.bg"/>
        <Clock :number="minuteData" hourOrMinute="minute"  v-if="hourOrMinute == 'minute'" @clicked="setMinute" :bg="props.bg"/>
    </div>
</template>

<style scoped>
#hourAndMinuteBox {
    width: 70px;
    height: 70px;
    margin: 10px;
    border-radius: 10px;
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
    /* background: radial-gradient(circle, #333, #111); */
    border: 10px solid #cec5c5;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    border: none;
    cursor: pointer;
}

#amAndPmBox {
    width: 50px;
    height: 30px;
    border-radius: 5px;
    margin: 6px 0;
    text-align: center;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #969696;
    cursor: pointer;
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

.clicked {
    box-shadow:
        inset 0 0 20px rgba(255, 255, 255, 0.1);
    color: white;
}
</style>
