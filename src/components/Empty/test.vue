<template>
  <div class="box">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.box {
  width: 500px;
  height: 400px;
  border: 2px solid black;
  margin-left: calc(50% - 250px);
  margin: 0 auto;
  position: relative;
}
</style>
