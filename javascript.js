var answers = [];
function recordAnswers(qno, ans, nqno) {
  answers[qno] = ans;
  if (nqno > 0) {
    jQuery(".question .row").removeClass("active");
    jQuery(".q" + nqno).addClass("active");
  } else {
    q1 = answers[1];
    q2 = answers[2];
    q3 = answers[3];
    q4 = answers[4];
    q5 = answers[5];
    q6 = answers[6];
    q7 = answers[7];

    if ((q1, q2, q4, q6, q7 == 1) && (q3, q5, q7 == 1 || 2)) {
      jQuery(".question .row").removeClass("active");
      jQuery(".row.result1").addClass("active");
    } else {
      jQuery(".question .row").removeClass("active");
      jQuery(".row.result2").addClass("active");
    }
  }
}

function showResponse(ans, id, id2) {
  if (ans == 1) {
    let x = document.getElementById(id).getElementsByClassName("response1")[0];
    x.style.display = "block";
  } else {
    let x = document.getElementById(id).getElementsByClassName("response2")[0];
    x.style.display = "block";
  }

  document
    .getElementById(id2)
    .getElementsByClassName("bottom-question")[0].style.display = "none";

  document
    .getElementById(id2)
    .getElementsByClassName("next-btn")[0].style.display = "block";
}
