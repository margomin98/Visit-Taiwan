<template>
  
<div class="container d-flex justify-content-center ">
      <div class="login shadow p-3 mb-5  rounded">
<div class="text-center information ">
<p class="infoTitle ">Log In</p>
<div class="input-group mb-3">
  <span class="input-group-text" id="id">E</span>
  <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="email" v-model="email" >
</div>

<div class="input-group ">
  <span class="input-group-text" id="id">P</span>
  <input type="password" class="form-control " placeholder="Password" aria-label="Password" aria-describedby="pw" v-model="password">
  <p v-if='errMSg'>{{errMsg}}</p>
</div>
<div class="button">
<button class="loginbtn rounded-pill" @click='login'>Log In</button>
<br>
<router-link :to='{name:"signup"}'>
<button class="signupbtn rounded-pill">Sign Up</button></router-link>
</div>
</div>

</div>

  </div>
</template>
<script setup>
import {ref} from 'vue';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'vue-router'

const email = ref('');
const password = ref('');
const router = useRouter()
const errMsg =ref() //error msg
const login = () =>{
  //need .value bc ref()
  const auth = getAuth()
  signInWithEmailAndPassword(getAuth(),email.value,password.value)
  .then((data)=>{
    alert('Successfully logged in! Have a nice day')
    console.log(auth.currentUser)
    router.push('/')
  })
      .catch((error)=>{
    console.log(error.code);
    alert(error.message);
  });

}

</script>

<style>
.login{
margin-top: 100px;
    height:350px;
    width:400px;
    background-color: #a15d3841;
    border: 5px solid #542d1841 ;
}
.keyInfo span{
  
  margin-right: 10px;
}
p{
    font-size: 30px;
    color: #55210376;
}
.loginbtn{
    width: 200px;
    margin-bottom: 10px;
    background-color: #672c0d66;
    border:none;
    padding: 3px;
}
.signupbtn{
    width: 200px;
  border:none;
 background-color: #672c0d46;
   padding: 3px;
}
.input-group-text{
  background-color: #672c0d94;
color: white;
border: none;
}
.button{
  padding-top: 70px;
}
</style>