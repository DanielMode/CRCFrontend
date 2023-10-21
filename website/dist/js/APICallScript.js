fetch('https://dwdhdlhvu6.execute-api.us-east-1.amazonaws.com/dev',{
    method: "GET",
    body: JSON.stringify({})
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayCount(data)
    })
    .catch(err => {
        console.log('error ${err}')
    })

    function displayCount(data) {
        const count = data.ddbResponse.Attributes;
        const countDiv = document.getElementById("wow");
        const countName = count.number;
        const heading = document.createElement("p");
        heading.innerHTML = "You are visitor number " + countName +".";
        countDiv.appendChild(heading);
    }