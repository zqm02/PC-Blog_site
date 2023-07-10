<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.url ? item.url : 'javascript:void(0)'"
      :target="item.url ? '_blank' : '_self'"
      class="project-item"
    >
      <img :src="item.thumb" class="thumb" />
      <div class="info">
        <h2>{{ item.name }}</h2>
        <a :href="item.github" v-if="item.github" class="github">github</a>
        <p v-for="{ desc, i } in item.description" :key="i">{{ desc }}</p>
        <p>{{ item.description }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll.js";
import { mapState } from "vuex";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
}
.thumb {
  width: 250px;
  min-height: 150px;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}
.github {
  font-size: 14px;
  color: @primary;
}
</style>
