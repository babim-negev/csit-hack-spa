var button = document.getElementById('aut1');
var button1 = document.getElementById('in1');
var button2 = document.getElementById('person');

function hideButton() {
    // Get a reference to the button element
    var button = document.getElementById('aut1');
    var button1 = document.getElementById('in1');
    var button2 = document.getElementById('person');
    
    // Hide the button by setting its display property to "none"
    button.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'block';
}

button.addEventListener('click', function() {
    button.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'block';
    // Custom JavaScript code to execute when the button is clicked
    // You can perform any desired actions here
});

function outButton() {
    // Get a reference to the button element
    var button = document.getElementById('aut1');
    var button1 = document.getElementById('in1');
    var button2 = document.getElementById('person');
 
    // Hide the button by setting its display property to "none"
    button.style.display = 'block';
    button1.style.display = 'block';
    button2.style.display = 'none';
  }