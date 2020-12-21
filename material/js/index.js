// 图片数据
var images = ["./material/images/1.png",
    "./material/images/2.jpg",
    "./material/images/3.jpg", "./material/images/4.jpg", "./material/images/5.jpg", "./material/images/6.jpg"
]
// 对应文本数据
var text = ["台山市科协开展2020年台山市全国科协日系列活动", "图片1", "图片2", "图片3", "图片4", "图片5"];
// 公共变量index，代表当前显示图片的索引位置
var index = 0;
// 开始选中第一个菜单项
$($(".pic-date")[index]).css({
    "background-color": "rgba(66, 66, 66, 0.4)"
});
// 定时器
var timeId = setInterval("converImg(images)", 1000);

// 给菜单项添加id属性和绑定鼠标事件
$(document).ready(function () {
    var dates = $(".pic-date");
    for (var i = 0; i < dates.length; i++) {
        dates[i].id = i;
    }

    for (var i = 0; i < dates.length; i++) {
        // 鼠标移入事件
        $(dates[i]).mouseover(function () {
            clearInterval(timeId);
            index = this.id;
            converImg(images);
        });
        // 鼠标移出事件
        $(dates[i]).mouseout(function () {
            timeId = setInterval("converImg(images)", 1000);
        });
    }
})

function converImg(data) {
    // 更新选中图片
    $(".pic-img").attr({
        "src": data[index]
    });
    var a = $(".pic-title>a");
    var date = $(".pic-date");
    // 更新图片标题文字
    $(a).text(text[index]);
    // 更新菜单项选中颜色
    $(date[index]).css({
        "background-color": "rgba(66, 66, 66, 0.4)"
    });
    // 将没被选中的菜单项显示为原颜色
    for (var i = 0; i < data.length; i++) {
        if (i != index) {
            $(date[i]).css({
                "background-color": "#336ca6b0"
            });
        }
    }
    if (index >= data.length - 1) {
        index = 0;
    } else {
        index++;
    }
}