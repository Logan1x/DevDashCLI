#!/usr/bin/env node

const program = require("commander");

program
	.version("1.0.0")
	.description("My CLI Portfolio")
	.command("projects", "Display my projects", {
		executableFile: "commands/projects.js",
	})
	.command("experience", "Display my work experience")
	.command("skills", "Display my skills")
	.parse(process.argv);
