$(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    var question1 = $('#question1').val();
    var question2 = $('#question2').val();
    
    var result = '';
    var resultButtons = $('#resultButtons');
    
    if (question1 === 'red' && question2 === 'dog') {
      result = 'You chose red and dog!';
      resultButtons.html('<button onclick="window.location.href=\'red_dog.html\'">View Result</button>');
    } else if (question1 === 'blue' && question2 === 'cat') {
      result = 'You chose blue and cat!';
      resultButtons.html('<button onclick="window.location.href=\'blue_cat.html\'">View Result</button>');
    } else if (question1 === 'green' && question2 === 'bird') {
      result = 'You chose green and bird!';
      resultButtons.html('<button onclick="window.location.href=\'green_bird.html\'">View Result</button>');
    } else {
      result = 'No specific result for your choices.';
      resultButtons.empty();
    }
    
    $('#result').text(result);
  });
});
