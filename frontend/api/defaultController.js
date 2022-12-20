module.exports = app => {
  const dns = require('dns');
  const axios = require('axios');

  const defaultController = require('express').Router();

    defaultController.get("/", (req,res) => {
	res.json({message: "hello from frontend"})  
    })

    defaultController.get("/backend", (req,res) => {
        dns.resolve(process.env.backend_service_dns_records, 'SRV', async (err,addresses) => {
		const response = axios.get(`http://${addresses[0].name}:${addresses[0].port}`)
  			.then(innerRes => {
				res.send(`Hello from ${addresses[0].name}:${addresses[0].port}: ${innerRes.data.message}`)
  			})
  			.catch(error => {
				console.log(error)
			})
	})
    })
    app.use("/", defaultController);
}
