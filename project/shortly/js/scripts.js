const linkInput = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

const validURL = (str) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

const formSubmit = (e) => {
    e.preventDefault()
    console.log(linkInput.value)
    if (linkInput.value === '') {
        errMsg.innerText = 'Please Enter Something'
        linkInput.classList.add('border-red')
        errMsg.classList.remove('text-green-500')
        errMsg.classList.add('text-red')
        linkInput.classList.remove('border-green-600')
    }
    else if (!validURL(linkInput.value)) {
        errMsg.innerText = 'Please Enter a Valid URL'
        linkInput.classList.add('border-red')
        errMsg.classList.remove('text-green-500')
        errMsg.classList.add('text-red')
        linkInput.classList.remove('border-green-600')
    }
    else {
        errMsg.innerText = 'Success'
        errMsg.classList.remove('text-red')
        errMsg.classList.add('text-green-500')
        linkInput.classList.remove('border-red')
        linkInput.classList.add('border-green-600')
    }
}

linkForm.addEventListener('submit',formSubmit)