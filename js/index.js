// Your code goes here

// 1
// scaling destination picture whenever mouse hovers the image
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('mouseenter', () => {
  destinationImg.style.transform = 'scale(1.1)';
  destinationImg.style.transition = 'transform 1s';
});
destinationImg.addEventListener('mouseleave', () => {
  destinationImg.style.transform = 'scale(1)';
  destinationImg.style.transition = 'transform 1s';
});

// 2
// changing the color of 'welcome to fun bus!' to 'red' on double click
const title = document.querySelector('.intro h2');
title.addEventListener('dblclick', () => {
  title.style.color = 'red';
});

// 3
// changing 'welcome to fun bus!' back to black
title.addEventListener('click', () => {
  title.style.color = 'black';
});

// 4
// changing the logo to 'yellow' when mouse hovers over it
const textContent = document.querySelector('.logo-heading');
textContent.addEventListener('mouseenter', () => {
  textContent.style.color = 'yellow';
});

// 5
// changing the logo back to 'black' when mouse isn't hovering over the logo
textContent.addEventListener('mouseleave', () => {
  textContent.style.color = 'black';
});

// 6
// changing the 'Let's Go!' image to another image when user clicks on image
const letsGoImg = document.querySelector('.content-section img');
letsGoImg.addEventListener('click', () => {
  letsGoImg.src = 'https://images.unsplash.com/photo-1591357339460-0f4f09050822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});

// 7
const destinationTitles = document.querySelectorAll('.destination h4');
const firstTitle = destinationTitles[0];
firstTitle.addEventListener('mouseenter', () => {
  firstTitle.textContent = 'Bring Sunscreen!';
});

// 8
const secondTitle = destinationTitles[1];
secondTitle.addEventListener('mouseenter', () => {
  secondTitle.textContent = "Don't Bring Sandals!";
});

// 9
const thirdTitle = destinationTitles[2];
thirdTitle.addEventListener('mouseenter', () => {
  thirdTitle.textContent = "You Won't Return!";
});

// 10
const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () => {
  footer.style.backgroundColor = 'yellow';
});