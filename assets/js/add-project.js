let submitPf = document.getElementById("submit-pro");

submitPf.addEventListener("click", function() {
  let proName = document.getElementById("pro-name").value
  let proDesc = document.getElementById("pro-desc").value 
  let proClient = document.getElementById("pro-client").value 
  let proDeadline = document.getElementById("pro-deadline").value 
  let proLeader = document.getElementById("pro-leader").value
  let proPriority = document.getElementById("pro-prio").value

    addTxt={proName,proDesc,proClient,proDeadline,proLeader,proPriority}

  let notes = localStorage.getItem("lsProjects");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt);
  localStorage.setItem("lsProjects", JSON.stringify(notesObj));
  window.location.replace("./projects.php");
  window.refresh()
showProjects()
});

showProjects()
// Function to show elements from localStorage
function showProjects() {
    let notes = localStorage.getItem("lsProjects");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = ``;
    notesObj.forEach(function (elem, index) {
      function getcolor(per){
        if(per==100) return("red")
        if(per==60) return("orange")
        if(per==40) return("green")
      }
        html += `
        <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
							<div class="card">
								<div class="card-body">
									<div class="dropdown dropdown-action profile-action">
										<a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#" onclick="deletePf(${index})"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
										</div>
									</div>
									<h4 class="project-title"><a href="project-view.php">${elem.proName}</a></h4>
									<p class="text-muted">${elem.proDesc}</p>
                  <div class="pro-deadline m-b-15">
                  <div class="sub-title">
                    Client: 
                  </div>
                  <div class="text-muted">
                  ${elem.proClient}
                  </div>
                </div>
									<div class="pro-deadline m-b-15">
										<div class="sub-title">
											Deadline: 
										</div>
										<div class="text-muted">
                    ${elem.proDeadline}
										</div>
									</div>
									<div class="project-members m-b-15">
										<div>Project Leader :</div>
										<ul class="team-members">
											<li> ${elem.proLeader}
												<a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="assets/img/profiles/avatar-16.jpg"></a>
											</li>
										</ul>
									</div>
									<p class="m-b-5">Priority <span class="text-success float-right">${elem.proPriority}</span></p>
									<div class="progress progress-xs mb-0">
										<div class="progress-bar" role="progressbar" data-toggle="tooltip" title="${elem.proPriority}" style="width:${elem.proPriority}%;background-color:${getcolor(elem.proPriority)} !important;"></div>
									</div>
								</div>
							</div>
						</div>
        
        
        `;
    });
    let notesElm = document.getElementById("projs-container");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = ``;
    }
}

// Function to delete a note
function deletePf(index) {

    let notes = localStorage.getItem("lsProjects");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("lsProjects", JSON.stringify(notesObj));
    showProjects();
}


