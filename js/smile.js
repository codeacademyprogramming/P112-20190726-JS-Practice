"use strict";

let salaryList = document.querySelector("#salaries");
let employeeList = document.querySelector("#employees");

let inputName = document.querySelector("#name");
let inputSurname = document.querySelector("#surname");

let empName = document.querySelector("#empName");
let empSalary = document.querySelector("#empSalary");

let employeeArray = [];

function Employee(name, surname){
    this.Name = name;
    this.Surname = surname;
    this.Salary = [];

    this.AddSalary = function(amount){
        this.Salary.push(amount);
    };

    this.GetAverageSalary = function(){
        let average = 0;

        if(this.Salary.length > 0){
            for(let i = 0; i < this.Salary.length; i++){
                average += this.Salary[i];
            }
            average = average / this.Salary.length;
        }
      
        return average;
    };
}

// let e2 = new Employee("Ceyhun", "Cavadov");
// let e3 = new Employee("Huseyn", "Esedov");
// let e4 = new Employee("Aga", "Nurizade");

// employeeArray.push(e2);
// employeeArray.push(e3);
// employeeArray.push(e4);


function addEmployee(){

    let e1 = new Employee(inputName.value, inputSurname.value);
    employeeArray.push(e1);

    let liElem = document.createElement("li");
    liElem.setAttribute("data-index", (employeeArray.length-1));
    liElem.innerHTML = e1.Name + " " + e1.Surname;
    liElem.addEventListener("dblclick", function(){
        let empIndex = this.getAttribute("data-index");

        console.log(employeeArray[empIndex].GetAverageSalary());
    });

    employeeList.appendChild(liElem);

    inputName.value = "";
    inputSurname.value = "";
    console.log(employeeList);

}



function MaashElaveEt(){
    let index =  employeeArray.findIndex((val, ind, arr)=>{
        if(val.Name.toLowerCase() == empName.value.toLowerCase()){
            return true;
        }
        return false;
    });

    if(index != -1) {
        employeeArray[index].AddSalary(Number(empSalary.value));


        salaryList.innerHTML = "";
    
        for(let i = 0; i < employeeArray[index].Salary.length; i++){
            let li = document.createElement("li");
            li.innerText = employeeArray[index].Salary[i];
    
            salaryList.appendChild(li);
        }
    }
 
}


function showAverageSalary(){

}

console.log(employeeArray);
