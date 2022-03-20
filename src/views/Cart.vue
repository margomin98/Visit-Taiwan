<template>
<!-- 當沒有產品就顯示empty頁面 -->
<div>
       <div class="container cartPage"  v-if='totalPrice !== 0'  >

        <div class="row">
<div class="col-lg col-md-5 bagSection">

        <p class="bag">Shopping Bag</p> 
          <div class="card" v-for='items in cartItems' :key='items.id' >
    
  <div class="card-body d-flex">
     <img class="addedImg" :src="items.image"  alt="Card image cap">
     <div class="summaryDescription align-self-center ">
       <span class="bagTitle">{{items.name}} </span>       
     </div>

     </div>

  <div class="mathCal d-flex justify-content-end">
        <span class="bagPrice">NT{{items.price}}</span>
     <button class="mathBtn rounded-pill" @click="removeItem(items)">-</button>
                            <span class="quantity">{{items.quantity}}</span>
                            <button class="mathBtn rounded-pill" @click="addItem(items)">+</button>
             </div>
</div>
                    <Summary v-bind:totalPrice='totalPrice' />
             </div>
            <div class="col-lg-6git add . bill ">
                <div class="address col">
                    <div class="cartTitles d-flex justify-content-between">
                        Shipping Address <span @click='change' class="change">Change</span></div>
                    <span id="changeAddress" class="address pt-2">
                        Michelle Loh
                        <br> No.123
                        <br> Yonghe Dist,Zhonghe Road,
                        <br> New Taipei City</span>
                </div>
                <div class="option pb-2">
                    <div class="cartTitle">
                        Shipping Options
                    </div>
                    <div class="check pt-2">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault1">
                            <label class="form-check-label">
        
                            NT60 Mail Shipping  
        
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault1">
                            <label class="form-check-label">
        
                        FREE Cash On Delivery
        
                          </label>
                        </div>
                    </div>
                </div>
                <div class="payment">
                    <div class="cartTitle">
                        Secure Payment
                    </div>
                    <div class="payWay pt-2 ">
                        <div class="form-check pb-2 d-flex">
                            <input class="form-check-input" type="radio" name="flexRadioDefault">
                            <label class="form-check-label">
        
                        Credit Card
        
                          </label>
                            <div class="cardLogo"> <img src='../assets/amex.png' alt="amex">
                                <img src='../assets/master.png' alt="master">
                                <img src='../assets/visa.png' alt="visa" class="visa">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Card Holder</label>
                            <input type="text" class="form-control" onkeyup="this.value=this.value.replace(/[^a-zA-Z]/g,'')" id="exampleFormControlInput1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Card Number</label>
                            <input type="text" class="form-control" onkeyup="this.value=this.value.replace(/\D/g,'')" id="exampleFormControlInput1">
                        </div>
                        <div class="row g-2 pb-2">
                            <div class="col-md">
                                <label for="exampleFormControlInput1" class="form-label">Expiry Date</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="01/01">
                            </div>
                            <div class="col-md">
                                <label for="exampleFormControlInput1" class="form-label">CVV</label>
                                <input type="text" class="form-control" onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="3" id="exampleFormControlInput1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paypal form-check pt-2 ">
                    <input class="form-check-input" type="radio" name="flexRadioDefault">
                    <label class="form-check-label">
        
                       Paypal
        
                          </label>
                </div>
                <div class="row">
                
                    <div class="checkout d-flex justify-content-end p-3">
                        <button @click="checkout" class="checkOut rounded-pill">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Empty v-else/>
</div>
 
</template>



<script>
import Summary from '../components/Summary'
import Empty from '../components/Empty'
import swal from 'sweetalert'

    export default {
        name:'Cart',
     components:{Summary,Empty},
        methods: {
            change: function() {
                document.getElementById('changeAddress').contentEditable = true
            },
addItem(items){
    // 增加和刪減代碼
this.$store.dispatch('addToCart',items);
},
removeItem(items){
this.$store.dispatch('removeItem',items);
},
checkout(){
swal("Thank you for your purchase!").then((value) => {
  swal(`See you next time :)`);
});

}
        },
        computed: {
            cartItems(){
                return this.$store.state.cartItems;
            },
            totalPrice(){
                let price=0;
                this.$store.state.cartItems.map(el=>{
                    price += el ['quantity']*el['price']
                })
                return price;
            }
        }
    }
</script>



<style>
@media (max-width:768px) {
    .bagSection{
        padding-bottom: 50px;
    }
}
.bagSection{
    margin-right: 20px;
}
    .change {
        font-size: 15px;
        color: grey
    }
    .bag{
    font-size: 40px;
   color: rgb(157, 118, 67); 
}
    .cartTitle,
    .cartTitles {
        font-size: 25px;
        border-bottom: 1px dotted black;
        color: #55210397
    }
  
 
    .cardLogo {
        margin-left: 10px;
    }
    .visa {
        padding-left: 2px;
    }
    .bag {
        font-size: 30px;
        color: #55210376;
          border-bottom: 1px dotted black;
          max-width: 200px;
    }
    .cartPage {
        margin-top: 100px;
    }
    .bill {
        height:750px;
        width: auto;
        background-color: #72442b41;
        padding: 20px;
      
    }
    .checkOut {
        border: none;
        padding: 5px 10px 5px 10px;
    }
    .addedImg{
        width: 150px;
margin-right: 50px;
    }
    .mathBtn{
        width: 25px;
margin: 0 10px 0 10px;
    }
    .quantity{
        font-size: 20px;
    }
    .cart-items{
        padding-top: 50px;
    }

  .bagTitle{
      font-size: 20px;
      color: #502e1ba0;
  }
  .bagPrice{
      padding-right: 30px;
      font-size: 20px;
  }
</style>