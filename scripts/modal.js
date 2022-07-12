export default function Modal() {
  const modalWrapper = document.querySelector('.modalwrapper')
  const sendButton = document.querySelector('.send')
  const subscribeButton = document.querySelector('.subscribe')

  sendButton.addEventListener('click', close)

  subscribeButton.addEventListener('click', open)

  function open() {
    modalWrapper.classList.add('active')
  }
  function close() {
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
Modal()
