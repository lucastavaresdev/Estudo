var flame = (function(){
    var f = {};    

    f.$ = document.querySelector .bind(document);
    f.$$ = document.querySelectorAll.bind(document);

    return f;
})();