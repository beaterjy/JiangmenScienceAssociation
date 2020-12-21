// 图片数据
var imgs = [{
        "src": "./material/images/1.png"
    },
    {
        "src": "./material/images/2.jpg"
    },
    {
        "src": "./material/images/3.jpg"
    },
    {
        "src": "./material/images/4.jpg"
    },
    {
        "src": "./material/images/5.jpg"
    },
    {
        "src": "./material/images/6.jpg"
    }
];
// 定时器1s
var timer = setInterval("convertImage(imgs)", 1000);
// 公共变量index，代表当前显示的图片索引位置
var index = 0;
// 默认选中第一张图片
$($(".pic-show .pic-datelist .pic-date")[0]).css({
    "background-color": "#42424266" // 选中颜色
})
// 为菜单项添加id属性
initMenuAddID()
// 初始化菜单绑定
initMenuBind();

// 切换图片ing
function convertImage(data) {
    // 获取图片标签元素对象
    var img = $(".pic-show .pic .pic-img");
    // 更新图片
    img.attr({
        "src": data[index].src
    });

    var menus = $(".pic-show .pic-datelist .pic-date");
    // 更新当前图片上的菜单项
    $(menus[index]).css({
        "background-color": "#42424266" // 选中颜色
    });
    // 去掉没被轮播的菜单项背景色
    for (var i = 0; i < data.length; i++) {
        if (i != index) {
            $(menus[i]).css({
                "background-color": "#336ca6b0" // 原颜色
            });
        }
    }
    index = (index + 1) % data.length;
}

// 给菜单项绑定事件
function initMenuBind() {
    var menus = $(".pic-show .pic-datelist .pic-date");

    for (var i = 0; i < menus.length; i++) {
        // 鼠标移入事件
        $(menus[i]).mouseover(function () {
            // 取消定时器
            clearInterval(timer);
            // 选中菜单项对应的index，进而选中图片
            index = this.id;
            convertImage(imgs);
        })

        // 鼠标移出事件
        $(menus[i]).mouseout(function () {
            timer = setInterval("convertImage(imgs)", 1000);
        })
    }
}

// 为每个菜单项添加id属性
function initMenuAddID() {
    var menus = $(".pic-show .pic-datelist .pic-date");
    for (var i = 0; i < menus.length; i++) {
        menus[i].id = i;
    }

}