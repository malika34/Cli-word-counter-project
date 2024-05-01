#!/usr/bin/env node

// Importing necessary libraries
import inquirer from "inquirer";
import chalk from "chalk";

// Printing the design for Word Count Program
console.log(chalk.bgBlueBright.white.bold("══════════════════════════════════════════"));
console.log(chalk.bgBlueBright.white.bold("║"), chalk.bgYellowBright.blue.bold("   Welcome to Word Count Program   "), chalk.bgBlueBright.white.bold("║"));
console.log(chalk.bgBlueBright.white.bold("╚══════════════════════════════════════════"));

// Asking the user for a sentence
const sentence = await inquirer.prompt({
    name: "sentence",
    message: chalk.yellow("Enter a sentence:"), // Prompt message in yellow
    type: "input" // Input type
});

// Splitting the sentence into words
const words: string[] = sentence.sentence.trim().split(" "); // Remove extra spaces and split the sentence into words

// Displaying the words in uppercase and the count of words
console.log(chalk.green("Your sentence in uppercase:")); // Display message in green

console.log(words.map((word: string) => chalk.bold.yellow(word.toUpperCase())).join(" ")); // Convert words to uppercase and colorize in yellow

console.log(chalk.cyan("Your sentence contains"), chalk.cyan.bold(words.length), chalk.cyan("word(s).")); // Display word count in cyan
