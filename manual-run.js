let isEnabled = false;

const update = () => {
  const outcomeText = document.getElementById('outcome');

  outcomeText.textContent = isEnabled ? 'on' : 'off';
};

const togglerButton = document.getElementById('toggler');

togglerButton.addEventListener('click', function() {
  isEnabled = !isEnabled;
  update();
});

update();
