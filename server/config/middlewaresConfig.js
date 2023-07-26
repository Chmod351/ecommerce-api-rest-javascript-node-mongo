import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//middleware Files
const middlewareDir = path.join(__dirname, '../middlewares');

//put the middleware files into the array & export it
const importMiddlewares = async () => {
  const middlewareFiles = await fs.promises.readdir(middlewareDir);
  const middlewareArray = [];

  for (const file of middlewareFiles) {
    console.log(`./server/middlewares/${file}`);
    const middleware = await import(`../middlewares/${file}`);
    middlewareArray.push(middleware.default);
  }

  return middlewareArray;
};

export default importMiddlewares;
