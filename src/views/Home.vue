<template>
    <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src='../assets/street.jpg' class="w-100 d-block" alt="street">
        </div>
        <div class="carousel-item">
          <img src='../assets/hotel.jpg' class="w-100 d-block" alt="hotel">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
    </div>
    <div class="animate__animated animate__fadeInUp sign"><img class="w-100" src='../assets/sign.png' alt="Quote"></div>
    <div class="container-fluid">
      <div class="row shopping ">
        <div class="col-12">
          <h1>Shopping</h1>
          <span @click="show = 'snack'">Snack</span> /
          <span @click="show = 'shop' ">Shop</span>
        </div>
        <div class="col-lg-12 d-flex justify-content-around flex-column d-sm-flex flex-sm-row " v-if="show ==='snack'">
          <div class="snack  " v-for="items in snack" :key='items.id'>
            <div class="  text-center">
              <img @click="productDetail(items)" :src='items.image'>
           <span class="itemName">
                  <br>
           {{items.name}}<br></span>
         <span class="price "> NT {{items.price}}</span>
            </div>
          </div>
        </div>
        
        <div class="col-lg-12 d-flex justify-content-around flex-column d-sm-flex flex-sm-row" v-if="show ==='shop'">
          <div class="snack " v-for="items in shop" :key='items.id'>
            <div class="  text-center">
              <img @click="productDetail(items)" :src='items.image'>
         <span class="itemName">
                  <br>
           {{items.name}}<br></span>
         <span class="price"> NT {{items.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="text-center cityTitle">Visit Our Local Spot</div>
        <div class="col-lg-12 city d-flex align-items-center justify-content-center">
          <a  href="https://margomin98.github.io/Taiwan-Tours/" class="enter text-center">Enter</a>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        show: 'snack'
      }
    },
    computed: {
      shop() {
        return this.$store.state.shop //抓取store資料
      },
      snack() {
        return this.$store.state.snack //抓取store資料
      }
    },
    methods: {
      productDetail(item) {
        this.$router.push({
          name: 'product-detail',
          params: item
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shopTitle {
    text-decoration: none;
  }
  .sign {
    padding-top: 60px;
  }
  h1 {
    color: #f7f1f0;
  }
  .shopping {
    margin-top: 50px;
    background-color: #a15d3841;
    height: 100%;
    padding-bottom: 10px;
  }
  .snack,
  .shop {
    display: flex;
    padding-top: 15px;
  }
  .price{
     color: #a96b38;
  }
  .itemName{
    font-size:20px
  }
  @media (max-width:720px) {
    .shop,
    .snack {
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
    }
    .snack_1,
    .shop_1 {
      padding-top: 15px;
    }
  }
  .shop img {
    max-height: 300px
  }
  .snack img {
    height: 300px;
    width: auto;
  }
  .city {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('../assets/citybg.jpg');
    transform: scale(1, 1);
    margin: 40px 0 50px 0;
    height: 300px;
    background-size: cover;
  }
  .cityTitle {
    font-size: 30px;
    padding-top: 30px;
    color: #262220
  }
  .enter {
    border: 3px solid white;
    color: white;
    position: absolute;
    padding: 5px 20px 5px 20px;
    text-decoration: none;
  }
  .enter:hover {
    transform: scale(1.2, 1.2);
    color: white;
  }
</style>