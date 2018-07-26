var imported = document.createElement('script');
        imported.src = 'js/baseurl.js';
        document.head.appendChild(imported);
        var GlobalURl = GlobalURLset();
function searchbox() {
                var input, filter, table, tr, td, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("lefttable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td");
                    for (j = 0; j < td.length; j++) {
                        let tdata = td[j];
                        if (tdata) {
                            if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
                                document.getElementById("noresultleft").style.display = "none";
                                break;
                            } else {
                                tr[i].style.display = "none";
                                document.getElementById("noresultleft").style.display = "contents";
                            }
                        }
                    }
                }
            }

            function addrowclick()
            {
                
            var row = document.getElementById("myTable");
            if(row.innerText.length != 0)
            {
            var lstchild = row.lastElementChild;
            var index = parseInt(lstchild.children[0].innerText) + 1;
            row.innerHTML += '<tr><td class="td d-none"><div class="redips-drag redips-row">' + index + '</div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><span onclick="deleterow(this)"><i class="fas fa-trash-alt"></i></span></td></tr>';
            }
            else
            {
                var index = 1;
                row.innerHTML = '<tr><td class="td d-none"><div class="redips-drag redips-row">' + index + '</div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><span onclick="deleterow(this)"><i class="fas fa-trash-alt"></i></span></td></tr>';
            }
            }
            
            function deleteallrow() {
                var table = document.getElementById("rigttable");
                for (var i = table.rows.length - 1; i > 0; i--) {
                    table.deleteRow(i);
                }
            }

            

            function deleterow(id,del)
            {
                debugger;

                if (typeof del === "undefined") 
                {
                var row = id.parentNode.parentNode;
                 row.parentNode.removeChild(row);
                }
                else
                {
                var pr = del.parentElement;
                var mpr = pr.parentElement;
                var url = GlobalURl+"/delete_taxonomy?id="+id;
                //var url = "http://192.168.1.58:4040/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("DELETE", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        debugger;
                         console.log(xhr.responseText);
                         var responsedata=xhr.responseText;
                          mpr.remove();
                    }
                };
                xhr.send(null);

                } 
            }

            function myFunction(elm) {
                var getparent = elm.parentElement;
                var vall = elm.innerText;
                // console.log(vall);
                if (vall == "click to add")
                {
                    vall = "";
                }
                var value = '<textarea onfocusout="OnFocusOutForm(this)" autofocus="true">' + vall + '</textarea><span class="delete_ind" onclick="myclose(this)"><i class="fas fa-times"></i></span>';
                elm.parentElement.innerHTML = value;
                elm.remove();

            }

            function myclose(elm) {
                var pr = elm.parentElement;
                elm.parentElement.firstChild.remove();
                elm.remove();
                pr.innerHTML = '<div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div>';

            }

            function OnFocusOutForm(elm) {
                var vall = elm.value;
                var value = "";
                if (vall == "") {
                    vall = "click to add"
                    value = '<div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>' + vall + '</span></div>';
                }
                else
                {
                    value = '<div class="redips-drag blue redips-clone" onclick="myFunction(this)">' + vall + '</div><span class="delete_ind" onclick="myclose(this)"><i class="fas fa-times"></i></span>';
                }
                
                elm.parentElement.innerHTML = value;
                elm.remove();
            }
            $('#btnAddRow').on('click', function () {

                var lastRow = $('#tblAddRow tbody tr:first').html();
                $('#tblAddRow tbody').append('<tr>' + lastRow + '</tr>');
                $('#tblAddRow tbody tr:first input').val('');
            });

            $('#tblAddRow').on('click', 'tr a', function (e) {
                var lenRow = $('#tblAddRow tbody tr').length;
                e.preventDefault();
                if (lenRow == 1 || lenRow <= 1) {
                    alert("Can't remove all row!");
                } else {
                    $(this).parents('tr').remove();
                }
            });
            