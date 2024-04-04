import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import { indexRoutes } from './routes/index-routes';
import { helpers } from './utils/handlebar-util'


import exphbs from 'express-handlebars';
import { sessionUserSettings } from "./utils/session-middleware.index";

declare module 'express-session' {
    interface SessionData {
        settings: typeof sessionUserSettings;
    }
}

declare global {
    namespace Express {
        interface Request {
            settings: typeof sessionUserSettings;
        }
    }
}

export const app = express();
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: "default",
    helpers: {
        ...helpers
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));

app.use(express.static(path.resolve('public')));
app.use(session({secret: 'casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda', resave: false, saveUninitialized: true}));

app.use(sessionUserSettings)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", indexRoutes);