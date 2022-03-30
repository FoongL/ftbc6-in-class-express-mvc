let development = {
    username: 'postgres', // postgres
    password: 'postgres', // postgres
    database: 'ftbc6rocks_development', // database namne
    host: '127.0.0.1', // host I.P.
    dialect: 'postgres', // PG
}

let production = {
    username: 'postgres', // postgres
    password: 'postgres', // postgres
    database: 'ftbc6rocks_development', // database namne
    host: '127.0.0.1', // host I.P.
    dialect: 'PG', // PG
}

module.exports = {
    development,
    production
}