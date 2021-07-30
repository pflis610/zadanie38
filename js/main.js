let liczba1 = 1;
let liczba2 = 2;
let numbercheck1 = function (liczba1, liczba2) {
if (liczba1+liczba2 >= 0) {
    return 'Wynik dodawania wynosi '+ (liczba1+liczba2);
} else {
    return 'Wynik jest nieprawidłowy';
    }
}
console.log(numbercheck1(liczba1, liczba2));
let numbercheck2 = function (liczba1, liczba2) {
if (liczba1-liczba2 >= 0) {
    return 'Wynik odejmowania wynosi ' + (liczba1-liczba2);
} else {
    return 'Wynik jest nieprawidłowy';
    }
}
console.log(numbercheck2(liczba1, liczba2));
let numbercheck3 = function (liczba1, liczba2) {
if (liczba1*liczba2 >= 0) {
    return 'Wynik mnożenia wynosi ' + (liczba1*liczba2);
} else {
    return 'Wynik jest nieprawidłowy';
    }
}
console.log(numbercheck3(liczba1, liczba2));