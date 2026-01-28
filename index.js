// Built-in modules
import process, { stdin } from "node:process";
// Third-party module
import chalk from "chalk";
// Custom modules
import { checkAge } from "./my_modules/ageCheck.js";
import { formatUserInfo } from "./my_modules/userInfo.js";

console.log(chalk.red("What is your name?")); // Using process.stdin to get user input

stdin.once("data", (username) => {
  const nameSupplied = String(username).trim();
  console.log(chalk.green(`Please what is your age?`));

  stdin.once("data", (age) => {
    const ageSupplied = Number(String(age));

    const status = checkAge(ageSupplied);
    const output = formatUserInfo(nameSupplied, ageSupplied, status)

    console.log(chalk.blue(output))
    process.exit();
  });
});
