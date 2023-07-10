<template>
  <div
    class="home-container"
    v-loading="loading"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transition="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, //是否正在滚动中
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    //切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        // console.log("滑动中");
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //向上滑动
        // this.switching=true;
        this.index--;
        // console.log("向上滑动")
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        //向下滑动
        // this.switching=true;
        this.index++;
        // console.log("向下滑动")
      }
    },
    handleTransitionEnd() {
      this.switching = false;
      // console.log("过度效果结束")
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  @gap: 15px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
