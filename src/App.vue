<template>

  <div id="app">
     <Header />  
      <div class="right">
          <control-panel />
       </div> 
    
  
       <router-view/>

      
      
  </div>
</template>


<script>
import Header from './components/header'
import ControlPanel from './components/controlPanel'

export default {
  name: 'app',
  components: {
    Header, ControlPanel
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
