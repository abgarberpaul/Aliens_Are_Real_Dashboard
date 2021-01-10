// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!

// References for Input & Buttons
var inputDateTime = d3.select("#datetime");
var inputCity = d3.select("#city");


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

// BUTTON: Datetime
function selectdate(){
  var datetime = d3.select("#datetime").property("value")
  var filterdata = data.filter((sighting) => {
    return sighting.datetime == datetime;
  })
}
//set table to blank before search
tbody.html("")

//Rebuilds table based on search filter:
filterdata.forEach(function(UFO_Data) {
  console.log(UFO_Data);
  var row = tbody.append("tr");
  Object.entries(UFO_Data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Define reset 
var resetBtn = d3.select("#reset-btn")
resetBtn.on("click",function(){
    d3.select("tbody").selectAll("tr").remove();
    data.forEach((UFO_Data) => {
        var row = tbody.append("tr");
        Object.entries(UFO_Data).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
});


//sets the page up to "listen" to perform function on click event
d3.select("#filter-btn").on("click", selectdate)