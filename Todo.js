// add td when ToDo is clicked

function handleToDoClick()
{
    let table = document.getElementById("table1")
    
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    let thingToDo = document.getElementById("thingToDo").value;

    if(thingToDo!="")
    {
        let thingToDoText = document.createTextNode(thingToDo);
        
        let timesImage = document.createElement("img");
        timesImage.className = "timesImage";
        timesImage.src="times.svg";

        td2.appendChild(thingToDoText);

        let tds = []

        tds[0] = td1;
        tds[1] = td2;

        tr.className="tableBodyRow";
        tds[0].className = "tableBodyCellImage";
        tds[0].onclick = takeOff();
        tds[0].appendChild(timesImage);
        
        for(let i=1;i<2;++i)
            tds[i].className = "tableBodyCell";

        for(let i=0;i<2;++i)
            tr.appendChild(tds[i]);

        table.appendChild(tr);
    }
}

function takeOff()
{
    $(document).ready(function(){
            
        $(".tableBodyRow").dblclick(function(){
          $(this).remove();
        });
    });
}