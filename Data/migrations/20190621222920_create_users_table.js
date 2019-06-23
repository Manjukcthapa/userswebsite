
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("users", tbl => {
        tbl.increments();
        tbl
          .string("name", 128)
          .notNullable()
          
        tbl
          .string("username", 128)
          .notNullable()
          .unique();
         
        tbl
          .string("password", 256)
          .notNullable()
          .unique();
      

        tbl
          .string("country", 128)
          .notNullable()
      })

    };
    

    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists("users");
      };
