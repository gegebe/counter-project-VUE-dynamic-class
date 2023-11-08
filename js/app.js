// Tu código aquí.

import {createApp, ref,} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    
    //Equivale a la ID counter del <h1>>
    const counter = ref(0)

    //Pasa el valor del HTML newCounter(-1), por el parámetro x
    function newCounter(x){
      counter.value = counter.value + x
    }

    return {
      counter,
      newCounter

    };
  },
}).mount("#app");
