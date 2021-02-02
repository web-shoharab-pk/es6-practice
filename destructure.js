const person = {name: "Shoharab Pk", age: 19, job: "programming", address: "bangladesh", phone: 1797376902, friends: ["shopen", "rabby", "rohy", "rifat", "ridoy"]}

//console.log(person.phone);
//console.log(person.name);

const {name, phone, address, salary} = person;

const complexObject = {
    name : "abc",
    info: {
        address: "naogaon",
        leader: "Boss Shoharab Pk",
        phone: 17973969,
    }
}
const {leader} = complexObject.info;
console.log("leader " + (leader));

//const phone = person.phone;
//const name = person.name;

//console.log(name, phone, address);
//console.log(name, phone, salary);

const friends = ["shopen", "rabby", "rohy", "rifat", "ridoy"];
const [firstFriend, secondFriend, ...lastFriend] = friends;
console.log(firstFriend, lastFriend);