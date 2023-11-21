#!/usr/bin/env node

const program = require("commander");

const INTRO = `👋 Hi there! I'm Khushal Sharma, a programmer from India exploring web development.\nIn my free time, I contribute to open source projects and am open to new opportunities!\n\nNAME\nKhushal Sharma\n\nNICK(S)\nkhush, Logan1x, sharmakhushal78\n\nDESCRIPTION\n🚀 Programmer | 🌐 Web Dev Enthusiast\nOn a mission to master web development and bring ideas to life. Open for hire!\n\nCONTACT\n📧 E-mail: [sharmakhushal78@gmail.com]\n\nPROJECTS\nExplore my (mini)projects on this page using the command:\n  $ devdash projects\n\nTALKS\nFind out my live demo horror stories using the command:\n  $ devdash talks\n\nSEE ALSO\n- experience using $ devdash talks\n- skills using $ devdash skills\n\nHISTORY\n-`;

program
  .version("0.1.6")
  .description(INTRO)
  .command("projects", "Display my projects", {
    executableFile: "commands/projects.js",
  })
  .command("talks", "Display my talks", {
    executableFile: "commands/talks.js",
  })
  .command("experience", "Display my work experience", {
    executableFile: "commands/experience.js",
  })
  .command("skills", "Display my skills", {
    executableFile: "commands/skills.js",
  })
  .parse(process.argv);
