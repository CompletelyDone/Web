const todo = {
    action(e){
        const target = e.target;
        if(target.classList.contains('todo_add')){
            this.add();
            this.save();
        }
        else if(target.classList.contains('todo_remove')){
            target.parentNode.remove(target);
            localStorage.setItem('todo', document.querySelector('.todo_items').innerHTML);
        }
    },
    add() {
        const elemText = document.querySelector('.input1');
        if (elemText.disabled || !elemText.value.length) {
            return;
        }
        document.querySelector('.todo_items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
    },
    create(text){
        return `<li class=todo_item>
        ${text}
        <button class="todo_remove">-</button>`;
    },
    init(){
        const fromStorage = localStorage.getItem('todo');
        if(fromStorage){
            document.querySelector('.todo_items').innerHTML = fromStorage;
        }

        document.addEventListener('click', this.action.bind(this));
    },
    save(){
        localStorage.setItem('todo', document.querySelector('.todo_items').innerHTML);
    }
};

todo.init();