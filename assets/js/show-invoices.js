console.log("welcomeeeeeeeeee");

showInvoices()


// Function to show elements from localStorage
function showInvoices() {
    console.log('yeahhhhhhhhhhhhhhhhhhhhhhhh');
    let LsInvoices = localStorage.getItem("LsInvoices");
    if (LsInvoices == null) {
        invoiceObj = [];
    } else {
        invoiceObj = JSON.parse(LsInvoices);
    }
    let html = ``;
    invoiceObj.forEach(function (element, index) {
        html += `<tr>
        <!--      <h4> ${index + 1} ${element.items} ${element.invoiceNumber}  ${element.client}  ${element.createdDate} ${element.dueDate}${element.amount}${element.gst} ${index} </h4>  -->
                        
                        <tr>
                                                  <td>${index+1}</td>
                                                  <td><a href="invoice-view.php">#INV-000${index+1}</a></td>
                                                  <td>${element.client} </td>
                                                  <td>${element.createdDate} </td>
                                                  <td>${element.dueDate}</td>
                                                  <td>${element.amount}</td>
                                                  <!-- <td><span class="badge bg-inverse-warning">Partially Paid</span></td> -->
                                                  <td class="text-right">
                                                      <div class="dropdown dropdown-action">
                                                          <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                                                          <div class="dropdown-menu dropdown-menu-right">
                                                              <a class="dropdown-item" href="invoice-view.php?id=${index}"><i class="fa fa-eye m-r-5"></i> View</a>
                                                              <a class="dropdown-item" href="#"><i class="fa fa-file-pdf-o m-r-5"></i> Download</a>
                                                              <a class="dropdown-item" onclick="deleteInvoice(${index})"  href="#"><i
                                                              
                                                              class="fa fa-trash-o m-r-5"></i> Delete</a>
                                                          </div>
                                                      </div>
                                                  </td>
                                              </tr>
    
    `;
    });
    let invoiceContainer = document.querySelector("#invoice-container");
    if (invoiceObj.length != 0) {
        invoiceContainer.innerHTML = html;
    } else {
        invoiceContainer.innerHTML = `Nothing to show`
    }
}





// Function to delete an invoice
function deleteInvoice(index) {
    //   console.log("I am deleting", index);
  
    let lsInvoices = localStorage.getItem("LsInvoices");
    if (lsInvoices == null) {
      invoiceObj = [];
    } else {
        invoiceObj = JSON.parse(lsInvoices);
    }
  
    invoiceObj.splice(index, 1);
    localStorage.setItem("LsInvoices", JSON.stringify(invoiceObj));


    showInvoices();
  }