function isEven(n) {
    if (n == 0) return true;
    if (n == 1) return false;
    else if (n > 1) return isEven(n-2);
}

alert(isEven(75));

