// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            // sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var newDevouredState = {
            devoured: newState
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});