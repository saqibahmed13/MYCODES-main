let newHeading = document.createElement('H1');
newHeading.innerHTML= "Hi Boss";
document.querySelector('body').append(newHeading);

// adding in the first of the body tag
let newHeading2 = document.createElement('H1');
newHeading2.innerHTML='I am your boss';
document.querySelector('body').prepend(newHeading2);