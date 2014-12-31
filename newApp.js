if (Meteor.isClient) {
  Progress = new Mongo.Collection(null);

  Template.table.events({
    'click #add': function(e,t) {
      temp = $("td");
      var tempArray = [];
      var bobName = temp[0].innerHTML

      Progress.insert({
        data: bobName
      })
    }
  });

  Template.table.rendered = function() {


    function getData() {
      return [
    {name: "bob", bu: false, pp: false, p: false},
    {name: "sarah", bu: false, pp: false, p: false},
    {name: "john", bu: false, pp: false, p: false}
      ];
    }
    // Instead of creating a new Handsontable instance with the container element passed as an argument,
    // you can simply call .handsontable method on a jQuery DOM object.
    var $container = $("#table");
    $container.handsontable({
      data: getData(),
      minRows: 25,
      minCols: 3,
      rowHeaders: false,
      colHeaders: ["Name", "BU", "PP", "P"],
      minSpareRows: 1,
      contextMenu: true,
      columns: [
      {
        data: "name"
        //1nd column is simple text, no special options here
      },
      {
        data: "bu",
        type: 'checkbox'
      },
      {
        data: "pp",
        type: "checkbox"
      },
      {
        data: "p",
        type: "checkbox"
      }
      ]
    });


    // This way, you can access Handsontable api methods by passing their names as an argument, e.g.:
    var hotInstance = $("#table").handsontable('getInstance');
  };





//   var example1 = document.getElementById('example1');
//   var hot1 = new Handsontable(example1,{
//     data: getCarData(),
//     startRows: 7,
//     startCols: 4,
//     colHeaders: ["Car", "Year", "Available"],
//     colWidths: [120, 50, 60],
//     columnSorting: true,
//     columns: [
//   {
//     data: "car"
//     //1nd column is simple text, no special options here
//   },
// {
//   data: "year",
//   type: 'numeric'
// },
// {
//   data: "available",
//   type: "checkbox"
// }
// ]
// });
}
