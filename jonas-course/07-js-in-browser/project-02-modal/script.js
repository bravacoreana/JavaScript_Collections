'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeModal2 = event => {
  event.key === 'Escape' ? closeModal() : '';
};

const handleModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  closeBtn.addEventListener('click', closeModal);
};

const init = () => {
  btns.forEach(btn => btn.addEventListener('click', handleModal));
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal2);
};

init();
