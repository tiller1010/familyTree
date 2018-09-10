function person(name,gender,relation){
this.name=name,
this.gender=gender,
this.relation=relation
}
person.prototype.sayName=function(){
console.log(this.name);
}

function familyMember(){}
familyMember.prototype=Object.create(person.prototype);

let auntie = new person("Suzy","female","r");
auntie.constructor=familyMember;