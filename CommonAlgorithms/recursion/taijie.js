function fn(n) {
    if (n === 1 || n === 2) {
        return n;
    }
    return fun(n - 1) + fun(n - 2);
}