function buildGrid(num) {
    for (i = 0; i < num; i++) {
        let horizDiv = document.createElement("div");
        horizDiv.setAttribute("class", "div");
        horizDiv.setAttribute("id", `div${i}`);
        horizDiv.style.minHeight = "3px";
        horizDiv.style.minWidth = "3px";
        horizDiv.style.border = "solid 1px black";
        horizDiv.style.flexGrow = "1";
        document.querySelector("#horizgrid").appendChild(horizDiv);
    }

    for (i = 0; i < (num - 1); i++) {
        let vertiDiv = document.querySelector("#horizgrid");
        let vertiGrid = vertiDiv.cloneNode(true);
        document.querySelector("#grid").appendChild(vertiGrid);
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {

    let gridCheck = document.querySelector("#horizgrid");
    let clearGrid = document.querySelector("#grid")
    if (gridCheck.hasChildNodes()) {
        while (clearGrid.firstChild) {
            clearGrid.lastChild.remove();
        }
    }

    if (!clearGrid.hasChildNodes()) {
        let horizGrid = document.createElement("div");
        horizGrid.setAttribute("id", "horizgrid");
        document.querySelector("#grid").appendChild(horizGrid);
    }

    let userInput = prompt("How many grid boxes?", "0-100");
    if (userInput <= 100) {
        buildGrid(userInput);

        let mouseOver = document.querySelectorAll(".div");
        mouseOver.forEach(div => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
        });
        btn.textContent = "reset";
    } else {
        alert("That's too many, try again.");
        btn.textContent = "click me";
    }
    
});

