/**
 * Created by insomniahl on 16/6/22.
 */
$("[name='checkbox']").on('change', function () {
    var that  = this;
    if (!$(this).prop("checked")) {
        $(".diag_default").dialog({
            callback: function (index) {
                if(index == 1){
                    $(that).prop("checked", false);
                }
            }
        });
    }
});

$(".ui-icon-delete").on('click', function () {
    $(".diag_delete").dialog('show');
});

$(".add_addr").on('click', function () {
    window.location.href = "editAddr.html";
});

$(".ui-icon-file").on('click', function () {
    window.location.href = "editAddr.html";
});