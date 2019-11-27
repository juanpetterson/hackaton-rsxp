function reviewLesson() {
  var correctPopup = document.getElementById('correctPopup');
  correctPopup.className = 'review';
}

function gotoNextLesson() {
  window.parent.location.href = '/lessons/' + (Plane.LEVEL + 1);
}

function init() {
  var reviewButton = document.getElementById('reviewLesson');
  var nextButton = document.getElementById('nextLesson');

  if (reviewButton) {
    reviewButton.addEventListener('click', reviewLesson);
  }

  if (nextButton) {
    nextButton.addEventListener('click', gotoNextLesson);
  }
}

window.addEventListener('load', init);
