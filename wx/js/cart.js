/**
 * Created by insomniahl on 16/6/22.
 */
$("[name='add']").on('click', function (e) {
    var $target = $(e.target).prev();
    var num = $target.text();
    $target.text(+num+1);
});

$("[name='sub']").on('click', function (e) {
    var $target = $(e.target).next();
    var num = $target.text();
    if(num == 1){
        $(".diag_out_order").dialog('show');
    } else {
        $target.text(+num - 1);
    }
});

$(".clear_water").on('click', function () {
    $(".diag_clear_order").dialog('show');
});

$(".clear_ticket").on('click', function () {
    $(".diag_clear_order").dialog('show');
});

$(".settle").on('click', function () {
    window.location.href = "settle.html";
});