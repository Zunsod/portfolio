const storage_key = "learning-items"
const form = document.getElementById("learning-form")
const input = document.getElementById("learning-input")
const list = document.getElementById("learn-list")
const doneCount = document.getElementById("learn-done")
const totalCount = document.getElementById("learn-total")

let items = JSON.parse(localStorage.getItem(storage_key)) || []
let editingId = null

const save = () => {
    localStorage.setItem(storage_key, JSON.stringify(items));
}
function render(){
    if (items.length === 0) {
        list.innerHTML = `
            <li class="learn-empty">
                <span class="learn-empty-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/>
                    <path d="M4 21V5"/><path d="M9 8h5"/>
                    </svg>
                </span>
                <p class="learn-empty-title">Одоогоор сэдэв алга</p>
                <p>Дээрх талбарт сурах гэж буй зүйлээ бичээд нэмнэ үү.</p>
            </li>`;
        doneCount.textContent = 0;
        totalCount.textContent = 0;
        return;
    }
    list.innerHTML = items.map((item)=>{
        return `<li class="learn-item" data-id="${item.id}">
                    <input class="learn-check" type="checkbox"
                        id="learn-${item.id}" ${item.done ? "checked" : ""}
                        onchange="checkItem(${item.id})">
                    ${textInput(item)}
                    <button class="learn-update" type="button" aria-label="Засах" onclick="updateItem(${item.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                    </button>
                    <button class="learn-delete" type="button" aria-label="Устгах" onclick="deleteItem(${item.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    </button>
                </li>`;
    }).join("");
    // done bolson task iig tootsoh
    doneCount.textContent = items.filter((i) => i.done).length;
    totalCount.textContent = items.length;

    const editField = list.querySelector(".learn-edit");
    if (editField) {
        editField.focus();
        editField.select();
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    items.push({id: Date.now(), text, done: false});
    save();
    render();
    input.value="";
    list.scrollTop = list.scrollHeight; 
})
// Edit daragdah uyd input хэсгийг үүсгэнэ
function textInput(item) {
    if (item.id === editingId) {
        //zasah button darval input
        return `
            <input class="learn-edit" type="text" maxlength="40"
                   value="${item.text}" aria-label="Засах"
                   onkeydown="editKey(event, ${item.id})"
                   onblur="saveEdit(${item.id}, this.value)">`;
    }
    // engiin uyd label
    return `<label class="learn-text" for="learn-${item.id}">${item.text}</label>`;
}
// checkbox daragdah uyd
function checkItem(id){
    const item = items.find((i)=> i.id === id);
    item.done = !item.done;
    save();
    render();
}
// ustgah button darah uyd
function deleteItem(id){
    items = items.filter((i)=>  i.id !== id);
    if (editingId === id) editingId = null;
    save();
    render();
}
// zasah button darahad 
function updateItem(id){
    editingId = id;
    render();
}
// zasah talbar deer zasaad enter darahad
function editKey(e, id){
    if (e.key === "Enter") {
        saveEdit(id, e.target.value);
    }
}
// zasvaraa hadgalah (Enter esvel talbaraas garahad)
function saveEdit(id, value){
    if (editingId !== id) return;
    const text = value.trim();
    const item = items.find((i)=> i.id === id);
    if (item && text) {  // hooson bval hevendee uldene
        item.text = text;
        save();
    }
    editingId = null;
    render();
}

render();


function theme() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  document.getElementById("theme").textContent = isDark ? "Light" : "Dark mode";
}






