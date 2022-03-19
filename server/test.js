// let samplePassword = "iammukesh";
// const bcrypt = require('bcrypt');
// let store1stHash = ""
// async function testBcrypt(sp){
//     for(let i=0; i<100000; i++){
//         const hashPassword = await bcrypt.hash(sp,1);
//         if(i===0){
//             store1stHash = hashPassword
//         }
//         if(i!=0 && store1stHash===hashPassword){
//             console.log("matching",i);
//         }
//     }
//     console.log("not matching",store1stHash);

//     // const getPassword = await bcrypt.Verify(textBox2.Text, password);
//     // console.log(getPassword);
    
// //     let hashPassword = await bcrypt.hash(samplePassword,4);
// //     console.log(hashPassword);
// //     let flag = await bcrypt.compare("samplePassword",hashPassword);
// //     console.log(flag);
// }
// testBcrypt(samplePassword);



// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersThree = [7, 8, 9];
// const numbersCombined = [...numbersOne, ...numbersTwo, ...numbersThree];
// console.log(numbersCombined);


// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, three, ...rest] = numbers;
// console.log(one,two,three, rest);


const numbers = [1, 2, 3, 4, 5, 6];
const numCopy = numbers
console.log(numCopy);

const [...rest] = numbers;