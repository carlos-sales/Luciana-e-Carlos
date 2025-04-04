document.addEventListener("DOMContentLoaded", 
    function()
    {
        goTo('menu.html');
    }
);

function goTo(page)
{
    fetch(page)
        .then(response => response.text())
        .then(html => document.getElementById("content").innerHTML = html);
}