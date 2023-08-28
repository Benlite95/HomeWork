const companyButton = document.getElementById('createCompany')
const companyNameInput = document.getElementById('companyName')
const companyAddressInput = document.getElementById('companyAddress')


function makeCompany(companyName, companyAddress) {
    return {
        name: companyName,
        address: companyAddress,
        employees: [],
        addEmployee: makeEmployee,
        print: function () {
            console.log(`\nComapny Name: ${this.name} Address: ${this.address} `)
            console.log("Employees")
            this.employees.forEach(emp => console.log(`Employee Name: ${emp.name} Title: ${emp.title}`))
        }
    }
}

function makeEmployee(employeeName, employeeTitle){
    this.employees.push({
        name: employeeName,
        title: employeeTitle
    })
}


let twitter = makeCompany('Tesla', "123 main street")
twitter.addEmployee("Jack Dorsey", "CEO")
twitter.addEmployee("Shmo Joe", "CTO")
twitter.print()

let apple = makeCompany("Apple", "456 side street")
apple.addEmployee("Tim Cook", "CEO")
apple.addEmployee("John Deer", "COO")
apple.print()