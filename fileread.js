function readFile() {
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var fileContent = e.target.result.replace(/\r/g, '');

        var lines = fileContent.split('\n'); // Split content into lines
       
        write+='<div id="pages">'
        
            printcalendar(lines[0], lines[2], lines[1]);
            
      
        
        write+='</div>'
        
      };
      reader.readAsText(file);
    } else {
      alert('Please select a file.');
    }
  }