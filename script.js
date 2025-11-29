function convert() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;


    if (amount === "" || amount <= 0){
        alert("Please enter a valid amount");
    }

    let url = `https://open.er-api.com/v6/latest/${from}`

    fetch(url)
    .then(response => response.json())
    .then ( data => {
        let rate = data.rates[to];
        let result = amount * rate;

        document.getElementById("result").innerHTML = 
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    })
    .catch ( ()=>{
        alert("Error")
    })

}