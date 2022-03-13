<template>
 
                <div class="summaryCart">
                    <div class="cartTitle" style="max-width:200px">
                        Order Summary
                    </div>
                    <div class="summaryInfo ">
                        <div class="shipping">
                        <span class="fee">Shipping Fee</span>
                        <span class="ship d-flex justify-content-end">NT 20</span> </div>
                        <div class="total-price d-flex justify-content-end">
                           Total NT {{totalPrice+60}}
                        </div>
                    </div>
                </div>
          
</template>

<script>
export default {
name:'Summary',
props:['totalPrice']
}
</script>

<style>

.summaryInfo{
    font-size: 20px;
    padding-top: 10px;
}


.total-price{
color: rgb(214, 174, 122);
padding-top: 15px;

}

</style>