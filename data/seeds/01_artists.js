exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('artists').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('artists').insert([
          { name: 'DMB'},
          { name: 'Bob Marley'},
          { name: 'The Police'},
        ]);
      });
  };