/**
 * Created by insomniahl on 16/6/29.
 */
$(".produce_state").on("click", function () {
    $("#change_state_modal").modal();
});

$(".add_produce").on("click", function () {
    $("#add_produce_modal").modal();
});

$(".produce_edit").on("click", function () {
    $("#add_produce_modal").modal();
});

$(".produce_pic").on('change', function (e) {
    $(".alert").removeClass("in").addClass("fade");
    var _file = $(".produce_pic");
    var i = _file.val().lastIndexOf('.');
    var len = _file.val().length;
    var extEndName = _file.val().substring(i + 1, len);
    var extName = "GIF,BMP,JPG,JPEG";
    if (extName.indexOf(extEndName.toUpperCase()) == -1) {
        $(".alert").removeClass("fade").addClass("in").find("span").text("*您只能输入\"GIF,BMP,JPG,JPEG\"格式的文件");
    }
});

$("input:file").on("change", function () {
    var preview = $("#preview");
    preview.css("backgound-image", "");
    var file = $("input:file")[0].files[0];

    if(file.type!=='image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
        alert("不是有效的图片文件");
        return false;
    }

    var reader = new FileReader();
    // 文件读取完成时，执行该回调函数
    reader.onload = function(e){
        var data = e.target.result;
        preview.css("background-image", "url('"+data+"')");
    };
    reader.readAsDataURL(file);
});