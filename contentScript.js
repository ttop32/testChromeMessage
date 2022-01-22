//detect tab switching
document.addEventListener("visibilitychange", function() { 
  if (document.visibilityState === "hidden") { 
    for (let i = 0; i < 1000; i++) {
        sendMessage();
    }                                                                                  
  }
});


function sendMessage() {
  chrome.runtime.sendMessage({
      type: 'message'
    },
    function(data) {}
  );
}
