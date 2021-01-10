// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!

// References for Input & Buttons
var inputDateTime = d3.select("#datetime");
var inputCountry = d3.select("country");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputShape = d3.select("#shape");
var button = d3.select("#filter-btn")


// Sets up initial table format of tables and rows
// (runs when page loads)
data.forEach(function(UFO_Data) {
  console.log(UFO_Data);
  var row = tbody.append("tr");

  Object.entries(UFO_Data).forEach(function([key, value]) {
    console.log(key, value);
  
    // set up cells (format)
    var cell = row.append("td");
    cell.text(value);
  });
});

// ACTIONS responding to button click:
// (property("value") is user entry)

// BUTTON: Datetime >>WORKS DO NOT REMOVE<<
function selectdate(){
var datetime = d3.select("#datetime").property("value")
var filterdata = data.filter((sighting) => {
  return sighting.datetime == datetime;
});

// BUTTON: FILTER-DATA (ALL FIELDS)
  function filterdata(){

  };



// }
// }
// }
// }
// // // BUTTON: VAR DURATION
// // var duration = d3.select("#duration").property("value")
// // if(duration){
// // var filterdata = filterdata.filter((sighting) => {
// //   return sighting.durationMinutes == duration;
// // })
// // }

//set table to blank before search
// tbody.html("")

// //Rebuilds table based on search filter:+

// filterdata.forEach(function(UFO_Data) {
//     console.log(UFO_Data);
//     var row = tbody.append("tr");
//     Object.entries(UFO_Data).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });




// var resetBtn = d3.select("#reset-btn")
// resetBtn.on("click", function(){
//   d3.select("tbody").SelectAll("tr").remove();
//   data.forEach(function(UFO_Data) {
//     var row = tbody.append("tr");
//     Object.entries(UFO_Data).forEach(function([key, value]) {
//       // set up cells (format)
//       var cell = row.append("td");
//       cell.text(value);
//   });
}

//sets the page up to "listen" to perform function on click event
d3.select("#filter-btn").on("click", selectdate)


// // //sets up the page to "listen" to perform function on second button
// d3.select("#reset-btn").on("click", resetBtn)