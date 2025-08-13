import { program } from 'commander';

process.on('unhandledRejection', error => {
  console.error('Error inesperado:', error);
  process.exit(1);
});

program.parse(process.argv);
