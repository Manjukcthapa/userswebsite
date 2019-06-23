
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('country').del()
    .then(function () {
      // Inserts seed entries
      return knex('country').insert([
        { country: 'Nepal'},
        { country: 'Africa'},
        {country: 'Brazil'}
      ]);
    });
};
