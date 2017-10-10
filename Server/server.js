import Express from 'express';
import path from 'path';
import router from './router.js';

const app = Express();
const port = 5000;

app.use(Express.static(path.join(__dirname, '../Static')));

app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Static/index.html'));
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})