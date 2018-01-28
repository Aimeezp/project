<template>
    <div class="loginCons">
      <form action="">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-button type="primary">登录</mt-button>
      </form>
    </div>
</template>
<script>
 export default{
   data(){
     return{
       username:'',
       email:''
     }
   }
 }
</script>
<style scoped lang="scss">

</style>
