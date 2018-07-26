// 'use strict';

// angular.module('myApp.newtaxonomytree', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when('/newtaxonomytree', {
    // templateUrl: 'newtaxonomytree/newtaxonomytree.html',
    // controller: 'NewTaxonomytreeCtrl'
  // });
// }])

// .controller('NewTaxonomytreeCtrl', function($scope) {
  // $scope.taxonomies = [
    // { "id": 1, "project_name": "RSC", "t1": "Automotive Supplies", "t2": "Automotive Electrical", "t3": "Automotive Battery Chargers", "count": 1 },
    // { "id": 2, "project_name": "RSC, Grainger", "t1": "Automotive Supplies", "t2": "Automotive Electrical", "t3": "Battery Testers", "count": 2 },
    // { "id": 3, "project_name": "MSC", "t1": "Cleaning & Janitorial", "t2": "Corrosion Protection & Inhibitor", "t3": "Battery Terminal Protector", "count": 1 },
    // { "id": 4, "project_name": "EUAutomation", "t1": "Electrical", "t2": "Batteries & Accessories", "t3": "Battery Chargers", "count": 1 }
  // ]


// define redipsInit variable
var redipsInit;

// redips initialization
 redipsInit = function () {
  // reference to the REDIPS.drag library and message line
  
  
  var rd = REDIPS.drag,
    msg;
  // initialization
  rd.init();
  // set hover color for TD and TR
  rd.hover.colorTd = '#FFCFAE';
  rd.hover.colorTr = '#9BB3DA';
  // set hover border for current TD and TR
  rd.hover.borderTd = '2px solid #32568E';
  rd.hover.borderTr = '2px solid #32568E';
  // drop row after highlighted row (if row is dropped to other tables)
  rd.rowDropMode = 'after';
  // row was clicked - event handler
  rd.event.rowClicked = function () {


    // set current element (this is clicked TR)
    var el = rd.obj;
    // find parent table
    el = rd.findParent('TABLE', el);
    // every table has only one SPAN element to display messages
    msg = el.getElementsByTagName('span')[0];
    // display message
    msg.innerHTML = 'Clicked';
  };
  // row was moved - event handler
  rd.event.rowMoved = function () {
    
    alert("1");
    // set opacity for moved row
    // rd.obj is reference of cloned row (mini table)
    rd.rowOpacity(rd.obj, 85);

    // set opacity for source row and change source row background color
    // rd.objOld is reference of source row
    rd.rowOpacity(rd.objOld, 20, 'White');
    // display message
    
    msg.innerHTML = 'Moved';
  };
  // row was not moved - event handler
  rd.event.rowNotMoved = function () {
    msg.innerHTML = 'Not moved';
  };


  // row was dropped - event handler
  rd.event.rowDropped = function () {
    // display message
      msg.innerHTML = 'Dropped';
      alert("Value");


  };




  // row was dropped to the source - event handler
  // mini table (cloned row) will be removed and source row should return to original state
  rd.event.rowDroppedSource = function () {
    // make source row completely visible (no opacity)
    rd.rowOpacity(rd.objOld, 100);
    // display message
    msg.innerHTML = 'Dropped to the source';
  };
 
  rd.event.rowChanged = function () {
    // get target and source position (method returns positions as array)
    var pos = rd.getPosition();
    // display current table and current row
    msg.innerHTML = 'Changed: ' + pos[0] + ' ' + pos[1];
  };
};


// add onload event listener
if (window.addEventListener) {
  window.addEventListener('load', redipsInit, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', redipsInit);
}


// define headerInit and default indexURL / redipsURL variable
var headerInit,
  redipsURL = redipsURL || '/javascript/drag-and-drop-table-content/',
  indexURL = indexURL || '../';

// header initialization
headerInit = function () { 
  var header = document.createElement('div'),
    title = document.title;
  // add "header" DIV element
  document.body.insertBefore(header, document.body.firstChild);
  // apply inner HTML
  header.innerHTML = '<div style="background-color:#eee;padding:10px;text-align:center;font-size:20px;font-weight:bold">' + title + '</div>' +
    '<div style="float:left;width:50%;padding-left:10px"><a href="' + indexURL + '">Index</a></div>' +
    '<div style="text-align:right;padding-right:10px;margin-bottom:10px"><a href="http://www.redips.net' + redipsURL + '">www.redips.net</a></div>';
};
redipsInit();
// add onload event listener
if (window.addEventListener) {
  window.addEventListener('load', headerInit, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', headerInit);
}

// Add row the table
$('#btnAddRow').on('click', function() {
    var lastRow = $('#tblAddRow tbody tr:first').html();
    //alert(lastRow);
    $('#tblAddRow tbody').append('<tr>' + lastRow + '</tr>');
    $('#tblAddRow tbody tr:first input').val('');
});


// Delete row on click in the table
$('#tblAddRow').on('click', 'tr a', function(e) {
    var lenRow = $('#tblAddRow tbody tr').length;
    e.preventDefault();
    if (lenRow == 1 || lenRow <= 1) {
        alert("Can't remove all row!");
    } else {
        $(this).parents('tr').remove();
    }
});


$(document).ready(function () {
    $("#addRow").click(function () {
        $("#myTable").append("<tr><td></td><td><input style='width:100%' type='text'></td><td><input style='width:100%' type='text'></td><td><input style='width:100%' type='text'></td><td><input style='width:100%' type='text'></td><td><input style='width:100%' type='text'></td></tr>");
    });
});
/*
var response = [
    { "id": 1, "project_name": "RSC", "t1": "Automotive Supplies", "t2": "Automotive Electrical", "t3": "Automotive Battery Chargers", "count": 1 },
    { "id": 2, "project_name": "RSC, Grainger", "t1": "Automotive Supplies", "t2": "Automotive Electrical", "t3": "Battery Testers", "count": 2 },
    { "id": 3, "project_name": "MSC", "t1": "Cleaning & Janitorial", "t2": "Corrosion Protection & Inhibitor", "t3": "Battery Terminal Protector", "count": 1 },
    { "id": 4, "project_name": "EUAutomation", "t1": "Electrical", "t2": "Batteries & Accessories", "t3": "Battery Chargers", "count": 1 }
  ];

$.each(response, function(i, item) {
    $('<tr>').html(
        "<td>" + response[i].t1 + "</td><td  class='redips-drag blue redips-clone'>" + response[i].t2 + "</td><td>" + response[i].t3 + "</td>").appendTo('#records_table');
});*/

});