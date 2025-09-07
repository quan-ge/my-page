

    //  ｀ＱＱＱ　　　Ｕ　　　Ｕ　　　　Ａ　　　　Ｎ　　　Ｎ　　　ＧＧＧ　　　ＥＥＥＥＥ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　　　Ａ　　　　ＮＮ　　Ｎ　　Ｇ　　　Ｇ　　Ｅ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　　Ａ　Ａ　　　ＮＮ　　Ｎ　　Ｇ　　　Ｇ　　Ｅ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　　Ａ　Ａ　　　Ｎ　Ｎ　Ｎ　　Ｇ　　　　　　Ｅ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　　Ａ　Ａ　　　Ｎ　Ｎ　Ｎ　　Ｇ　ＧＧＧ　　ＥＥＥＥＥ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　　ＡＡＡ　　　Ｎ　　ＮＮ　　Ｇ　　　Ｇ　　Ｅ
    // Ｑ　　　Ｑ　　Ｕ　　　Ｕ　　Ａ　　　Ａ　　Ｎ　　ＮＮ　　Ｇ　　　Ｇ　　Ｅ
    // Ｑ　Ｑ　Ｑ　　Ｕ　　　Ｕ　　Ａ　　　Ａ　　Ｎ　　　Ｎ　　Ｇ　　ＧＧ　　Ｅ
    // 　ＱＱＱ　　　　ＵＵＵ　　　Ａ　　　Ａ　　Ｎ　　　Ｎ　　　ＧＧ　Ｇ　　ＥＥＥＥＥ
    // 　　　　Ｑ

    // 陆陆陆　　　　陆　　　　　　　　　书　　　书　　　　　皓　　　皓　皓
    // 陆　陆　陆陆陆陆陆陆陆　　　　　　书　　　　书　　　皓皓皓皓　皓皓皓皓皓
    // 陆　陆　　　　陆　　　　　　书书书书书书书书　书　　皓　　皓皓　　皓
    // 陆　陆　　　　陆　　　　　　　　　书　　　书　　　　皓　　皓　　　皓
    // 陆陆　　　　　陆　　　　　　　　　书　　　书　　　　皓　　皓皓皓皓皓皓皓皓
    // 陆　陆　陆陆陆陆陆陆陆　　　　　　书　　　书　　　　皓皓皓皓
    // 陆　陆　　　　陆　　　　　书书书书书书书书书书书　　皓　　皓　皓皓皓皓皓
    // 陆　陆　陆　　陆　　陆　　　　　　书　　　　　书　　皓　　皓　皓　　　皓
    // 陆　陆　陆　　陆　　陆　　　　　　书　　　　　书　　皓　　皓　皓　　　皓
    // 陆陆　　陆　　陆　　陆　　　　　　书　　　　　书　　皓皓皓皓　皓　　　皓
    // 陆　　　陆陆陆陆陆陆陆　　　　　　书　　　书书书　　　　　　　皓皓皓皓皓

(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
            "❤敬业❤", "❤诚信❤", "❤友善❤");

        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 16, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)

    }
    // 随机颜色
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
            .random() * 255)) + ")";

    }
}());

