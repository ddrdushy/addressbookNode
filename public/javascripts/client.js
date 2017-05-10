var users;
var selectVal = 1;
var contact;
var flag = 0;
$(document).ready(function () {
    loadData();
    $('#add').on('click', function () {

        $('#name').val(null);
        $('#mobileNumber').val(null);
        $('#email').val(null);

        $('#myModalHorizontal').modal();
    });

    $('#update').on('click', function () {
        flag = 1;
        $('#name').val(contact.name);
        $('#mobileNumber').val(contact.mobile);
        $('#email').val(contact.email);
        $('#myModalHorizontal').modal();
    });

    $('#delete').on('click', function () {
        deleteData(contact.id);
    });
});

function loadData() {
    $.ajax({
        type: "GET",
        url: "/api/all/"
    })
        .done((data) => {
            users = data;
            var html = "";
            data.map((e) => {
                if (e.id === selectVal)
                    html += `<tr class="highlight" id="${e.id}"><td><a href="#" onclick="datoToForm(${e.id})">${e.name}</a></td></tr>`;
                else
                    html += `<tr id="${e.id}"><td><a href="#" onclick="datoToForm(${e.id})">${e.name}</a></td></tr>`;
            });
            $('#loadData').html(html);
            if (data.length > 0) {
                $('#named').html(data[0].name);
                $('#mobileNumberd').html(data[0].mobile);
                $('#emaild').html(data[0].email);
                contact = data[0];
            }
        })
        .fail((err) => {
            alert('unable to get data');
        });
};

function datoToForm(id) {
    $('#' + selectVal).removeClass('highlight');
    selectVal = id;
    var person = users.filter((e) => {
        return e.id === id;
    });

    if (!!person) {
        $('#named').html(person[0].name);
        $('#mobileNumberd').html(person[0].mobile);
        $('#emaild').html(person[0].email);
    }
    $('#' + selectVal).addClass('highlight');
    contact = users.filter((e) => {
        return e.id === id;
    })[0];
};

function sendData() {
    var a = {
        id : selectVal,
        name: $('#name').val(),
        mobile: $('#mobileNumber').val(),
        email: $('#email').val()
    };

    if (!!a.name && !!a.mobile) {
        $.ajax({
            type: "POST",
            url: flag == 0 ? "/api/add" : "/api/edit",
            data: a
        })
            .done((data) => {
                flag = flag == 1 ? 0 : flag;
                if (data == 'ok') {
                    $('#myModalHorizontal').modal('toggle');
                    loadData();
                }
            });
    }
};

function deleteData(id) {
    $.ajax({
        type: "POST",
        url: "/api/delete",
        data: {
            id: id
        }
    })
        .done((data) => {
            alert(data);
            loadData();
        });
}