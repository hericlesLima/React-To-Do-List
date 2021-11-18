module.exports = function(req, res, next) { //CORS response headers
    res.header('Acess-control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.header('Access-Cotrol-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    next()
}