const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: false,
    age: 30,
  },
  {
    id: 3,
    name: "Mike",
    isActive: true,
    age: 50,
  },
];

// 1. Print names
// GOOD
const names = [];

users.forEach((user) => {
  names.push(user.name);
});
console.log(`User names: ${names}`);

//BETTER
const betterNames = users.map((user) => user.name);
console.log(`Better user names: ${betterNames}`);

// 2. Get only active users
//GOOD
const onlyActiveNames = [];
users.forEach((user) => {
  if (user.isActive) onlyActiveNames.push(user.name);
});
console.log(`Active user: ${onlyActiveNames}`);

//BETTER
const activeUserNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(`Better active user: ${activeUserNames}`);

// 3. Sort active user by age descending
// GOOD
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
const descendingAge = [];
users.forEach((user) => {
  if (user.isActive) descendingAge.push(user.name);
});
console.log(`Sort active user by age descending: ${descendingAge}`);

//BETTER
const betterDescendingAge = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(
  `Better sort active user by age descending: ${betterDescendingAge}`
);
