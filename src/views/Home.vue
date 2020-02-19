<template>
  <v-container class="home">
    <v-layout class="options" row wrap justify-space-around>
      <a href="#" id="grid_btn" @click.prevent="show_grid=true">Show Grid</a>
      <router-link id="about_btn" to="/about">About</router-link>
      <a href="#" id="carousel_btn" @click.prevent="show_grid=false">Show Carousel</a>
    </v-layout>
    <v-layout row wrap center justify-center v-if="show_grid">
      <v-flex xs12 md3 class="item" v-for="(item,i) in items.groups" :key="i">
        <div class="top_overlay" v-html="item.name"></div>
        <div class="price">${{item.priceRange.regular.high}}</div>
        <a :href="item.links.www" target="_blank">
          <img class="item_img" :src="item.hero.href" alt="">
        </a>
      </v-flex>
    </v-layout>
    <v-layout v-else row wrap center justify-center>
      <carousel :items="items"></carousel>
    </v-layout>
  </v-container>
</template>

<script>
import items from '@/json/items.json';
import Carousel from '@/components/Carousel';

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data() {
    return {
      items: items,
      show_grid: false
    }
  },
  mounted: function(){

  }
}
</script>
<style lang="scss" scoped>
  .options {
    margin: 2em 0;
  }
  .item {
    position: relative;
    margin: .5%;
    .top_overlay, .price {
      position: absolute;
    }
    .top_overlay {
      top: 0;
      left: 0;
      padding: 1%;
      text-align: center;
      width: 100%;
      font-size: .6em;
      background: rgba(254,254,254,0.4);
    }
    .price {
      bottom: 0;
      font-size: .7em;
      left: 0;
      margin: 0 0 2em .5em;
      color: white;
      padding: 1% 1.5%;
      background: rgba(0,0,0,0.7);
    }
    .item_img {
      width: 100%;
    }
  }
</style>
