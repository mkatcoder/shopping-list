/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const items = document.querySelector('.items');

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter' && input.value != '') {
        const newElement = document.createElement('li');
        newElement.textContent = input.value;

        newElement.addEventListener('click', function () {
            newElement.classList.toggle('done');
        })

        items.append(newElement);
        input.value = '';
    }
})

