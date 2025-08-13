import { program } from 'commander';
import { add } from '@/commands/add';

program.name('ui');

program.command('add').action(() => {
  add();
});

process.on('unhandledRejection', error => {
  console.error('Error inesperado:', error);
  process.exit(1);
});

program.parse(process.argv);
