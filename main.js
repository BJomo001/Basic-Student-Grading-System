function Gradecheck()
{

let Marks = parseInt(document.getElementById("marks").value);
let result = document.getElementById("result");

if (Marks >= 90 && Marks <= 100)
{
    result.textContent = "Congratulations! You got a distinction grade A.";
}
else if (Marks >= 80 && Marks < 90)
{
    result.textContent = "Congratulations! You got an A-.";
}
else if (Marks >= 70 && Marks < 80)
{
    result.textContent = "Congratulations! You got a B+.";
}
else if (Marks >= 60 && Marks < 70)
{
    result.textContent = "Congratulations! You got a B-.";
}
else if (Marks >= 50 && Marks < 60)
{
    result.textContent = "Congratulations! You got a C.";
}
else if (Marks >= 40 && Marks < 50)
{
    result.textContent = "Sorry! You got a D.";
}
else if (Marks >= 0 && Marks < 40)
{
    result.textContent = "Sorry! You got an F.";
}
else
{
    result.textContent = "Invalid marks entered, please enter marks between 0 and 100.";
}
}