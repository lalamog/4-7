{
    const list = document.getElementById("list"); 
    const listItems = list.getElementsByTagName("li"); 
    listItems[3].classList.add("highlight");    
    for (let i = 0; i < listItems.length; i++) {
          listItems[i].addEventListener("click", function() {
            // Remove the "active" class from all list items
            for (let j = 0; j < listItems.length; j++) {
              listItems[j].classList.remove("highlight");        
            }
            // Add the "active" class to the clicked list item
            this.classList.add("highlight");
    
            if(i == listItems.length - 1){
              alert("You would be logged out!!");
              window.location.assign("index.html");
            }
          });    
        };
      }
      /*
      {
        const iframeContainer = document.getElementById("mainscreen");
        const schedButton = document.getElementById("schedButton");
    
        schedButton.addEventListener("click", function() {
          const iframe = document.createElement("iframe");
          iframe.src = '../Desktop/calendar-master/docs/index.html';
          iframe.width = '98%';
          iframe.height = '100%';
          iframe.style="float:right";
          iframeContainer.appendChild(iframe);      
        });   
      }
      */