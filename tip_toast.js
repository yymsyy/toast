var ym = function() {
    return ym['init'].apply(this, arguments);
};

(function(exp) {
    var n = 0;
    exp.init = function() {

    };

    exp.alert = function(text, time, fn) {
        n++;
        var w = window.screen.width / 2 - 115;
        var hs = document.documentElement.clientHeight;
        var hst = document.body.scrollTop;
        var h = hs / 2 + hst - 55;
        var my = document.createElement("div");
        document.body.appendChild(my);
        var myo = document.createElement("div");
        document.body.appendChild(myo);
        exp.setStyle(myo, {
            position : "absolute",
            top : "0px",
            left : "0px",
            zIndex : 10000 + n,
            width : "100%",
            height : "100%",
            background : "#eaeaea",
            opacity : 0.4,
            filter : "alpha(opacity=40)"
        });
        var inner = text || "请输入提示信息";
        my.innerHTML = "<div>" + inner + "</div><div class = 'yes1'>确认</div>";
        exp.setStyle(my, {
            zIndex : 10001 + n,
            position : "absolute",
            wordBreak : "break-all",
            top : h + "px",
            left : w + "px",
            width : "222px",
            height : "82px",
            textAlign : "center",
            backgroundColor : "#ffffff",
            font : "10px/24px 微软雅黑",
            color : "#333333",
            borderRadius : "5px",
            border : "3px solid #a2a2a2",
            paddingTop : "20px"
        });
        for (var i = 0; i < my.childNodes["length"]; i++) {
            if (my.childNodes[i].getAttribute("class") == "yes1") {
                exp.setStyle(my.childNodes[i], {
                    background : "#4ebffe",
                    position : "absolute",
                    bottom : "10px",
                    left : "88px",
                    width : "55px",
                    height : "24px",
                    color : "#ffffff",
                    borderRadius : "2px",
                    border : "1px solid #3fb4f6",
                    cursor : "pointer"
                });
                my.childNodes[i].onclick = function() {
                    my.parentNode.removeChild(my);
                    myo.parentNode.removeChild(myo);
                }
            }
        }

        fn && fn();
    };

    exp.confirm = function(text, time, fn) {
        n++;
        var w = window.screen.width / 2 - 115;
        var hs = document.documentElement.clientHeight;
        var hst = document.body.scrollTop;
        var h = hs / 2 + hst - 55;
        var my = document.createElement("div");
        document.body.appendChild(my);
        var myo = document.createElement("div");
        document.body.appendChild(myo);
        exp.setStyle(myo, {
            position : "absolute",
            top : "0px",
            left : "0px",
            zIndex : 10000 + n,
            width : "100%",
            height : "100%",
            background : "#eaeaea",
            opacity : 0.4,
            filter : "alpha(opacity=40)"
        });
        var inner = text || "请输入提示信息";
        my.innerHTML = "<div class = 'img'></div><div>" + inner + "</div><div class = 'yes'>确认</div></div><div class = 'no'>取消</div>";
        exp.setStyle(my, {
            zIndex : 10001 + n,
            position : "absolute",
            wordBreak : "break-all",
            top : h + "px",
            left : w + "px",
            width : "222px",
            height : "82px",
            textAlign : "center",
            backgroundColor : "#ffffff",
            font : "10px/24px 微软雅黑",
            color : "#333333",
            borderRadius : "5px",
            border : "3px solid #a2a2a2",
            paddingTop : "20px"
        });
        for (var i = 0; i < my.childNodes["length"]; i++) {
            if (my.childNodes[i].getAttribute("class") == "img") {
                exp.setStyle(my.childNodes[i], {
                    background : "url(tip.png) -15px 0 no-repeat",
                    position : "absolute",
                    top : "20px",
                    left : "25px",
                    width : "24px",
                    height : "24px"
                });
            }
            if (my.childNodes[i].getAttribute("class") == "yes") {
                exp.setStyle(my.childNodes[i], {
                    background : "#4ebffe",
                    position : "absolute",
                    bottom : "10px",
                    left : "50px",
                    width : "55px",
                    height : "24px",
                    color : "#ffffff",
                    borderRadius : "2px",
                    border : "1px solid #3fb4f6",
                    cursor : "pointer"
                });
                my.childNodes[i].onclick = function() {
                    my.parentNode.removeChild(my);
                    myo.parentNode.removeChild(myo);
                }
            }
            if (my.childNodes[i].getAttribute("class") == "no") {
                exp.setStyle(my.childNodes[i], {
                    background : "#f2f2f2",
                    position : "absolute",
                    bottom : "10px",
                    right : "50px",
                    width : "55px",
                    height : "24px",
                    color : "#ffffff",
                    borderRadius : "2px",
                    border : "1px solid #3fb4f6",
                    cursor : "pointer"
                });
                my.childNodes[i].onclick = function() {
                    my.parentNode.removeChild(my);
                    myo.parentNode.removeChild(myo);
                }
            }
        }
        fn && fn();
    };

    exp.popbox = function(text, time, fn) {
        n++;
        var w = window.screen.width / 2 - 204;
        var hs = document.documentElement.clientHeight;
        var hst = document.body.scrollTop;
        var h = hs / 2 + hst - 20;
        var my = document.createElement("div");
        document.body.appendChild(my);
        var myo = document.createElement("div");
        document.body.appendChild(myo);
        exp.setStyle(myo, {
            position : "absolute",
            top : "0px",
            left : "0px",
            zIndex : 10000 + n,
            width : "100%",
            height : "100%",
            background : "#eaeaea",
            opacity : 0.4,
            filter : "alpha(opacity=40)"
        });

        var inner = text || "标题";
        my.innerHTML = "<div>" + inner + "</div><div class = 'close'></div>";
        exp.setStyle(my, {
            zIndex : 10001 + n,
            position : "absolute",
            wordBreak : "break-all",
            top : h + "px",
            left : w + "px",
            width : "398px",
            height : "20px",
            textAlign : "left",
            backgroundColor : "#f5f5f5",
            font : "10px/20px 微软雅黑",
            color : "#333333",
            borderRadius : "5px",
            border : "3px solid #a2a2a2",
            padding : "5px"
        });
        for (var i = 0; i < my.childNodes["length"]; i++) {
            if (my.childNodes[i].getAttribute("class") == "close") {
                exp.setStyle(my.childNodes[i], {
                    background : "url(tip.png) 0 0 no-repeat",
                    position : "absolute",
                    bottom : "10px",
                    right : "5px",
                    width : "12px",
                    height : "12px",
                    cursor : "pointer"
                });
                my.childNodes[i].onclick = function() {
                    my.parentNode.removeChild(my);
                    myo.parentNode.removeChild(myo);
                }
            }
        }
        fn && fn();
    };

    exp.toast = function(text, time, fn) {
        n++;
        var w = window.screen.width / 2 - 105;
        var hs = document.documentElement.clientHeight;
        var hst = document.body.scrollTop;
        var h = hs / 2 + hst - 30;
        var my = document.createElement("div");
        document.body.appendChild(my);
        var myo = document.createElement("div");
        document.body.appendChild(myo);
        exp.setStyle(myo, {
            position : "absolute",
            top : "0px",
            left : "0px",
            zIndex : 10000 + n,
            width : "100%",
            height : "100%",
            background : "#eaeaea",
            opacity : 0.4,
            filter : "alpha(opacity=40)"
        });
        my.innerHTML = text || "请输入提示信息";
        exp.setStyle(my, {
            zIndex : 10001 + n,
            position : "absolute",
            wordBreak : "break-all",
            top : h + "px",
            left : w + "px",
            width : "210px",
            height : "60px",
            textAlign : "center",
            backgroundColor : "#ffffff",
            font : "18px/50px 微软雅黑",
            color : "#666666",
            borderRadius : "5px",
            border : "3px solid #a2a2a2",
        });
        setTimeout(function() {
            my.parentNode.removeChild(my);
            myo.parentNode.removeChild(myo);
        }, time || 3000);
        fn && fn();
    };

    exp.setStyle = function(obj, css) {
        console.log(obj, css)
        for (var attr in css) {
            obj.style[attr] = css[attr];
        };
    };

})(ym);

//*******************************************************

