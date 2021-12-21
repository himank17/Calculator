
var buttons = document.getElementsByClassName('button');
var display = document.getElementsByClassName('num-display')[0];
var operand1 = 0;
var operand2 = 0;
var operator = null;
for(var i = 0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == "A/C")
        {
            display.innerText = "";
        }
        else if(value == "+/-")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                var displaynum = parseFloat(display.textContent);
                if(displaynum<=0)
                {
                    displaynum = Math.abs(displaynum);
                    display.innerText = displaynum.toString();
                }
                else{
                    displaynum = -displaynum;
                    display.innerText = displaynum.toString();
                }
            }
        }
        else if(value == "+")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                operator = "+";
            }
        }
        else if(value == "*")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                operator = "*";
            }
        }
        else if(value == "-")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                operator = "-";
            }
        }
        else if(value == "/")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                operator = "/";
            }
            
        }
        else if(value == "%")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand1 = parseFloat(display.textContent);
                operand1 = operand1/100;
                display.innerText = operand1.toString();
            }
        }
        else if(value == "=")
        {
            if(display.textContent == ""|| display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                operand2 = parseFloat(display.textContent);
                var result = eval(operand1+" "+operator+" "+operand2);
                display.innerText = result;
            } 
        }
        else{
            if(display.textContent == "ERROR")
            {
                display.innerText = "ERROR";
            }
            else{
                display.innerText += value;
            }
        }
    });
}