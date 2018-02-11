var Todo = (function() {

    var addBtn;

    function init() {
        cacheElements();
        addListeners();
    }

    function cacheElements() {
        addBtn = document.getElementById("add");
    }

    function addListeners() {
        addBtn.addEventListener('click', function(event){
            
        });
    }

    function addBtnClick() {

    }

    return {
        init: init
    };

})();


window.onload = function() {
    Todo.init();
}