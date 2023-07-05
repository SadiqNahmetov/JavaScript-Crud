// // Validata form inputs before submit data
// function validataForm() {

//   var name = document.getElementById("name").value;
//   var surname = document.getElementById("surname").value;
//   var age = document.getElementById("age").value;
//   var email = document.getElementById("email").value;

//   if (name == "") {
//     alert("Name is required");
//     return false;
//   }

//   if (surname == "") {
//     alert("Surname is required");
//     return false;
//   }

//   if (age == "") {
//     alert("Age is required");
//     return false;
//   }
//   else if (age < 18) {
//     alert("You must be 18 years old");
//     return false;
//   }

//   if (email == "") {
//     alert("Email is required");
//     return false;
//   }
//   else if (!email.includes("@")) {
//     alert("Email is not valid");
//     return false;
//   }

//   return true;
// }


// // function to show Data 
// function showData() {
//   var peopleList;
//   if (localStorage.getItem("peopleList") == null) {
//       peopleList = [];
//       }
//       else {
//         peopleList = JSON.parse(localStorage
//           .getItem("peopleList"));
//       }

//   var html = "";
//   peopleList.forEach(function (element, index) {

//     html += "<tr>";
//     html += "<td>" + element.name + "</td>";
//     html += "<td>" + element.surname + "</td>";
//     html += "<td>" + element.age + "</td>";
//     html += "<td>" + element.email + "</td>";
//     html += "<td><button class='btn btn-danger' onclick='deleteData(" + index + ")'>Delete</button><button class='btn btn-warning' onclick='updateData(" + index + ")'>Edit</button></td>";
//     html += "</tr>";
//   });

//   document.querySelector("#curudTable tbody").innerHTML = html;
// }


// // Loads All  data when document or page loaded

// document.onload = showData();

// // function to added data

// function AddData() {

//   if (validataForm() == true) {
//     var name = document.getElementById("name").value;
//     var surname = document.getElementById("surname").value;
//     var age = document.getElementById("age").value;
//     var email = document.getElementById("email").value;


//     var peopleList;
//     if (localStorage.getItem("peopleList") == null) {
//       peopleList = [];
//     }
//     else {
//       peopleList = JSON.parse(localStorage
//         .getItem("peopleList"));
//     }

//     peopleList.push({
//       name: name,
//       surname: surname,
//       age: age,
//       email: email
//     });

//     localStorage.setItem("peopleList",
//       JSON.stringify(peopleList));
//       showData();

//     document.getElementById("name").value = "";
//     document.getElementById("surname").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("email").value = "";
//   }
// }


// Validate form inputs before submitting data
function validateForm() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;

  if (name.trim() === "") {
    alert("Name is required");
    return false;
  }

  if (surname.trim() === "") {
    alert("Surname is required");
    return false;
  }

  if (age.trim() === "") {
    alert("Age is required");
    return false;
  } else if (parseInt(age) < 18) {
    alert("You must be 18 years old");
    return false;
  }

  if (email.trim() === "") {
    alert("Email is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Email is not valid");
    return false;
  }

  return true;
}

// Function to show data
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = JSON.parse(localStorage
      .getItem("peopleList"));
  }
  else {
    peopleList = JSON.parse(localStorage
      .getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.surname + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      "<td class='d-flex gap-4'><button class='btn btn-danger ' onclick='deleteData(" +
      index +
      ")'>Delete</button><button class='btn btn-warning ' onclick='updateData(" +
      index +
      ")'>Edit</button></td>";
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody")
    .innerHTML = html;
}

// Load all data when the document or page is loaded
document.onload = showData();

// Function to add data
function AddData() {

    if (validateForm() == true) {
      var name = document.getElementById("name").value;
      var surname = document.getElementById("surname").value;
      var age = document.getElementById("age").value;
      var email = document.getElementById("email").value;
  
  
      var peopleList;
      if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
      }
      else {
        peopleList = JSON.parse(localStorage
          .getItem("peopleList"));
      }
  
      peopleList.push({
        name: name,
        surname: surname,
        age: age,
        email: email
      });
  
      localStorage.setItem("peopleList",
        JSON.stringify(peopleList));
        showData();
  
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("age").value = "";
      document.getElementById("email").value = "";
    }
  }


  // function to delete data

function deleteData(index) {
  var peopleList = JSON.parse(localStorage.getItem("peopleList"));
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}


// function to update data

function updateData(index) {

  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  }
  else {
    peopleList = JSON.parse(localStorage
      .getItem("peopleList"));
  }
  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("surname").value = peopleList[index].surname;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("email").value = peopleList[index].email;

document.querySelector("#Update").addEventListener("click", function () {
   
  if (validateForm() == true) {
    peopleList[index].name = document.getElementById("name").value;
    peopleList[index].surname = document.getElementById("surname").value;
    peopleList[index].age = document.getElementById("age").value;
    peopleList[index].email = document.getElementById("email").value;
 
    localStorage.setItem("peopleList",
       JSON.stringify(peopleList));
        showData();

        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
        
        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
  
  
      }

});

  
}
