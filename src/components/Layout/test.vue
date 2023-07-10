<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏区域</div>
      </template>
      <template>
        <div class="main">主区域</div>
      </template>
      <template #right>
        <div class="right">右边栏区域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background: lightgreen;
}
.right {
  width: 150px;
  height: 100%;
  background: lightcyan;
}
</style>
