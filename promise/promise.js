const onMyBirthday = (isMayaSick, cakes) => {
  // your solution heres
};

/*
* Output
* I have 2 cakes
* Let's Party
*/
onMyBirthday(false, 2)
  .then((cakes) => {
    console.log(`I have ${cakes} cakes`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Let's Party")
  })

/*
* Output
* I am sad
* Let's Party
*/
onMyBirthday(true, 4)
  .then((cakes) => {
    console.log(`I have ${cakes} cakes`);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Let's Party")
  })
