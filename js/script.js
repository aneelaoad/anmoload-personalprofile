function filterProducts(value) {
    //Button class code
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".yes");
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
          element.classList.remove("hide");
        } else {
          //Check if element contains category class
          if (element.classList.contains(value)) {
            //display element based on category
            element.classList.remove("hide");
          } else {
            //hide other elements
            element.classList.add("hide");
          }
        }
      });}
   