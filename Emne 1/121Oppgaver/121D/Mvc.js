// const model = {
//     board:
//     [
//         {brick:'cell',background:'cell-3',number:'6'},
//         {brick:'cell',background:'cell-1',number:'7'},
//         {brick:'cell',background:'cell-2',number:'8'},
//         {brick:'cell',background:'cell-3',number:'9'},
//         {brick:'cell',background:'cell-1',number:'10'},
//         {brick:'cell',background:'cell-2',number:'5'},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-2',number:'11'},
//         {brick:'cell',background:'cell-1',number:'4'},
//         {brick:'cell',background:'cell-3',number:'3'},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-1',number:'13'},
//         {brick:'cell',background:'cell-3',number:'12'},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-2',number:'2'},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-2',number:'14'},
//         {brick:'cell',background:'cell-',number:''},
//         {brick:'cell',background:'cell-start',number:'START'},
//         {brick:'cell',background:'cell-1',number:'1'},
//         {brick:'cell',background:'cell-3',number:'15'},
//         {brick:'cell',background:'cell-finish',number:'MÅL'},
//     ],

// };
const app = document.getElementById('app');

const model = {
    board:
    [
        {class:'cell',background:'cell-1',number:''},
        {class:'cell',background:'cell-2',number:''},
        {class:'cell',background:'cell-3',number:''},
    ],

    

};
updateVeiw();
function updateVeiw() {
    app.innerHTML =
        createCells('cell cell-3', '6') +
        createCells('cell cell-1', '7') +
        createCells('cell cell-2', '8') +
        createCells('cell cell-3', '9') +
        createCells('cell cell-1', '10') +
        createCells('cell cell-2', '5') +
        createCells('', '').repeat(3) +
        createCells('cell cell-2', '11') +
        createCells('cell cell-1', '4') +
        createCells('cell cell-3', '3') +
        createCells('', '') +
        createCells('cell cell-1', '13') +
        createCells('cell cell-3', '12') +
        createCells('', '') +
        createCells('cell cell-2', '2') +
        createCells('', '') +
        createCells('cell cell-2', '14') +
        createCells('', '') +
        createCells('cell start', 'Start') +
        createCells('cell cell-1', '1') +
        createCells('', '') +
        createCells('cell cell-3', '15') +
        createCells('cell finish', 'Mål');




};

function createCells(cell, number) {


};




updateVeiw();
function updateVeiw() {
    app.innerHTML =
      
        createCells('', '') +
        createCells('cell cell-1', '13') +
        createCells('cell cell-3', '12') +
        createCells('', '') +
        createCells('cell cell-2', '2') +
        createCells('', '') +
        createCells('cell cell-2', '14') +
        createCells('', '') +
        createCells('cell start', 'Start') +
        createCells('cell cell-1', '1') +
        createCells('', '') +
        createCells('cell cell-3', '15') +
        createCells('cell finish', 'Mål');




};

function createCells() {
    model.board.forEach(element => {
        element.board
    })
};