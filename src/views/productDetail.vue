<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="detail d-md-flex">
                    <div class="productImg">
                        <img :src='details.image' class="productImg">
                    </div>
                    <div class="productInfo">
                        <p class="productTitle"></p>
                        <p class="productName">{{details.name}}</p>
                        <p class="productPrice">NT{{details.price}}</p>
                        <p class="side text-muted">The shipping fee is not included in the price</p>
                        <button class="productAdd rounded-pill" @click='addToCart'>Add Item</button>
                        <button class="productRemove rounded-pill" @click='removeItem'>Remove Item</button>
                          <router-link :to="{name:'shop'}"><button class="return rounded-pill" >Return</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'productDetail',
        data() {
            return {
                details: this.$route.params
            }
        },
        methods: {
            addToCart() {
                this.$store.dispatch('addToCart', this.details);
            },
            removeItem() {
                this.$store.dispatch('removeItem', this.details);
            }
        },
        created() {
            if (this.$route.params.id != undefined)
                localStorage.setItem('details', JSON.stringify(this.$route.params));
        },
        mounted() {
            this.details = JSON.parse(localStorage.getItem('details'));
        },
    }
</script>

<style>
    .detail {
        padding-top: 50px;
    }
    .productName {
        font-size: 35px;
        color: #55210397;
    }
    @media (min-width: 913px) {
        .productInfo {
            margin-left: 50px;
        }
    }
    .productPrice {
        font-size: 20px;
        color: #dbb6a1;
    }
    .productImg {
        height: 300px;
    }
    .productRemove {
        margin:0 10px 0 10px;
    }
    .return{
        background-color: rgb(227, 180, 180);
    }
    button {
        margin-top: 20px;
        border: none;
        width: 100px;
        padding: 5px;
        font-size: 15px;
        color: #302e2d;
        background-color: #d9aa92;
    }
    .side {
        padding-bottom: 50px;
    }
</style>