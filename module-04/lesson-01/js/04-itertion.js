const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;
for (const key in feedback) {
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}
console.log("totalFeedback:", totalFeedback);
console.log(feedback);
console.log();
