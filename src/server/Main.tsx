import * as path from 'path';
import * as express from 'express';

const app = express();
const port = process.env.PORT || 8080;

console.log(__dirname)
app.use(express.static(path.resolve(__dirname)));
console.log(process.cwd())
app.get('*', (_, res) => {
    res.sendFile('index.html');
});
app.listen(port, () => { console.log(`App is listening on port ${port}`) });
