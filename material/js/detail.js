$(document).ready(function () {
    // 绑定事件
    $("#bigger").attr("href", "javascript:textZoom('bigger');");
    $("#smaller").attr("href", "javascript:textZoom('smaller');");
    $("#normal").attr("href", "javascript:textZoom('normal');");
})

// detail主体文字放缩
function textZoom(mode) {
    var paras = $("div.detail-content>p");
    var fontSize = "16px";

    switch (mode) {
        case "bigger":
            fontSize = "20px";
            break;
        case "smaller":
            fontSize = "14px";
            break;
        case "normal":
            break;
        default:
            break;
    }

    // 更新字号
    paras.css({
        "font-size": fontSize
    });
}