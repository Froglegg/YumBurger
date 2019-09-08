// Make sure we wait to attach our handlers until the DOM is fully loaded.

// validate no empty strings
function validate(element) {
    var regex = /^(?!\s*$)[a-zA-Z.+\s'-]+$/;
    if (regex.test(element)) {
        return true;
    } else {
        return false;
    }
}

$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
        };

        if (validate(newBurger.burger_name)) {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    console.log("created new burger");
                    // add boolean value to local storage so page onload animations don't run again! 
                    window.localStorage.setItem('disable-animations', true);
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else {
            alert("Please enter a burger name before submitting.");
        }
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
                // add boolean value to local storage so page onload animations don't run again! 
                window.localStorage.setItem('disable-animations', true);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#reset").on("click", function(event) {
        console.log("clicked");
        // Send the PUT request.
        $.ajax("/api/burgers/", {
            type: "DELETE"
        }).then(
            function() {
                // add boolean value to local storage so page onload animations don't run again! 
                window.localStorage.setItem('disable-animations', false);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});