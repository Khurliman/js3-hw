let p = 1;
let a = +prompt('Введите число');
let deg = +prompt('Введите степень числа'); 
if(isNaN(a) || isNaN(deg)) {
    alert('Error');
}else {
    for(let i = 0; i < deg; i++) {
        p *= a;
    }
    alert(p);
}
 
let n = +prompt('number');
let x = prompt('asdf');
let k = x;
let y = prompt('123');
console.log(y);
    for(let i = 0; i < n; i++) {
        console.log(x + y);
        x += k;
    }