const skillsArr = [
  {
    skillName: "Python",
  },
  {
    skillName: "JavaScript",
  },
  {
    skillName: "React",
  },
  {
    skillName: "Node",
  },
  {
    skillName: "Exp",
  },
  {
    skillName: "MongoDB",
  },
  {
    skillName: "SQL",
  },
  {
    skillName: "Linux",
  },
  {
    skillName: "Bash",
  },
];

console.log("Here are my skills:");

(() => {
  const skillsText = skillsArr.reduce((acc, curr, index) => {
    acc +=
      index === skillsArr.length - 1 ? curr.skillName : `${curr.skillName}, `;
    return acc;
  }, "");

  console.log(skillsText);
})();
