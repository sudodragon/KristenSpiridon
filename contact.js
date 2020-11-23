document.getElementById("submitContact").addEventListener("click", function (event) {
    // POST to HTTPBIN to test
    let req = new XMLHttpRequest();
    let info = {
        name: null,
        email: null,
        comment: null
    }
    info.name = document.getElementById("nameInput").value;
    info.email = document.getElementById("emailInput").value;
    info.comment = document.getElementById("commentsInput").value;

    req.open("POST", "http://httpbin.org/post", true)
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            let response = JSON.parse(req.responseText);
            console.log(response);

        } else {
            console.log("Error in network request: " + req.statusText);
        }
    });
    req.send(JSON.stringify(info));

    // create scroll box that appears after form is submitted
    let main = document.getElementById("contactMain");
    let confirmation = document.createElement("p");
    confirmation.id = "scrollbox";
    confirmation.textContent = "Thank You for reaching out! You have successfully submitted your request.  Please allow 3 business days before you resubmit.";

    main.replaceWith(confirmation);
    event.preventDefault();
});
