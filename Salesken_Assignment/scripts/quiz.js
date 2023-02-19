function getQestion() {
    console.log("yes");
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    if (page == 10) {
        location.href = "report.html"
    }
    else {
        document.getElementById("question").innerText = (page + 1) + ". " + quizes[page].question
        document.getElementById("firstOp").innerText = quizes[page].answers[0];
        document.getElementById("secondOp").innerText = quizes[page].answers[1];
        document.getElementById("thirdOp").innerText = quizes[page].answers[2];
        document.getElementById("fourthOp").innerText = quizes[page].answers[3];
        if (page == 9) {
            document.getElementById("submitbtn").innerText = "Submit"
            document.getElementById("skipbtn").innerText = "Skip & Submit"
        }
    }

}

function getPage() {
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    page++;
    localStorage.setItem("currentPage", JSON.stringify(page))
    let cureentId = localStorage.getItem("currentId")
    document.getElementById(cureentId).classList.remove("selectedAns")
    localStorage.removeItem("currentAns")
    getQestion()
}

function checkans() {
    let page = JSON.parse(localStorage.getItem("currentPage")) || 0;
    let ans = JSON.parse(localStorage.getItem("currentAns")) || alert("Select an option")
    if (ans) {
        let correctAns = JSON.parse(localStorage.getItem("correct_ans")) || 0;
        let cureentId = localStorage.getItem("currentId")
        if (quizes[page].correct_answer == ans) {
            correctAns++;
            console.log("true")
            localStorage.setItem("correct_ans", correctAns);
        }
        page++;
        localStorage.setItem("currentPage", JSON.stringify(page))
        localStorage.removeItem("currentAns")
        document.getElementById(cureentId).classList.remove("selectedAns")
        getQestion()
    }
}

function saveAns(value) {
    localStorage.setItem("currentAns", JSON.stringify(value.text));
    if (value.id == "firstOp") {
        document.getElementById("firstOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("firstOp").classList.remove("selectedAns")
    }
    if (value.id == "secondOp") {
        document.getElementById("secondOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("secondOp").classList.remove("selectedAns")
    }
    if (value.id == "thirdOp") {
        document.getElementById("thirdOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("thirdOp").classList.remove("selectedAns")
    }
    if (value.id == "fourthOp") {
        document.getElementById("fourthOp").classList.add("selectedAns")
        localStorage.setItem("currentId", value.id)
    }
    else {
        document.getElementById("fourthOp").classList.remove("selectedAns")
    }
}

window.onload = function () {
    localStorage.removeItem("currentAns")
    getQestion();
}

var quizes = [
    {
        "question": "what does CSS stands for?",
        "correct_answer": "Cascading style sheets",
        "answers": [
            "Cascade sheets style",
            "Color and style sheets",
            "Cascading style sheets",
            "Coded Style Sheet"
        ]
    },
    {
        "question": "Which of the below CSS properties is used to change the background color of CSS ?",
        "correct_answer": "background-color",
        "answers": [
            "color-background",
            "bg color",
            "background-color",
            "color",
        ]
    },
    {
        "question": "Which of the below CSS class is used to change the text color of CSS ?",
        "correct_answer": "color",
        "answers": [
            "background-color",
            "color",
            "color-background",
            "None of above"
        ]
    },
    {
        "question": "Which of the below is the correct syntax to put a line over text in CSS?",
        "correct_answer": "text-decoration: overline",
        "answers": [
            "text-decoration: line",
            "text-decoration: none",
            "text-decoration: overline",
            "text-decoration: underline"
        ]
    },
    {
        "question": "Which of the below CSS properties represent the order of flex items in the grid container ?",
        "correct_answer": "order",
        "answers": [
            "order",
            "float",
            "overflow",
            "All of the above"
        ]
    },
    {
        "question": "Which element is used to represent the transparency of an element in CSS?",
        "correct_answer": "Opacity",
        "answers": [
            "Hover",
            "Opacity",
            "Transparent",
            "Overlay"
        ]
    },
    {
        "question": "How do we set the default width of the font in CSS?",
        "correct_answer": "font-stretch",
        "answers": [
            "font-stretch",
            "font-weight",
            "text-transform",
            "font-variant"
        ]
    },
    {
        "question": "Which of the below CSS property is used to add a stroke in the text ?",
        "correct_answer": "text-stroke",
        "answers": [
            "text-transform",
            "text-decoration",
            "text-transform",
            "text-stroke"
        ]
    },
    {
        "question": "Which of the below the property is used to overflow the text in CSS?",
        "correct_answer": "line-height property",
        "answers": [
            "min-height property",
            "max-height property",
            "line-height property",
            "None of the above"
        ]
    },
    {
        "question": "Which below CSS property best describes how an image or video fits into a container?",
        "correct_answer": "object-fit",
        "answers": [
            "object-fit",
            "object-move",
            "position-hide",
            "All of above"
        ]
    }
]