function send() {
    let sno = document.getELementById('sno').value
    let name = document.getELementById('name').value 
    let content = document.getElementById('content').value
    let xmlhttp;
    if (window. XMLHttpRequest) { 

        xmLhttp = new XMLHttpRequest();
    } else {

    xmLhttp = new ActiveX0bject("Microsoft.XMLHTTP"); 
    }


    xmlhttp.open('post','http://localhost:8080/ajax', true)
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('sno=' + sno +'&name=' + name+"&content="+content)

    xmLhttp. onreadystatechange = function () {
        if (xmLhttp. readyState == 4 && xmLhttp.status == 200) { 
           let ajaxData=JSON.parse(xmlhttp.responseText)
           result = ajaxData.reverse().map((val)=>{return JSON.stringify(val)})
           document.getElementById("result").innerHTML = result.join('<br>');
        }
    }    
}
