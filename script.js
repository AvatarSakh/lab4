function z1()
{
    var x = document.getElementById("z1Input").value;
    var result = 0;
    if(x > 0)
    {
        result = Math.sin(x)^2;
    }
    else{
        result = 1-2*Math.sin(x)^2;
    }
    document.getElementById("z1Label").textContent = "Ответ: " + result;
}

function z2()
{
    var n = document.getElementById("z2Input").value;
    var result = "";
    if(n[0] == n[3] && n[1] == n[2]) result = "Палиндром";
    else result = "Непалиндром";
    document.getElementById("z2Label").textContent = "Ответ: " + result;
}

function z3()
{
    var n = document.getElementById("z3Input").value;
    var result = "Невисокосный";
    if(n%4 ==0)
    {   
        result = "Високосный"
        if(n%100 == 0)
        {
            if(n%400 != 0) result = "Невисокосный"
        }
    }
    document.getElementById("z3Label").textContent = "Ответ: " + result;
}

function z4()
{
    var x = document.getElementById("z4Input").value;
    var result = 1;
    if(x < -1) result = -1;
    if(x > -1) result = x;
    document.getElementById("z4Label").textContent = "Ответ: " + result;
}

function z5()
{
    var x = document.getElementById("z5Input").value;
    var result = " ";
    
    switch(Number(x))
    {
        case 12:
        case 1:
        case 2:
            result = "Зима";
        break;
        case 3:
        case 4:
        case 5:
            result = "Весна";
        break;
        case 6:
        case 7:
        case 8:
            result = "Лето";
        break;
        case 9:
        case 10:
        case 11:
            result = "Осень";
        break;
        default:
            result = "Некорректное число";
        break;
    }

    document.getElementById("z5Label").textContent = "Ответ: " + result;
}

function z6()
{
    var mass = document.getElementById("z6Input").value;

    var m = "";
    var k = "";

    switch(Number(mass[0])){
        case 1:
            m = "Пики";
            break;
        case 2:
            m = "Трефы";
            break;
        case 3:
            m = "Бубны";
            break;
        case 4:
            m = "Черви";
            break;
        default:
            m = "Неопределенно"
            break;
    }

    var temp = mass[2];
    if(mass.length == 4) temp +=mass[3];
    switch(Number(temp)){
        case 6:
            k = "Шестерка";
            break;
        case 7:
            k = "Семерка";
            break;
        case 8:
            k = "Восьмерка";
            break;
        case 9:
            k = "Девятка";
            break;
        case 10:
            k = "Десятка";
            break;
        case 11:
            k = "Валет";
            break;
        case 12:
            k = "Дама";
            break;
        case 13:
            k = "Король";
            break;
        case 14:
            k = "Туз";
            break;
        default:
            k = "Неопределенно";
            break;
    }

    document.getElementById("z6Label").textContent = "Ответ: " + m  + " " + k;
}

function z7()
{
    var n = document.getElementById("z7Input").value;
    
    let Name = "";
    let Color = "";

    while(n-60>0){
        n -= 60;
    }
    console.log(n);
    let tempn = n;
    while(tempn - 12 > 0){
        tempn -=12;
    }

    switch(Number(tempn)){
        case 4: Name = "Крыса";
            break;
        case 5: Name = "Корова";
            break;
        case 6: Name = "Тигр";
            break;
        case 7: Name = "Заяц";
            break;
        case 8: Name = "Дракон";
            break;
        case 9: Name = "Змея";
            break;
        case 10: Name = "Лошадь";
            break;
        case 11: Name = "Овца";
            break;
        case 12: Name = "Обезьяна";
            break;
        case 1: Name = "Петух";
            break;
        case 2: Name = "Собака";
            break;
        case 3: Name = "Свинья";
            break;
        default: Name = "Неопределенно"
            break;
    }

    tempn = n;
    while(tempn - 10 > 0){
        tempn -=10;
    }
    switch(Number(tempn)){
        case 4:
        case 5: 
            Color = "Зеленый";
            break;
        case 6:
        case 7:
            Color = "Красный";
            break;
        case 8:
        case 9: 
            Color = "Желтый";
            break;
        case 1: 
        case 10:
            Color = "Белый";
            break;
        case 2:
        case 3: 
            Color = "Черный";
            break;
        default: 
            Color = "Неопределенно";
            break;
    }

        
    document.getElementById("z7Label").textContent = "Ответ: " + Color + " " + Name;
}

function z8()
{
    
    document.getElementById("tablez8").innerHTML = `
    <table>
     <tr>
        <td>1</td>
        <td>9</td>
        <td>9</td>
    </tr>
    <tr>
        <td>2</td>
        <td>9</td>
        <td>18</td>
    </tr>
    <tr>
        <td>3</td>
        <td>9</td>
        <td>27</td>
    </tr>
    <tr>
        <td>4</td>
        <td>9</td>
        <td>36</td>
    </tr>
    <tr>
        <td>5</td>
        <td>9</td>
        <td>45</td>
    </tr>
    <tr>
        <td>6</td>
        <td>9</td>
        <td>54</td>
    </tr>
    <tr>
        <td>7</td>
        <td>9</td>
        <td>63</td>
    </tr>
    <tr>
        <td>8</td>
        <td>9</td>
        <td>72</td>
    </tr>
    <tr>
        <td>9</td>
        <td>9</td>
        <td>81</td>
    </tr>
    </table>`
}


function z9()
{
    var result = ` <table> `;
    for(var i =2; i<21;i++){
        result += `
        <tr>
           <td>sin${i}</td>
           <td>${Math.sin(i)}</td>
       </tr>`
    }
    result += `</table>`;
    document.getElementById("tablez9").innerHTML = result;
}


function z10()
{
    var a = Number(document.getElementById("z10Inputa").value);
    var b = Number(document.getElementById("z10Inputb").value);

    if(a <=500 && b >=-10 && b>=a){
    var result = `<table>`

    var count = 0;
    for(var i =100; i<=500;i++){
        count += i;
    }

    result += `<tr>
    <td>a)</td>
    <td>${count}</td>
</tr>`

    var count = 0;
    for(var i =a; i<=500;i++){
        count += i;
    }

    result += `<tr>
    <td>б)</td>
    <td>${count}</td>
</tr>`

var count = 0;
for(var i =-10; i<=b;i++){
    count += i;
}

result += `<tr>
<td>в)</td>
<td>${count}</td>
</tr>`

var count = 0;
for(var i =a; i<=b;i++){
    count += i;
}


result += `<tr>
<td>г)</td>
<td>${count}</td>
</tr>`

result +=`</table>`
document.getElementById("tablez10").innerHTML = result;
    }else alert("Некорретные значения");
   
}


function z11()
{
    var n = document.getElementById("z11Input").value;
    var result = 0;
    for(var i =1;i<=n;i++){
        result += 1/i;
    }
    document.getElementById("z11Label").textContent = "Ответ: " +result;
}


function z12()
{
    var x = Number(document.getElementById("z12Inputx").value);
    var y = Number(document.getElementById("z12Inputy").value);
   
    var result1 = 0;
    for(var i =0; i<y;i++){
        result1 +=x;
    }

    var result2 = 0;
    for(var i =0; i<x;i++){
        result2 +=y;
    }

    document.getElementById("z12Label1").textContent = "Ответ: " + result1;
    document.getElementById("z12Label2").textContent = "Ответ: " + result2;
}


function z13()
{
    var n = document.getElementById("z13Input").value;
    var result = 0;
    for(var i = 1;i<=n; i+=1){
        result +=2*i-1;
    }
    document.getElementById("z13Label").textContent = "Ответ: " + result;
}


function z14()
{
    var result = 0;
    for(var i = 2; i>0;i--){
        result = Math.sqrt(i + result);
    }
    document.getElementById("z14Label").textContent = "Ответ: " + result;
}


function z15()
{
    var n = document.getElementById("z15Input").value;
    var mass = n.split(' ');
    var count =0;
    var result = 0;
    while(true){
        if(Number(mass[count]) == 0) break;
        result += Number(mass[count]);
        count++;
    }

    document.getElementById("z15Label1").textContent = "Ответ: " + result;
    document.getElementById("z15Label2").textContent = "Ответ: " + count;
}


function z16()
{
    var n = document.getElementById("z16Input").value;
    var mass = n.split(' ');
    var count =0;
    var result = 0;
    while(true){
        if(Number(mass[count]) <0) break;
        result += Number(mass[count]);
        count++;
    }
    document.getElementById("z16Label").textContent = "Ответ: " + result/count;
}


function z17()
{
    var n = document.getElementById("z17Input").value;
    var result1 = 0;
    for(var i =0; i<n.length;i++){
        if(Number(n[i]) == 3) result1++;
    }

    var result2 = -1;
    var lastchar = n[n.length-1];
    for(var i =0; i<n.length;i++){
        if(n[i] == lastchar) result2++;
    }

    var result3 = 0;
    for(var i =0; i<n.length;i++){
        if(Number(n[i])%2 == 0) result3++;
    }

    var result4 = 0;
    for(var i =0; i<n.length;i++){
        if(Number(n[i]) >5) result4++;
    }
    
    var result5 = 1;
    for(var i =0; i<n.length;i++){
        if(Number(n[i])>7) result5 *=Number(n[i]);
    }

    var result6 = 0;
    for(var i =0; i<n.length;i++){
        if(Number(n[i]) == 0 || Number(n[i]) == 5) result6++;
    }
    document.getElementById("z17Label1").textContent = "Ответ a): " + result1;
    document.getElementById("z17Label2").textContent = "Ответ б): " + result2;
    document.getElementById("z17Label3").textContent = "Ответ в): " + result3;
    document.getElementById("z17Label4").textContent = "Ответ г): " + result4;
    document.getElementById("z17Label5").textContent = "Ответ д): " + result5;
    document.getElementById("z17Label6").textContent = "Ответ е): " + result6;
}


function z18()
{
    var n = document.getElementById("z18Input").value;
    var result1 = 0;
    var max = -1;
    for(var i = 0 ;i<n.length;i++){
        if(Number(n[i]) >max ) {
            max = Number(n[i]);
            result1 = i;
        }
    }

    var result2 = 0;
    var max = -1;
    for(var i = n.length - 1 ;i>=0;i--){
        if(Number(n[i]) >max ) {
            max = Number(n[i]);
            result2 = i;
        }
    }

    var result3 = 0;
    var min = 10;
    for(var i = 0 ;i<n.length;i++){
        if(Number(n[i]) < min ) {
            min = Number(n[i]);
            result3 = i;
        }
    }

    var result4 = 0;
    var min = 10;
    for(var i = n.length-1 ;i>=0;i--){
        if(Number(n[i]) < min ) {
            min = Number(n[i]);
            result4 = i;
        }
    }

    document.getElementById("z18Label1").textContent = "Ответ: " + result1;
    document.getElementById("z18Label2").textContent = "Ответ: " + result2;
    document.getElementById("z18Label3").textContent = "Ответ: " + result3;
    document.getElementById("z18Label4").textContent = "Ответ: " + result4;
}


function z19()
{
    var n = Number(document.getElementById("z19Input").value);
    var result = "Простое";
    var i = 1;
    while(true){
        i++;
        if(i>n) break;
        if(n%i ==0 && i!=n) result = "Не простое";
    }
   
    document.getElementById("z19Label").textContent = "Ответ: " + result;
}


function z20()
{
    var n = document.getElementById("z20Input").value;
    var result = "Упорядоченное число";
    for(var i =1 ;i<n.length;i++){
        if(Number(n[i-1])>Number(n[i])) result = "Неупорядоченное число"
    }
   
    document.getElementById("z20Label").textContent = "Ответ: " + result;
}

function z21()
{
    var temp = document.getElementById("z21Input1").value;
    var n = document.getElementById("z21Input2").value;
    var mass = temp.split(' ');
    var result = "Такого числа нет";
    for(var i =0; i<mass.length;i++)
    {
        if(Number(mass[i]) == n) result = i;
    }
    document.getElementById("z21Label").textContent = "Ответ: " + result;
}


function z22()
{
    var n = document.getElementById("z22Input1").value;
    var a = Number(document.getElementById("z22Inputa").value);
    var b = Number(document.getElementById("z22Inputb").value);
    var result = "Верно";

    var counta = 0;
    var countb = 0;
    for(var i =0; i < n.length;i++){
        if(Number(n[i]) == a) counta++;
        if(Number(n[i]) == b) countb++;
    }

    if(counta > countb) result = "Неверно";
    document.getElementById("z22Label").textContent = "Ответ: " + result;
}

function z23()
{
    var result1 = `<table>`;
    var result2 = `<table>`;
    var i = 10;
    while(i<=30){
        result1 += `<tr>
        <td>${i}</td>
        </tr>`;
        i++;
    };
    result1 += `</table>`;

    var i = 10;
    do{
        result2 += `<tr>
        <td>${i}</td>
        </tr>`;
        i++;
    }while(i<=30);
    result1 += `</table>`;
    result2 += `</table>`;
    document.getElementById("tablez231").innerHTML = result1;
    document.getElementById("tablez232").innerHTML = result2;
}