import Express from 'express';
import path from 'path';
import router from './Routes/routes.js';
import parser from 'body-parser';


const app = Express();
const port = 5000;

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(Express.static(path.join(__dirname, '../Static')));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Static/index.html'));
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
})