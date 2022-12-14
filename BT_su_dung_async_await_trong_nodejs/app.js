// async function getMax (arr) {
//     if (arr instanceof Array) {
//         let max = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return max;
//     }
//     throw new Error('Input data is incorrect');
// }
// async function f() {
//     try {
//         let result = await getMax([1,2,3]);
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }
// f();


// function getMax(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr instanceof Array) {
//             let max = arr[0];
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] > max) {
//                     max = arr[i]
//                 }
//             }
//             resolve(max)
//         }
//         reject('Input is invalid')
//     })
// }
// getMax([1,2,3])
// .then(result => console.log(result))
// .catch(result => console.log(result))

