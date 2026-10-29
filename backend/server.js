require('dotenv').config();
const express = require('express'), cors = require('cors'), connectDB = require('./config/db'), { notFound, errorHandler } = require('./middleware/error');
const app = express(); app.use(cors()); app.use(express.json());
app.get('/', (q, res) => res.json({ status: 'Soil Fertility API running' }));
app.use('/api', require('./routes')); app.use(notFound); app.use(errorHandler);
connectDB().then(() => app.listen(process.env.PORT || 5000, () => console.log('Server on port ' + (process.env.PORT || 5000)))).catch(e => { console.error('DB connection failed:', e.message); process.exit(1); });
