let liczba1 = 1;
let liczba2 = 2;
let numbercheck1 = function (licz1, licz2) {
    if (licz1+licz2 >= 0) {
    return 'Wynik dodawania wynosi '+ (licz1+licz2);
    } else {
      return 'Wynik jest nieprawidłowy';
      }
}
console.log(numbercheck1(liczba1, liczba2));
let numbercheck2 = function (licz1, licz2) {
    if (licz1-licz2 >= 0) {
    return 'Wynik odejmowania wynosi ' + (licz1-licz2);
    } else {
      return 'Wynik jest nieprawidłowy';
      }
}
console.log(numbercheck2(liczba1, liczba2));
let numbercheck3 = function (licz1, licz2) {
    if (licz1*licz2 >= 0) {
    return 'Wynik mnożenia wynosi ' + (licz1*licz2);
    } else {
      return 'Wynik jest nieprawidłowy';
      }
}
console.log(numbercheck3(liczba1, liczba2));