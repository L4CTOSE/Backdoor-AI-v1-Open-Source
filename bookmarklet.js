javascript:document.body.style.margin = '0';
let spans = document.getElementsByTagName('span');
var script = document.createElement('script');
var box = document.createElement('div');
box.style.position = 'fixed';
box.style.top = '50%';
box.style.left = '50%';
box.style.transform = 'translate(-50%, -50%) scale(0)';
box.style.width = '600px';
box.style.height = '300px';
box.style.border = '0px solid black';
box.style.backgroundColor = '#161616';
box.style.color = 'white';
box.style.borderRadius = "0px 0px 4px 4px";
box.style.overflow = 'hidden';
box.style.zIndex = '999999';
box.style.transition = 'transform 1s ease';
var titleBar = document.createElement('div');
titleBar.style.width = '100%';
titleBar.style.height = '20px';
titleBar.style.backgroundColor = '#161616';
titleBar.style.color = 'white';
titleBar.style.position = 'absolute';
titleBar.style.borderRadius = "4px 4px 0px 0px";
titleBar.style.top = '1px';
titleBar.style.zIndex = '999999';
titleBar.style.left = '4px';
titleBar.textContent = 'Backdoor AI';
titleBar.style.cursor = 'move';
  fetch("https://backdoor-ai-authentication.l4ctose.repl.co/ping")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  setTimeout(pingServer, 7000);
}
setTimeout(pingServer, 3000);
var iframe = document.createElement('iframe');
iframe.style.width = '100%';
iframe.style.height = 'calc(100% - 20px)';
iframe.style.position = 'absolute';
iframe.style.top = '20px';
iframe.style.zIndex = '999999';
iframe.src = 'https://backdoor.best/chat/';
iframe.style.border = 'none';
box.appendChild(titleBar);
box.appendChild(iframe);
document.body.appendChild(box);
setTimeout(function() {
  box.style.transform = 'translate(-50%, -50%) scale(1)';
}, 0);
    setTimeout(() => {
      let messages = [
        '  ___          _      _                  _   ___ ',
        ' | _ ) __ _ __| |____| |___  ___ _ _    /_\\ |_ _|',
        ' | _ \\/ _` / _| / / _` / _ \\/ _ \\ \'_|  / _ \\ | | ',
        ' |___/\\__,_\\__|_\\_\\__,_\\___/\\___/_|   /_/ \\_\\___|',
        '                                                 '
      ];
    
      messages.forEach((message, index) => {
        setTimeout(() => {
          console.log(message);
        }, 20 * index);
      });
    }, 1); 
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
titleBar.onmousedown = function(e) {
  iframe.style.pointerEvents = 'none';
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
};
function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  box.style.left = (box.offsetLeft - pos1) + "px";
  box.style.top = (box.offsetTop - pos2) + "px";
}
function closeDragElement() {
  iframe.style.pointerEvents = 'auto';
  document.onmouseup = null;
  document.onmousemove = null;
}
