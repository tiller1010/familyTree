let familyCount=[];

function person(name,gender,relation){
this.name=name,
this.gender=gender,
this.relation=relation
familyCount.push(this);
}
person.prototype.sayName=function(){
console.log(this.name);
}

function familyMember(){}
familyMember.prototype=Object.create(person.prototype);

let auntie = new person("Suzy","female","Mother");
auntie.constructor=familyMember;

let findMothers=function(){
let mothers=[];
let regEx=/Mother/;
for(i=0;i<familyCount.length;i++){
if(regEx.test(familyCount[i].relation)){
mothers.push(familyCount[i]);
}
}
console.log(mothers);
}

console.log(familyCount);
findMothers();