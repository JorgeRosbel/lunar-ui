import chalk from 'chalk';

export const created = (name: string) => {
  console.log(chalk.green(`Successfully added: ${chalk.blue(`${name}.astro`)}`));
};

export const success = (content: string) => {
  console.log(chalk.green(content));
};

export const fail = (content: string) => {
  console.log(chalk.red(content));
};

export const warn = (content: string) => {
  console.log(chalk.yellow(content));
};
