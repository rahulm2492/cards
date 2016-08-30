// fetch('flowers.jpg').then(function(response) {
//   if(response.ok) {
//     response.blob().then(function(myBlob) {
//       var objectURL = URL.createObjectURL(myBlob);
//       myImage.src = objectURL;
//     });
//   } else {
//     console.log('Network response was not ok.');
//   }
// })
// .catch(function(error) {
//   console.log('There has been a problem with your fetch operation: ' + error.message);
// });

class CatsApi {
  static getAllCats() {
    return fetch('http://localhost:5000/api/v1/cats').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }

  // static saveCourse(course) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }

  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }

  //       resolve(Object.assign({}, course));
  //     }, delay);
  //   });
  // }

  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.courseId == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default CatsApi;