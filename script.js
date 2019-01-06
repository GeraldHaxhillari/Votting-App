var data = {
  labels: ["React", "Vue", "jQuery", "Other"],
  datasets: [
    {
      label: "Number of votes",
      data: [13, 10, 21, 7]
    }
  ]
};

var options = {
  scales: {
    yAxes: [
      {
        // barThickness: 20
        ticks: {
          fontFamily: "'Roboto', 'Helvetica', sans-serif"
          // fontSize: 18
        }
      }
    ]
  },
  legend: {
    display: true,
    labels: {
      fontFamily: "'Roboto', 'Helvetica', sans-serif",
      fontSize: 14
    }
  }
};

var cards = [].slice.call(document.getElementsByClassName("card"));
cards.forEach(function(card) {
  var toggle = card.querySelector(".toggle-show");
  var cardBody = card.querySelector(".card__body");

  if (toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();

      // cardBody.classList.toggle('is-hidden');

      var ctx = document.createElement("canvas");
      ctx.className = "poll-chart";
      ctx.width = 300;
      ctx.height = 180;

      cardBody.appendChild(ctx);

      var pollChart = new Chart(ctx, {
        type: "horizontalBar",
        data: data,
        options: options
      });
    });
  }
});

var addOptionBtn = document.querySelector('span[class="form__subheading"]');
addOptionBtn.addEventListener("click", function() {
  var form = addOptionBtn.parentNode.parentNode;

  var option = createPollOptionElement(form);
  form.insertBefore(option, addOptionBtn.parentNode);
});

function createPollOptionElement(form) {
  var optionLabel = document.createElement("label"),
    input = document.createElement("input");

  optionLabel.className = "form__label";
  var currentOptions = form.querySelectorAll(".form__label").length;
  optionLabel.textContent = "Option " + ++currentOptions;

  input.className = "form__input";
  input.type = "text";
  input.name = "option";
  input.required = true;

  optionLabel.appendChild(input);

  return optionLabel;
}
