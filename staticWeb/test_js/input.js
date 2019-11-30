function sub() {
    //获取姓名id的值
    var name = document.getElementById('name').value;
    console.log(name);
    var pwd = document.getElementById('pwd').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;

    //单选框
    var sexs = document.getElementsByName('sex');//获取单选框对象,是一个数组
    //初始化数组
    var sex = [];
    for (var i = 0; i < sexs.length; i++) {
        if (sexs[i].checked) {
            //添加数组元素
            sex.push(sexs[i].value);
        }
    }

    //复选框
    var hobbyNum = document.getElementsByName('hobby');//获取checkbox对象,是一个数组对象
    //初始化数组
    var hobby = [];
    for (var i = 0; i < hobbyNum.length; i++) {
        if (hobbyNum[i].checked) {
            //向数组中添加新元素
            hobby.push(hobbyNum[i].value);
        }
    }

    //住址
    //省
    var address = document.getElementsByName('province');
    //初始化数组
    var addr = [];
    for (var i = 0; i < address.length; i++) {
        if (address[i].selected) {
            addr.push(address[i].value);
        }
    }

    //市
    var citys = document.getElementsByName('city');
    //初始化数组
    var city = [];
    for (var i = 0; i < citys.length; i++) {
        if (citys[i].selected) {
            city.push(citys[i].value);
        }
    }

    //区
    var areas = document.getElementsByName('area');
    //初始化数组
    var area = [];
    for (var i = 0; i < areas.length; i++) {
        if (areas[i].selected) {
            area.push(areas[i].value);
        }
    }

    //自我评价 ,文本域不能用name获取，只能用id获取
    var selfs = document.getElementById('self').value;


    //初始化
    var html = '';
    //在文本域<textarea>中不能使用html标签
    html += '姓名：' + name + "\n";
    html += '密码：' + pwd + "\n";
    html += '电话：' + phone + "\n";
    html += '年龄：' + age + "\n";
    html += '性别：' + sex + "\n";
    html += '爱好：' + hobby + "\n";
    html += '住址：省份：' + addr + "&nbsp;市：" + city + "&nbsp;区：" + area + "\n";
    html += '自我评价：' + selfs + "\n";
    document.getElementById("text").innerHTML = html;
}
