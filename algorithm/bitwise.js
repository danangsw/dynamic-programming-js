function singleElementXOR(list) {
    let res;

    for (let i = 0; i < list.length; i++) {
        res = res ^ list[i];
    }

    res = (res & -res);

    let res1 = 0, res2 = 0;

    for (let i = 0; i < list.length; i++) {
        if ((list[i] & res) > 0) {
            res1 = res1 ^ list[i];
        }
        else { 
            res2 = res2 ^ list[i];
        }
    }

    console.log({ res, res1, res2 });
}

const numbs = [9, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 7];
singleElementXOR(numbs);