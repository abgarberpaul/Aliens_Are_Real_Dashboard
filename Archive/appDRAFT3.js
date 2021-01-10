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

// BUTTON: Datetime #2
  
function selectdate(){
  //clean
  var inputDate_Clean = inputDateTime.property("value").trim();
  var inputState_Clean = inputState.property("value").toLowerCase().trim();
  var inputCity_Clean = inputCity.property("value").toLowerCase().trim();


  //filter
   var filterDate = data.filter(data => data.datetime === inputDate_Clean);
   console.log(filterDate)
   var filterCity = data.filter(data => data.city === inputCity_Clean);
   console.log(filterCity)

   var filterData = data.filter(data => data.datetime === inputDate_Clean && data.state === inputState_Clean && data.city === inputCity_Clean);
   console.log(filterData)


//set table to blank before search
tbody.html("")

//create new data set
let response = {
  filterData, filterDate, filterState, filterCity
}

  if (response.filterdata.length !== 0) {
  populate(filterData);
  }
  else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
    populate(filterCity) || populate(filterDate);
  }
  else {
    tbody.append("tr").append("td").text("No results found!"); 
  }
}


//Rebuilds table based on search filter:
filterData.forEach(function(UFO_Data) {
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


// //sets up the page to "listen" to perform function on second button
// d3.select("#filter-btn-2").on("click", descriptionSearch)