const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

const onTabClick = (e) => {
    tabs.forEach((tab) => {
        tab.children[0].classList.remove('border-softRed','border-b-4','md:border-b-0')
    })
    panels.forEach((panel) => {
        panel.classList.add('hidden')
    })
    e.target.classList.add('border-softRed','border-b-4','md:border-b-0')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}

tabs.forEach((tab) => tab.addEventListener("click",onTabClick))