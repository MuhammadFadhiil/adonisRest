'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SiswaSchema extends Schema {
  up () {
    this.create('siswas', (table) => {
      table.increments()
      table.string('NIS')
      table.string('Nama')
      table.string('Kelas')
      table.string('NoHP')
      table.timestamps()
    })
  }

  down () {
    this.drop('siswas')
  }
}

module.exports = SiswaSchema
