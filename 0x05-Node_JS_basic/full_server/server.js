import express from 'express';
import router from './routes/index';

export const dbName = process.argv[2];
const PORT = 1245;

const app = express();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

export default app;
