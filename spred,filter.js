const user = {
    id: 215,
    name: "Sahitya Ghosh",
    age: 20,
    study: true
};


user.name = "Akash";
user.gender = "Male";
console.log(user);


const user1 = {
    ...user, nam:"Mukesh"
}
console.log(user1);
user1.school = "WB";
console.log(user1);

const {id,nam,school} = user1;
console.log(id,nam,school);

