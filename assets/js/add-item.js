let addBtn =document.getElementById("add-btn")
showItems();    

// let Container = document.querySelector(".inputs-container")
// let addItemTr =document.querySelector("#add-item-tr")
let itemCost = document.querySelector('#item-cost')
let itemQty = document.querySelector('#item-qty')
// let addBtn = document.querySelector("#add-item-tr.text-success")
// let itemName = document.querySelector("#add-item-tr.item-name")
// let itemDesc = document.querySelector("#add-item-tr.item-desc")
let itemAmount = document.querySelector("#item-amt")

itemCost.addEventListener('input',()=>{
    console.log('hello');
    itemCost = document.querySelector('#item-cost')
    itemQty = document.querySelector('#item-qty')
    itemAmount = document.querySelector("#item-amt")
    itemAmount.value = Number(itemCost.value)*Number(itemQty.value)
})
itemQty.addEventListener('input',()=>{
    console.log('hello');
    let itemCost = document.querySelector('#item-cost')
    let itemQty = document.querySelector('#item-qty')
    itemAmount = document.querySelector("#item-amt")
    itemAmount.value = Number(itemCost.value)*Number(itemQty.value)
})



console.log('second');
// If user adds a note, add it to the localStorage
addBtn.addEventListener("click", function(e) {
    console.log('clickkkkkkkkkkkkkkkkkkkkkkkkk');
    let itemName = document.querySelector("#item-name")
    let itemDesc = document.querySelector("#item-desc")
    let itemCost = document.querySelector('#item-cost')
   let itemQty = document.querySelector('#item-qty')
   let itemAmount = Number(itemCost.value) * Number(itemQty.value)

   console.log(itemAmount);
  let itemObj = {
      name:itemName.value,
      desc : itemDesc.value,
      cost:itemCost.value,
      qty : itemQty.value,
      amt : itemAmount,
  }

//   let addTxt = document.querySelector(".item-name").value
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(itemObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
//   console.log(notesObj);
    itemName.value=''
    itemDesc.value=''
    itemCost.value=''
    itemQty.value=''
    document.querySelector("#item-amt").value=0
showItems();
});



// Function to show elements from localStorage
function showItems() {
    console.log('first firsts');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = ``;
    notesObj.forEach(function(element, index) {
      html += `<tr>
													<td>${index + 1}</td>
													<td>
														<input class="form-control" readonly=""  value="${element.name}"  type="text" style="min-width:150px">
													</td>
													<td>
														<input value="${element.desc}" readonly=""  class="form-control" type="text" style="min-width:150px">
													</td>
													<td>
														<input value="${element.cost}" readonly=""  class="form-control" style="width:100px" type="text">
													</td>
													<td>
														<input value="${element.qty}"  readonly=""  class="form-control" style="width:80px" type="text">
													</td>
													<td>
														<input value="${element.amt}"  class="form-control" readonly="" style="width:120px" type="text">
													</td>
													<td><a href="javascript:void(0)" id="${index}" onclick="deleteNote(this.id)"  class="text-danger font-18" title="Remove"><i class="fa fa-trash-o"></i></a></td>
												</tr>
  
  `;
    });
    let notesElm =document.querySelector(".inputs-container");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `<tr>
      <td></td>
      <td>
          <input class="form-control" readonly=""  type="text" style="min-width:150px">
      </td>
      <td>
          <input class="form-control" readonly=""  type="text" style="min-width:150px">
      </td>
      <td>
          <input class="form-control" readonly=""  style="width:100px" type="text">
      </td>
      <td>
          <input class="form-control" readonly=""  style="width:80px" type="text">
      </td>
      <td>
          <input class="form-control" readonly="" style="width:120px" type="text">
      </td>
      <td><a href="javascript:void(0)" class="text-danger font-18" title="Remove"><i class="fa fa-trash-o"></i></a></td>
  </tr>`
    }
  }




// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showItems();
    }