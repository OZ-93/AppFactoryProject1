const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getPosition = ()=>([
    { id: 'Tester', title: 'Tester' },
    { id: 'Sales Person', title: 'Sales Person' },
    { id: 'Accounting', title: 'Accounting' },
    { id: 'Human Resource', title: 'HR' },
])

export const getBrand = ()=>([
    { id: 'BMW', title: 'BMW' },
    { id: 'MINI COOPER', title: 'MINI COOPER' },
    { id: 'TOYOTA', title: 'TOYOTA' },
    { id: 'AUDI', title: 'AUDI' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));

     //map departmentID to department title
     
   /*  let Brands =getBrand();
     
     return employees.map(y =>({
         ...y,
         Brand: Brands[y.BrandId - 1].title
     })), employees.map(x => ({
        ...x,
        Position: Positions[x.PositionId - 1].title
    }))*/
     
     
}