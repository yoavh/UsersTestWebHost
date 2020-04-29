import App from '../app';
import UserController from '../controllers/userControllers';

const port = parseInt(process.env.PORT || '3000', 10);
const app = new App(port, [new UserController()]);
app.listen();
