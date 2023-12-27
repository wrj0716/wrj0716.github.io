//--字串轉數字--
//數字相加:再輸入標籤前(prompt)加上屬性(parseFloat)or如下:
//var num1 = prompt("數字依");
//var num2 = prompt("數字二");
//num1=parseInt(num1);
//num2=parseInt(num2);
//document.write(num1+num2);
//

//--標籤--
//Math.abs=絕對值
//Math.max=取最大值
//Math.min=取最小值
//Math.round=取四捨五入
//Math.pow=次方(2,4二的四次方)
//Math.sqrt=(開耕號)
//Math.random()=隨機數
//var num1= -5;
//document.write((Math.round( Math.random()*10)));
//document.write(7%6); 餘數

//--陣列--
//score=[20,50,70,90,60];
//document.write(score.length);

//--if函式--
//function temp(x){
//if(temp>=10){
//    return "天氣沒那麼冷";
//}else{
//    return "天氣超冷";
//}
//}
//var a = temp(8);
//document.write(a);
//
//--簡單if--
//var score = 70;
//if(score==100){
//   document.write("我給你100元") ;
//}else if(score>=80){
//   document.write("我給你80元") ;
//}else{
//   document.write("沒錢") ;
//}

//var score = 100;
//var rainy = false;
//if (score == 100 || !rainy){
//    document.write("我給你100元") ;
//}else{
//   document.write("不給你") ;
//}


//--打招呼(初階)--
//var name = prompt("請輸入姓名");
//
//document.write("你好" + name + "小姐");
//--打招呼(函式)--
//function name1(x){
//    say_hi = "你好"+ x+ "小解";
//
//    return say_hi;
//    
//}
//value=name1("吳");
//
//document.write(value);
   

//--數字運算函式--
//function value(n1,n2){
//    toto=n1+n2;
//    return toto;
//}
//var A = value(20,40);
//document.write(A);



//--while迴圈 輸入密碼(初級)--
//var password = 1234;
//var input ;
//var count = 0;
//
//while(password!=input){
//      input=prompt("請輸入密碼");
//}
//document.write(input);
//alert("歡迎登入");

//--while迴圈 輸入密碼(進階級)--
//var password = 1234;
//var input = " ";
//var count =0;
//var count_out = false;
//while(password!=input && !count_out){
//    count++;
//    if(count<=3){
//        input=prompt("請輸入密碼")
//    }else{
//        count_out= true;
//    }
//}   
//if(count_out){
//    alert("X");
//}else{
//    alert("O");
//}

//--陣列、for 迴圈--
//var friends=["小白","小黃","小綠"];
//
//for(var i=0;i<friends.length;i++){
//    document.write(friends[i]);
//}
//!!記得要"字串"!!!
//??英文大小寫答案如何做??
//var ques=[
//    {
//        prompt:"香蕉甚麼顏色?(a) 黑色(b)藍色(c)荒色",answer:"c"},
//    {
//        prompt:"木瓜甚麼顏色?(a)局色(b)藍色(c)紅色",answer:"a"
//    },
//    {
//        prompt:"牛奶甚麼顏色?(a)黃色(b)白色(c)紅色",answer:"b"   
//    }
//    
//]
//var score=0;
//for(var i = 0; i<ques.length;i++){
//    var input=prompt(ques[i].prompt);
//    if(input==ques[i].answer){
//        alert("O");
//        score++;
//        
//    }else{
//        alert("X");
//    }
//}
//alert(score);
//
//var number = [
//    [1,2,3],
//    [4,5,6],
//    [7,8,9],
//    [0]
//];
//
//for(var i=0;i<number.length;i++){
//    for(var j=0;j<number[i].length;j++){
//        document.write(number[i][j]);
//    }
//    
//    document.write("<br>");
//}
//for(var i=0;i<number.length;i++){
//    document.write(number[i]);
//     document.write("<br>");
//}

//var countryCode = "tw"; 
//var msg = ""; 
//if(countryCode == "tw"){ 
//    msg = "您好"; 
//}else{ 
//    msg = "how are you"; 
//}

//第一題
document.write("第一題");
 
document.write("<br>");
function H1(){
    var H1 = document.getElementById("number");

for(var i=0; i<=30;i++){
    if(i%2==0){
        document.write(i);
        document.write("<br>");
    }
}
}
//
//document.write("第二題");
//document.write("<br>");
//for(var i=0; i<=30;i++){
//    if(i%2==0 && i%3!=0){
//        document.write(i);
//        document.write("<br>");
//    }
//}

//document.write("第三題");
//document.write("<br>");
//var j=0;
//while(j<30){
//    j++;
// if(j%2){
//    document.write(j+"<br>");
//}
//}
//
//document.write("第四題");
//document.write("<br>");
//var j = 0;
//while(j<30){
//    j++;
// if(j%2 && j%5!=0){
//    document.write(j+"<br>");
//}
//}
var H1 = document.getElementById("h1");
console.log(H1);