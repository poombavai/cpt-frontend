                var GlobalURl="";
                var items =[];
				var count='0';
				var subcount=0;
				var mergerows =[];
				window.onload = function () {
					       
				    localStorage.removeItem('Keyname');
					
				GlobalURl= GlobalURLset();	
				var loading = document.getElementById("loading");
		        loading.style.display = "flex";  
				
                var url = GlobalURl+"/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        debugger;
						 var Mydata=xhr.responseText;
                         var datalist=JSON.parse(Mydata);
						 mergerows.push(datalist);
                     if (typeof datalist !== 'undefined' && datalist.length > 0)
                     {
		                   count='0';
						   subcount=0;
		                   for (var prop in datalist) {
							 mergerows.push(datalist[prop]);
		                    count = parseInt(count) + 1;
		                    var s=prop;
							debugger;
		                    var item = datalist[prop];
							var name =item['name'];
							let size =item['size'];
							let synonym =item['synonmy'];
							
							 var subloop="";
							 
							 for (var syn in synonym)
							 {
							     subcount=parseInt(subcount)+1;
							   var synon =synonym[syn];
							 let localst  = '<div class="col-md-6 col-sm-12 mt-3">'
		                  +'<div class="d-flex align-items-center"><input id="my-checkbox'+subcount+ '" onclick="clickdata('+subcount+')" type="checkbox" name="" class="mr-2"><span id="textcheck'+subcount+ '">'+synon+'</span></div> </div>';
							   subloop=subloop+localst;
							 }

		                var data = document.getElementById('accordionExample');
		                data.innerHTML +='<div class="card" id="Key'+count+'"><div class="card-header" id="headingone" ><h5 class="mb-0"><button onclick="ss('+count+')" class="btn collapsed" type="button"'
		                +'data-toggle="collapse" id="btn'+count+'" value="'+name+'" data-target="#collapse'+count+'" aria-expanded="false" aria-controls="collapse'+count+'">'
		                +'<i class="fas fa-plus" ></i></button>'
		                +'<span>'+ name + '(' + size + ')</span></h5> <span><a onclick="Taxi('+count+')">Create</a></span></div><div id="collapse'+count+'" class="collapse"'
		                +'aria-labelledby="headingone" data-parent="#accordionExample"><div class="card-body"><div class="add-synonym d-flex justify-content-between'
		                +'align-items-center"><div class="input-group mr-3"><input id="myText'+count+'" type="text" class="form-control" autofocus="true"><div class="input-group-append">'
		                +'<button class="btn" type="button" onclick="addmore(this,'+count+');">Add</button></div></div><div class="checkall"><input id="All'+count+'" type="checkbox"'
		                +'onclick="Allcheck('+count+');" name=""><span>All</span></div></div> <div class="row mt-1">'+ subloop +'</div></div></div></div>';

		                     }
							 loading.style.display = "none";
	                         localStorage.setItem("subADDID",subcount);

                     }
                     else
                     {

                     	loading.style.display = "none";
                     	var nodataalert = document.getElementById("nodataalert");
                     	nodataalert.style.display = "block";
                     	

                     }
				   
	
                    }
                };
				    debugger;
				   var item = localStorage.getItem('Tickitems');
				   var stritem=[];
				   
				   
				    var str_array = item.split(',');

                   for(var i = 0; i < str_array.length; i++) {
                  str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                   
				   stritem.push(str_array[i]);
                  }
					
				  var projectid =localStorage.getItem('MyId');
                 var data = JSON.stringify({"headers":stritem,"project_id":projectid,"count":1,"page":1});
                       console.log(data);
                       xhr.send(data);
				 				 
                
				};
				  var sce =0;
				  var scrollcount=0;
				 
				 function scrollload()
				 {
					 debugger;
					 
					 var elmnt = document.getElementById("scrollid");
                        var x = elmnt.scrollLeft;
                        var y = elmnt.scrollTop;
						let scrolladjuster = elmnt.scrollHeight;
     
                        if(sce==0)
                        {
							recommendedscroll();
                            sce=y;
                        }
                         else if(sce < y )
                        {
							let consalt = parseInt(scrolladjuster)- 900;
							if(consalt <= y)
							{
							  recommendedscroll();
                              sce=y;
                            }
							 scrollcount=parseInt(scrollcount)+1;
						}
						
				          
				 }
				 
				 
				 
				 
				 var scrollpagesize=2;
				function recommendedscroll()
				{
					var loading = document.getElementById("loading");
		        loading.style.display = "flex";  
				
                var url = GlobalURl+"/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        debugger;
						 var Mydata=xhr.responseText;
                         var datalist=JSON.parse(Mydata);
						 
                     if (typeof datalist !== 'undefined' && datalist.length > 0)
                     {
		       
		                   //var count='0';
						  // var subcount=0;
							for (var prop in datalist) {
							mergerows.push(datalist[prop]);
		                    count = parseInt(count) + 1;
		                    var s=prop;
							debugger;
		                    var item = datalist[prop];
							var name =item['name'];
							let size =item['size'];
							let synonym =item['synonmy'];
							
							 var subloop="";
							 
							 for (var syn in synonym)
							 {
							     subcount=parseInt(subcount)+1;
							   var synon =synonym[syn];
							 let localst  = '<div class="col-md-6 col-sm-12 mt-3">'
		                  +'<div class="d-flex align-items-center"><input id="my-checkbox'+subcount+ '" onclick="clickdata('+subcount+')" type="checkbox" name="" class="mr-2"><span id="textcheck'+subcount+ '">'+synon+'</span></div> </div>';
							   subloop=subloop+localst;
							 }

		                var data = document.getElementById('accordionExample');
		                data.innerHTML +='<div class="card" id="Key'+count+'"><div class="card-header" id="headingone" ><h5 class="mb-0"><button onclick="ss('+count+')" class="btn collapsed" type="button"'
		                +'data-toggle="collapse" id="btn'+count+'" value="'+name+'" data-target="#collapse'+count+'" aria-expanded="false" aria-controls="collapse'+count+'">'
		                +'<i class="fas fa-plus" ></i></button>'
		                +'<span>'+ name + '(' + size + ')</span></h5> <span><a onclick="Taxi('+count+')">Create</a></span></div><div id="collapse'+count+'" class="collapse"'
		                +'aria-labelledby="headingone" data-parent="#accordionExample"><div class="card-body"><div class="add-synonym d-flex justify-content-between'
		                +'align-items-center"><div class="input-group mr-3"><input id="myText'+count+'" type="text" class="form-control" autofocus="true"><div class="input-group-append">'
		                +'<button class="btn" type="button" onclick="addmore(this,'+count+');">Add</button></div></div><div class="checkall"><input id="All'+count+'" type="checkbox"'
		                +'onclick="Allcheck('+count+');" name=""><span>All</span></div></div> <div class="row mt-1">'+ subloop +'</div></div></div></div>';

		                     }
							 loading.style.display = "none";
	                         localStorage.setItem("subADDID",subcount);

                     }
                     else
                     {

                     	loading.style.display = "none";
                     	//var nodataalert = document.getElementById("nodataalert");
                     	//nodataalert.style.display = "block";
                     	

                     }
				       scrollpagesize =parseInt(scrollpagesize)+1;
	
                    }
                };
				    debugger;
				   var item = localStorage.getItem('Tickitems');
				   var stritem=[];
				   
				   
				    var str_array = item.split(',');

                   for(var i = 0; i < str_array.length; i++) {
                  str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                   
				   stritem.push(str_array[i]);
                  }
					
				  var projectid =localStorage.getItem('MyId');
                 var data = JSON.stringify({"headers":stritem,"project_id":projectid,"count":1,"page":scrollpagesize});
                       console.log(data);
                       xhr.send(data);
					
				}
				
				function Allcheck(countcl)
				{
				  debugger;
				  items=[];
				  let keycount ="Key"+countcl;
				  let bb ='All'+countcl;
				  let val =  document.getElementById(keycount).querySelectorAll('input');
				   let uu ='';
				   for(var i = 0; i < val.length ; i++) {
				      if ((val[i].type == 'checkbox') && (val[i].id == bb)) {
				        
						 uu=val[i].checked;
						// alert(uu);
					 }
				   }
				   
				  for(var i = 0; i < val.length ; i++) {
                      
					     if(uu==true)
						 {
						 if    ((val[i].type == 'checkbox') && (val[i].id!=bb)) {
                           
					         let jj =val[i].id;
						     val[i].checked = true;
							 let lstlt = jj.charAt( jj.length-1 )
							 var selecteditem = document.getElementById("textcheck"+lstlt).innerText;
                             items.push(selecteditem);
							 
                          }
						 }
						 else
						 {
						 if    ((val[i].type == 'checkbox') && (val[i].id!=bb)) {
						      let jj =val[i].id;
						      val[i].checked = false;
							  let lstlt = jj.charAt( jj.length-1 )
							 var unselecteditem = document.getElementById("textcheck"+lstlt).innerText;
							 //items.splice(unselecteditem,1);
							  var index = items.indexOf(unselecteditem);
                              if (index > -1) {
                                   items.splice(index, 1);
                                }
						      }
					    }
					 //sublist.push(parseInt(jj));
                      
					 
                  }
				
				}
				
				
				
				
				
				
				
				function clickdata(cou)
				{
				
				 var id=cou;
               if (document.querySelector('#my-checkbox' +id).checked) {
              // if checked
              var selecteditem = document.getElementById("textcheck"+id).innerText;
              items.push(selecteditem);
              console.log('checked');
            } else {
              // if unchecked
              var unselecteditem = document.getElementById("textcheck"+id).innerText;
              var index = items.indexOf(unselecteditem);
                              if (index > -1) {
                                   items.splice(index, 1);
                                }
								//alert(items)
              console.log('unchecked');
            }
				}
				
				 function checkBoxAllcheckedClose() {
				     var checkboxes = document.getElementsByTagName('input');
                    for (var i = 0; i < checkboxes.length; i++) {
                         if (checkboxes[i].type == 'checkbox') {
                          checkboxes[i].checked = false;
                          }
                     }
					 items=[];
                 }
				
				
				function Taxi(key)
				{
					debugger;
				  
				  if(key==false)
				   {
				   var Keyname = localStorage.getItem('Keyname'); 
				    if(Keyname == null)
					{
						myalertFunction('Warning','Please Choose any Synopsis And Continue');
						return;
					}
					else{
					  items.push(Keyname);	
					}
				   
				   }
				   else
				   {
				     var lgn =mergerows[key];
				     let name =lgn['name'];
				     items.push(name);
				   }
				   
				   
				   if (typeof items !== 'undefined' && items.length > 0)
				   {
				   	 // alert(items)
		                var loading = document.getElementById("loading");
		                loading.style.display = "flex";
		                debugger;
		                var projectid =localStorage.getItem('MyId');
						        var url = GlobalURl+"/taxonomies/project_taxonomy?project_id="+projectid+"&keys="+items;
		                  var xhr = new XMLHttpRequest();
		                   xhr.open("GET", url, true);
		                   xhr.onload = function (e) {
		                  if (xhr.readyState === 4) {
		                    if (xhr.status === 200) {
							
		                        var response = JSON.parse(xhr.responseText);
		                        //console.log(response);
		                        console.log(xhr.responseText);
								var respval =xhr.responseText
								//alert(respval);
								localStorage.setItem("Taxon",respval);
		                        // now hide the loading image
		                        loading.style.display = "none";
								window.location="Taxonomy.html";
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
				   else
				   {
				   	myalertFunction('Error','This is an Error Message');
				   }
				 
				  
			}

				function ss(n){
				debugger;
				checkBoxAllcheckedClose();
				 //var Mydata = localStorage.getItem('Mydata');
                   //var datalist=JSON.parse(mergerows);
				   var ss=n ;
				  
				  var lgn =mergerows[ss];
				  let name =lgn['name'];
				  //alert(name);
                 			 alert(name)
				  localStorage.setItem("Keyname",name);
			
				
				}

            function addmore(fresh, add) {
			    
				 debugger;
				 //subADDID
				 subaddid = localStorage.getItem("subADDID");
				 subaddid = parseInt(subaddid) + 1;
				 
				 let idv ="myText"+add;
				 
				let addtext =document.getElementById(idv).value;
				if(addtext=='')
				{
					myalertFunction('Warning','Synopsis is Empty Send');
					return;
				}
				
				let keyval = localStorage.getItem("Keyname");
				var url = GlobalURl+"/create_synonym";
				var jsdata = { "key": keyval,
				               "values":addtext
							 };
               
				var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                         console.log(xhr.responseText);
                         var responsedata=JSON.parse(xhr.responseText);
						 //alert(xhr.responseText);
						 debugger;
						 var datav='';
						 
						 for(var nn in responsedata)
						 {
						   var lastelement =responsedata[nn];
						   if (0 < lastelement.length)
						 {
						   datav = lastelement[lastelement.length-1];
						  var p = fresh.parentElement;
                          var sp = p.parentElement;
                          var mp = sp.parentElement;
                          var hp = mp.parentElement;
                          var lastdiv = hp.lastElementChild;
                          var lastchild = lastdiv;
                          var text = sp.firstElementChild.value;
                       if (datav != "") {
                         lastchild.innerHTML += '<div class="col-md-6 col-sm-12 mt-3"><div class="d-flex align-items-center"><input id="my-checkbox'+subaddid+ '" onclick="clickdata('+subaddid+')" type="checkbox" name="" class="mr-2"><span id="textcheck'+subaddid+ '">'+datav+'</span></div></div>';
                         localStorage.setItem("subADDID",subaddid)
							 }
						
						    }
							 else{
						 alert("Key Value is Not Added");
						 }
                          };
					     
						
						 
						
						 
					}
                };
				
                var data = JSON.stringify(jsdata);
                console.log(data);
                xhr.send(data);
				
				
				
				document.getElementById(idv).value="";
            }