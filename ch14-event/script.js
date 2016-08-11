// var button = document.querySelector("button");
// button.addEventListener("click", function() {
//     console.log("Button clicked.");
// });


// var button = document.querySelector("button");
// function once() {
//     console.log("Done.");
//     button.removeEventListener("click", once);
// }
// button.addEventListener("click", once);

// // About event.type & event.which

// var button = document.querySelector("button");
// button.addEventListener("mousedown", function(event) {
//     console.log(event.type);
//     console.log(event.which);

//     if (event.which == 1)
//         console.log("Left button");
//     else if (event.which == 2)
//         console.log("Middle button");
//     else if (event.which == 3)
//         console.log("Right button");
      
// });


// // Propagation

// var para = document.querySelector("p");
// var button = document.querySelector("button");
// para.addEventListener("mousedown", function() {
//     console.log("Handler for paragraph.");
      
// });

// button.addEventListener("mousedown", function(event) {
//     console.log("Handler for button.");
//     if (event.which == 3)
//         event.stopPropagation();
      
// });


// document.body.addEventListener("click", function(event) {
//     if (event.target.nodeName == "BUTTON")
//         console.log("Clicked", event.target.textContent);
//     else
//         console.log("elements other than button is clicked: " + event.target);
// });


// // event.preventDefault

// var link = document.querySelector("a");
// link.addEventListener("click", function(event) {
//     console.log("Nope.");
//     event.preventDefault();
// });


// // Key events

// // shiftKey, ctrlKey, altKey, and metaKey

// // console.log("Violet".charCodeAt(0));
// // // → 86
// // console.log("1".charCodeAt(0));
// // // → 49

// window.addEventListener("keydown", function(event) {
//     if (event.keyCode == 86 && event.shiftKey)
//         document.body.style.background = "red";
//     else if (event.keyCode == 86 && event.metaKey)
//         document.body.style.background = "blue";
    
// });

// window.addEventListener("keyup", function(event) {
//     if (event.keyCode == 86)
//         document.body.style.background = "";
// });

// window.addEventListener("keypress", function(event) {
//     console.log(event.charCode);
//     console.log(String.fromCharCode(event.charCode));
      
// });


// // Mouse events

// window.addEventListener("click", function(event) {
//     var dot = document.createElement("div");
//     dot.className = "dot";
//     dot.style.left = (event.pageX - 4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot);
      
// });

// // Mouse motion


// var lastX; // Tracks the last observed mouse X position
// var rect = document.querySelector("div");
// rect.addEventListener("mousedown", function(event) {
//     if (event.which == 1) {
//         lastX = event.pageX;
//         addEventListener("mousemove", moved);
//         event.preventDefault(); // Prevent selection
        
//     }
    
// });

// function buttonPressed(event) {
//     // Unfortunately, not all browsers give "mousemove" events a meaningful
//     // which property. There is a standard property called buttons, which
//     // provides similar information, but that is also not supported on all
//     // browsers. Fortunately, all major browsers support either buttons or
//     // which, so the buttonPressed function in the example first tries buttons,
//     // and falls back to which when that isn’t available
//     if (event.buttons == null)
//         return event.which != 0;
//     else
//         return event.buttons != 0;
    
// }
// function moved(event) {
//     if (!buttonPressed(event)) {
//         removeEventListener("mousemove", moved);
        
//     } else {
//         var dist = event.pageX - lastX;
//         var newWidth = Math.max(10, rect.offsetWidth + dist);
//         rect.style.width = newWidth + "px";
//         lastX = event.pageX;
        
//     }
    
// }


// // Hover effect

// var para = document.querySelector("p");

// function isInside(node, target) {
//     for (; node != null; node = node.parentNode) {
//         console.log(node);
//         if (node == target)
//             return true;
//     }
// }

// para.addEventListener("mouseover", function(event) {
//     if (!isInside(event.relatedTarget, para))
//         para.style.color = "red";
    
// });
// para.addEventListener("mouseout", function(event) {
//     if (!isInside(event.relatedTarget, para))
//         para.style.color = "";
// });


// // Scroll events

// var bar = document.querySelector(".progress div");
// addEventListener("scroll", function() {
//     var max = document.body.scrollHeight - innerHeight;
//     var percent = (pageYOffset / max) * 100;
//     bar.style.width = percent + "%";
      
// });


// // Focus events (NOTE: focus and blur events don't propagate)

// var help = document.querySelector("#help");
// var fields = document.querySelectorAll("input");
// for (var i = 0; i < fields.length; i++) {
//     fields[i].addEventListener("focus", function(event) {
//         var text = event.target.getAttribute("data-help");
//         help.textContent = text;
        
//     });
//     fields[i].addEventListener("blur", function(event) {
//         help.textContent = "";
//     });
// }


// Load & beforeunload events (NOTE: load event doesn't propagate, either)


// // Script execution timeline & web workers

// var squareWorker = new Worker("code/squareworker.js");
// squareWorker.addEventListener("message", function(event) {
//     console.log("The worker responded:", event.data);

// });
// squareWorker.postMessage(10);
// squareWorker.postMessage(24);
// squareWorker.postMessage(99);


// // Setting & clearing timers

// document.body.style.background = "blue";
// setTimeout(function() {
//     document.body.style.background = "yellow";
// }, 2000);


// var ticks = 0;
// var clock = setInterval(function() {
//     console.log("tick", ticks++);
//     if (ticks == 10) {
//         clearInterval(clock);
//         console.log("stop.");
//     }
// }, 200);


// Deboucing an event: e.g. when user types quickly, we don't want to trigger an
// event immediately

var textarea = document.querySelector("textarea");
var timeout;
textarea.addEventListener("keydown", function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log("You stopped typing.");
            
    }, 500);
      
});

// a slightly different version of deboucing

function displayCoords(event) {
    document.body.textContent =
        "Mouse at " + event.pageX + ", " + event.pageY;
      
}

var scheduled = false, lastEvent;
window.addEventListener("mousemove", function(event) {
    lastEvent = event;
    if (!scheduled) {
        scheduled = true;
        setTimeout(function() {
            scheduled = false;
            displayCoords(lastEvent);
                  
        }, 250);
            
    }
      
});
