var nameVar='anish';
nameVar='Mike';
    console.log('nameVar',nameVar);

let nameLet='Jen';
nameLet='Julie';
console.log('nameLet',nameLet);

const nameConst='Frank';
console.log('nameConst',nameConst);

//block level scope

const fullName='Anish Yadav';
let firstName;
if (fullName ) {
    const firstName=fullName.split('  ')[0];
    console.log(firstName);

}
console.log(firstName);
