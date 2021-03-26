$(document).ready(function() {
  $("#languageForm").submit(function(event) {
    event.preventDefault();
    const question1 = $("input#question1").val();
    const question2 = $("input#question2").val();
    const question3 = $("input#question3").val();
    const question4 = $("input#question4").val();
    const question5 = $("input#question5").val();

    if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "no") {

      $("#ruby").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "no" && question5 === "yes") {

      $("#c").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "no") {

      $("#javascript").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "no" && question5 === "no") {

      $("#go").show();
    }

    else if (question1 === "yes" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "yes") {

      $("#python").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "no") {

      $("#rust").show();
    }

    else if (question1 === "yes" && question2 === "no" && question3 === "yes" && question4 === "no" && question5 === "no") {

      $("#swift").show();
    }

    else if (question1 === "yes" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "no") {

      $("#noprogram").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "yes") {

      $("#epicodus").show();
    }

    else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "yes") {

      $("#scala").show();
    }

    else {

      $("#retry").show();
    }
  })
})