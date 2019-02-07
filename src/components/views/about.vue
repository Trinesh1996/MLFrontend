<template>
<div class="about">

    <h2>{{msg}}</h2> <br />



<h3>For ML Experts, for the intermediate, for the beginner. </h3> <br /> 




<!-- <span>Learn about Machine-learning</span> -->

<span>Learn more about Supervised Learning </span> <br />
<router-link to="/supervisedLearning">Learn</router-link> <br />


<span>Learn more about Unsupervised Learning </span> <br />

<router-link to="/unsupervisedLearning">Learn</router-link> <br />

</div>
    
</template>


<script>
export default {
    name: "about",
     data () {
         return {
             msg: "Welcome to A.L.E Artifical Intelligence Learning and Education"
         }
     }
    
}
</script>


<style scoped>

</style>
