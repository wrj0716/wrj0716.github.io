function max_num(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }else if(num2>=num1 && num2>=num3){
        return num2;
    }else{
        return num3;
    }
}
var ans=max_num(91,91,5);
document.write(ans);

var person = {
    name:"sandy",
    age:26,
    is_male:false,
    print_name=function(){
        console.log(person.name) ;
    }
}
person.print_name();