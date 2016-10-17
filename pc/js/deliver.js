/**
 * Created by insomniahl on 16/6/29.
 */
$(".deliver_state").on("click", function () {
    $("#change_state_modal").modal();
});

$(".add_deliver").on("click", function () {
    $("#add_deliver_modal").modal();
});

$(".deliver_edit").on("click", function () {
    $("#add_deliver_modal").modal();
});

$(".dropdown-menu").on('click', function (e) {
    $(".btn-group .name").text($(e.target).text());
});