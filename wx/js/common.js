/**
 * Created by insomniahl on 16/6/21.
 */
$("footer.ui-footer li").on("click", function (e) {
    var that = $(this);
    var href = that.attr("data-href");
    if(!!href){
        window.location.href = href;
    }
});

$(".head_right").on('click', function () {
    window.location.href = "cart.html";
});

var tab = new fz.Scroll('.ui-tab', {
    role: 'tab'
});
