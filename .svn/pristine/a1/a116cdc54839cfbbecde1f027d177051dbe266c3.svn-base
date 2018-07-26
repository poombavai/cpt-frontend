             var GlobalURl="";
             window.onload = function () {
             GlobalURl= GlobalURLset();
          
           var myStringArray="";
           var headdata = localStorage.getItem('SourceUploadResponse');
           debugger;
		   
          
           debugger;
            headdata=JSON.parse(headdata).data; 
            

             for (var prop in headdata) {
                var item = headdata[prop];
                var data = document.getElementById('checkdata');
                data.innerHTML +=' <li id="mylidata'+prop+'">'+ item +'<input type="checkbox" id="my-checkbox'+prop+'" value='+ item +' class="float-right"' 
                +'onclick="calc('+prop+');" ></li>';
               

             }
            
           
         };
          var items =[];

         function Allselect()
		 {
		   debugger;
		   items=[];
		    let val =  document.getElementById('checkdata').querySelectorAll('input');
			for(var i = 0; i < val.length ; i++) {
				      if ((val[i].type == 'checkbox')&&(val[i].id !='All') ) {
				        if(All.checked==true)
						{
						        let jj=val[i].id;
						        val[i].checked = true;
								let lstlt = jj.charAt( jj.length-1 )
								 var selecteditem = document.getElementById("mylidata"+lstlt).innerText;
                                 items.push(selecteditem);
						}
						else
						{
						      let jj=val[i].id;
						      val[i].checked = false;
							  let lstlt = jj.charAt( jj.length-1 )
							  var unselecteditem = document.getElementById("mylidata"+lstlt).innerText;
							 
							  var index = items.indexOf(unselecteditem);
                              if (index > -1) {
                                   items.splice(index, 1);
                                }
						}
						
						
						
					 }
				   }
			
			
		   
		 }
		 
		 
		 function calc(prop)
         {
            debugger;
           
             // check if checkbox is checked
             var id=prop;
            if (document.querySelector('#my-checkbox' +id).checked) {
              // if checked
              var selecteditem = document.getElementById("mylidata"+id).innerText;
              items.push(selecteditem);

              //alert(selecteditem);
              console.log('checked');
            } else {
              // if unchecked
              var unselecteditem = document.getElementById("mylidata"+id).innerText;
               var index = items.indexOf(unselecteditem);
                              if (index > -1) {
                                   items.splice(index, 1);
                                }
			  
              console.log('unchecked');
            }

         }

         function nexthead()
         {
              debugger
			  if (typeof items !== 'undefined' && items.length > 0)
        {
          localStorage.setItem('SourcingTickitems', items);
          window.location="Recommended-sku-create-Sourcing.html";

        }
        else
        {
          myalertFunction('Warning','Please Choose Columns');
        }

			   
               
                
            }
			function nextheadone()
            {
		       var loading = document.getElementById("loading");
                loading.style.display = "flex";        
                var url = GlobalURl+"/projects/project_headers_duplicate_count";
                //var url = "http://192.168.1.58:4040/projects/project_headers_duplicate_count";
                var xhr = new XMLHttpRequest;
                xhr.open("POST", url , true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        debugger;
						//alert("In");
						//alert(xhr.responseText);
                         console.log(xhr.responseText);
                         var responsedata=xhr.responseText;
                         localStorage.setItem('Mydata', responsedata);
                         loading.style.display = "none";
                         window.location="Recommended-sku-create.html";
                         //localStorage.setItem('Mydata', JSON.stringify(xhr.responseText));
                    }
                };
				//{"headers":["Supplier Name", "B&F ERP/Web Description"], "project_id":1,"count":4}
                //var data = JSON.stringify({"headers": items,"project_id":1});
                var data = JSON.stringify({"headers":items,"project_id":1,"count":1});
                console.log(data);
                xhr.send(data);
		    }

            function sendid()
            {
                debugger;
                 var id=localStorage.getItem('MyId');
                 id=id.replace("project_id=","");
                 localStorage.setItem('MyId',id);
                 window.location="UploadSourcing.html?project_id="+id;
            }

         
       function toggle(source) {
            debugger;

          var inputs = document.querySelectorAll('.check1');
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = true;
          }

          this.onclick = uncheckAll1;
        }


            function toggle(source) {
                
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] != source)
                    checkboxes[i].checked = source.checked;
            }
        }