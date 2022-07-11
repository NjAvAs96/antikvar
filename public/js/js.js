
window.addEventListener("load", setListClick);



function showListItem(li)
{
    li.style.transition = "all 1s";
    li.style.opacity = "1";
    li.style.marginLeft = "0";
}


function setListClick()
{
    var list = document.getElementsByClassName("listItems");

    for(i = 0; i < list.length; i++)
    {
        var listItem = list[i].getElementsByTagName("li");

        for(l = 0; l < listItem.length; l++)
        {
            listItem[l].addEventListener("click", showList.bind(null, l, i));
            var div = document.createElement('div');
            div.setAttribute("class", "listArrow");
            listItem[l].appendChild(div);
        }
    }
}

function showList(l, i)
{
    var item = document.getElementsByClassName("listItems")[i].getElementsByTagName("li")[l];
    var div = item.getElementsByTagName("div")[0];

    if (getComputedStyle(div).height == "0px")
    {
        div.style.height = div.scrollHeight + "px";
        
        item.getElementsByClassName("listArrow")[0].style.transform = "rotate(180deg)";
        
    } else
    {
        div.style.height = "0px";
        div.style.paddingTop = "0px";
        item.getElementsByClassName("listArrow")[0].style.transform = "rotate(0deg)";
    }
}