
    exports.up = function(knex, Promise) {
        return knex.schema
        .createTable("children", tbl => {
          tbl.increments();
          
          tbl
            .string("name", 128)
            .notNullable()

            tbl
            .string("location", 128)
            .notNullable()

          
            
            tbl
            .string("screendate", 128)
            .notNullable()

            tbl
            .string("age", 128)
            .notNullable()

            tbl
            .string("height", 128)
            .notNullable()
            tbl
            .string("weight", 128)
            .notNullable()

        tbl
        .integer('community_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('community')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        
        tbl.timestamps(true, true);
        })
    
      };
    


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('children');
};
