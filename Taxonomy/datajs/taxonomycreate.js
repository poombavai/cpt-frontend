           
            var GlobalURl="";
            var read = "";
        window.onload = function () {
           
		   GlobalURl= GlobalURLset();
            var loading = document.getElementById("loading");
            loading.style.display = "flex";
            inputget();
            loadDoc();
            taxonomyload();
			var inputpageScrollid=1;
          

        };
        
        function savecontinue()
        {
         
        var rowarr1=[];
        var rowarr=[];
        var rowid="";
        var myTab = document.getElementById('myTable');

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {
            
            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < 7; j++) {
                var rightrowval=objCells.item(j).innerText;
                if(rightrowval === "Newrow")
                {
                    if(j == 0)
                    {
                        rowid="null";
                    }
                }
                else
                {
                    if(j == 0)
                    {
                        rowid=objCells.item(0).innerText;
                    }
                    else
                    {
                        var rowval =  objCells.item(j).innerText; 
                        rowarr.push(rowval); 
                    }
                }
            }

            var strings = rowarr;
            rowarr=[];
            rowarr1.push({id:rowid,data:strings});
            rowid="";
            //rowarr1.push(strings);
          
        }
         saveandcon(rowarr1);

        }

        function saveonly()
        {
      
        var rowarr1=[];
        var rowarr=[];
        var rowid="";
        var myTab = document.getElementById('myTable');

        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (i = 1; i < myTab.rows.length; i++) {
           
            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < 7; j++) {
                var rightrowval=objCells.item(j).innerText;
                if(rightrowval === "Newrow")
                {
                    if(j == 0)
                    {
                        rowid="null";
                    }
                }
                else
                {
                    if(j == 0)
                    {
                        rowid=objCells.item(0).innerText;
                    }
                    else
                    {
                        var rowval =  objCells.item(j).innerText; 
                        rowarr.push(rowval); 
                    }
                }
            }

            var strings = rowarr;
            rowarr=[];
            rowarr1.push({id:rowid,data:strings});
            rowid="";
            //rowarr1.push(strings);
          
        }
         save(rowarr1);

    }
    function taxoback(){


        var rowarr1=[];
        var rowarr=[];
        var rowid="";
        var myTab = document.getElementById('myTable');
        for (i = 1; i < myTab.rows.length; i++) {
           
            var objCells = myTab.rows.item(i).cells;
            for (var j = 0; j < 7; j++) {
                var rightrowval=objCells.item(j).innerText;
                 var rowval =  objCells.item(j).innerText; 
                rowarr.push(rowval); 
            }

            var strings = rowarr;
            rowarr=[];
            rowarr1.push(strings);
            rowid="";
            //rowarr1.push(strings);
          
        }
       

            var index = rowarr1.findIndex(x => x[0]=="Newrow");
            if (index >= 0) {
                myalertFunction('Info','Please Save the tree');
            } else {
                window.location="Recommended-sku-create.html";
                
            }
    }


    function assingn(){
        var rowarr1=[];
        var rowarr=[];
        var rowid="";
        var myTab = document.getElementById('myTable');
        for (i = 1; i < myTab.rows.length; i++) {
         
            var objCells = myTab.rows.item(i).cells;
            for (var j = 0; j < 7; j++) {
                var rightrowval=objCells.item(j).innerText;
                 var rowval =  objCells.item(j).innerText; 
                rowarr.push(rowval); 
            }

            var strings = rowarr;
            rowarr=[];
            rowarr1.push(strings);
            rowid="";
            //rowarr1.push(strings);
          
        }
        

            var index = rowarr1.findIndex(x => x[0]=="Newrow");
            if (index >= 0) {
                myalertFunction('Info','Please Save the tree');
            } else {
                window.location="Assign-Taxonomy.html";
                
            }
        }




       function saveandcon(rowarr1)
        {
           
            var url = GlobalURl+"/taxonomy_creation";
                //var url = "http://192.168.1.58:4040/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                    	
                        
                         var responsedata=xhr.responseText;
                         localStorage.setItem('Mytaxdata', responsedata);
                         window.location="Recommended-sku-create.html";
                    }
                };
                var id=localStorage.getItem('MyId');
               
                var data = JSON.stringify({"project_id":id,"taxonomy":rowarr1});
               
                xhr.send(data);
        }
        function save(rowarr1)
        {
           
            var url = GlobalURl+"/taxonomy_creation";
                //var url = "http://192.168.1.58:4040/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                    	
                        
                         var responsedata=JSON.parse(xhr.responseText);
                         responsedata=responsedata.taxonomy;
                         var rowidarr=[];
                         rowidarr.push("");

                         for (var prop in responsedata)
                         {
                            var item = responsedata[prop];
                            var rowid =item['id'];
                            rowidarr.push(rowid);

                         }
                         var rowdata1="";

                        var x = document.getElementById("snackbar");
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                        localStorage.setItem('Mytaxdata', responsedata);
                        var data = document.getElementById('myTable');
                        var rows = data.getElementsByTagName("tr")
                       
                        rowdata1 = '<tr><td class="td d-none"><div class="redips-drag redips-row">1</div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>click to add</span></div></td><td class="td"><span onclick="deleterow(this)"><i class="fas fa-trash-alt"></i></span></td></tr>';

                       for (var i = 0; i < rows.length; i++) 
                       {
                            if(!(i == 0))
                            {
                                var rowdata=rows[i].innerHTML;
                                rowdata = rowdata.replace( 'Newrow',rowidarr[i]);
                                rowdata='<tr>'+rowdata+'</tr>';
                                rowdata1 +=rowdata;
                            }
                        }
                       //document.getElementById('myTable').innerHTML="";
                       document.getElementById('myTable').innerHTML="";

                      document.getElementById('myTable').innerHTML=rowdata1;
                      var ddd=document.getElementById('myTable').innerHTML;

                    }
                };
                var id=localStorage.getItem('MyId');
               
                var data = JSON.stringify({"project_id":id,"taxonomy":rowarr1});
                //alert(data);
                
                xhr.send(data);
        }
		
		var count =0;
		var checkval=4;
		var ck =  document.getElementById('tablearea');
		if(ck)
		{
			 document.getElementById('tablearea').addEventListener('wheel', function(e) {
             debugger;
			 if (e.deltaY < 0) {
                   
             }
			 if (e.deltaY > 0) {
                 
			  
				   if(count==checkval)
			       {
				     
				     inputgetscroll();
					 count=0;
				     
			       }
			   
			     count =parseInt(count)+1;
			      
             }
	       
        })
		}
          
         function inputgetscroll()
		 {
			 debugger;
			
            var id=localStorage.getItem('MyId');
            var url = GlobalURl+"/projects/input_file?project_id="+id+"&page="+inputpageScrollid;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        
                   var inputdata = JSON.parse(xhr.responseText);
                         debugger;
             for (var prop in inputdata)
             {
                var count = parseInt(prop) + 1;
                var readdata = inputdata["result"];
                
                var tabledata=readdata["0"].data;
                var tblBody = document.getElementById('inputrow'); //document.createElement("tbody");
                //tblBody.setAttribute("id", "inputrow");
                var inputrowdata = inputdata[prop];
                for (var prop1 in tabledata)
                {
					debugger;
                     // creates a table row
                     var row = document.createElement("tr");

                     var tablerowdata=tabledata[prop1];
                     for (var rowdata in tablerowdata)
                     {
                        let celldata=tablerowdata[rowdata];
                        var cell = document.createElement("td");
                        var cellText = document.createTextNode(celldata);


                         cell.appendChild(cellText);
                         row.appendChild(cell);

                     }
                     tblBody.appendChild(row);
                     
                }
              
             }
				          
			 inputpageScrollid =parseInt(inputpageScrollid)+1;
                    } else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.onerror = function (e) {
                console.error(xhr.statusText);
            };
            xhr.send();
		}

         
        function inputget()
        {
			debugger;
			inputpageScrollid=1;
			var ck =  document.getElementById('tablearea');
            var id=localStorage.getItem('MyId');
            var url = GlobalURl+"/projects/input_file?project_id="+id+"&page="+inputpageScrollid;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        
                        var response = JSON.parse(xhr.responseText);
                       
                        //console.log(response);
                        inputreferenceload(response);
						inputpageScrollid =parseInt(inputpageScrollid)+1;
                    } else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.onerror = function (e) {
                console.error(xhr.statusText);
            };
            xhr.send();

        }
		
		
		

        function inputreferenceload(inputdata)
        {
            debugger;
             for (var prop in inputdata)
             {
                var count = parseInt(prop) + 1;
                var readdata = inputdata["result"];
                var headdata=readdata["0"].headers;
                var tabledata=readdata["0"].data;
                //headdata=headdata.length;
                // get the reference for the body
                var body = document.getElementsByTagName("tablearea");
                // creates a <table> element and a <tbody> element
                var tbl = document.createElement("table");
                tbl.setAttribute("id", "inputtable");
                tbl.setAttribute("class", "table");
                var header=  document.createElement('thead');
                var headingRow = document.createElement('tr');
                
                for (var head in headdata)
                {
                    let headtext=headdata[head];
                    var headingCell1 = document.createElement('th');
                    headingCell1.setAttribute("class", "th");
                    var headingText1 = document.createTextNode(headtext);
                    headingCell1.appendChild(headingText1)
                    headingRow.appendChild(headingCell1)
                    header.appendChild(headingRow)

                }
                tbl.appendChild(header);
               // console.log(tbl);

                var tblBody = document.createElement("tbody");
                tblBody.setAttribute("id", "inputrow");
                
                debugger;

                var inputrowdata = inputdata[prop];
                for (var prop1 in tabledata)
                {
                     // creates a table row
                     var row = document.createElement("tr");

                     var tablerowdata=tabledata[prop1];
                     for (var rowdata in tablerowdata)
                     {
                        let celldata=tablerowdata[rowdata];
                        var cell = document.createElement("td");
                        var cellText = document.createTextNode(celldata);


                         cell.appendChild(cellText);
                         row.appendChild(cell);

                     }
                     tblBody.appendChild(row);
                     
                }
                tbl.appendChild(tblBody);
                debugger;
                document.getElementById('tablearea').innerHTML=tbl.outerHTML;
                
                console.log(tbl);
                
               
              
             }
        }

        function loadDoc() {
           
            var taxonval=localStorage.getItem('Taxon');
            loadDoc2(taxonval);
            redipsInit();
           
            var keywords = JSON.parse(taxonval);
            keywords = keywords["keywords"];
            var keyval = keywords.join(', ');
            var myHilitor = new Hilitor("lefttable");
            myHilitor.apply(keyval);
        }

        function taxonomyload()
        {
        	
            var id=localStorage.getItem('MyId');
        	var url = GlobalURl+"/project_taxonomy_list?project_id="+id;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        
                        var response = JSON.parse(xhr.responseText);
                        
                        taxonomyloadbind(response);
                    } else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.onerror = function (e) {
                console.error(xhr.statusText);
            };
            xhr.send();

        }
         function taxonomyloadbind(taxonomyloadres)
         {
         	
         	//var taxores= JSON.parse(taxonomyloadres);
            var skucount1=taxonomyloadres.length;
            document.getElementById("skucount1").innerHTML = skucount1.toString();
         	var righttaxvalarr=[];
         	for (var prop in taxonomyloadres)
         	{
         		
         		var count = parseInt(prop) + 1;
         		var rowid=taxonomyloadres[prop].id;
                var item = taxonomyloadres[prop].tree;
                for (var tax in item)
                {
                	var righttaxval = item[tax];
                	righttaxvalarr.push(righttaxval);

                }

                
                let t0="";
                let t1="";
                let t2="";
                let t3="";
                let t4="";
                let t5="";
               
                 t0=righttaxvalarr[0];
                 t1=righttaxvalarr[1];
                 t2=righttaxvalarr[2];
                 t3=righttaxvalarr[3];
                 t4=righttaxvalarr[4];
                 t5=righttaxvalarr[5];
                if (typeof t0 === "undefined") {t0="";}
                 if (typeof t1 === "undefined") {t1="";}
                  if (typeof t2 === "undefined") {t2="";}
                   if (typeof t3 === "undefined") {t3="";}
                    if (typeof t4 === "undefined") {t4="";}
                     if (typeof t5 === "undefined") {t5="";}

                var data = document.getElementById('myTable');
                data.innerHTML +='<tr><td class="td d-none"><div class="redips-drag redips-row">'+rowid+'</div></td><td class="td">'
                +'<div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t0+'</div></td>'
                +'<td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t1+'</div></td>'
                +'<td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t2+'</div></td>'
                +'<td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t3+'</div></td>'
                +'<td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t4+'</div></td>'
                +'<td class="td"><div class="redips-drag blue redips-clone" onclick="myFunction(this)"><span>'+t5+'</div></td>'
                +'<td class="td"><span onclick="deleterow('+rowid+',this)"><i class="fas fa-trash-alt"></i></span></td></tr>';
                righttaxvalarr = [];
                t0="";
                t1="";
                t2="";
                t3="";
                t4="";
                t5="";
         	}
         	loading.style.display = "none";
         	//window.location="Recommended-sku-create.html";
             
           

         }


        function loadDoc2(read)
        {
            
             var taxvalarr=[];
            
            read= JSON.parse(read);
            var projectname=read["project_name"]
            document.getElementById("projectname").innerHTML = projectname.toString();
            var readdata = read["result"];
            var skucount=readdata.length;
            document.getElementById("skucount").innerHTML = skucount.toString();

            for (var prop in readdata) {
               
                var count = parseInt(prop) + 1;
                var item = readdata[prop];
                var projects=item.project.name;
                var taxonomylisi=item.taxonomy;
                for (var tax in taxonomylisi)
                {
                    
                    var taxval = taxonomylisi[tax].name;
                  
                    taxvalarr.push(taxval);

                }
                
                let t0="";
                let t1="";
                let t2="";
                let t3="";
                let t4="";
                let t5="";
               
                 t0=taxvalarr[0];
                 t1=taxvalarr[1];
                 t2=taxvalarr[2];
                 t3=taxvalarr[3];
                 t4=taxvalarr[4];
                 t5=taxvalarr[5];
                if (typeof t0 === "undefined") {t0="";}
                 if (typeof t1 === "undefined") {t1="";}
                  if (typeof t2 === "undefined") {t2="";}
                   if (typeof t3 === "undefined") {t3="";}
                    if (typeof t4 === "undefined") {t4="";}
                     if (typeof t5 === "undefined") {t5="";}

                var data = document.getElementById('tablerow');
                data.innerHTML +=' <tr><td class="td"><div id= "drag' + count + '" onclick="calc();" class="redips-drag redips-row redips-clone"'
                +'style="cursor: move;"><span>'+ count +''
                +'</span></div></td><td class="td">'
                +'<div>'+projects+'</div></td>'
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t0 +'</div></td>'  
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t1 +'</div></td>'
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t2 +'</div></td>'
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t3 +'</div></td>'
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t4 +'</div></td>'
                +'<td class="td"><div id= "redipsdrag' + count + '" class="redips-drag blue redips-clone" style="cursor: move;">'+ t5 +''
                +'</div></td></tr>';
                taxvalarr = [];
                t0="";
                t1="";
                t2="";
                t3="";
                t4="";
                t5="";
                }

            }

            var redipsInit;
            redipsInit = function () {

                var rd = REDIPS.drag,
                    msg;

                rd.init();
                rd.hover.colorTd = '#FFCFAE';
                rd.hover.colorTr = '#9BB3DA';
                rd.hover.borderTd = '2px solid #32568E';
                rd.hover.borderTr = '2px solid #32568E';
                rd.rowDropMode = 'after';
                rd.event.rowClicked = function () {
                    //alert("Clicked");
                    var el = rd.obj;
                    el = rd.findParent('TABLE', el);
                    msg = el.getElementsByTagName('span')[0];
                    //msg.innerHTML = 'Clicked';
                };

                rd.event.rowMoved = function () {
                    rd.rowOpacity(rd.obj, 85);
                    rd.rowOpacity(rd.objOld, 20, 'White');
                    //msg.innerHTML = 'Moved';
                };


                rd.event.rowNotMoved = function () {
                    //msg.innerHTML = 'Not moved';
                };

                rd.event.rowDropped = function () {
                    
                    //msg.innerHTML = 'Dropped';
                };

                rd.event.dropped = function (s) {

                    //console.log(s);
                    //msg.innerHTML = 'Dropped';
                };



                rd.event.rowDroppedSource = function () {
                    rd.rowOpacity(rd.objOld, 100);
                    //msg.innerHTML = 'Dropped to the source';
                };

                rd.event.rowChanged = function () {
                    var pos = rd.getPosition();
                    //msg.innerHTML = 'Changed: ' + pos[0] + ' ' + pos[1];
                };
            };


            if (window.addEventListener) {
                window.addEventListener('load', redipsInit, false);
            }
            else if (window.attachEvent) {
                window.attachEvent('onload', redipsInit);
            }


            var headerInit,
                redipsURL = redipsURL || '/javascript/drag-and-drop-table-content/',
                indexURL = indexURL || '../';

            headerInit = function () {
                var header = document.createElement('div'),
                    title = document.title;

                document.body.insertBefore(header, document.body.firstChild);

                header.innerHTML = '<div style="background-color:#eee;padding:10px;text-align:center;font-size:20px;font-weight:bold">' + title + '</div>' +
                    '<div style="float:left;width:50%;padding-left:10px"><a href="' + indexURL + '">Index</a></div>' +
                    '<div style="text-align:right;padding-right:10px;margin-bottom:10px"><a href="http://www.redips.net' + redipsURL + '">www.redips.net</a></div>';
            };
            redipsInit();
            if (window.addEventListener) {
                window.addEventListener('load', headerInit, false);
            }
            else if (window.attachEvent) {
                window.attachEvent('onload', headerInit);
            }
