import app from './app';

const PORT = 3333;
const HOST_NAME = 'localhost';

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at: ${HOST_NAME}:${PORT}`);
});
