let isEnabled = false;

const update = () => {
  const outcomeText = document.getElementById('outcome');

  outcomeText.textContent = isEnabled ? 'on' : 'off';
};

const togglerButton = document.getElementById('toggler');

const originalAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function(type, listener, useCapture) {
  const patchedListener = function (event) {
    listener(event);
    update();
  }

  return originalAddEventListener.call(this, type, patchedListener, useCapture);
}

togglerButton.addEventListener('click', function() {
  isEnabled = !isEnabled;
});

update();
