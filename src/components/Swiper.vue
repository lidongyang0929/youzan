<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="list in lists">
    <a :href="list.clickUrl"></a>
    <img :src="list.img"></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'swiper',
    props:['lists'],
    mounted(){
        new Swiper('.swiper-container',{
            loop:true,
            pagination:'.swiper-pagination',
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
    }

        })
    }
}
</script>

<style>
  .swiper-container img{
    height: 100%;
    width: 100%;
  }
</style>