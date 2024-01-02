
let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msge = document.querySelector("#msg")

let tern0 = true;

let winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(tern0){
            box.innerText = "0"
            tern0 = false
        }else{
            box.innerText="x"
            box.style.color = "blue"
            tern0 = true
        }
        box.disabled =true
        checkWiner()
    })
})

const disabledBoxes = ()=>{
    for( box of boxes){

        box.disabled = true
    }
}
const enableBoxes = ()=>{
    for( box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const resetGame = ()=>{
    tern0 = true
    msgContainer.classList.add("hide")
    enableBoxes()
}

const showWiner = (winer)=>{
    msge.innerText = `congrasulation winer is ${winer}`
    msgContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWiner = ()=>{
    for (pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val !="", pos2val !="", pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWiner(pos1val)
            }
        }
        
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);