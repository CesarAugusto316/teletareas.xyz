//⭐⭐ PROGRESS BAR ⭐⭐
$(document).ready(function () {
  let current_fs, next_fs, previous_fs; //fieldsets
  let opacity;
  let current = 1;
  let steps = $("fieldset").length;

  setProgressBar(current);

  $(".next").click(function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(++current);
  });

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500,
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    let percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
});

// 🔽 OUTPUTS 🔽

// output_$total.textContent = paramater.value
const difficulty = {
  normal: 1.0,
  dificil: 1.18, //=> %15 if its difficult
};

const level = {
  escuela: 3,
  colegio: 3.25,
  universidad: 4,
  posgrado: 5,
};

function urgency(time) {
  if (time == 4) {
    return 1.85;
  } else if (time == 6) {
    return 1.6;
  } else if (time == 12) {
    return 1.4;
  } else if (time == 24) {
    return 1.3;
  } else if (time == 48) {
    return 1.2;
  } else if (time == 72) {
    return 1.18;
  } else if (time >= 96 || time <= 144) {
    return 1.15;
  } else if (time == 168) {
    return 1.12;
  } else if (time >= 336) {
    return 1.0;
  }
}

//⭐⭐ FORM CONTROLS ⭐⭐
// We should use localStorage
const span_$niceMessage = document.querySelector("#nice-message");

const form_$parameters = document.querySelectorAll("form#msform .parameter");
const table_$column2 = document.querySelectorAll("table td:nth-child(2)");

let states = {
  academic_level: "universidad",
  time: 24,
  page_quantity: "1",
  difficulty: "normal",
  getTotal: function () {
    return (
      level[this.academic_level] *
      urgency(this.time) *
      this.page_quantity *
      difficulty[this.difficulty]
    ).toFixed(2);
  },
};

// Object.defineProperty(states, "getTotal", { enumerable: false });

function renderState(states) {
  for (let i in Object.keys(table_$column2)) {
    if (i == 4) {
      continue;
    } else if (i == 5) {
      table_$column2[i].innerHTML = `$ ${states.getTotal()}`;
    } else {
      table_$column2[i].innerHTML = Object.values(states)[i];
    }
  }
  localStorage.setItem("data", JSON.stringify(states));
}

window.addEventListener("load", () => {
  if (localStorage.getItem("data")) {
    states = JSON.parse(localStorage.getItem("data"));
    states.getTotal = function () {
      return (
        level[this.academic_level] *
        urgency(this.time) *
        this.page_quantity *
        difficulty[this.difficulty]
      ).toFixed(2);
    }
    renderState(states);
  } else {
    return;
  }
});

for (let parameter of form_$parameters) {
  parameter.addEventListener("input", () => {
    // console.log(parameter)
    if (states[parameter.name]) {
      states[parameter.name] = parameter.value;
      renderState(states);
    }
  });
}

// don't forget to addEventListener when loading the page
// now simply invoking a method over states, will give us the price
