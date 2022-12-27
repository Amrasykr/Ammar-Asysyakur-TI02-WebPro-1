// menangkakap elengkap element a
document.querySelectorAll('#option a').forEach((anchor)=>{
    anchor.onclick =(element) =>{
        computerChoice(element)

    }
});

function computerChoice(element){
    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector('#result');


    // menangkap element pilihan user
    let pilihanUser = element.target.innerText; 

    // array untuk pilihqan  komputer
    let choices = ['Rock', 'Paper', 'Scissors'];


    //membuat pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()* choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    if (pilihanUser == pilihanKomputer){
        alert('Draw')
    }

    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissors'){
        alert('You Win');
    } else if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock'){
        alert('You Win');
    } else if (pilihanUser == 'Scissors' && pilihanKomputer == 'Paper'){
        alert('You Win')
    }

    if (pilihanUser == 'Rock' && pilihanKomputer == 'Paper'){
        alert('You Lose');
    } else if (pilihanUser == 'Paper' && pilihanKomputer == 'Scissors'){
        alert('You Lose');
    } else if (pilihanUser == 'Scissors' && pilihanKomputer == 'Rock'){
        alert('You Lose')
    }

}