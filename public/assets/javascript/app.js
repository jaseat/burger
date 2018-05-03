$(document).ready(function(){
    $(".eat").on("click", e => {
        e.preventDefault();
        console.log(e.target.value);
        $.ajax({
            url: '/api/burgers/' + e.target.value,
            type: 'PUT',
            data: {
                devoured: 1
            },
            success: function(res){
                $("#"+res.id).remove();
                var num = $("#eaten div").length;
                $("#eaten").append(`<div>${num+1}. ${res.burger_name}</div>`);
                location.reload();
            }
        });
    });
    $("#form").on("submit", e => {
        e.preventDefault();
        console.log($("input").val())
        $.ajax({
            url: '/api/burgers',
            type: 'POST',
            data: {
                name: $("input").val()
            },
            success: function(res){
                location.reload();
            }
        })
    })
});