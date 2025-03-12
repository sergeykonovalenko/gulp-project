/**
 * Задача для очистки папки сборки
 */
import { promises as fs } from 'fs';
import { paths } from '../../config.js';

export const clean = async () => {
  try {
    await fs.rm(paths.build.base, { recursive: true, force: true });
    await fs.mkdir(paths.build.base, { recursive: true });
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
