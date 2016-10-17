/**
 * Created by insomniahl on 16/6/21.
 */
$("[name='add']").on('click', function () {
    var num = $("[name='num']").text();
    $("[name='num']").text(+num + 1);
});

$("[name='sub']").on('click', function () {
    var num = $("[name='num']").text();
    if(num == 1){
        $("[name='num']").text(1);
    } else {
        $("[name='num']").text(+num - 1);
    }
});

$(".buy").on("click", function () {

});

$(".add_cart").tap(function(){
    var el=$.tips({
        content:'加入购物车成功',
        stayTime:2000,
        type:"success"
    });
});