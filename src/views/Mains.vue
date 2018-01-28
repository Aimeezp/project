<template>
    <div class="mainCons">
        <h1>前端那些事儿</h1>
       <ul class="nav clearfix" >
         <li v-for="item in $router.options.routes[0].children">
           <router-link :to="{path: item.path}" v-text="item.name"></router-link>
         </li>
       </ul>
      <router-view></router-view>
    </div>
</template>
<script>
 export default{
   data(){
     return{

     }
   }
 }
</script>
<style scoped lang="scss">
  /*@import '../styles/public.scss';*/
  $color:#f0cd79;

  .clearfix:after{
    display:block;
    content:'';
    clear:both;
  }
   .mainCons{
     background:$color;
     h1{
       color:#fff;
       padding: 20px;
     }
     .nav{
       list-style: none;
       background:#edb326;
       li{
         float:left;
         cursor: pointer;
         a{
           text-decoration: none;
           display:inline-block;
           color:#fff;
           padding:20px;
           transition: all .3s ease;
           &:hover{
              transform: scale(1.1);
              background: #fff;
              color:$color;
            }
         }
         .router-link-active{
           background: #fff;
           color:$color;
         }
       }
     }

   }
</style>
