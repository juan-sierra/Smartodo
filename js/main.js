"use strict";

var textBox = document.getElementById("text-area");
var btn = document.getElementById("add-btn");

var taskUl = document.getElementById("task-ul");

// retrieve added tasks and append them to the page
document.addEventListener("DOMContentLoaded", function() {
    var rootRef = firebase.database().ref().child("Tasks");

    rootRef.on("child_added", snap=> {
        var task = snap.val();
        var listItem = document.createElement("li");

        if (listItem.innerHTML != " ") {
            listItem.append(task);
            taskUl.append(listItem);
        }

    });
});

function submitClick() {
    // reference to the db service
    var dbRef = firebase.database().ref();

    var taskText = textBox.value;

    dbRef.child("Tasks").push().set(taskText);

}