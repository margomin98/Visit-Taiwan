<template>
<div class="container">
    <div class="row">
        <div class="col d-flex justify-content-center">

             <div class="contact">
  
<h1>Contact</H1>

  
  <div class="pb-4 contactInfo">Please leave a message and we will make sure
  that we get back to you as soon as possible </div>


<div class="form"><form action="https://formspree.io/f/xyyboqky"
method="POST"> 

 <div class="form-group py-3">
  <label for="exampleFormControlInput1">Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1">
</div>

<div class="form-group ">
  <label for="exampleFormControlInput1">Email</label>
  <input type="name" class="form-control" name="_replyto" id="exampleFormControlInput1">
</div>
<div class="form-group py-3">
  <label for="exampleFormControlTextarea1">Message</label>
  <textarea class="form-control" name="message" rows="3"></textarea>
</div>

<button type="submit" class="button rounded-pill mt-5">Send</button>


</form></div>
    </div>
        </div>
    </div>
</div>
 
  
</template>

<script>
export default {
 name:'Contact'
}
</script>

<style>
.contact{
    padding-top: 50px;
}
h1{
    color:#a15d38
}

label{
    font-size:20px;
    color:#a15d3884
}
.button{
    width: 100px;
    background-color: #72442b41;
    border:none
}
.contactInfo{
    color: #7e39149e;
}
</style>