const btn1 = document.getElementById('btn1');
const list = document.getElementById('listElements');
const txt = document.getElementById("input1");



btn1.addEventListener('click', clicker());



function clicker()
{
    console.log(txt);
    let newEl = document.createElement('li');

    
    newEl.appendChild();
    list.appendChild(newEl);
    if(false)
    {
        newText = document.createTextNode(txt);
        newEl.appendChild(newText);
        list.appendChild(newEl);
        console.log('Done!');
    }
    
};