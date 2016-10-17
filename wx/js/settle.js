/**
 * Created by insomniahl on 16/6/22.
 */
$(".pay_way li").on("click", function (e) {
    $(this).find("input[type='radio']").prop("checked", true);
});

$(".bill_info").on("click", function (e) {
    window.location.href = "addrManager.html";
});

$(".settle").on("click", function (e) {
    $(".diag_settle").dialog('show');
});