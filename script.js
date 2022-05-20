const timer = document.getElementById("display");

setTimeout(function () {
  timer.innerText = "10";
  setTimeout(function () {
    timer.innerText = "9";
    setTimeout(function () {
      timer.innerText = "8";
      setTimeout(function () {
        timer.innerText = "7";
        setTimeout(function () {
          timer.innerText = "6";
          setTimeout(function () {
            timer.innerText = "5";
            setTimeout(function () {
              timer.innerText = "4";
              setTimeout(function () {
                timer.innerText = "3";
                setTimeout(function () {
                  timer.innerText = "2";
                  setTimeout(function () {
                    timer.innerText = "1";
                    setTimeout(function () {
                      timer.innerText = "";
                      let image = document.createElement("img");
                      image.setAttribute("src", "img1.gif");
                      image.setAttribute("height", "250");
                      image.setAttribute("width", "250");
                      display.appendChild(image);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
