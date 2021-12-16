/// 1

function calc(a, b,c) {
    let result = (a-b)/c;

    document.write(result+'<br>')
}

calc(10, 4, 2);

// 2

function degree(d){
    let second = d*d;

    document.write('квадрат = ' + second+'<br>');

    let third = d*d*d;

    document.write('куб = ' + third+'<br>');
}

degree(5)

// 3

function min(a, b) {
    if (a < b) {
        document.write('Меньшее - ' + a + '<br>')
    } else {
        document.write('Меньшее - ' + b + '<br>')
    }
}

min(21, 43)

function max(a, b) {
    if (a > b) {
        document.write('Большее - ' + a + '<br>')
    } else {
        document.write('Большее - ' + b + '<br>')
    }
}

max(54, 2) 

// 4

function createArray(x, y) {
    let array = [];

    for (let i = x; i <= y; i++) array.push(i);
 
    return array;
}

console.log(createArray(+prompt('введите начало массива'), +prompt('введите окончание массива')))

/* function outArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

let arr=createArray(prompt('введите начало массива'), prompt('введите окончание массива'));
outArray(arr); */
 
// 5

function isEven(e) {
    if (e % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4))

// 6

function numArray(array){
    let evenArray = [];
    for(let i = 0; i < array.length; i++) {
        if (isEven(array[i])) {
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}

console.log(numArray([2,3,4,5,6,7])) 

// 7

function halfPyramid(n){
   if(n.length==1){
        if(parseInt(n)){
            for(let i=1;i<=n;i++){
                for(let j=0;j<i;j++){
                document.write(i);
                }
                document.write(`<br>`);
            }
        }
        else{
            for(let i=1;i<=9;i++){
                for(let j=0;j<i;j++){
                document.write(n);
                }
                document.write(`<br>`);
            }
        }
    }
    else{
        alert("Только 1 символ!");
    }
}
halfPyramid(prompt("Введите число или символ"))

// 8

function triangle(n){
    for (let i = 1; i <= n; i++) {
        for (let k =1; k <= n - i; k++){
            document.write('&ensp;')
        }
        for (let j = 1;j<=i * 2 -1; j++){
            document.write('*')
        }
        document.write('<br>')
    }
}
function triangleUpsideDown(n){
    for (let i = n; i >= 1; i--) {
        for (let k =1; k <= n - i; k++){
            document.write('&ensp;')
        }
        for (let j = i*2-1;j>=1; j--){
            document.write('*')
        }
        document.write('<br>')
    }
}

triangle(prompt("Высота треугольника"));
triangleUpsideDown(prompt("Высота перевернутого треугольника"));

//9

function fibonachi(){
    let arr=[1,1];
    for(let i=2;;i++){
        if((arr[i-1]+arr[i-2])<=1000){
            arr.push(arr[i-1]+arr[i-2]);
        }
        else{
            return arr;
        }
    }
}
console.log(fibonachi());

//10

function sumNum(n){
    let sum=0;
    while(n!=0){
    sum+=n%10;
    n-=n%10;
    n/=10;
    }
    if(sum<=9){
        return sum;
    }
    else{
        return sumNum(sum);
    }
}
console.log(sumNum(prompt("Введите число")));

//11

function elemArray(arr){
    console.log(arr.shift());
    if(arr.length>0){
        elemArray(arr);
    }
    else{
        return;
    }
}
let arr=[1,5,3,2,7,1,3,5];
elemArray(arr); 

// 12

function table(str,n){
    for(let i=0;i<n;i++){
        str+=" ";
    }
    return str;
}

function showTable(fio, group){
    let str = 'Домашняя работа: "Функциии"',
    n = Math.max(fio.length, group.length, str.length),
    buf="";
    fio=table(fio,n-fio.length);
    group=table(group,n-group.length);
    str=table(str,n-str.length);
    for(let i=0;i<n+2;i++){
       buf+="*";
    }
    console.log(buf);
    console.log("*"+str+"*");
    console.log("*"+group+"*");
    console.log("*"+fio+"*");
    console.log(buf);
}
let fio = prompt('введите ФИО'),
    group = "Выполнил студент гр. "+prompt('номер группы');
    
showTable(fio,group);

// 13

function validation(str){
    let b=0;
    for(let i=0;i<str.length;i++){ //пробегается по строке
        if(str[i]=="@")b++; //считает количество @
        if (i!=str.length-1 && (str[i]=="@"||str[i]=="."||str[i]=="_"||str[i]=="-")&&(str[i+1]=="@"||str[i+1]=="."||str[i+1]=="_"||str[i+1]=="-")){ // этот и след симв равны спец символам
            return false;
        }
        if((str.codePointAt(i)>=48 && str.codePointAt(i)<=57)||str.codePointAt(i)==45 || str.codePointAt(i)==46 ||
        str.codePointAt(i)==64 || str.codePointAt(i)==95 || (str.codePointAt(i)>=65 && str.codePointAt(i)<=90) ||
        (str.codePointAt(i)>=97 && str.codePointAt(i)<=122)){ // разрешенные к введению символы по юникоду
        }
        else{
            return false;
        }
    }
    if(b!=1){ //если собачек не 1 шт
        return false;
    }
    b=str.indexOf("@");
    if(b<2){return false;} // если до собачки меньше чем 2 символа
    
    if(str.startsWith("@")||str.startsWith(".")||str.startsWith("_")||str.startsWith("-")||str.endsWith("@")||str.endsWith(".")||str.endsWith("_")||str.endsWith("-")){ //если строка начиинается или заканчивается на спецсимволы
        return false;
    }
    if(str.length-str.lastIndexOf(".")<2 || str.length-str.lastIndexOf(".")>11){ // после последней точки не меньше 2 и не больше 11 символов
        return false;
    }
    return true;
}

if (validation(prompt("введите почту"))){
    alert("почта введена верно");
}
else{
    alert("почта введена неверно");
}
