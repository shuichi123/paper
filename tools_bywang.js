/**
 * Created by Administrator on 2017/6/5 0005.
 */
/*���ִ�style���ƶ���left=0��top=0����delay�����ӳ�ʱ��*/
function texiao1(ele,str,style,delay){
    var arr = str.split("");
    for(var i=0; i<arr.length; i++){
        arr[i] = "<font class='font-" + i + "'>" + arr[i] + "</font>";
    }
    var str_new = arr.join("");
    ele[0].innerHTML = str_new;
    ele.find("font").css(style);
    var font_all = ele.find("font");
    var j=0;
    var time1 = window.setInterval(function(){
        if(j==arr.length){
            clearInterval("time1");
        }else{
            font_all[j].style.left = "0";
            font_all[j].style.top = "0";
            j++;
        }
    },delay);
}
/*�����������ɫ��˸,delay1���������ӳ٣�delay2������ʧ�ӳ٣�style1����ԭʼ��ʽ
 * style2����ı����ʽ*/
function texiao2(ele,str,style1,style2,delay1,delay2,count){
    var arr = str.split("");
    for(var i=0; i<arr.length; i++){
        arr[i] = "<font>" + arr[i] + "</font>";
    }
    var str_new = arr.join("");
    ele[0].innerHTML = str_new;
    var font_all = ele.find("font");
    font_all.css(style1);
    var time1 = window.setInterval(function(){
        /*����count����ͬ�������*/
        var arr_num = [];
        while(arr_num.length<count){
            var is_chong = false;
            var number = Math.floor(Math.random()*arr.length);
            if(arr_num.length == 0){
                arr_num.push(number);
            }
            for(var j=0; j<arr_num.length; j++){
                if(arr_num[j] == number){
                    is_chong = true;
                }
            }
            if(is_chong == false){
                arr_num.push(number);
            }
        }
        /*�������������*/
        for(var k=0; k<arr_num.length; k++){
            font_all.eq(arr_num[k]).addClass("act").css(style2)
        }
        window.setTimeout(function(){
            /*����5����ͬ�������*/
            var arr_num2 = [];
            while(arr_num2.length<count){
                var is_chong = false;
                var length = ele.find(".act").length;
                var number = Math.floor(Math.random()*length);
                if(arr_num2.length == 0){
                    arr_num2.push(number);
                }
                for(var j=0; j<arr_num2.length; j++){
                    if(arr_num2[j] == number){
                        is_chong = true;
                    }
                }
                if(is_chong == false){
                    arr_num2.push(number);
                }
            }
            for(var m=0; m<arr_num2.length; m++){
                ele.find(".act").eq(arr_num2[m]).removeClass("act").css(style1)
            }
        },delay2);
    },delay1);
}
/*������ʽ�仯,style1����ԭ����ʽ��style2�����������ʽ��delay�����ӳ�*/
function texiao3(ele,str,style1,style2,delay){
    var arr = str.split("");
    for(var i=0; i<arr.length; i++){
        arr[i] = "<font>" + arr[i] + "</font>";
    }
    var str_new = arr.join("");
    ele[0].innerHTML = str_new;
    ele.find("font").css(style1);
    var font_all = ele.find("font");
    var j=0;
    var time1 = setInterval(function(){
        if(j==arr.length){
            window.clearInterval(time1);
        }else{
            font_all.eq(j).css(style2);
            j++;
        }
    },delay)
}