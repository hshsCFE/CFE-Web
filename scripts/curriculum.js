import courses from "/assets/courses.json" assert { type: 'json' };

const courseList = document.getElementById("course-list-parent");
const descriptionBtn = document.getElementById("description-btn");
const courseLinks = document.getElementsByClassName("course-list-child");

let clicked = false;

function addCourse(content) {
    const newCourse = document.createElement("li");

    newCourse.setAttribute("class", "course-list-child flex-child");
    newCourse.innerHTML = content;

    courseList.appendChild(newCourse);
}

descriptionBtn.addEventListener("click", (event) => {
    if (!clicked) {
        for (let i in courses) {
            let input = '<a class="course-description" href="' + courses[i].url + '">' + courses[i].name + '</a>';

            addCourse(input);
        }

        clicked = true;
    }
});