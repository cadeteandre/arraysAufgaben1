// ================================================
//                    Level-1_1
// ================================================
const bucketList: string[] = ['Ägypten', 'England', 'Spanien'];
const luckyScript: number[] = [22, 14, 11];
const favoritePeople: string[] = ['Sarah', 'Sandra', 'Patricia'];

console.log(bucketList, luckyScript, favoritePeople);

// ================================================
//                    Level-1_2
// ================================================

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// ================================================
//                    Level-1_3
// ================================================

console.log(bucketList.length);
console.log(luckyScript.length);
console.log(favoritePeople.length);

// ================================================
//                    Level-1_4
// ================================================

console.log(bucketList);
console.log(bucketList.length);
bucketList.push('Argentina', 'Peru');
console.log(bucketList);
console.log(bucketList.length);


console.log(luckyScript);
console.log(luckyScript.length);
luckyScript.push(27, 19);
console.log(luckyScript);
console.log(luckyScript.length);

console.log(favoritePeople);
console.log(favoritePeople.length);
favoritePeople.push('Matheus', 'Wagner');
console.log(favoritePeople);
console.log(favoritePeople.length);

// ================================================
//                    Level-1_5
// ================================================

const landRemoved = bucketList.pop();
const numberRemoved = luckyScript.pop();
const personRemoved = favoritePeople.pop();
console.log(landRemoved, numberRemoved, personRemoved);

// ================================================
//                    Level-1_6
// ================================================

let firstPerson = favoritePeople.shift();
console.log(firstPerson);
console.log(favoritePeople);

// ================================================
//                    Level-1_7
// ================================================

console.log(bucketList);
console.log(bucketList.length);
bucketList.unshift('USA', 'Mexico');
console.log(bucketList);
console.log(bucketList.length);


console.log(luckyScript);
console.log(luckyScript.length);
luckyScript.unshift(23, 2);
console.log(luckyScript);
console.log(luckyScript.length);

console.log(favoritePeople);
console.log(favoritePeople.length);
favoritePeople.unshift('Sarah u.u', 'Lusinete');
console.log(favoritePeople);
console.log(favoritePeople.length);

// ================================================
//                    Level-1_8
// ================================================

const lieblingsreiseziele: string[] = ['USA', 'Russia'];
console.log(lieblingsreiseziele);
lieblingsreiseziele.slice(0);
console.log(lieblingsreiseziele);

// ================================================
//                    Level-1_9
// ================================================

const numbArr: number[] = [23, 54, 75];
console.log(numbArr);
numbArr.push(5, 4, 3, 2, 1);
console.log(numbArr);
numbArr.unshift(1, 2, 3, 4, 5);
console.log(numbArr);
numbArr.pop();
numbArr.pop();
console.log(numbArr);
numbArr.shift();
numbArr.shift();
console.log(numbArr);

// ================================================
//                    Level-1_14
// ================================================

const oldHollywoodActors: string[] = [
    'Malon Brando', 
    'Audrey Hepburn', 
    'Elizabeth Taylor', 
    'Cary Grant', 
    'Paul Newman', 
    'Doris Day'
];

const actorsReference = oldHollywoodActors;
actorsReference.push('Marilyn Monroe');
console.log(oldHollywoodActors);
console.log(actorsReference);

const arrCopy1 = [].concat(actorsReference); //not best practice
const arrCopy2 = actorsReference.slice();
const arrCopy3 = [...actorsReference];

arrCopy1[1] = 'Demi Moore'; 
arrCopy2[2] = 'Patrick Swayze';
arrCopy3[4] = 'Anthony Hopkins';

console.log(arrCopy1);
console.log(arrCopy2);
console.log(arrCopy3);