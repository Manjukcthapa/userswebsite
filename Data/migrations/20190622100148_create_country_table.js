
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("country", tbl => {
      tbl.increments();
      
      tbl
        .string("country", 128)
        .notNullable()
    })

  };
  



exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('country')
};
