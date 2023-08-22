display = $("#display")


$(".number").click(function(){
    display.append($(this).text())
    console.log("Number stored")
  });
$(".operator").click(function(){
    display.append($(this).attr("value"))
    console.log("Operator stored")
});

$("#equals").click(function(){
    display.text(eval(display.text()));
    console.log("Answer generated")
})
$("#clear").click(function(){
    display.text("");
    console.log("Screen cleared")
})
$("#del").click(function(){
    display.text(display.text().slice(0,-1));
    console.log("Last element deleted")
})

$(document).ready(function(){
    $.getJSON('https://ipinfo.io', function(data) {
        var ipAddress = data.ip;
        console.log("Your IP address is: " + ipAddress);
        
    })
    function getLocationInfo() {
        const ipAddress = document.getElementById('ipAddressInput').value;

        fetch('/ip_location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip_address: ipAddress })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            if (data) {
                document.getElementById('result').innerHTML = `
                    <p>IP: ${data.ip}</p>
                    <p>City: ${data.city}</p>
                    <p>Region: ${data.region}</p>
                    <p>Country: ${data.country}</p>
                    <p>Latitude: ${data.latitude}</p>
                    <p>Longitude: ${data.longitude}</p>
                `;
            } else {
                document.getElementById('result').innerText = "Location information not found for the given IP address.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
})