let profileMenu = document.getElementById("profileMenu");

function toggleMenu()
{
    profileMenu.classList.toggle("open-menu");
}



let searchBar = document.getElementById("searchBar");

function toggleSearch()
{
    searchBar.classList.toggle("open-search");
}



let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity()
{
    sideActivity.classList.toggle("open-activity");

    if(sideActivity.classList.contains("open-activity"))
    {
        moreLink.innerHTML = "Show less <i class='fa-solid fa-angle-up'></i></i>";
    }
    else
    {
        moreLink.innerHTML = "Show more <i class='fa-solid fa-angle-down'></i>";
    }
}