const knex = require('../utils/knex');
var contacts = {};

contacts.all = () => {
    return knex()
        .select()
        .from('data')
        .then((data,err)=>{
            if(err)
                return;
            return data;
        });
};

module.exports = contacts;