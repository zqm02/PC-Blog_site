<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>2067307108</span>
      </a>
    </li>

    <li>
      <a href="">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>2067307108@qq.com</span>
      </a>
    </li>

    <li>
      <a href="">
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>zqm_1112</span>
      </a>
      <div class="pop">
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP-C.ilT1ryR6pGfFYcY3xFSKNAHaI4?w=183&h=218&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
      </div>
    </li>

    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2067307108</span>
      </a>
      <div class="pop">
        <img
          src="https://tse2-mm.cn.bing.net/th/id/OIP-C.ilT1ryR6pGfFYcY3xFSKNAHaI4?w=183&h=218&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  list-style: none;
  padding: 0px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-content: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: white;
      bottom: -4px;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
