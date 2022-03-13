<template>
  <header class="navbar navbar-custom navbar-expand-lg  ">
    <div class="container-fluid d-flex flex-row-reverse bg-highlight ">
      <div class="toggler">
        <button class="navbar-toggler custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon "></span>    
         </button></div>
      <div class="small_logo">
        <router-link class="small-logo" :to="{name:'home'}">
          <img src="../assets/logo.png" class="d-lg-none">
        </router-link>
      </div>
      <div class="my-nav collapse navbar-collapse" id="navbarNav">
        <div class="logo">
          <router-link :to="{name:'home'}">
            <img src="../assets/logo.png" class="d-none d-lg-block">
          </router-link>
        </div>
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link " :to="{name:'shop'}">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'quiz'}">Q&A</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'contact'}">Contact</router-link>
          </li>
        </ul>
        <div class="section_2 ">
          <ul class="navbar-nav">
            <li class=" cartIcon">
              <div class="position-relative">
                <router-link id="cart" class="cartBtn " :to="{name:'cart'}">
                  <img src="../assets/cart.png" class='cart'>
                </router-link>
                <div class="badge badgeTop position-absolute top-0 start-100 translate-middle rounded-pill ">{{count}}</div>
              </div>
            </li>
            <li class="acc">
              <router-link class="nav-link" :to="{name:'signup'}" style="color:#c79b93">Account</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="container-fluid">
    <div class="row">
      <div class="col hgBoard d-lg-none d-md-none fixed-bottom  d-flex">
        <div class="cartBoard position-relative">
          <router-link id="cart" class="cartBtn  " :to="{name:'cart'}">
            <img src="../assets/cart.png" class='cart  '>
          </router-link>
          <div class="badge position-absolute top-0 start-100 translate-middle rounded-pill  ">
            {{count}}
          </div>
        </div>
        <router-link :to="{name:'login'}" style="text-decoration:none;">
          <p class="loginBtn">Log In</p>
        </router-link>
        <router-link :to="{name:'signup'}" style="text-decoration:none;">
          <p class="signUpBtn">Sign Up</p>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.cartItemCount
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    margin-right: 25px;
  }
  .navbar-toggler {
    border: none;
  }
  .navbar-custom {
    background-color: #f7f1f0;
  }
  .hgBoard {
    height: 50px;
    background-color: #e2dcdb;
    border-top: 1px dotted grey;
    justify-content: space-between;
  
  }
  .cartBoard {
    padding-top: 12px;
  }
  .loginBtn,
  .signUpBtn {
    font-size: 25px;
    color: black;
  }
  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(161,92,56)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  .nav-link,
  .nav-item {
    padding: 10px 0 0 10px;
    font-size: 20px;
    color: #c79b93;
    :hover{
      color:#c79b93;
    }
  }

  .section_2 {
    display: flex;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .navbar {
      display: flex;
      margin-left: auto;
    }
  }
  @media (max-width: 913px) {
    .section_2 {
      display: none
    }
  }
  .badge {
    background-color: rgb(214, 151, 151);
    color: white;
    margin-top: 13px;
  }
  .cartIcon {
    padding-top: 10px;
  }
  .acc {
    padding-left: 15px;
  }
  .badgeTop {
    margin-top: 5px;
    font-size: 5px;
    padding: 4px;
  }
</style>