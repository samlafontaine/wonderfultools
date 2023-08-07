document.getElementById('filter').addEventListener('change', function() {
    var selectedCategory = this.value;
    var listItems = document.getElementById('list').getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++) {
        var itemCategory = listItems[i].className;

        if (selectedCategory == 'all' || itemCategory == selectedCategory) {
            listItems[i].style.display = "flex";  // Changed this line
        } else {
            listItems[i].style.display = "none";
        }        
    }
});
