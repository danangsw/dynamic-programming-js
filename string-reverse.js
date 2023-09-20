function mergeReverse(str_a, str_b) {
    let arr_ab = [];
    const len_max = str_a.length > str_b.length ? str_a.length : str_b.length ;

    let x = 0;
    let y = 0;
    for (let i = 0; i < len_max; i++) {
        if(x < str_a.length) arr_ab.push(str_a[i]);
        if(y < str_b.length) arr_ab.push(str_b[i]);
        
        x++;
        y++;
    }

    return arr_ab.join('');
}

console.log(mergeReverse('123', 'qwerty'));
console.log(mergeReverse('qwerty', '123'));