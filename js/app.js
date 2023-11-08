// Tu código aquí.

import {createApp, ref, reactive} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    
    //Equivale a la ID counter del <h1>>
    const counter = ref(0)

    const classObj = reactive({
      hasColor:"grey",
      changes: ()=>{
        if(hasColor > 0){
          return "green"
        }
        if(hasColor < 0){
          return "red";
        }
      }
    })

    //Pasa el valor del HTML newCounter(-1), por el parámetro x
    function newCounter(x, classObj){
      counter.value = counter.value + x
      classObj.changes(counter.value)
    }

    return {
      counter,
      newCounter,
      classObj

    };
  },
}).mount("#app");
