var lastSelectedRowleft;
var trsleft = document.getElementById('myUL').getElementsByTagName('li');

// disable text selection
document.onselectstart = function () {
    return false;
}

function leftRowClick(currenttr, lock) {
   
    if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
            clearAllleft();
            toggleRowleft(currenttr);
        }
    }
}

function toggleRowleft(row) {

    row.className = row.className == 'selected' ? '' : 'selected';
    lastSelectedRow = row;
//	var content = row.innerHTML + '<i class="fas fa-check"></i>';
//    row.innerHTML = content;
	var ultag = document.getElementById("myUL");
    var li = ultag.getElementsByTagName("li");

    for (var i = 0, r; r = li[i]; i++) {
            if (row == r) {
            }
            else {
				var x = r.firstElementChild;
					if(x != null)
					{
						r.removeChild(x);
					}
                
            }
	}
}

function clearAllleft() {
    for (var i = 0; i < trsleft.length; i++) {
        trsleft[i].className = '';
    }
}


function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}



			
var lastSelectedRow;
var trs = document.getElementById('rigttable').tBodies[0].getElementsByTagName('tr');

// disable text selection
document.onselectstart = function () {
    return false;
}

function RowClick(currenttr, lock) {
    if (window.event.ctrlKey) {
        toggleRow(currenttr);
    }
    if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
            clearAll();
            toggleRow(currenttr);
        }

        if (window.event.shiftKey) {
            selectRowsBetweenIndexes([lastSelectedRow.rowIndex, currenttr.rowIndex])
        }
    }
}

function toggleRow(row) {

    row.className = row.className == 'selected' ? '' : 'selected';
    lastSelectedRow = row;

    var x = row.firstElementChild;
    var xx = x.children[0];
    xx.style.display = "none";
    var yy = x.children[1];
    yy.style.display = "contents";


    var table = document.getElementById("rigttable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0, r; r = rows[i]; i++) {
        if (i > 0) {
            if (row == r) {

                var x = row.firstElementChild;
                var xx = x.children[0];
                xx.style.display = "none";
                var yy = x.children[1];
                yy.style.display = "contents";

            }
            else {
                if (r.className != "selected") {
                    var x = r.firstElementChild;
                    var xx = x.children[0];
                    xx.style.display = "contents";
                    var yy = x.children[1];
                    yy.style.display = "none";
                }
            }
        }
    }

}

function selectRowsBetweenIndexes(indexes) {
    indexes.sort(function (a, b) {
        return a - b;
    });

    for (var i = indexes[0]; i <= indexes[1]; i++) {
        trs[i - 1].className = 'selected';
        var x = trs[i - 1].firstElementChild;
        var xx = x.children[0];
        xx.style.display = "none";
        var yy = x.children[1];
        yy.style.display = "contents";

    }
}

function clearAll() {
    for (var i = 0; i < trs.length; i++) {
        trs[i].className = '';
    }
}