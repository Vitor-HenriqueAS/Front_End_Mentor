const ratingBtn = document.querySelectorAll('.rating-btn li a');
const activeRatingBtn = document.getElementsByClassName('is-selected');

ratingBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        ratingBtn.forEach(item => {
            item.classList.remove('is-selected');
        } )
        btn.classList.add('is-selected');

        const result = activeRatingBtn[0].innerHTML;
        document.getElementById('note').innerHTML = result;
        document.getElementById('btnSubmit').disabled = false;
    })
})

function changeScreen() {
    let card1 = document.querySelectorAll('.card')[0];
    let card2 = document.querySelectorAll('.card')[1];

    card1.classList.remove('visible');
    card2.classList.add('visible');
}