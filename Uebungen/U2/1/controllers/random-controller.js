import { getRandomList } from '../services/random-service.js';

export function index(req, res) {
    res.render('random', {title: 'Random'});
}

function renderParameters(res, next, quantity, from, to) {
    if (isNaN(quantity) || isNaN(from) || isNaN(to)) {
        next(new Error("invalid parameters"));
        return;
    }
    
    if (quantity < 1) {
        next(new Error("quantity must be greater than 0"));
        return;
    }
    
    if (from < 1) {
        next(new Error("from must be greater than 0"));
        return;
    }
    
    if (to < 1) {
        next(new Error("to must be greater than 0"));
        return;
    }
    
    if (from > to) {
        next(new Error("from should be lower than to"));
        return;
    }
    
    const randomList = getRandomList(quantity, from, to);
    res.render('randomResult', {title: 'Random Result', from: from, to: to, quantity: quantity, randomList: randomList});
}

export function randomPost(req, res, next) {
    const from = parseInt(req.body.from);
    const to = parseInt(req.body.to);
    const quantity = parseInt(req.body.quantity);
    renderParameters(res, next, quantity, from, to);
}

export function randomGet(req, res, next) {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    const quantity = parseInt(req.query.quantity);
    renderParameters(res, next, quantity, from, to);
}
