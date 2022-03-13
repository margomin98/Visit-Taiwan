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
            <div class="card" v-for="product in products" :key='product'>
              <img :src='product.image' class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">NT{{product.price}}</p>
                 <div class='text-center' @click='addItemToCart(product)'><img :src='product.cart'></div>  
        
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
name:'productList',
props:['id']
}
</script>

<style>

</style>