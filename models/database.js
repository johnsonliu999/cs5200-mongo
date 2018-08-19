var mongoose = require('mongoose');
mongoose.connect(
    'mongodb://glyn:Qq%40452977491@cluster0-shard-00-00-qikvx.mongodb.net:27017,cluster0-shard-00-01-qikvx.mongodb.net:27017,cluster0-shard-00-02-qikvx.mongodb.net:27017/cs5200?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    {useNewUrlParser: true });