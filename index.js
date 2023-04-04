const app = require ('./app/src')
// de bt5le link el local esm3 fe ay mlf
require('dotenv').config()
app.listen(
process.env.PORT,
() => console.log(`you are on http://localhost:${process.env.PORT}`))