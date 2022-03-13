<template>
    <div class="quiz">
        <div class="container">
            <div class="col title ">Q&A</div>
            <div class="row">
                <div class="col-xl-3 col-md-3 col-xs-12 d-xs-flex justify-content-center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" @click="show = 'account'">Account</li>
                        <li class="list-group-item" @click="show = 'payment' ">Payment</li>
                        <li class="list-group-item" @click="show = 'd&r' ">Delivery & Refund</li>
                        <li class="list-group-item" @click="show = 'coupon' ">Coupon</li>
                    </ul>
                </div>
                <div class="col-xl-9 col-md-9 col-xs-12 answerList">
                    <p v-if="show ==='account'"><p></p>
                    </p>
                    <p v-if="show ==='payment'">
                        <p class="paymentTitle">Q1.Payment </p>
                        <span class="answer">A:</span> similique sapiente eligendi! At, laudantium alias repudiandae vero quasi aliquid quia similique?
                        <p class="paymentTitle pt-5">Q2.About Payment</p>
                        <span class="answer">A:</span>architecto debitis similique sapiente eligendi! quasi aliquid quia similique?
                    </p>
                    <p v-if="show ==='d&r'">
                        <p class="paymentTitle">Q1.Delivery & Refund </p>
                        <span class="answer">A:</span> oluptatibus repellendus, similique sapiente eligendi! Ataliquid quia similique?
                        <p class="paymentTitle pt-5">Q2.About Delivery & Refund</p>
                        <span class="answer">A:</span> onsectetur adipisicing elit. Velit quo
                    </p>
                    <p v-if="show ==='coupon'">
                        <p class="paymentTitle">Q1.Coupon</p>
                        <span class="answer">A:</span> Lorem ipsum dolor sit amet
                        <p class="paymentTitle pt-5">Q2.About Coupon</p>
                        <span class="answer">A:</span> At, laudantium alias repudiandae vero quasi aliquid quia similique?
                    </p>
                    <p v-if="show ==='shop'">is s</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Quiz',
        data() {
            return {
                show: 'payment'
            }
        },
    }
</script>

<style scoped>
    .title {
        margin-top: 50px;
        color: #a15d3841;
        font-size: 50px;
        justify-content: center;
        display: flex;
    }
    @media (max-width:500px) {
        .answerList {
            padding-top: 50px;
        }
    }
  
    .quizList {
        max-width: 200px;
    }
    .list-group-item {
        color: #b57451;
        font-size: 20px;
    }
    .list-group-item:hover {
        color: #b57451c0;
        background-color: white;
    }
    .list-group-item>a:visited {
        background-color: white;
    }
    .paymentTitle {
        font-size: 25px;
    }
    .answer {
        font-size: 30px;
    }
    .answerList {
        padding-left: 30px;
        
        color: #915b3d72;
      
    }
   p{
       font-size: 20px;
   }
   </style>