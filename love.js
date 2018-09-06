//-->只有在行首的时候才会注释单行 &&& while 循环机制 &&& 运算符优先级
function countdown(n) {
    while(n-->0){
        console.log(n);
    }
}

countdown(3);

/*------------------------------------------------------------------------------*/

//变量提升,a变量的声明会被提升并赋值undefined &&& b变量没有被声明，会报错阻断当前脚本的执行 &&& JS引擎的工作方式：先解析代码，获取所有被声明的变量，然后再一一执行
function hoisting(){
    console.log(a);
    //console.log(b);
    var a=1;
    var a;//这行代码是无效的，第二次声明（没有赋值的情况下）是无效的
}

hoisting();

/*------------------------------------------------------------------------------*/

//这种写法是错误的，因为{标点符号被视为块的开头，}标点符号被视为块的结束，而开始下一个语句的执行。
//{} instanceof Object;

//正确的写法
({}) instanceof Object;

/*-----------------------------------------------------------------------------*/

//递归   斐波那契数列

function recursion(num){
    if(num===0) return 0;
    if(num===1) return 1;
    return recursion(num-2)+recursion(num-1);
}

console.log(recursion(5));

/*-----------------------------------------------------------------------------*/

//函数的声明的提升，如果采用赋值加function表达式声明和采用function语句声明，永远是前者生效

var f=function(){
    return 1;
}

function f(){
    return 2;
}

f();//永远返回1；

/*-----------------------------------------------------------------------------*/

//对象的拷贝

var extend=function(to,from){
    for(var property in from){
        to[property]=from[property];
    }
    return to;
}
