const app = require('./src/app')

const port = process.env.PORT || 3000

app.on('ready', () => {
    console.log('ready')
})

app.listen(port, () =>  console.log(`server running on port ${ port }`))