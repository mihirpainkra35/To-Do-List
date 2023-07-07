let text = document.getElementById('textid');
let List = document.getElementById('ulid');
let savebtn = document.getElementById('addbtn')
var editvalue = null;
var listno = 0;


//adding new list in the to-do list



add = () => {

    if (savebtn.innerHTML == "Add") {

        if (text.value === "") {
            alert("Please enter something");
            return;
        }
        let li = document.createElement("li");
        li.innerHTML = text.value;
        List.appendChild(li);


        //delete button

    
        const btn = document.createElement("button");
        const edt = document.createElement("button");
        // const classbtn = document.classList('close')
      
        btn.classList = 'close';
        edt.classList = 'edit';
        btn.innerHTML = `Delete`;
        edt.innerHTML = "Edit";
        li.append(btn, edt);

    }
    else if (savebtn.innerHTML == "save") {
        
        let liList = document.getElementsByTagName('li');

        for (let i = 0; i < liList.length; i++) {
            if (liList[i].innerText === editvalue + "DeleteEdit") {

                liList[i].innerText = text.value;
                const btn = document.createElement("button");
                const edt = document.createElement("button");
                btn.classList = 'close';
                edt.classList = 'edit';
                btn.innerHTML = "Delete"
                edt.innerHTML = "Edit"
                liList[i].append(btn, edt);

            }

        }
        savebtn.innerHTML = "Add"
    }
    text.value = "";
    saveData()
}


//marked tasks and delete task from list

List.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.classList == "close") {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.classList == "edit") {

        editvalue = e.target.parentElement.innerText.replace("DeleteEdit", "")
        text.value = e.target.parentElement.innerText.replace("DeleteEdit", "")
        text.focus();
        savebtn.innerHTML = 'save'
    }

});

function saveData() {
    localStorage.setItem("data", List.innerHTML)

}

function showData() {
    List.innerHTML = localStorage.getItem('data')
}
showData();
