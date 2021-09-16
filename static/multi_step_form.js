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

const difficulty_tax = {
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
let span_$niceMessage = document.querySelector("#nice-message");
// const form_$parameters = document.querySelectorAll("form#msform .parameter");
let table_$column2 = document.querySelectorAll("table td:nth-child(2)");

let academic_level = document.querySelector('select[name="academic_level"]');
let time = document.querySelector('select[name="time"]');
let page_quantity = document.querySelector('input[name="page_quantity"]');
let radio_buttons = document.querySelectorAll(
  "input[type='radio'][name='difficulty']"
);
let difficulty = document.querySelector(
  "input[type='radio'][name='difficulty']:checked"
);

let states = {
  academic_level: academic_level.value,
  time: parseInt(time.value),
  page_quantity: parseInt(page_quantity.value),
  difficulty: difficulty.value,
  getTotal: function () {
    return (
      level[this.academic_level] *
      urgency(this.time) *
      this.page_quantity *
      difficulty_tax[this.difficulty]
    ).toFixed(2);
  },
};
Object.defineProperty(states, "getTotal", { enumerable: false });

time.addEventListener("input", () => {
  states["time"] = time.value;
  renderState(states);
});
academic_level.addEventListener("input", () => {
  states["academic_level"] = academic_level.value;
  renderState(states);
});
page_quantity.addEventListener("input", () => {
  states["page_quantity"] = page_quantity.value;
  renderState(states);
});

for (let i of radio_buttons) {
  i.addEventListener("input", () => {
    if (i.checked) {
      difficulty = i;
      states["difficulty"] = difficulty.value;
      renderState(states);
    }
  });
}

function renderState(x) {
  for (let i = 0; i < table_$column2.length; i++) {
    if (i == 4) {
      continue;
    } else if (i == 5) {
      table_$column2[i].textContent = `$ ${states.getTotal()}`;
    } else {
      table_$column2[i].textContent = Array.from(Object.values(states))[i];
    }
  }
  // localStorage.setItem("data", JSON.stringify(states));
}

window.addEventListener("load", () => {
  renderState();
});

console.log(states.getTotal());
