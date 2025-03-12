/**
 * Задача для запуска сервера разработки
 */
import browserSync from 'browser-sync';
import { serverConfig } from '../../config.js';

export const server = (done) => {
  browserSync.init(serverConfig);
  done();
};

export const reload = (done) => {
  browserSync.reload();
  done();
};
