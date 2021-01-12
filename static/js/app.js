// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Sets up initial table format of tables and rows
// (runs when page loads)
data.forEach(function(UFO_Data) {
  // console.log(UFO_Data);
  var row = tbody.append("tr");
  Object.entries(UFO_Data).forEach(function([key, value]) {
    // console.log(key, value);

    // set up cells (format)
    var cell = row.append("td");
    cell.text(value);
  });
});

// ACTIONS responding to button click:
// (property("value") is user entry)

// BUTTON: Datetime
function selectdate(){

var filterdata = data
var datetime = d3.select("#datetime").property("value")
if(datetime){
filterdata = filterdata.filter((sighting) => {
  return sighting.datetime == datetime;
})
}
var country = d3.select("#country").property("value")
if (country)(
filterdata = filterdata.filter((sighting) => {
  return sighting.country == country;
})
)
var state = d3.select("#state").property("value")
if (state)(
filterdata = filterdata.filter((sighting) => {
  return sighting.state == state;
})
)
var city = d3.select("#city").property("value")
if (city)(
filterdata = filterdata.filter((sighting) => {
  return sighting.city == city;
})
)
var shape = d3.select("#shape").property("value")
if (shape)(
filterdata = filterdata.filter((sighting) => {
  return sighting.shape == shape;
})
)
//set table to blank before search
tbody.html("")

//Rebuilds table based on search filter:
filterdata.forEach(function(UFO_Data) {
    console.log(UFO_Data);
    var row = tbody.append("tr");
    Object.entries(UFO_Data).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// // FUNCTION TO FIND A WORD IN "COMMENTS" SECTION

function searchComments(){
  var searchItem = d3.select("#search").property("value")

  //set table to blank before search
  tbody.html("")

  data.forEach(function(UFO_Data) {
    
    // console.log(UFO_Data);
    comment = UFO_Data["comments"]
    var searchArray = comment.split(" ")
    searchArray.forEach(function(search_data){
      if(search_data == searchItem){
        // console.log(UFO_Data)
        // console.log(search_data)
        // console.log(searchItem)
        var row = tbody.append("tr");
        Object.entries(UFO_Data).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      }
    })
  });
}
//set table to blank before search
tbody.html("")

// //Rebuilds table based on search filter:
data.forEach(function(UFO_Data) {
    // console.log(UFO_Data);
    var row = tbody.append("tr");
    Object.entries(UFO_Data).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Define RESET BUTTON
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

//sets the page up to "listen" to perform function on click event
d3.select("#search-btn").on("click", searchComments)