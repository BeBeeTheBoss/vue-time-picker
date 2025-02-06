import TimePicker from "./components/TimePicker.vue";

export default TimePicker;

TimePicker.install = function (Vue) {
    Vue.component(TimePicker.name, TimePicker);
};