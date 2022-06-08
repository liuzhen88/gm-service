import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { Sequelize } from "sequelize";
import config from "./config/db";
import usersRouter from "./routes/users";
const app = express();
const conn = new Sequelize(config.database, config.username, config.password, {
    host: config.host, port: config.port, dialect: config.dialect
});
app.set('views', path.join(path.resolve(), 'src/views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));
app.use((req, res, next) => {
    req.db = conn;
    next();
});
app.use('/user', usersRouter);
app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
app.listen(3002, () => console.log("gm service start at port 3002"));
export default app;
//# sourceMappingURL=index.js.map