
    exports.up = function(knex, Promise) {
        return knex.schema
        .createTable("personinfo", tbl => {
          tbl.increments();
          
          tbl
            .string("date", 128)
            .notNullable()
            tbl
            .string("weight", 128)
            .notNullable()

            tbl
            .string("height", 128)
            .notNullable()

        tbl
        .integer('name_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('community')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        })
    
      };
    


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('personinfo');
};
