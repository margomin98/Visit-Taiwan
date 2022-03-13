<template>
  <div class="container d-flex justify-content-center ">
    <div class="login shadow p-3 mb-5  rounded">
      <div class=" information ">
        <p class="infoTitle text-center ">Sign Up</p>
        <div class="SignEmail">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
        </div>
        <div class="signPw mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="At least 8 characters" v-model="password">
        </div>
        <div class="button">
          <router-link :to='{name:"signup"}'>
            <button @click='signup' class="signupbtn rounded-pill">Sign Up</button></router-link>
          <router-link :to='{name:"login"}'><button class="loginbtn rounded-pill">Log In</button></router-link>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    getAuth,
    createUserWithEmailAndPassword
  } from 'firebase/auth';
  import {
    useRouter
  } from 'vue-router'
  const email = ref('');
  const password = ref('');
  const router = useRouter()
  const signup = () => {
    //need .value bc ref()
    const auth = getAuth()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        alert('Success!Bringing you back to Home')
        console.log(auth.currentUser)
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  }
</script>

<style lang="scss">
  .login {
    margin-top: 100px;
    height: 350px;
    width: 400px;
    background-color: #a15d3841;
    border: 5px solid #542d1841;
  }
  .keyInfo span {
    margin-right: 10px;
  }
  label {
    color: #55210376
  }
  p {
    font-size: 30px;
    color: #55210376;
  }
  .loginbtn,
  .signupbtn {
    width: 200px;
    background-color: #672c0d66;
    border: none;
    padding: 3px;
  }
  .signupbtn {
    margin-bottom: 10px;
    background-color: #672c0d46;
  }
  .input-group-text {
    background-color: #672c0d94;
    color: white;
    border: none;
  }
  .button {
    padding-top: 20px;
    text-align: center;
  }
</style>