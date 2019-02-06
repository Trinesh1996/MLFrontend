<template>
    <div id="buttons">
        

    </div>
</template>




<script>
import Graph from "./graphs.vue";
import * as tf from '@tensorflow/tfjs';
import p5 from 'p5';


export default {
    name: "tables",

    props: ["values"],

    components: {
     Graph
      
    },

    data () {
        return {
            msgs: "Tables"
        }
    },

    methods: {





    }
}

</script>


<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}

</style>





