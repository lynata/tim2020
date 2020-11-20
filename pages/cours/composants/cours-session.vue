<template>
  <section id="session">
    <div>
      <h2>Cours 1</h2>
      <label class="flecheCours" v-on:click="cours1 = !cours1">cliiiiick</label>

      <cours-1 v-if="cours1 == true"></cours-1>
    </div>
  </section>
</template>
<script>
module.exports = {
  components: {
    cours1: httpVueLoader("../composants/cours-1.vue"),
  },
  data() {
    return {
      cours1: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>