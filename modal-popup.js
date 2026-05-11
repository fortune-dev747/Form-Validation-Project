// Get the modal element from the html
const popup = document.getElementById('myModal');
const toggle = document.getElementById('toggleBtn');



 if (toggle) {
    toggle.addEventListener('click', event =>  {
      if (toggle) {
         popup.style.display = "none";
      }
    });
};

// Function to open Modal
function openPopup() {
        popup.style.display = "block";
};

// Function to close Modal
function closePopup() {
    popup.style.display = "none";
};
