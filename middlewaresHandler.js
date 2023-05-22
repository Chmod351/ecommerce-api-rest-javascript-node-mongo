import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const middlewareDir = path.join(__dirname, 'middlewares');

const importMiddlewares = async () => {
	const middlewareFiles = await fs.promises.readdir(middlewareDir);
	const middlewareArray = [];

	for (const file of middlewareFiles) {
		console.log(`./middlewares/${file}`);
		const middleware = await import(`./middlewares/${file}`);
		middlewareArray.push(middleware.default);
		console.log(middlewareArray);
	}

	return middlewareArray;
};

export default importMiddlewares;
