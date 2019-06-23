
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
       { name: "andy", username: "bob", password: "one", country: "nepal" },
       { name: "rita", username: "reetu", password: "pre", country: "usa" },
       { name: "jon", username: "fredo", password: "erd", country: "brazil" }
      ]);
    });
};
