// Pure JavaScript for dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var dropdownMenu = this.nextElementSibling;

            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                dropdownMenu.style.display = 'block';
            }
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdowns = document.querySelectorAll('.dropdown-menu');
            dropdowns.forEach(function (dropdown) {
                dropdown.style.display = 'none';
            });
        }
    });
});

//Main-area section
document.addEventListener('DOMContentLoaded', function() {
    const trigger1 = document.querySelector('.mareas');
    const dropdown1 = document.querySelector('.dd-container');
    let isHovering1 = false;

    // Show dropdown1 on hover
    trigger1.addEventListener('mouseover', function() {
        dropdown1.style.display = 'block';
        isHovering1 = true;
    });

    // Hide dropdown1 when mouse leaves both trigger1 and dropdown1
    trigger1.addEventListener('mouseleave', function() {
        isHovering1 = false;
        setTimeout(function() {
            if (!isHovering1) {
                dropdown1.style.display = 'none';
            }
        }, 200);
    });

    dropdown1.addEventListener('mouseover', function() {
        isHovering1 = true;
    });

    dropdown1.addEventListener('mouseleave', function() {
        isHovering1 = false;
        setTimeout(function() {
            if (!isHovering1) {
                dropdown1.style.display = 'none';
            }
        }, 200);
    });

    const trigger2 = document.querySelector('.mareab');
    const dropdown2 = document.querySelector('.fash_container');
    let isHovering2 = false;

    // Show dropdown2 on hover
    trigger2.addEventListener('mouseover', function() {
        dropdown2.style.display = 'block';
        isHovering2 = true;
    });

    // Hide dropdown2 when mouse leaves both trigger2 and dropdown2
    trigger2.addEventListener('mouseleave', function() {
        isHovering2 = false;
        setTimeout(function() {
            if (!isHovering2) {
                dropdown2.style.display = 'none';
            }
        }, 200);
    });

    dropdown2.addEventListener('mouseover', function() {
        isHovering2 = true;
    });

    dropdown2.addEventListener('mouseleave', function() {
        isHovering2 = false;
        setTimeout(function() {
            if (!isHovering2) {
                dropdown2.style.display = 'none';
            }
        }, 200);
    });
});

  //Carousel section
 // JavaScript for slider functionality
 let currentIndex = 0;

 function showSlide(index) {
     const container = document.getElementById("sliderContainer");
     currentIndex = index;
     const translateValue = -index * 100 + "%";
     container.style.transform = "translateX(" + translateValue + ")";
 }

 function nextSlide() {
     currentIndex = (currentIndex + 1) % 4;
     showSlide(currentIndex);
 }

 function prevSlide() {
     currentIndex = (currentIndex - 1 + 4) % 4;
     showSlide(currentIndex);
 }

 // Automatic sliding
 setInterval(() => {
  nextSlide();
}, 5000); 

// COUNTDOWN SECTION
// Find all elements with the class "coming-time"
const comingTimes = document.querySelectorAll('.coming-time');

// Update the countdown for each element
comingTimes.forEach(element => {
    const targetDate = new Date(element.getAttribute('data-countdown')).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        element.querySelector('.time-count.day span').textContent = days;
        element.querySelector('.time-count.hour span').textContent = hours;
        element.querySelector('.time-count.min span').textContent = minutes;
        element.querySelector('.time-count.sec span').textContent = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(timer);
            element.innerHTML = 'Countdown expired';
        }
    }

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown
    updateCountdown();
});


