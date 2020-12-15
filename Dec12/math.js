const greater_divisor = (n,m)  => {

    if (n > m) {
        x = n
        y = n
    }
    if (m > n) {
        x = n
        y = m
    }

    // let x = (n > m ) ? m : n

    while (x > 0) {
        if ((m % x) === 0 && (n % x) === 0) {
            break
        }
        else{
            x -- 
        }

    }

    return x
}

console.log(greater_divisor(12, 120));
console.log(greater_divisor(12, 121))



// const myArr = () => {
//     missingNum= [1 ,2 ,3, 4, 6, 7, 8, 9, 10 ]
//     while (i = 0, i < myArr.length, i++) {
//         if (i++ == i+1) {
//             continue
//         }
//         else {
//             ( i++ !== i+1) 
//             return i
//                             }
//     }
// }
// console.log(myArr())

