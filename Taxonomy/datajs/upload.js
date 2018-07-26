        var imported = document.createElement('script');
        imported.src = '../js/baseurl.js';
        debugger;
        document.head.appendChild(imported);
		var GlobalURl = GlobalURLset();
        var filedata="";
        var myVar = "";
		var percent = 0;
		var id = window.location.search.substring(1);
		id=id.replace("project_id=","");

		window.onload = function(e){ 
			debugger;
			uploadcheck();
		    
		}
       
		function myStopFunction() {
	      clearInterval(myVar);
		}
	    var binaryy = "";

	    function uploadcheck(){
	    	debugger;
           
             var url = GlobalURl+"/projects/project_file_status?project_id="+id;
             
			    var xhr = new XMLHttpRequest;
			    xhr.open("GET", url , true);
			    xhr.setRequestHeader('Content-type', 'application/json');
			    
			    xhr.onreadystatechange = function() {
			        if (xhr.readyState == XMLHttpRequest.DONE) {
			        	var responsedata=xhr.responseText;
			        	responsedata= JSON.parse(responsedata);

			        	var filestatus= responsedata["file_status"];
			        	filestatus=filestatus.file1;
			        	if(filestatus===true)
			        	{
			        		myalertFunction('Info','File Already Uploaded');

			        	}
			        	else
			        	{
			        		myalertFunction('Info','Please Upload File');

			        	}
			        	
			        }
			    };
			   xhr.send();
	    }

		function upload()
		{
			var binary = "";
			//var divshow = document.getElementById('processbarid');
		    //divshow.style.display = "contents";
		   // myVar = setInterval(increase, 150);
		  
		    var file="";
		    var Size1 = filedata[0].size;
		   
		     // create array to store the buffer chunks
             var FileChunk = [];
              file = filedata[0];
              // set up other initial vars
		    //var MaxFileSizeMB = 1;
		    var BufferChunkSize = Size1;
		    var ReadBuffer_Size = Size1;
		    var FileStreamPos = 0;
		     // set the initial chunk length
		    var EndPos = BufferChunkSize;
		    var Size = file.size;
		    //alert("Size");
		    console.log(Size);
		    //alert(Size);

		    // add to the FileChunk array until we get to the end of the file
		    while (FileStreamPos < Size)
		    {
		        // "slice" the file from the starting position/offset, to  the required length
		        FileChunk.push(file.slice(FileStreamPos, EndPos));
		        FileStreamPos = EndPos; // jump by the amount read
		        EndPos = FileStreamPos + BufferChunkSize; // set next chunk length
		    }

		     // get total number of "files" we will be sending
		    var TotalParts = FileChunk.length;
		    var PartCount = 0;

		     while (chunk = FileChunk.shift())
		    {
		        PartCount++;
		        // file name convention
		        var FilePartName = file.name + ".part_" + PartCount + "." + TotalParts;
		        //alert("FilePartName");
		        console.log(FilePartName);
		        // send the file
		        UploadFileChunk(chunk, FilePartName);
		    }
				  
		}


		function UploadFileChunk(Chunk, FileName) {
			debugger;
           
            localStorage.setItem('MyId', id);
           
             var url = GlobalURl+"/projects/project_file?project_id="+id;
             //var url = "http://192.168.1.58:3031/projects/project_file?project_id="+id;
			    //var boundary = this.generateBoundary();
			    var Filedata = new FormData();
                Filedata.append('file', Chunk, FileName);
			    var xhr = new XMLHttpRequest;
			    //alert("welcome");
			    // console.log(Chunk);
			    // console.log(Filedata);
			  xhr.upload.addEventListener("progress", progressHandler, false);
			  xhr.addEventListener("load", completeHandler, false);
			  xhr.addEventListener("error", errorHandler, false);
			  xhr.addEventListener("abort", abortHandler, false);

			    xhr.open("POST", url , true);
			    
			    xhr.onreadystatechange = function() {
			        if (xhr.readyState === 4) {
			        	 console.log(xhr.responseText);
			        	 debugger;
			        	var headdata=xhr.responseText; 
			            //alert(headdata);
			            console.log(headdata);
			           // alert("Uploaded");
			            //sessionStorage.setItem("Headerdata",xhr.responseText)
			            localStorage.setItem('Headerdata', xhr.responseText);

			        }
			    };
			   
			    
			    xhr.send(Filedata);
            }
            function _(el) {
			  return document.getElementById(el);
			}

            function progressHandler(event) {
            	debugger;
			  //_("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
			  var percent = (event.loaded / event.total) * 100;
			  _("progressBar").value = Math.round(percent);
			  //_("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
			  document.getElementById('loadSpan').innerHTML = percent + "%";
			}

			function completeHandler(event) {
				debugger;
			 // _("status").innerHTML = event.target.responseText;
			 // _("status").innerHTML = "Completed";
			  document.getElementById('loadingid').innerHTML = "Upload Completed";
			  //_("progressBar").value = 0; //wil clear progress bar after successful upload
			}

			function errorHandler(event) {
				debugger;
			  _("status").innerHTML = "Upload Failed";
			}

			function abortHandler(event) {
				debugger;
			  _("status").innerHTML = "Upload Aborted";
			}


		// //var inputElement = document.getElementById("input");
		// document.getElementById('input').addEventListener('change',prepareUpload,false);
		
		// function prepareUpload(event) {
		// 	debugger
		//   var files = event.target.files;
		//   filedata=files;
		//   var btn = document.getElementById("button_id").disabled = false;
		// }
		function next()
		{
			debugger;
			var id = window.location.search.substring(1);
            id=id.replace("project_id=","");
            localStorage.setItem('MyId', id);
           
             var url = GlobalURl+"/projects/project_file?project_id="+id;
             //var url = "http://192.168.1.58:3031/projects/project_file?project_id="+id;
			    //var boundary = this.generateBoundary();
			    
			    var xhr = new XMLHttpRequest;
			    xhr.open("POST", url , true);
			    xhr.setRequestHeader('Content-type', 'application/json');
			    
			    xhr.onreadystatechange = function() {
			        if (xhr.readyState == XMLHttpRequest.DONE) {
			        	var responsedata=xhr.responseText;
			        	 console.log(xhr.responseText);
			        	 debugger;
			        	var headdata=xhr.responseText; 
			            //alert(headdata);
                        if(headdata =='{"data":false}')
						{
						  myalertFunction('Warning','Please Choose File and Continue');
						  return;		
						}							
					    //sessionStorage.setItem("Headerdata",xhr.responseText)
			            localStorage.setItem('Headerdata', xhr.responseText);
			            window.location="Choose-column.html";

			        }
			    };
			   
			    
			    xhr.send(null);
		}

		
	
		
		  (function(window) {
			function triggerCallback(e, callback) {
			 var upid = document.getElementById('uploadid');
			 //alert(upid);
			 debugger;
			 var inputdiv = document.getElementById('idinput').children;
			
			 //console.log(inputdiv);
			 inputdiv[0].style.display = "none";
			 inputdiv[1].style.display = "none";
			 
			  
			  if(!callback || typeof callback !== 'function') {
				return;
			  }
			  var files;
			  if(e.dataTransfer) {
				files = e.dataTransfer.files;
			  } else if(e.target) {
				files = e.target.files;
			  }
			  let fileextension = files[0].name;
			  if (fileextension.indexOf(".csv") >= 0)
			  {
			  	callback.call(null, files);
			  	var btn = document.getElementById("button_id").disabled = false;

			  }
			  else
			  {
			  	myalertFunction('Error','Please Upload Valid File');
			  	
			  }

			  
			  
			}
			function makeDroppable(ele, callback) {
				debugger;
			  var input = document.createElement('input');
			  input.setAttribute('type', 'file');
			  input.setAttribute('multiple', true);
			  input.style.display = 'none';
			  input.addEventListener('change', function(e) {
				triggerCallback(e, callback);
			  });
			  ele.appendChild(input);
			  
			  ele.addEventListener('dragover', function(e) {
				e.preventDefault();
				e.stopPropagation();
				ele.classList.add('dragover');
			  });

			  ele.addEventListener('dragleave', function(e) {
				e.preventDefault();
				e.stopPropagation();
				ele.classList.remove('dragover');
			  });

			  ele.addEventListener('drop', function(e) {
				e.preventDefault();
				e.stopPropagation();
				ele.classList.remove('dragover');
				triggerCallback(e, callback);
			  });
			  
			  ele.addEventListener('click', function() {
				//input.value = null;
				input.click();


			  });
			}
			window.makeDroppable = makeDroppable;
		  })(this);
		  (function(window) {
		  	debugger;
			makeDroppable(window.document.querySelector('.demo-droppable'), function(files) {
				//alert("files");

			  
			  filedata=files;
			  console.log(files);
			  var output = document.querySelector('.output');
			  output.innerHTML = '';
			  for(var i=0; i<files.length; i++) {
			  	//alert("files[i]");
			  	//console.log(files[i]);
				if(files[i].type.indexOf('image/') === 0) {
				  output.innerHTML += '<img width="200" src="' + URL.createObjectURL(files[i]) + '" />';
				}
				output.innerHTML += '<p>'+files[i].name+'</p>';
				console.log(output);
			  }
			});
		  })(this);