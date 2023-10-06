//childni topish nest objectdan
// 'garbage collaction' unreachable bulsa  uni heepda remove qilib yuboradi,
//agar object link uzgarda u garbage bulib qoladi.
//this bu window  eng katta object
//hech qanday kodsiz holatda ham  {} bosh object turadi  this deganda ummumiy object tushiniladi
//this === window (root)
// const myFunc = () => {
//   console.log("salom");
// };

// let child = {
//   name: "jamshid",
//   myFunc1() {
//     console.log(`${child.name}`);
//     console.log(`${this.name}`); // this o'rniga  parentsini  nomini qoysa  ham buladi, lekin objectni nomi uzgarsa xatolik buladi shuni uchun thiis buladi
//   },
//   getName:function(){
//    return ()=>{
//         console.log(`${this.name}`)
//       }//callback function
//   } 
// };
// let user = child;
// // child = null;
// user.getName()(); // this arrow function da bulmaydi

// function getName(name){
//     console.log(new.target)//buni vazifasi constraktor bilan narsa chaqirilgan yuqligini bilish
//     // this.name=name;//buni global holatda ishlatish mumkin chunki this.method uni globalga saqlaydi
//     // this.sayHi= function (){
//     //     console.log(this);
//     //     return name;
//     // }
// }
// new getName('salom')
// console.log( new getName('eshmat').sayHi());
// console.log(new getName('Toshmat').sayHi());

// let id1 = Symbol('id1') 
// let id2 = Symbol('id2') 

// let obj = {
//     // id1:'salom',
//     [id1]:'qales',//id1 ==> symbolga teng bulyabdi{
//     //     sayHi: [Function: sayHi],
//     //     [Symbol(id1)]: 'qales',
//     //     [Symbol(id2)]: 'alik'
//     //   } shu holatdagi natija chiqadi buni shu holatda qiymatini olish mumkin
//     [id2]:'alik',// bu holatdagi key dinamic key deyiladi
//     // ['id3']:'zur',
//     // 'id2':'bum',//keylar bir hil bulsa  oxirgisini olib qolganini ignore qildai
//     sayHi: function(){
//         return this;
//     }
// }

// console.log(obj.sayHi())
let name = 'salom'
let obj = {
    name:'jamshid',
    title:'IT',
    child: {
        childName:'hello'
    }
}
// console.log('name' in obj);
//  for(key in obj) console.log(obj[key])//[]dinamic usulda qidiradi
//********************************************************************distracture
const {name:newName, title, child:{childName}} = obj;

console.log(childName);










