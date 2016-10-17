/**
 * Created by insomniahl on 16/6/23.
 */
$(".ui-icon-close").on('click', function () {
    $(this).prev().val("");
});

$(".save_addr").on("click", function () {
    var name = $(".name").val().trim();
    var tel = $(".tel").val().trim();
    var address = $(".address").val().trim();
    var mark = $(".mark").val().trim();
    if(!name){
        $(".diag_tips h4").text("请输入姓名");
        $(".diag_tips").dialog('show');
        return false;
    } else if(!(/^1([3-8]\d|4[5-7]|5[0-35-9]|7[06-8]|8[89])\d{8}$/.test(tel))){
        $(".diag_tips h4").text("请输入11位有效的联系电话");
        $(".diag_tips").dialog('show');
    } else if(!tel){
        $(".diag_tips h4").text("请输入联系电话");
        $(".diag_tips").dialog('show');
        return false;
    } else if(!address){
        $(".diag_tips h4").text("请输入详细地址");
        $(".diag_tips").dialog('show');
        return false;
    }
});