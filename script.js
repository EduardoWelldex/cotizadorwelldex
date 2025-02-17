document.getElementById("customForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    const salesforceURL = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
    
    formData.append("oid", "00DDn00000ADHbc");
    
    fetch(salesforceURL, {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            alert("Datos enviados correctamente a Salesforce");
            window.location.href = "pagina_de_gracias.html";
        } else {
            alert("Hubo un error al enviar los datos.");
        }
    }).catch(error => alert("Error: " + error));
});
