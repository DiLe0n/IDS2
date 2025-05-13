require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./database/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`IDS escuchando en puerto ${PORT}`);
});
