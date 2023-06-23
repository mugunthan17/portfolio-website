var backbtn= document.getElementById("gobackbtn");
backbtn.addEventListener("click",function(){
    window.location.href="index.html";
});

const images = document.querySelectorAll('.row1imgs, .row2imgs, .row3imgs, .row4imgs');

const modal = document.createElement('div');
modal.classList.add('modal');

const modalImage = document.createElement('img');
modalImage.classList.add('modal-image');

const closeButton = document.createElement('button');
closeButton.classList.add('modal-close');
closeButton.innerHTML = 'X';


modal.appendChild(modalImage);
modal.appendChild(closeButton);


document.body.appendChild(modal);


images.forEach((image) => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  });
});


closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});
