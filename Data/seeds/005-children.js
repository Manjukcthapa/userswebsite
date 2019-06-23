
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('personinfo').insert([
        { date:"11/12/12", weight:"30kg",height:"40cm", name_id:"2"},
        { date:"11/13/15", weight:"43kg",height:"20cm",name_id:"2"},
        { date:"11/15/18", weight:"56kg",height:"50cm",name_id:"3"}
      ]);
    });
};
