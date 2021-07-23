<template>
  <div class="home">
  </div>
</template>

<script>
//axios配置参数
import axios from 'axios'

export default {
  name: '3-2',
  components: {
   
  },
  created(){
      axios.create({
        baseURL:'http://localhost:8080/2-3',//请求的域名
        timeout:1000,//请求的超时时长
        url:'data.json',//请求的路径
        method:'get',//请求方法get,post ,put,patch,delete
        headers:{
            token:''
        },//请求头的信息
        params:{},//请求参数拼接在url后面
        data:{}//请求参数放在请求体
      })

     // axios全局配置
     axios.defaults.timeout=3000
     //axios实例配置
     let a=axios.create()
     a.timeout=4000
     //axios请求配置
     axios.get('/data.json',{
         timeout:2000
     })
  }
}
</script>
