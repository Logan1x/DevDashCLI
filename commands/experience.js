const expArr = [
  {
    companyName: "Strand Life Sciences",
    designation: "Associate Software Engineer",
    duration: "June 2022 - Present",
  },
];

console.log("Experience:");

(() => {
  const expText = expArr.reduce((acc, curr) => {
    acc += `\n${curr.companyName} \n ${curr.designation} \n ${curr.duration} \n\n`;
    return acc;
  }, "");

  console.log(expText);
})();
