<template>
  <div id="app">
    <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <img src="./assets/logojom.png" class="logo"> 
    <p class="h3 my-0 me-md-auto fw-normal"> JOM Streetwear</p>
    <nav class="my-2 my-md-0 me-md-3">
    <router-link to='/Home' class="p-2 text-dark" > รายการสินค้า </router-link>
    <router-link to='/Register' class="p-2 text-dark" > Register </router-link>
    <router-link to='/Header' class="p-2 text-dark" > ตะกร้าสินค้า </router-link>
    </nav>
   
    </header>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");
*{
  font-family: "Prompt", sans-serif;
}
.logo{
  width: 50px;
}
</style>
