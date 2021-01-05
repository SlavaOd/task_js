// Создать 2 объекта с различными полями. Написать код, который переберёт оба объекта и 
// сконкатениурет все поля-массивы и запишет результат в переменную `result`. Посчитать сумму чисельных элементов в массивах.

objone = {};
objone = {
    a: 10,
    b: 20,
    c: [1,2,3,4],
    d: 30,
    e: [5,6,7,8],
    f: [9,10],
};

objtwo = {};
objtwo = {
    g: 40,
    h: [11,12,13,14],
    i: 50,
    j: [15,16,17,18,19,20]

}

objmain = Object.assign(objone,objtwo)
res = []
for (key in objmain){
    if(Array.isArray(objmain[key])){
        a = objmain[key]
        for(i = 0; i < a.length; i++) {
            res.push(a[i])
        }
    }
}
console.log(res)