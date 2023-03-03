const db = require('./db-pg')


async function dropTables() {
    await db.connetion()
}