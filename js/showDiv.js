document.getElementById('country').addEventListener('change', function showDiv(elem) {
    var style = this.value == 'USA' ? 'block' : 'none';
    document.getElementById('state-select').style.display = style;
});


