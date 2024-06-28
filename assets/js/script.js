const images = document.querySelectorAll('.image-gallery img');
let currentImageIndex = 0;

function cycleImages() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

setInterval(cycleImages, 3000); // Change the interval as needed
document.getElementById('subscribeButton').addEventListener('click', function() {
    var emailInput = document.getElementById('emailInput');
    var toastieMessage = document.getElementById('toastieMessage');
    var toastie = document.getElementById('toastie');

    if (emailInput.value.trim() === '') {
      alert('Please enter an email address.');
      return;
    }

    // Show the toastie with the entered email address
    toastieMessage.textContent = `Email: ${emailInput.value}`;
    toastie.classList.add('show');

    setTimeout(function() {
      toastie.classList.remove('show');
    }, 3000);
  });
function goToPage1() {
  window.location.href = "/pages/item1.html";
}

function goToPage2() {
  window.location.href = "/pages/item2.html";
}

function goToPage3() {
  window.location.href = "/pages/item3.html";
}