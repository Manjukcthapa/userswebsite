exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("children")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("children").insert([
        {
          community_id: "1",
          name: "manju",
          location: "pokhara",
          screendate: "2012/12/24",
          age: "12",
          height: "2.8cm",
          weight: "60lb"
        },
        {
          community_id: "3",
          name: "anju",
          location: "indonasia",
          screendate: "2013/04/30",
          age: "11",
          height: "3feet",
          weight: "50lb"
        },
        {
          community_id: "1",
          name: "sanju",
          location: "kathmandu",
          screendate: "2014/3/2",
          age: "10",
          height: "3feet",
          weight: "70lb"
        },
      ]);
    });
};
