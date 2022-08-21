let addBtn = document.getElementById("add-btn")
showItems();

// let Container = document.querySelector(".inputs-container")
// let addItemTr =document.querySelector("#add-item-tr")
let itemCost = document.querySelector('#item-cost')
let itemQty = document.querySelector('#item-qty')
// let addBtn = document.querySelector("#add-item-tr.text-success")
// let itemName = document.querySelector("#add-item-tr.item-name")
// let itemDesc = document.querySelector("#add-item-tr.item-desc")
let itemAmount = document.querySelector("#item-amt")

itemCost.addEventListener('input', () => {
  itemCost = document.querySelector('#item-cost')
  itemQty = document.querySelector('#item-qty')
  itemAmount = document.querySelector("#item-amt")
  itemAmount.value = Number(itemCost.value) * Number(itemQty.value)
})
itemQty.addEventListener('input', () => {
  let itemCost = document.querySelector('#item-cost')
  let itemQty = document.querySelector('#item-qty')
  itemAmount = document.querySelector("#item-amt")
  itemAmount.value = Number(itemCost.value) * Number(itemQty.value)
})



// If user adds a note, add it to the localStorage
addBtn.addEventListener("click", function (e) {
  console.log('clickkkkkkkkkkkkkkkkkkkkkkkkk');
  let itemName = document.querySelector("#item-name")
  let itemDesc = document.querySelector("#item-desc")
  let itemCost = document.querySelector('#item-cost')
  let itemQty = document.querySelector('#item-qty')
  let itemAmount = Number(itemCost.value) * Number(itemQty.value)

  let itemObj = {
    name: itemName.value,
    desc: itemDesc.value,
    cost: itemCost.value,
    qty: itemQty.value,
    amt: itemAmount,
  }

  //   let addTxt = document.querySelector(".item-name").value
  let notes = localStorage.getItem("storageItems");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(itemObj);
  localStorage.setItem("storageItems", JSON.stringify(notesObj));
  //   addTxt.value = "";
  //   console.log(notesObj);
  itemName.value = ''
  itemDesc.value = ''
  itemCost.value = ''
  itemQty.value = ''
  document.querySelector("#item-amt").value = 0
  updateInvoicePreview();
  showItems();
});



// Function to show elements from localStorage
function showItems() {
  let notes = localStorage.getItem("storageItems");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = ``;
  notesObj.forEach(function (element, index) {
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
  let notesElm = document.querySelector(".inputs-container");
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

  let notes = localStorage.getItem("storageItems");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("storageItems", JSON.stringify(notesObj));
  updateInvoicePreview()
  showItems();
}









/////////////////
updateInvoicePreview();
discountValue = document.getElementById('discount-rate')
discountValue.addEventListener('input', updateInvoicePreview)


function updateInvoicePreview() {
  console.log('evvvvvvvvvvvvvvv ');
  invoiceTotal = document.getElementById('invoice-total')
  grandTotal = document.getElementById('grand-total')
  let notes = JSON.parse(localStorage.getItem("storageItems"))

  // total 
  totalSum = 0
  notes = JSON.parse(localStorage.getItem("storageItems"));
  notes.forEach(element => {
    totalSum += element.amt
  });
  invoiceTotal.innerText = totalSum

  // tax    
  taxation = document.getElementById('taxation')
  taxValue = document.getElementById('tax-value')
  console.log(taxation.value, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  taxValue.value = taxation.value
  tax_per = Number(taxValue.value) / 100
  console.log(tax_per);

  // discount
  console.log(document.getElementById('discount-rate').value);
  discountPer = document.getElementById('discount-rate').value / 100

  // grand total
  grandTotal.innerText = totalSum - totalSum * discountPer + totalSum * tax_per

}








//////////////////
// If user adds a note, add it to the localStorage
document.getElementById("save-invoice").addEventListener("click", async function(event){
  event.preventDefault()
  console.log('clicked saveeeee')
  let items = localStorage.getItem("storageItems");
  items=  JSON.parse(items) 
  let clientName = document.getElementById('select-client');console.log('clinent name ',clientName.value)
  let invoiceNumber=0;console.log('inv no ',invoiceNumber);
  let createdDate = document.getElementById('created-date');console.log(createdDate.value);
  let dueDate =  document.getElementById('due-date');console.log(dueDate.value);
  let itemAmount = document.getElementById('grand-total');console.log(itemAmount.innerHTML);
  let gst = document.getElementById('taxation');console.log(gst.value);

  let invoiceObj = {
    items : items,
    invoiceNumber:invoiceNumber,
    client : clientName.value,
    createdDate:createdDate.value,
    dueDate : dueDate.value,
    amount : itemAmount.innerHTML,
    gst:gst.value,    
}

console.log(invoiceObj);

let LsInvoices = localStorage.getItem("LsInvoices");
if (LsInvoices == null) {
  invoiceObject = [];
} else {
  invoiceObject = JSON.parse(LsInvoices);
}
invoiceObject.push(invoiceObj);
localStorage.setItem("LsInvoices", JSON.stringify(invoiceObject));

let notes = localStorage.getItem("storageItems");
if (notes != null) {
  notesObj = [];
} 
aa = await localStorage.setItem("storageItems", JSON.stringify(notesObj));

updateInvoicePreview()
showItems();
window.location.replace("./invoices.php");

});
