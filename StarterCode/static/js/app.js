// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// Console.log the UFO data from data.js
console.log(tableData);

data.forEach(function(UFOdata) {
    console.log(UFOdata);
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(function([key, value]) {
     console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
     });
  });

  // Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function(event) {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Use the form input to filter the data by blood type
//   console.log(inputValue);
  console.log(tableData.filter(function(date){
    return date.datetime === inputValue;
}
))
});
  