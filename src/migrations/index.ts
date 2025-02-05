import * as migration_20250205_172222_initial from './20250205_172222_initial';
import * as migration_20250205_211146_add_i18n from './20250205_211146_add_i18n';

export const migrations = [
  {
    up: migration_20250205_172222_initial.up,
    down: migration_20250205_172222_initial.down,
    name: '20250205_172222_initial',
  },
  {
    up: migration_20250205_211146_add_i18n.up,
    down: migration_20250205_211146_add_i18n.down,
    name: '20250205_211146_add_i18n'
  },
];
