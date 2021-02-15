// function getClothing(isCold){
//        const freezing = 'Grab a jacket!';
//    if (isCold) {
//          //console.log(freezing); // zona de morte temporária
//      } else {
//          const hot = 'It’s a shorts kind of day.';
//          console.log(hot);
//      }
//      console.log(freezing);
// }

// getClothing();
// getClothing(false);

// let instructor = 'James';
// instructor = 'Richard';
// console.log(instructor);

/*
 * Programming Quiz: Using Let and Const (1-1)
 */

// const CHARACTER_LIMIT = 255;
// const posts = [
// 	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
// 	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
// 	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
// ];

// // prints posts to the console
// function displayPosts() {
// 	for (var i = 0; i < posts.length; i++) {
// 		console.log(posts[i].slice(0, CHARACTER_LIMIT));
// 	}
// }

// displayPosts();

// const circle = {
// 	radius: 10,
// 	color: 'orange',
// 	getArea: function() {
// 	  return Math.PI * this.radius * this.radius;
// 	},
// 	getCircumference: function() {
// 	  return 2 * Math.PI * this.radius;
// 	}
//   };
  
//   let {getArea} = circle;

//   console.log(getArea());

// Quiz: Escrevendo um loop for ...of 1-4
/*
 * const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
 * for ( const day of days ){
 *  console.log(day[0].toUpperCase() + day.slice(1));
 *  console.log(day.charAt(0).toUpperCase() + day.slice(1));
}
*/

/* Teste */
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [fruits, vegetables]
console.log(produce);

