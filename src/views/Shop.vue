<template>
  <div class="ProductList">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md select">
          <p class="selectTitle">Product</p>

     Add a item you 
     
      want <br>
       to purchase
      
        </div>
        <div class="col-lg-10">
          <div class="card-group">
            <div class="card" v-for="items in shop" :key='items.id'>
              <img @click="productDetail(items)" :src='items.image' class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{items.name}}</h5>
                <p class="price">NT{{items.price}}</p>
              </div>
            </div>
            <div class="card" v-for="items in snack" :key='items.id'>
              <img @click="productDetail(items)" :src='items.image' class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{items.name}}</h5>
                <p class="price">NT{{items.price}}</p>
              </div>
         
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>

</template>

<script>

export default {
 computed: {
   shop(){
     return this.$store.state.shop //抓取store資料
   },
    snack(){
     return this.$store.state.snack //抓取store資料
   }
 },
 methods: {
  productDetail(item){
    this.$router.push({name:'product-detail',params:item})
  },
}
}
</script>


<style>
  .ProductList {
    margin-top: 100px;
  }
 
  .submit {
    margin-top: 20px;
  }
  .submit button {
    border: none;
    background-color: #a15d3841;
    padding: 5px;
  }
  .selectTitle {
    color: #a15d3841;
    max-width: 150px;
    font-size: 30px;
    border-bottom: 2px dashed #000;
  
  }
  .card {
    border: none;
  }
  .card-title,
  .card-text {
    font-size: 15px
  }
  .card-body {
    text-align: center;
  }
  .imgCart{
    width: 100px;

  }
  .price{
    color: #d1bebb;;
  }
</style>