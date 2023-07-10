<template>
  <div class="blog-catagory-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalarticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalarticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id == this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      //跳转到 当前的分类id 当前的页容量 newPage的页码
      if (item.id === -1) {
        //当前没有分类
        //  /article?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
        // /article/cate/${this.routeInfo.categoryId}?page=${this.routeInfo.limit}
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-catagory-container {
  width: 200px;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
