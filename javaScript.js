function myFunction1(){
    let myDay;
    let today = new Date().getDay();
    if (today = "Monday"){
        myDay = "Today is Monday";
    } else if(today = "wednesday"){
        myDay = "Today is Tuesday";
    } else{
        myDay = "Looking forward to get the day. Thank you."
    }
    document.getElementById('myId').innerHTML = myDay;
}