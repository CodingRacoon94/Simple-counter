let counter = 0;
const number= document.getElementById("count");
const buttons= document.querySelectorAll("button-xs");
buttons.forEach(function(button){
    button.addEventListener ("click",function (e){
            const style = e.currentTarget.classlist;
            if (style.contains("plus")) {
                counter++;
            } else if (style.contains("minus")) {
                counter--;
            }
            else{
                counter = 0;
        }
        count.textContent = "counter";
    });
})