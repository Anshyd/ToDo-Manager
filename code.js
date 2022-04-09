console.log('Coding.js');
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
let idealCount = 0;
let addButton  = document.getElementById('addBtn');
addButton.addEventListener('click', () =>{
    let params = document.getElementById('params');
    let string = `  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden"></label>
    <input class="form-control" id="input${idealCount}" placeholder="Enter Your Plan">
    <label for="inputPassword2" class="visually-hidden"></label>
    <input  class="form-control" id="input${idealCount}" placeholder="Time 00:00">
      <button class="btn btn-primary mb-3 deleteButton">-</button> 
    
    </div>
    `
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    let deleteParam = document.getElementsByClassName('deleteButton');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }
    idealCount ++;
})

