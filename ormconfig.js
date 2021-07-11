module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "entities": ["dist/**/entities/*{.ts,.js}"],
    "synchronize": true,
    "migrations": ["dist/migrations/*{.ts,.js}"],
    "cli": {
        "migrationsDir": "src/migrations"
    }
};