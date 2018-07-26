              var GlobalURl="";
             window.onload = function () {
              GlobalURl= GlobalURLset(); 
			  dummytreepageload();
			 };
			 
			 

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
								<!-- document.getElementById("noresultright").style.display = "none"; -->
                                break;
                            } else {
                                tr[i].style.display = "none";
								
								<!-- var noresult = document.getElementById("noresultright").innerText; -->
								
								<!-- document.getElementById("noresultright").style.display = "Contents"; -->
                            }
                        }
                    }
                }
            }
			
			function addrow()
			{
				
				var row = document.getElementById("myTable");
            if(row.innerText.length != 0)
            {
			debugger;
            
			 var vall =  row.insertRow(0);
			//alert(+idcount);
              vall.innerHTML += '<tr><td class="td" id="1">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td></tr>';
            
            //<span onclick="deleterow(this)"><i class="fas fa-trash-alt"></i></span></td></tr>';
            }
            else
            {
                debugger;
            //    var index = 1;
                row.innerHTML += '<tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>click to add</span></div></td></tr>';

              //  +'<span onclick="deleterow(this)"><i class="fas fa-trash-alt"></i></span></td></tr>';
            }
				
			}
			
			 function dummytreepageload()
			 {
				 var taxlist = document.getElementById("myUL");
				 taxlist.innerHTML +='<li id="tree1" onmousedown="leftClickonclick(this,false,1);" >safetyproducts > Locking Devices > Electrical Locking > <span>Ph23</span></li>'+
				 '<li id="tree2" onmousedown="leftClickonclick(this,false,2);">safetyproducts > Head Production > Safety Helmets > shelblast > <span>helbl22</span></li>'+
				 '<li id="tree3" onmousedown="leftClickonclick(this,false,3);">safetyproducts >  > Hand Production > Prokem  > <span>pr28</span></li>'+
				 '<li id="tree4" onmousedown="leftClickonclick(this,false,4);">safetyproducts > Safety Shoes > Occupational Shoes  > <span>os21</span></li>';
				 
			 }
			 function leftClickonclick(currenttr, lock, ff) {
   
            
                     debugger;
					 clearAllleft();
                     togglecheck(currenttr);
                
			  var gettreeval =document.getElementById('tree'+ff).innerText;
			  
			  lblheaderchoose.innerHTML=gettreeval;
	          dummyprotolist(ff)
			  
            }
			
			 function togglecheck(row)
			 {
				     row.className = row.className == 'selected' ? '' : 'selected';
                    var content = row.innerHTML + '<i class="fas fa-check"></i>';
                    row.innerHTML = content; 
			 }
			
			 function dummyprotolist (elan)
			 {
				 var row = document.getElementById("myTable");
				 row.innerHTML='';
				 debugger;
				 if(elan==1)
				 {
					 
				   row.innerHTML += '<tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>AssA Abloy</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTTC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFoC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFiC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTLC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Mopar</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Hoppe</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Leviton</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr>';  
				 
				 }
				 else if(elan==2)
				 {
					 
					row.innerHTML += '<tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Fusion 6000</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTTC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFoC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFiC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTLC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Proton 4000</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Vista 8000</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>BUMP Cap</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr>';
				 }
				 else if(elan==3)
                 {
					 
					row.innerHTML += '<tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Dotted Gloves</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTTC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFoC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFiC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTLC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>PU Gloves</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Heat Resistence Gloves</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Pvc Gloves</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr>';
				 }	
                 else if(elan ==4)
                 {
					
	                row.innerHTML += '<tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>PU Sole</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC to add</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTTC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFoC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFiC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTSC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTLC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Rubber Nitrile</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>PVC Sole</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr><tr><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>Synthetic Sole</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td><td class="td">'
            +'<div  onclick="myFunctionone(this)"><span>FTFC</span></div></td></tr>';
                 }	
			 }
			 
			
			 
			 
			 
			
			function myFunctionone(elm) {
				debugger;
				var getparent = elm.parentElement;
                var vall = elm.innerText;
                // console.log(vall);
                if (vall == "click to add")
                {
                    vall = "";
					
                }
                var value = '<textarea onfocusout="OnFocusOutForm(this)"  >' + vall + '</textarea><span class="delete_ind" onclick="myclose(this)"><i class="fas fa-times"></i></span>';
                elm.parentElement.innerHTML = value;
                elm.remove();
				
} 
             function OnFocusOutForm(elm) {
				 debugger;
                var vall = elm.value;
                var value = "";
                if (vall == "") {
                    vall = "click to add"
                    value = '<div onclick="myFunctionone(this)"><span>' + vall + '</span></div>';
                }
                else
                {
                    value = '<div onclick="myFunctionone(this)">' + vall + '</div><span class="delete_ind" onclick="myclose(this)"><i class="fas fa-times"></i></span>';
                }
                
                elm.parentElement.innerHTML = value;
                elm.remove();
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
						<!-- document.getElementById("noresultleft").style.display = "none"; -->
                    } else {
                        li[i].style.display = "none";
						<!-- document.getElementById("noresultleft").style.display = "Contents"; -->
						
                    }
                }
            }

			
			
			
			function myUndoFunction() {
			   location.reload(); 
				
			}