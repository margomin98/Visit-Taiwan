<template>
    <div class="container-fluid footer ">
        <div class="row footerContext ">
            <div class="col-lg-6 col-md-6">
                <p class="subscribe">Subscribe</p>
                <input class='rounded-3 ' type="text">
                <button class="rounded-3">Submit</button>
            </div>
            <div class="col-lg-6 col-md-6 pt-md-2 info">
                <p>Address</p>
                <p class="address">9F., No. 290, Sec. 4, Zhongxiao E. Rd., <br> Da’an District, Taipei City 106433, Taiwan (R.O.C.)</p>
                <p>Tel</p>
                <p class="address">+886-2-2349-1500<br>
                <div class="pb-5 d-lg-none">
                    <a href="https://www.facebook.com/">
                        <img src="../assets/facebook.png" alt="facebook"></a>
                    <a href="https://www.instagram.com/" class="ig mx-2">
                        <img src="../assets/instagram.png" alt="instagram"></a>
                    <a href="https://www.youtube.com/">
                        <img src="../assets/youtube.png" alt="youtube"></a>
                </div>
                </p>
         
            </div>
        </div>
    </div>
    <div class="container-fluid ">
        <div class="row  d-lg-none d-md-none">
            <div class="col social  d-flex justify-content-center">
                <a href="https://www.facebook.com/">
                    <img src="../assets/facebook.png" alt="facebook"></a>
                <a href="https://www.instagram.com/" class="ig mx-2">
                    <img src="../assets/instagram.png" alt="instagram"></a>
                <a href="https://www.youtube.com/">
                    <img src="../assets/youtube.png" alt="youtube"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    .footer {
        margin-top: 70px;
        background-color: #ae7150;
        font-size: 20px;
    }
    @media (min-width: 800px) {
        .footerContext {
            padding: 30px;
        }
    }
    @media (max-width: 576px) {
        .footerContext {
            padding: 30px;
        }
        .info {
            padding-top: 20px;
        }
    }
    .subscribe {
        font-size: 25px;
        border-left: 2px #f7f1f0 solid;
        padding-left: 5px;
    }
    input {
        border: none;
    }
    p {
        color: white;
    }
    button {
        margin-left: 10px;
        background-color: #e2dddc;
        border: none;
        color: #262220
    }
    .address {
        font-size: 15px;
    }
    .social {
        background-color: #d9c5ba;
        height: 40px;
        padding: 3px;
        border-top: solid 2px black;
    }
</style>