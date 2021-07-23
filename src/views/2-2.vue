<template>
  <div class="home">
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios2-2',
  components: {
   
  },
  created(){
      //获取
    axios.get("/data.json").then(function(res){
      console.log(res.data);
    })
    //提交
    axios.post("/post",{
        params:{
        id:12
        }
    }).then(res=>{
        console.log(res.data);
    })
    //更新
    axios.put('/put',{
        params:{
            id:12
        }
    }).then(res=>{
         console.log(res.data);
    })


    //删除
    axios.delete("/delete",{
        params:{
        id:12
        }
    }).then(res=>{
        console.log(res.data);
    })
    axios.delete("/delete",{
        data:{
        id:12
        }
    }).then(res=>{
        console.log(res.data);
    })
  }
}
</script>
