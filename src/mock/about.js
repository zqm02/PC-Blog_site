import Mock from "mockjs";

Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://tuobaye.com/demo/code-printer/",
});
