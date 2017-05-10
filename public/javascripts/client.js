
$(document).ready(function () {
    loadData();
});

function loadData(){
    $.ajax({
        type: "GET",
        url: "/api/all/"
    })
        .done((data) => {
            var html = "";
            data.map((e)=>{
                console.log(e);
                html+=`<tr><td><a href="#" onclick="datoToForm(${e.id})">${e.name}</a></td></tr>`
            });
            $('#loadData').html(html);
        })
        .fail((err)=>{

    });
};

function datoToForm(id){

};