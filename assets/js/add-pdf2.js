
showNotes()
// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("LsPf");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<tr>
      <td>
          <h2 class="table-avatar">
              <a href="profile.php" class="avatar"><img alt="" src="assets/img/profiles/avatar-02.jpg"></a>
              <a href="profile.php">${element.empName}<span>Web Designer</span></a>
          </h2>
      </td>
      <td>${element.pfType}</td>
      <td>${element.empShare}</td>
      <td>${element.orgShare}</td>
      <td class="text-right">
          <div class="dropdown dropdown-action">
                  <a onclick="deletePf(${index})" href="#"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
          </div>
      </td>
  </tr>`;
    });
    let notesElm = document.getElementById("pf-body");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = ``;
    }
}

// Function to delete a note
function deletePf(index) {

    let notes = localStorage.getItem("LsPf");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("LsPf", JSON.stringify(notesObj));
    showNotes();
}


