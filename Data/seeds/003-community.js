
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('community').del()
    .then(function () {
      // Inserts seed entries
      return knex('community').insert([
        {country_id:"2" ,community: 'child care'},
        { country_id:"3" , community: 'childhealthcare'},
        {country_id:"1",community: 'women socity'}
      ]);
    });
};