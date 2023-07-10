import Mock from "mockjs";

Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "http://n.sinaimg.cn/translate/274/w937h937/20181121/w3_3-hnyuqhi6990881.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/zqm02",
    qq: "2067307108",
    qqQrCode:
      "tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
    weixin: "zqm_1112",
    weixinQrCode:
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.ilT1ryR6pGfFYcY3xFSKNAHaI4?w=183&h=218&c=7&r=0&o=5&dpr=2&pid=1.7",
    mail: "zqm556194@gmail.com",
    icp: "赣ICP1902190号",
    githubName: "29m02",
    favicon:
      "http://n.sinaimg.cn/translate/274/w937h937/20181121/w3_3-hnyuqhi6990881.jpg",
  },
});
