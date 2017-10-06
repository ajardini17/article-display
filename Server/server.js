import Express from 'express';
import path from 'path';

const app = Express();
const port = 5000;

app.use(Express.static(path.join(__dirname, '../Static')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Static/index.html'));
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})