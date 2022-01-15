const router = require('express').Router()
const InstanceKeyVerification = require("../Middleware/keyVerify")
const InstanceLoginVerification = require("../Middleware/loginVerify")

router.get('/getAllContacts', InstanceKeyVerification, InstanceLoginVerification, async (req, res) => {
    const instance = WhatsAppInstances[req.query.key];
    const data = await instance.getAllContacts();
    if(data.error) return res.status(404).json(data)
    res.status(201).json({
        error: false,
        data: data
    });
})

router.get('/getAllMessages', InstanceKeyVerification, InstanceLoginVerification, async (req, res) => {
    const instance = WhatsAppInstances[req.query.key];
    const data = await instance.loadAllMessages();

    if(data.error) return res.status(404).json(data)

    res.status(201).json({
        error: false,
        data: data
    });
})

router.get('/getMessage', InstanceKeyVerification, InstanceLoginVerification, async (req, res) => {
    const instance = WhatsAppInstances[req.query.key];
    const data = await instance.loadMessage(req?.query?.id);

    if(data.error) return res.status(404).json(data)

    res.status(201).json({
        error: false,
        data: data
    });
})


module.exports = router;
