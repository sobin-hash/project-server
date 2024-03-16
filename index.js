const jsonserver=require('json-server')
const empServer = jsonserver.create()
const middleware = jsonserver.defaults()
const router = jsonserver.router('db.json')
PORT = 3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)
empServer.listen(PORT,()=>{
    console.log(`server running at port:${PORT}`)

})