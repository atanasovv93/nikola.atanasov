$(document).ready(function () {
    $("#generateButton").click(function () {
        let text = $("#headerText").val().trim();
        let color = $("#headerColor").val().trim();
        let messageElement = $("#message");

        messageElement.text("");

        if (!text) {
            messageElement.text("Error: Please enter a valid header text!");
            return;
        }

        if (!isValidColor(color)) {
            messageElement.text("Error: Please enter a valid color!");
            return;
        }

        let newHeader = $("<h1></h1>").text(text).css("color", color);

        $("#generatedHeaders").append(newHeader);
    });

    function isValidColor(color) {
        let div = document.createElement("div");
        div.style.color = color;
        return div.style.color !== "";
    }
});
