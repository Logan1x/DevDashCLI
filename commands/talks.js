const talksArr = [
  {
    Title: "Shipping PWA to Play Store, A tiny talk",
    Speaker: "Khushal Sharma",
    Link: "https://www.youtube.com/watch?v=d2hhAlmB0Wg",
  },
  {
    Title: "Lets Learn GDB (GNU Debugger)",
    Speaker: "Khushal Sharma",
    Link: "https://www.youtube.com/watch?v=Biak99FOcto",
  },
];

console.log("Here are my talks:");

// IIFE to call reduce and console info
(() => {
  const talkText = talksArr.reduce((acc, curr) => {
    acc += `\n${curr.Title} by ${curr.Speaker} \n ${curr.Link} \n\n`;
    return acc;
  }, "");

  console.log(talkText);
})();
