const buttons = [...document.querySelectorAll(".button")]
const display = document.getElementById("display")
let value = "0"

buttons.forEach((el)=>{
    el.addEventListener("click", (clickedElm)=>{
        let key = clickedElm.target
        switch (key.id) {
            case "btn_clear":
                value = "0"
                break
            case "btn_equal":
                value = eval(value)
                break
            default:
                let lastValue = value[value.length-1]
                let addedValue = key.innerHTML
                if (value === "0") {
                    if (addedValue === "+" || addedValue === "*" || addedValue === "/" || addedValue === "."){
                        value = value + addedValue
                    } else {
                        value = addedValue
                    }
                } else {
                    if (addedValue === "+" || addedValue === "-" || addedValue === "*" || addedValue === "/" || addedValue === "."){
                        if (lastValue !== "+" && lastValue !== "-" && lastValue !== "*" && lastValue !== "/" && lastValue !== ".") {
                            value = value + addedValue
                        }
                    } else {
                        value = value + addedValue
                    }
                }   
                lastValue = value[value.length-1]
                break
        }
        display.innerHTML = value
    })
})
