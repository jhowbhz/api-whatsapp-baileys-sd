function InstanceLoginVerification(req, res, next) {

    const key = req.query["key"]?.toString()

    if (!key) {
        return res.status(403).send(({ error: true, message: `Essa key: ${key} não foi encontrada.` }))
    }

    const instance = WhatsAppInstances[key];
    if (!instance.instance.conn?.phoneConnected) {
        return res.status(401).send(({ error: true, message: "Telefone não conectado!" }))
    }
    next()
}

module.exports = InstanceLoginVerification
