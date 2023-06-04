//Code for a add new button to display the input table. 

function addnewFunction() {
    var x = document.getElementById("addNew");
    var message = document.getElementById("message");
    if (x.style.display === "none") {
        x.style.display = "block";
        message.style.display = "block";
    } else {
        x.style.display = "none";
        message.style.display = "none";
    }
}

//Creating the form input: Code followed from Coding Challenges walk through

const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

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
form.addEventListener("submit", function (event) {
    event.preventDefault();
    addTask(
        form.nextElementSibling.taskName.value,
        form.nextElementSibling.taskRating.value,
        form.nextElementSibling.taskDish.value,
        form.nextElementSibling.taskReview.value,
        form.nextElementSibling.taskComment.value,
        form.nextElementSibling.taskDate.value,
        form.nextElementSibling.taskFood_img.value,
        form.nextElementSibling.taskMeal_type.value,
        form.nextElementSibling.taskCuisine.value,
        form.nextElementSibling.taskRecommend.value,
    )
})

function displayTask(task) {
    let item = document.createElement("li");
    item.setAttribute("data-id", task.id);
    item.innerHTML =
        `<p><strong>${task.name}</strong><br>${task.rating}</p>
    <span><em>${task.meal_type} hours</em><br>$${task.comment}/hr</span>
   `;
   tasklist.appendChild(item);

   form.reset();
}

let delButton = document.createElement("button");
let delButtonText = document.createTextNode("🗑️");

delButton.appendChild(delButtonText);
item.appendChild(delButton);

delButton.addEventListener("click",function(event){
    taskList.forEach(function(taskArrayElement,taskArrayIndex)){
        if (taskArrayElement.id == item.getAttribute('data-id')){
            tasklist.splice(taskArrayIndex,1)
        }
    }
}) 

console.log(taskList)
item.remove();

let checkboxElem=document.createElement("input");
checkboxElem.setAttribute("type","checkbox");

item.insertBefore(checkboxElem,item.firstChild)

