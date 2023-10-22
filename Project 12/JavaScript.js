$(document).ready(function() {
    let currentQuestion = 1;

    // Function to handle answer submission
    function submitAnswer() {
        const selectedValue = $(`input[name=q${currentQuestion}]:checked`).val();
        const feedback = $(`.question#question${currentQuestion} .feedback`);

        if (selectedValue === "correct") {
            feedback.text("Correct! Well done!");
            feedback.css("color", "green");
        } else {
            feedback.text("Incorrect. Try again!");
            feedback.css("color", "red");
        }

        $(`input[name=q${currentQuestion}]`).attr("disabled", true);
        $(".next-question").show();
    }

    // Event listener for answer submission
    $(".options input[type='radio']").on("click", function() {
        submitAnswer();
    });

    // Event listener for next question button
    $(".next-question").on("click", function() {
        currentQuestion++;
        $(`.question#question${currentQuestion}`).show();
        $(".next-question").hide();
    });
});
