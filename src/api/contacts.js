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

contacts.update = (data) =>{
    return knex()
        .where('id','=',data.id)
        .update({
            name: data.name,
            mobile: data.mobile,
            email: data.email
        });
};

contacts.add = (data) =>{
    return knex()
        .insert({
            name: data.name,
            mobile: data.mobile,
            email: data.email
        });
};

contacts.delete = (id) =>{
    return knex()
        .where('id','=',id)
        .del();
};

module.exports = contacts;

//TODO: delete function
// TODO: add function