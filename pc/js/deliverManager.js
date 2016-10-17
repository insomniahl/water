/**
 * Created by insomniahl on 16/6/29.
 */
$(".out_order").on("click", function () {
    $("#out_order_modal").modal();
});

$(".arrange_deliver").on("click", function () {
    $("#arrange_deliver_modal").modal();
});

$(".dropdown-menu").on('click', function (e) {
    var $target = $(e.target).closest(".btn-group");
    var name =  $target.attr("name");
    var $parent = $("[name='"+ name +"'");
    $parent.find(".name").text($(e.target).text());
    if(name == "point_deliver"){
        $(".phone").val($(e.target).attr("tel"));
    }
});