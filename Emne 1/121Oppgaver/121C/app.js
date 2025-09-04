const app = document.getElementById('app');

updateVeiw();
function updateVeiw() {
    app.innerHTML =
        createField('text', 'fname', 'First name:') +
        createField('text', 'lname', 'Last name:') +
        createField('range', 'zero2hundred', 'En til hundre:', null, 1, 100, 1) +
        createField('number', 'number', 'Skriv inn et tall:') +
        createField('radio', 'html', 'HTML', 'fav_language') +
        createField('radio', 'css', 'CSS', 'fav_language') +
        createField('radio', 'js', 'JavaScript', 'fav_language') +
        createField('checkbox', 'bike', 'I have a bike') +
        createField('checkbox', 'car', 'I have a car') +
        createField('checkbox', 'boat', 'I have a boat');
};

function createField(type, id, label, radioGroup, min, max, step) {
    const extra = getExtraAttributes(type, min, max, step, radioGroup);
    return type == 'radio' || type == 'checkbox' ? createInputHtml(type, id, extra) + ' ' + createNewLabelHtml(id, label) + '<br/>'
        : createNewLabelHtml(id, label) + '<br/>' + createInputHtml(type, id, extra) + '<br/>';
};
function createInputHtml(type, id, extra) {
    return /*HTML*/ `<input type="${type}" id="${id}${extra}">`;
}

function createNewLabelHtml(id, label) {
    return /*HTML*/ `<label for="${id}">${label}</label>`;
}

function getExtraAttributes(type, min, max, step, radioGroup) {
    if (type == 'range') {
        return `min="${min}" max="${max}" step="${step}"`;
    }
    else if (type == 'radio') {
        return `name="${radioGroup}"`
    }
    return '';
}

