console.log("PPPPPPPPPPPPPPFFFFFFFFFFFFFF");

// If user adds a note, add it to the localStorage
let submitPf = document.getElementById("submit-pf");

submitPf.addEventListener("click", function() {
  let empName = document.getElementById("emp-name").value
  let pfType = document.getElementById("pf-type").value 
  let empShare = document.getElementById("emp-share").value 
  let orgShare = document.getElementById("org-share").value

    addTxt={empName,pfType,empShare,orgShare}

  let notes = localStorage.getItem("LsPf");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt);
  localStorage.setItem("LsPf", JSON.stringify(notesObj));
  window.location.replace("./provident-fund.php");
  window.refresh()
//   console.log(notesObj);
});


