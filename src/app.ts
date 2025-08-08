import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

// import authRoutes from './routes/auth.routes'
// import productRoutes from './routes/product.routes'
// import orderRoutes from './routes/order.routes'
// import stockRoutes from './routes/stock.routes'
// import cartRoutes from './routes/cart.routes';

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/stock', stockRoutes);
// app.use('/api/cart', cartRoutes);

export default app;

