function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('search').style.opacity = '0.3';
    document.getElementById('quicksearch').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('search').style.opacity = '1';
    document.getElementById('quicksearch').style.opacity = '1'
}