module.exports = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", '*');
    res.setHeader("Access-Control-Max-Age", '60');
    next();
}

