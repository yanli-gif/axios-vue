<template>
  <div class="home">
  </div>
</template>

<script>
//axios实例


import axios from 'axios'

export default {
  name: '3-1',
  components: {

  },
  created(){
      let a=axios.create({
          baseURL:'http://localhost:8080/2-3',
          timeout:1000
      })
      a.get('/data.json').then(res=>{
          console.log(res)
      })
  }
}
</script>
