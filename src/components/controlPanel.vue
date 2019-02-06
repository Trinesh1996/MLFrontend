<template>
 <div id="buttons"> 
     <span>{{msg}}</span> <br />
        <button class="analytics"><router-link to="/graphs">Analytics</router-link></button>
        <!-- <button class="addData" @click="dataset">Analytics</button> -->
        <button class="refresh" @click="refresh">Refresh</button>


</div>

    
</template>




<script>

import * as tf from '@tensorflow/tfjs';
import p5 from 'p5'





export default {
    name: "control_panel",



    data () {
        return {
            msg: "Control Panel"
        }
    },

    methods: {
        dataset () {

        },

        refresh () {

        }


    }
}
      




</script>

<style scoped>

* {
    text-decoration: none;
}

.analytics{
      margin-top: 1em;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: azure;
  color: black;
  border-radius: 5%;
  border-style: solid;
  border-color: black;
  border-width: 1px;

}

.analytics a{
color: black;


}
.refresh {
    margin-top: 1em;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: azure;
  color: black;
  border-radius: 5%;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin-left: 0.5em;
}


#renderRandom {
    margin: 2em;
}

</style>
