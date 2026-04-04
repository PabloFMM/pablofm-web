export default {
  default: {
    paths: ["features/**/*.feature"],
    require: ["features/steps/**/*.js"],
    format: ["progress-bar", "html:reports/cucumber-report.html"],
    language: "es",
  },
};
