//初始化
function all() {
    nav();
    cont1_left_down();
    cont1_right();
    cont2_content();
    cont2_right_down();
    cont3_down();
    cont5_left();
    cont5_right();
}

//导航栏
function nav() {
    //导航栏
    var navArray = ["首页", "关于我们", "虫草回收", "名酒回收", "其他回收", "新闻动态", "联系我们"];
    var html = '';
    for (var i = 0; i < navArray.length; i++) {
        if (i == 1) {
            html += '<div class="nav_a nav1">';
            html += '<a href="#">';
            html += navArray[i];
            html += '</a>';
            html += '</div>';
        } else {
            html += '<div class="nav_a">';
            html += '<a href="#">';
            html += navArray[i];
            html += '</a>';
            html += '</div>';
        }
    }
    document.getElementById("nav_a").innerHTML = html;
    console.log(234);
}

//内容1，左边div
function cont1_left_down() {
    var cont1_left_down = ["冬虫夏草回收", "茅台五粮液回收", "洋酒红酒回收", "海参燕窝回收", "其他礼品回收"];
    var html = '';
    for (var i = 0; i < cont1_left_down.length; i++) {
        html += '<div class="cont1_left_down_div">';
        html += cont1_left_down[i];
        html += '</div>';
    }
    document.getElementById("cont1_left_down").innerHTML = html;
    console.log("etr");
}

//内容1 右边图片
function cont1_right() {
    var data = [{"src": "../photo/4_cont1_2.jpg", "wenben": "虫草回收"},
        {"src": "../photo/5_cont1_3.jpg", "wenben": "虫草回收"},
        {"src": "../photo/6_cont1_4.jpg", "wenben": "虫草回收"},
        {"src": "../photo/7_cont1_5.jpg", "wenben": "虫草回收"},
        {"src": "../photo/8_cont1_6.jpg", "wenben": "虫草回收"},
        {"src": "../photo/9_cont1_7.jpg", "wenben": "虫草回收"},
        {"src": "../photo/10_cont1_8.jpg", "wenben": "虫草回收"},
        {"src": "../photo/11_cont1_9.jpg", "wenben": "虫草回收"}
    ];
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += ' <div class="cont1_right_div">';
        html += '<div><img src="' + data[i].src + '" height="125" width="160"/></div>';
        html += ' <div>' + data[i].wenben + '</div>';
        html += ' </div>';
    }
    document.getElementById("cont1_right").innerHTML = html;
    console.log(12);
}

//内容2 中间部分
function cont2_content() {
    // var aa={state:200,data:[]};
    //方法一：
    // var data = [{
    //     "pro": "回收虫草价钱和购买误区,分别是什么？",
    //     "info": "冬虫夏草(学名: Cordyceps sinensis) ,又名中华虫草,又 称为夏草冬虫,简称虫草。是中国传统的名冬虫夏草贵中药 材,它是由肉座菌目麦角菌科虫草属的冬虫夏草菌寄生于高\n" +
    //         "山草甸土中的蝠蛾幼虫,使幼虫僵化,在适宜条件下,夏季 由僵疫系统功能、抗肿瘤、抗疲劳等多种功效。"
    // }];
    // var html = '';
    // var i=0;
    // var l=data.length;
    // for (i ; i < l; i++) {
    //     html += '<div>' + data[i].pro + '</div>';
    //     html += '<p>' + data[i].info + '</p>';
    // }
    // document.getElementById('cont2_content').innerHTML = html;
    // console.log(2232333);
    //方法二：
    var data = {
        "pro": "回收虫草价钱和购买误区,分别是什么？",
        "info": "冬虫夏草(学名: Cordyceps sinensis) ,又名中华虫草,又 称为夏草冬虫,简称虫草。是中国传统的名冬虫夏草贵中药 材,它是由肉座菌目麦角菌科虫草属的冬虫夏草菌寄生于高\n" +
            "山草甸土中的蝠蛾幼虫,使幼虫僵化,在适宜条件下,夏季 由僵疫系统功能、抗肿瘤、抗疲劳等多种功效。"
    };
    document.getElementById('title').innerHTML = data.pro;
    document.getElementById('content').innerHTML = data.info;
    console.log(2232333);
}

//内容2 右边部分
function cont2_right_down() {
    var data = [{"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"}];
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += ' <div class="cont2_right_down1">';
        html += '<div class="cont2_right_down1_1">' + data[i].text + '</div>';
        html += '<div class="cont2_right_down1_2">' + data[i].date + '</div>';
        html += '</div>';
    }
    document.getElementById('cont2_right_down').innerHTML = html;
    console.log('cont2_right_down');
}

//内容3 图片
function cont3_down() {
    //定义数组对象
    var img = [{"src": "../photo/15_cont3_2.jpg"},
        {"src": "../photo/16_cont3_3.jpg"},
        {"src": "../photo/17_cont3_4.jpg"},
        {"src": "../photo/18_cont3_5.jpg"}];
    //初始化拼接标签元素的变量
    var html = '';

    for (var i = 0; i < img.length; i++) {
        if (i == 0) {
            html += ' <div class="cont3_img1"><img src="' + img[i].src + '" height="135" width="190"/></div>';
        } else {
            html += '<div class="cont3_img1 cont3_img2"><img src="' + img[i].src + '" height="135" width="190"/></div>';
        }
    }
    document.getElementById('cont3_down').innerHTML = html;
    console.log("cont3_down");
}

//内容5 左边内容
function cont5_left() {
    var data = [{"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"},
        {"text": "冬虫夏草回收教你虫草生虫了怎么冬虫夏草回收教", "date": "2019-3-31"}];
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += ' <div class="cont2_right_down1">';
        html += '<div class="cont2_right_down1_1">';
        html += data[i].text;
        html += '</div>';
        html += '<div class="cont2_right_down1_2">';
        html += data[i].date;
        html += '</div>';
        html += '</div>';
    }
    document.getElementById('cont5_left').innerHTML = html;
    console.log('cont5_left');
}

//内容 右边内容
function cont5_right() {
    var data = [{
        "pro": "成都虫草回收公司",
        "info": "周物资回收有限公司是-家专业回收物资及销售的高档正规公 司.多年来我们一直积极全心服务于全国各地的商户,给客户空出尽可能最大的利益,赢得了各个地区商户的直好评。我们也专注于自3的发展,不断的完善公司体制,标准化的工作 流程,专业的研发技术，暖心的客户服务,我们不忘初心，致"
    }];
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<div class="cont5_right_div1">' + data[i].pro + '</div>';
        html += '<p>' + data[i].info + '</p>';
    }
    document.getElementById('cont5_right').innerHTML = html;
    console.log(2232333);
}