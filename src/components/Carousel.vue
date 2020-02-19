<template>
  <div class="carousel-wrap">
    <v-carousel class="">
      <v-carousel-item class="item"
      v-for="(item,i) in items.groups"
      :href="item.links.www"
      :key="i"
      target="_blank"
      :src="item.hero.href"
      reverse-transition="fade-transition"
      transition="fade-transition"
      >
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>


export default {
  props: ["items"],
  methods: {},
  name: "Carousel",
  mounted: function() {}
}
</script>

<style lang="css" scoped>
  .carousel-wrap {
    width: auto;
    display: flex;
    justify-content: center;
  }
</style>
