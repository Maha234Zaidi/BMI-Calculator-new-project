// BMI Calculator (Body Mass Index)
import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    {
        type: "number",
        name: "weight",
        message: "How much your Weight(kg)?"
    },
    {
        type: "number",
        name: "height",
        message: "How much your Height(m)?"
    }
];
const calculate_BMI = (weight, height) => weight / (height * height);
const emo1 = "🏋️‍♀️";
const emo2 = "💪";
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI: ${chalk.bgMagenta.bold.italic(calculate_BMI(weight, height).toFixed(2))} ${emo1 + emo2}`);
};
main();
