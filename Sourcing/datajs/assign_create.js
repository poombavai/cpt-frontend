              var GlobalURl="";
             window.onload = function () {
              GlobalURl= GlobalURLset(); 
			  getloaddata();
		     Allassignandunassign();
				//assignedval();
             };

        function getloaddata(){
		   debugger;
		   var projectid =localStorage.getItem('MyId');
            var url = GlobalURl+"/project_taxonomies?project_id="+projectid;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
						//alert(xhr.responseText);
                    var treedata;
                    for ( var i in response) {
                   treedata =  response[i].tree ;
                   let id= response[i].id;
				   var data = document.getElementById('myUL');
                data.innerHTML +='<li id='+id+' onmousedown="leftRowClick(this,false);">'+treedata+'</li>';
                 
                  }

                    } else {
                    }
                }
            };
                

            xhr.onerror = function (e) {
                console.error(xhr.statusText);
            };
            xhr.send();

        }

        function uploadnext()
        {
            debugger;
            var projectid =localStorage.getItem('MyId'); 
            window.location.href = "UploadSourcing.html?project_id="+projectid+"";
        }
        
        function Allassignandunassign()
		{
		debugger;
		 var projectid =localStorage.getItem('MyId');
		  var url= GlobalURl +"/input_file_taxonomy?project_id="+projectid+"&type=all";
		  var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var response = JSON.parse(xhr.responseText);
                        var allcount=response.length;
                        document.getElementById("allcount").innerHTML = allcount.toString();
                       // alert(xhr.responseText);
						console.log(xhr.responseText);
						 var boolval =0;
						 var rowtext='';
						 var rowcount=1;
						for (var res in response)
						{
						   
						    debugger;
						   let value =response[res];
						   var val =value['values'];
						   let id =value['id'];
						   
						   let tree =value['project_tree'];
						    var taxtree='';
							for(var oo in tree)
							{
							  if(oo=='tree')
							  {
							    let sbt =tree[oo];
								taxtree =sbt;
							  }
							 
							}
							
							
                            rowtext= rowtext +'<tr id='+id+' onmousedown="RowClick(this,false);">';
							if(boolval == 0)
                           {
							
						   var headtext='<tr><th class="th">#</th>';
							var vv =0;
							for(var ii in val)
							{
							  
							  let Keyname=Object.keys(val)[vv];
							  
                              vv= parseInt(vv)+1;
							  var sttxt='<th class="th">'+Keyname+'</th>';
                              headtext = headtext+sttxt;							  
                            }
							 headtext =headtext+'<th class="th">Taxonomy</th>';
						     headtext=headtext+'</tr>';
							 //document.getElementById("righttablehead").appendChild(headtext);
							 var headdata = document.getElementById('righttablehead');
                             headdata.innerHTML +=headtext;
						     boolval=1;
						   }
						   rowtext= rowtext+'<td><div class="unselect-row">'+rowcount+'</div><div class="select-row" style="display: none;"><i class="fas fa-check"></i></div></td>';
						    for(var li in val)
							{
							  let keyvalue =val[li];
							  var lostr='<td><div><span>'+keyvalue+'</span></div></td>';
							  rowtext=rowtext+lostr;
							
							}
							
							rowtext=rowtext+'<td><div><span>'+taxtree+'</span></div></td>';
							rowtext=rowtext+'</tr>';
							rowcount = parseInt(rowcount)+1;
						   
						}
						var rowdata = document.getElementById('myTable');
                         rowdata.innerHTML +=rowtext;
                        //document.getElementById("myTable").appendChild(rowtext);

                    } else {
                    }
                }
            };
                

            xhr.onerror = function (e) {
                console.error(xhr.statusText);
            };
            xhr.send();
		  
		  
		}
		
		 function assignedval()
		 {
		          var projectid =localStorage.getItem('MyId');
				  var url = GlobalURl+"/input_file_taxonomy?project_id="+projectid+"&type=assigned";
                  var xhr = new XMLHttpRequest();
                   xhr.open("GET", url, true);
                   xhr.onload = function (e) {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
					 debugger;
                        var response = JSON.parse(xhr.responseText);
                         //alert(xhr.responseText);
                    var boolval =0;
						 var rowtext='';
						 var rowcount=1;
                         var assigncount=response.length;
                         document.getElementById("assigedcount").innerHTML = assigncount.toString();
						for (var res in response)
						{
						   rowtext= rowtext +'<tr onmousedown="RowClick(this,false);">';
						    debugger;
						   let value =response[res];
						   var val =value['values'];
						   let id =value['id'];
						   
						   let tree =value['project_tree'];
						    var taxtree='';
							for(var oo in tree)
							{
							  if(oo=='tree')
							  {
							    let sbt =tree[oo];
								taxtree =sbt;
							  }
							 
							}
						    
                            
							if(boolval == 0)
                           {
							
						   var headtext='<tr><th class="th">#</th>';
							var vv =0;
							for(var ii in val)
							{
							  
							  let Keyname=Object.keys(val)[vv];
							  
                              vv= parseInt(vv)+1;
							  var sttxt='<th class="th">'+Keyname+'</th>';
                              headtext = headtext+sttxt;							  
                            }
							headtext =headtext+'<th class="th">Taxonomy</th>';
						     headtext=headtext+'</tr>';
							 //document.getElementById("righttablehead").appendChild(headtext);
							 var headdata = document.getElementById('righttablehead');
                             headdata.innerHTML +=headtext;
						     boolval=1;
						   }
						   rowtext= rowtext+'<td><div class="unselect-row">'+rowcount+'</div><div class="select-row" style="display: none;"><i class="fas fa-check"></i></div></td>';
						    for(var li in val)
							{
							  let keyvalue =val[li];
							  var lostr='<td><div><span>'+keyvalue+'</span></div></td>';
							  rowtext=rowtext+lostr;
							
							}
							rowtext=rowtext+'<td><div><span>'+taxtree+'</span></div></td>';
							rowtext=rowtext+'</tr>';
							rowcount = parseInt(rowcount)+1;
						   
						}
						var rowdata = document.getElementById('myTable');
                         rowdata.innerHTML +=rowtext;
					
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
		 
		 function unassignedval()
		 {
		     var projectid =localStorage.getItem('MyId');
		     var url = GlobalURl+"/input_file_taxonomy?project_id="+projectid+"&type=unassigned";
                  var xhr = new XMLHttpRequest();
                   xhr.open("GET", url, true);
                   xhr.onload = function (e) {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
					 debugger;
                        var response = JSON.parse(xhr.responseText);
                        // alert(xhr.responseText);
						 var boolval =0;
						 var rowtext='';
						 var rowcount=1;
						for (var res in response)
						{
						   
						    debugger;
						   let value =response[res];
						   var val =value['values'];
						   let id =value['id'];
                           let tree =value['project_tree'];
						   rowtext= rowtext +'<tr id='+id+' onmousedown="RowClick(this,false);">';
						   var taxtree='';
						   for(var oo in tree)
							{
							  if(oo=='tree')
							  {
							    let sbt =tree[oo];
								taxtree =sbt;
							  }
							 
							}
							
							
							if(boolval == 0)
                           {
							
						   var headtext='<tr><th class="th">#</th>';
							var vv =0;
							for(var ii in val)
							{
							  
							  let Keyname=Object.keys(val)[vv];
							  
                              vv= parseInt(vv)+1;
							  var sttxt='<th class="th">'+Keyname+'</th>';
                              headtext = headtext+sttxt;							  
                            }
							 headtext =headtext+'<th class="th">Taxonomy</th>';
						     headtext=headtext+'</tr>';
							 //document.getElementById("righttablehead").appendChild(headtext);
							 var headdata = document.getElementById('righttablehead');
                             headdata.innerHTML +=headtext;
						     boolval=1;
						   }
						   rowtext= rowtext+'<td><div class="unselect-row">'+rowcount+'</div><div class="select-row" style="display: none;"><i class="fas fa-check"></i></div></td>';
						    for(var li in val)
							{
							  let keyvalue =val[li];
							  var lostr='<td><div><span>'+keyvalue+'</span></div></td>';
							  rowtext=rowtext+lostr;
							
							}
							rowtext=rowtext+'<td><div><span>'+taxtree+'</span></div></td>';
							rowtext=rowtext+'</tr>';
							rowcount = parseInt(rowcount)+1;
						   
						}
						var rowdata = document.getElementById('myTable');
                         rowdata.innerHTML +=rowtext;
						 
						 
						 
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
		 

            function searchbox() {
                var input, filter, table, tr, td, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("rigttable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td");
                    for (j = 0; j < td.length; j++) {
                        let tdata = td[j];
                        if (tdata) {
                            if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
                                tr[i].style.display = "";
							//	<!-- document.getElementById("noresultright").style.display = "none"; -->
                                break;
                            } else {
                                tr[i].style.display = "none";
								
								//<!-- var noresult = document.getElementById("noresultright").innerText; -->
								
								//<!-- document.getElementById("noresultright").style.display = "Contents"; -->
                            }
                        }
                    }
                }
            }
			
			

            function myFunction() {
               // Declare variables
                var input, filter, ul, li, a, i;
                input = document.getElementById('ulinput');
                filter = input.value.toUpperCase();
                ul = document.getElementById('myUL');
                li = ul.getElementsByTagName('li');

                // Loop through all list items, and hide those who don't match the search query
                for (i = 0; i < li.length; i++) {
                    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
						//<!-- document.getElementById("noresultleft").style.display = "none"; -->
                    } else {
                        li[i].style.display = "none";
						//<!-- document.getElementById("noresultleft").style.display = "Contents"; -->
						
                    }
                }
            }

			function  selectitem(val){
			//<!-- var eID = document.getElementById("selectedval"); -->
			var selectedval = val.value;
			var selectedtxt = val.text;
			//alert(selectedtxt);
			if(selectedval==2)
			{
				//alert(selectedval);          // Assigned
				var list = document.getElementById('righttablehead');
                while (list.hasChildNodes()) {
                  list.removeChild(list.firstChild);
                    }
	         var listone = document.getElementById('myTable');
               while (listone.hasChildNodes()) {
                  listone.removeChild(listone.firstChild);
             }
				
				assignedval();
		    }
			else if(selectedval==1)
			{
				//alert(selectedval); //All
				var list = document.getElementById('righttablehead');
            while (list.hasChildNodes()) {
             list.removeChild(list.firstChild);
            }
	           var listone = document.getElementById('myTable');
             while (listone.hasChildNodes()) {
             listone.removeChild(listone.firstChild);
             }
			     Allassignandunassign();
			}
			else
			{
				//alert(selectedval);   //UnAssigned
				var list = document.getElementById('righttablehead');
                  while (list.hasChildNodes()) {
                  list.removeChild(list.firstChild);
             }
	          var listone = document.getElementById('myTable');
              while (listone.hasChildNodes()) {
               listone.removeChild(listone.firstChild);
              }
				unassignedval();
		    }
			}
			
			function myAssignFunction() {
			debugger;
			    let val =  document.getElementById('rigttable').querySelectorAll('.selected');
				var sublist=[];
				for(var i = 0; i < val.length ; i++) {
                    // alert(val[i].id)
					 let jj =val[i].id;
					 sublist.push(parseInt(jj));
                  }
				  
				 let treeval= document.getElementById('myUL').querySelectorAll('.selected');
			      var treevalid= '';
				  for(var i = 0; i < treeval.length ; i++) {
                   //  alert(treeval[i].id)
					 treevalid=parseInt(treeval[i].id);
                  }
				  
				var url = GlobalURl+"/assign_taxonomy";
				var projectid =localStorage.getItem('MyId');
				var jsdata = { 
				                "project_id": projectid,
                                "project_tree_id": treevalid,
                                "project_file_id": sublist
				
							 };
               
				var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        debugger;
						 //alert("In");
						 //alert(xhr.responseText);
                         var responsedata=xhr.responseText;
						 var list = document.getElementById('righttablehead');
                while (list.hasChildNodes()) {
                  list.removeChild(list.firstChild);
                    }
	         var listone = document.getElementById('myTable');
               while (listone.hasChildNodes()) {
                  listone.removeChild(listone.firstChild);
             }
			             document.getElementById("All").checked = false;
			             document.getElementById("Unassigned").checked = false;
			             document.getElementById("Assigned").checked = true;
						 assignedval();
                    }
                };
				
                var data = JSON.stringify(jsdata);
                console.log(data);
                xhr.send(data);
				    
			
			}
			function myUndoFunction() {
			   location.reload(); 
				
			}