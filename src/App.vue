<template>

  <div id="app">
     <Header />  
      <div class="right"></div> 
    
  
       <router-view/>

      
      
  </div>
</template>


<script>
import Header from './components/header'




export default {
  name: 'app',
  components: {
    Header
  }
  
}

</script>




<style>

* {
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.right {
  float: right;
  margin: 4em;
  position: absolute;
  
}




</style>
