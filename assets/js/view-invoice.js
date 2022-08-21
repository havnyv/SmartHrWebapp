console.log("VVVVVVVVVIIIIII")
const params = new URLSearchParams(window.location.search)
id = params.get('id')


displayInvoice(id)

// Function to show elements from localStorage

// Function to show elements from localStorage
function displayInvoice(id) {
    console.log('yeahhhhhhhhhhhhhhhhhhhhhhhh');
    let LsInvoices = localStorage.getItem("LsInvoices");
    invoiceObj = JSON.parse(LsInvoices);
    invoiceObj = invoiceObj[id]
    let html = ``;
    console.log(invoiceObj);

    items = invoiceObj.items
    itemsHtml = ``
    items.forEach(function (element, index) {
            itemsHtml += `<tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td class="d-none d-sm-table-cell">${element.desc}</td>
            <td>$${element.cost}</td>
            <td>$${element.qty}</td>
            <td class="text-right">$${element.amt}</td>
    </tr>`
   
    });

        html += `				<!-- Page Content -->
        <div class="content container-fluid">
        
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Invoice</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.php">Dashboard</a></li>
                            <li class="breadcrumb-item active">Invoice</li>
                        </ul>
                    </div>
                    <div class="col-auto float-right ml-auto">
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-white">PDF</button>
                            <button class="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->
            
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6 m-b-20">
                                    <img src="assets/img/logo2.png" class="inv-logo" alt="">
                                     <ul class="list-unstyled">
                                        <li>Sushmitha infotech</li>

                                          

                                        <li>#6/3, 5th, 8th Cross Laxmi Rd, </li>
                                        <li>Shanthi Pura, Shanti Nagar,</li>
                                        <li>Bengaluru, Karnataka 560027</li>
                                        <li>GST No:12341234</li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 m-b-20">
                                    <div class="invoice-details">
                                        <h3 class="text-uppercase">Invoice #INV-000${id+1}</h3>
                                        <ul class="list-unstyled">
                                            <li>Date: <span>${invoiceObj.createdDate}</span></li>
                                            <li>Due date: <span>${invoiceObj.dueDate}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-lg-7 col-xl-8 m-b-20">
                                    <h5>Invoice to:</h5>
                                     <ul class="list-unstyled">
                                     <li><h5><strong>${invoiceObj.client}</strong></h5></li>
                                     <li><span>Global Technologies</span></li>
                                     <p>${invoiceObj.address} </p>
                                    </ul>
                                </div>
                                
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ITEM</th>
                                            <th class="d-none d-sm-table-cell">DESCRIPTION</th>
                                            <th>UNIT COST</th>
                                            <th>QUANTITY</th>
                                            <th class="text-right">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${itemsHtml}                                                                                 
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <div class="row invoice-payment">
                                    <div class="col-sm-7">
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="m-b-20">
                                            <div class="table-responsive no-border">
                                                <table class="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th>Subtotal:</th>
                                                            <td class="text-right">${invoiceObj.amount}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Tax: <span class="text-regular">${invoiceObj.gst}</span></th>
                                                            <td class="text-right">${Number(invoiceObj.gst)*Number(invoiceObj.amount)/100}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total:</th>
                                                            <td class="text-right text-primary"><h5>${invoiceObj.amount}</h5></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Page Content -->`;



    let invoiceContainer = document.querySelector("#view-invoice");
    invoiceContainer.innerHTML = html;
    
}

