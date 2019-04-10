<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="list in lists">
    <a :href="list.clickUrl">
    <img :src="list.img">
    </a></div>
    </div>
    <div class="swiper-pagination"></div>
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
             pagination: {
             el: '.swiper-pagination',
             type: 'bullets',
             },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            autoplay: {
            delay: 3000,
            },

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