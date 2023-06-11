/**
 *
 * @type {number}
 * 1 x_mark
 * 2 circle
 */
let whose_turn = 1;

let one_two = 0;

/**
 * tic tac toc
 * @type {number[][]}
 */
let tic_tac_arr = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];


let circle = `<svg class="circle_and_x" width="140" height="140">
                        <circle class="circle" cx="50%" cy="50%" r="50" />
                    </svg>`;
let x_mark = `<svg class="circle_and_x" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 82 82" fill="none">
                        <path class="first_path" d="M6 5L76.7107 75.7107" stroke="#FA2929" stroke-width="10" stroke-linecap="round"/>
                        <path class="second_path" d="M5.53372 76.235L76.2444 5.52431" stroke="#FA2929" stroke-width="10" stroke-linecap="round"/>
                    </svg>`;

function start(){
    let start_btn = document.querySelector(".js__play_card_btn");
    start_btn.addEventListener('click',async(e)=>{
        await changeCard();
    })
}

function chooseBox(){
    document.addEventListener('click', (e)=>{
        const target = e.target;
        let td_box = target.closest('td');
        let row = td_box.parentElement;

        if (!target.closest('td')) return;
        if(tic_tac_arr[row.rowIndex][td_box.cellIndex] ==0){
            if(whose_turn === 1){
                td_box.innerHTML =x_mark
                whose_turn = 2;
                tic_tac_arr[row.rowIndex][td_box.cellIndex] = 1;
            }else{
                td_box.innerHTML =circle
                whose_turn = 1;
                tic_tac_arr[row.rowIndex][td_box.cellIndex] = 2;
            }
            checkScore()
        }
    })
}

function checkScore(){
    let stick_won = document.querySelector('.js_stick_won');
    let stick_won_45 = document.querySelector('.js__stick_won_45');

    if(tic_tac_arr[0][0] != 0 && tic_tac_arr[0][0] === tic_tac_arr[0][1] && tic_tac_arr[0][0] === tic_tac_arr[0][2]){
        one_two = tic_tac_arr[0][0];
        setTimeout(styleStick,700,stick_won,50, 24,0);
    }else if(tic_tac_arr[1][0] != 0 && tic_tac_arr[1][0] === tic_tac_arr[1][1] && tic_tac_arr[1][0] === tic_tac_arr[1][2]){
        one_two = tic_tac_arr[1][0];
        setTimeout(styleStick,700,stick_won,50, 51,0);
    }else if(tic_tac_arr[2][0] != 0 && tic_tac_arr[2][0] === tic_tac_arr[2][1] && tic_tac_arr[2][0] === tic_tac_arr[2][2]){
        one_two = tic_tac_arr[2][0];
        setTimeout(styleStick,700, stick_won,50,77.5,0);
    }
    else if(tic_tac_arr[0][0] != 0 && tic_tac_arr[0][0] === tic_tac_arr[1][0] && tic_tac_arr[0][0] === tic_tac_arr[2][0]){
        one_two = tic_tac_arr[0][0];
        setTimeout(styleStick,700, stick_won,16.5,52,90);
    }else if(tic_tac_arr[0][1] != 0 && tic_tac_arr[0][1] === tic_tac_arr[1][1] && tic_tac_arr[0][1] === tic_tac_arr[2][1]){
        one_two = tic_tac_arr[0][1];
        setTimeout(styleStick,700, stick_won,50,52,90);
    }else if(tic_tac_arr[0][2] != 0 && tic_tac_arr[0][2] === tic_tac_arr[1][2] && tic_tac_arr[0][2] === tic_tac_arr[2][2]){
        one_two = tic_tac_arr[0][2];
        setTimeout(styleStick,700, stick_won,83.5,52,90);
    }
    else if(tic_tac_arr[0][0] != 0 && tic_tac_arr[0][0] === tic_tac_arr[1][1] && tic_tac_arr[0][0] === tic_tac_arr[2][2]){
        one_two = tic_tac_arr[0][0];
        setTimeout(styleStick,700, stick_won_45,50.5,51.5,90);
    }else if(tic_tac_arr[0][2] != 0 && tic_tac_arr[0][2] === tic_tac_arr[1][1] && tic_tac_arr[0][2] === tic_tac_arr[2][0]){
        one_two = tic_tac_arr[0][2];
        setTimeout(styleStick,700, stick_won_45,50,51.5,0);
    }
}

async function styleStick(stick_won,left,top,rotate){
    stick_won.style.left=`${left}%`;
    stick_won.style.top=`${top}%`;
    stick_won.style.transform = 'translate(-50%,-50%) rotate(' + rotate + 'deg)';
    stick_won.style.display = 'block';
    setTimeout(showResult,1000)
}

function showResult(){
    let result_card = document.querySelector('.js_result_card');
    let score_x = document.querySelector('.js__score_x');
    let score_circle = document.querySelector('.js__score_circle');
    result_card.style.display = 'block';
    result_card.insertAdjacentHTML('beforeend',one_two === 1?x_mark:circle);
    one_two === 1?score_x.innerText = +score_x.innerText+1:score_circle.innerText = +score_circle.innerText+1;
}

function restart(){
    document.querySelector('.js__restart_btn').addEventListener('click', async(e)=>{
        await clear();
        let result_card = document.querySelector('.js_result_card');
        result_card.removeChild(result_card.lastElementChild);
        result_card.style.display = 'none';
        document.querySelector('.js__stick_won_45').style.display = 'none';
        document.querySelector('.js_stick_won').style.display = 'none';
    })
}

function clear(){
    let td = document.querySelectorAll('td');
    td.forEach((item)=>{
        item.innerHTML = "";
    })
    for ( let i=0; i<3; i++ ){
        for ( let j=0; j<3; j++ ){
            tic_tac_arr[i][j] = 0;
        }
    }
}

function changeCard(){
    document.querySelector(".js__main_card").style.display = "none";
    document.querySelector(".js__game_card").style.display = "block";
}

document.addEventListener("DOMContentLoaded",()=>{
    start()
    chooseBox();
    restart()
})



