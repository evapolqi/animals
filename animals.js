let content = document.getElementsByClassName('question_elem')
for(let i = 0; i< content.length; i++) {
    content[i].onclick = () => {
        let quesion = content[i].querySelector('.question_about_content');
        quesion.classList.toggle('question_hidden');
    }
}
console.log(content)
function show() {
    let order = document.querySelector('.form_order');
    if(window.getComputedStyle(order).display == 'none') {
        order.style.display = 'block';
    } else {
        order.style.display = 'none';
    }
}
let conf = document.querySelector('.form_rec')
let but = document.querySelector('.form_date')
function on() {
    if(conf.checked) {
        but.disabled = false;
    } else {
        but.disabled = true;
    }
}