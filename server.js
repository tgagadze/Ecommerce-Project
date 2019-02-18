import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './api/routes/users';
import productRoutes from './api/routes/products';
import { User } from './api/model/user';

const app =  express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://tornike123:123@mymongodb-shard-00-00-jun7n.mongodb.net:27017,mymongodb-shard-00-01-jun7n.mongodb.net:27017,mymongodb-shard-00-02-jun7n.mongodb.net:27017/test?ssl=true&replicaSet=myMongoDB-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true});

mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))
app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.get('/', (req,res)=>{
    // res.sendFile(__dirname+'/public/views/index.html');
    res.sendFile('public/views/index.html' , { root : __dirname});
});

app.get('/register',(req,res)=>{
    res.sendFile('public/views/register.html' , { root : __dirname});
    
})

app.get('/users/login',(req,res)=>{
    res.sendFile('public/views/login.html' , { root : __dirname});
})

app.get('/products/add',(req,res)=>{
    res.sendFile('public/views/addProduct.html' , { root : __dirname});
})

app.listen(port, ()=>{
    console.log(`server started on localhost:${port}`);
});