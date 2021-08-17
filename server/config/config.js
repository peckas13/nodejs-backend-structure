process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'dev') {
    process.env.URLDB = "mongodb://localhost:27017/";
} else {
    process.env.URLDB = "mongodb://localhost:27017/";
}

process.env.SEED = process.env.SEED || 'secret-sign';

process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';
