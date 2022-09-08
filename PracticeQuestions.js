
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function total (y,z) {
  return x + y + z
}
console.log("total()",total(1,2))
// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const totalArrow = (y,z) => (x+y+z) 
console.log("totalArrow()",totalArrow(1,2))
// 3. Write a function that returns another function. (use arrow functions please)
const nestedFunction = () => {
  const x= 6;

  const total = (y,z) => (x+y+z);
  return total
}

// console.log("nestedFunction()",nestedFunction()(1,2))

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

//the reason as to why we still have access of y is due to closure. Functions are passed like variables.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

// console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

//input (could..)
//output log result of input/error of log
const newFunction = async ()=> {
  // console.log("couldThrowError()",couldThrowError())
  
  try {
   const func = await couldThrowError()
    console.log(func)
    // return res
  }catch(e) {
    console.log("sorry, there was an error")
  }
  // console.log("res",res)
  // return couldThrowError()

}
newFunction()
// console.log(newFunction())
////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData1 = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mapList=userData1.map((user)=> {
  return {id:user.id,favoriteFoods:user.favorites.food.length}
})
// console.log("mapList",mapList)

// 6. Given the data above, use ".reduce" to make an array of all the names 
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
// const otherList = userData.filter({})
// function reducer(total,currValue) {
  
// }
// const reduceList = userData.reduce(reducer)


// 7. Show an an example of a switch statement being used
const info = "hey there";
const switchExp = (info) => {

  switch (info) {
    case 'hey ther':
      console.log('case 1');
      break;
    case "hey there":
      console.log('case 3');
      //logs this case
      break;
  }
}
// switchExp(info)

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const newObj = {...userPersonalData,...userGameData}
// console.log("newObj",newObj)


// 9. Make a copy of your new user object but override the birthday to december 31st
 
//1
// const overrideObj = {...newObj,birthday:"december 31st"}
//2
const overrideObj = {...newObj}
overrideObj.birthday = "december 31st"


// console.log("overrideObj",overrideObj)

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable 
const newArr = [...overrideObj.accomplishments]
// console.log("newArr",newArr)



//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };
const food = [...user.favoriteThings.food] 
console.log("food",food)
 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
const [food1,food2] = food
// console.log("food1",food1)
// console.log("food2",food2)

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
const [name,age,...foodUser] = data

// console.log("foodUser",foodUser)
// console.log("item1",name)
// console.log("data",data)


// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};
const {
  name:userName,
  favorites:{
    needs:{
      food:favoriteFood
    },
    wants:{
      things:[favoriteThing,secondFavoriteThing]
    }
  }
} = userInfo
console.log("userName",userName) //"Peter"
console.log("favoriteFood",favoriteFood) // [ 'burger', 'pizza', 'tacos', 'fried chicken', 'sushi' ]
console.log("favoriteThing",favoriteThing) //"cars"
console.log("secondFavoriteThing",secondFavoriteThing) //'jewelry'
console.log("userInfo",userInfo) //unchanged copy

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});
// module.exports =  fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("start")
// fetchData()
//   .then((res) => {
//     console.log("data",res)
//   })
//   .catch((e)=> {
//     console.log('there was an error')
//   })
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const funcAsync = async () => {
  try {
    
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.log('there was an error')
  }
}
// funcAsync()