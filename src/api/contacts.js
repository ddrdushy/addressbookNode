const knex = require('../utils/knex');
var contacts = {};

contacts.all = () => {
    return knex('data')
        .select()
        .then((data,err)=>{
            if(err)
                return;
            return data;
        });
};

contacts.update = (data) =>{
    return knex('data')
        .where('id','=',data.id)
        .update({
            name: `${data.name}`,
            mobile: `${data.mobile}`,
            email: `${data.email}`
        });
};

contacts.add = (data) =>{
    return knex('data')
        .insert({
            name: `${data.name}`,
            mobile: `${data.mobile}`,
            email: `${data.email}`
        });
};

contacts.delete = (id) =>{
    return knex('data')
        .where('id','=',id)
        .del();
};

module.exports = contacts;

//TODO: delete function
// TODO: add function