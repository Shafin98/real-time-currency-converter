function convert() {

    let amount = document.getElementById("amount").value;
    console.log('amount', amount)

    let from = document.getElementById("from").value;

    console.log('Form Data', from);

    let to = document.getElementById("to").value;

    console.log('to Data', to);

    if (amount === "" || amount <= 0){
        alert("Please enter a valid amount");
    }

}