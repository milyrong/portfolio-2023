function toggleForm() {
    var formDiv = document.getElementById("addbutton");
    var addButton = document.querySelector(".food_adventures button");
  
    if (formDiv.style.display === "none") {
      formDiv.style.display = "block";
      addButton.textContent = "Cancel"; // Update button text
    } else {
      formDiv.style.display = "none";
      addButton.textContent = "Add New"; // Update button text
    }
  }


//Creating the form input: Code followed from Coding Challenges walk through on Scrimba
const form = document.getElementById("inputform");
const tasklist = document.getElementById("tasklist");

//Look for users submitting the form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(
        form.elements.taskName.value,
        form.elements.taskRating.value,
        form.elements.taskDish.value,
        form.elements.taskReview.value,
        form.elements.taskComment.value,
        form.elements.taskDate.value,
        form.elements.taskFood_img.value,
        form.elements.taskMeal_type.value,
        form.elements.taskCuisine.value,
        form.elements.taskRecommend.value,
    )
})

//Display the information that users just inputted 
function displayTask(task) {
    let item = document.createElement("li");
    item.setAttribute("data-id", task.id);
    item.innerHTML =
        `<p><strong>${task.name}</strong><br>${task.rating}</p>
    <span><em>${task.meal_type} hours</em><br>${task.comment}/hr</span>
   `;
   tasklist.appendChild(item);
   form.reset();

    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);

    delButton.addEventListener("click",function(event){
        item.remove();
        taskList.forEach(function(taskArrayElement,taskArrayIndex){
            if (taskArrayElement.id == item.getAttribute('data-id')){
                tasklist.splice(taskArrayIndex,1)
        }
    }) 

console.log(taskList);
})

}

//An array to store all the variables 
var taskList = [];

function addTask(name, rating, dish, review, comment, date, food_img,
    meal_type, cuisine, recommend) {
    let task = {
        name,
        rating,
        dish,
        review,
        comment,
        date,
        food_img,
        meal_type,
        cuisine,
        recommend,
        id: Date.now()
    }

    taskList.push(task);
    displayTask(task);
}

addTask("Totti",9,"fried","love it","with friends",20/12/2020,"Images/Vecor.png","fancy","chinese",true);

console.log(taskList);




// //defining variable 
// let checkboxElem = document.createElement("input");
// checkboxElem.setAttribute("type", "checkbox");

// item.prepend(checkboxElem)

// item.insertBefore(checkboxElem, item.firstChild)
  
// checkboxElem.addEventListener("change", (event) => {
//   // Event listener callback function
//   let isChecked = event.target.checked;
  
//   // for (let i = 0; i < taskList.length; i++) {
    
//   // }
  
//   taskList.forEach(function(taskArrayElement, taskArrayIndex){
//     if (taskArrayElement.id == item.getAttribute("data-id")){
//       if (isChecked) {
//         item.style.backgroundColor = 'rgb(220, 255, 220)';
//         taskArrayElement.billable = true;
//       } else {
//         item.style.backgroundColor = '#ffffff';
//         taskArrayElement.billable = false;
//       }
//     }
//   })
  
// })



// Leave the bracket below to close the displayTask function


