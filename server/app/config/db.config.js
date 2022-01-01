module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PORT:5432,
    PASSWORD:'ghrefd11!',
    DB:'taxi_db_v3',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}