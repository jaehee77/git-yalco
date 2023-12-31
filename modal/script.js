const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const modal = document.querySelector(button.dataset.modalTarget);

    const bottomY = window.innerHeight - 30;
    console.log(e.clientY, bottomY);
    if (e.clientY >= bottomY) {
      button.classList.add('bottom', 'aaaa')
    }
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    openModalButtons.forEach(button => {
      button.classList.remove('bottom', 'aaaa');
    })
    

    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}