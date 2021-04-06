let list = document.getElementById('list');
let grid = document.getElementById('grid');
let listView = document.getElementById('listView');
let cards = document.getElementById('employees');
list.onclick = function() {
	listView.style.display = '';
	cards.style.display = 'none';
}

grid.onclick = function() {
	listView.style.display = 'none';
	cards.style.display = '';
}


const employeesGrid = document.getElementById('employees');
const employeesList = document.getElementById('listView');
const res = document.getElementById('result');
const searchBar = document.getElementById('search');
let employees = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredEmployees = employees.filter((employee) => {
        return (
            employee.title.toLowerCase().includes(searchString) ||
            employee.text.toLowerCase().includes(searchString)
        );
    });
    displayEmployeesGrid(filteredEmployees);
    displayEmployeesList(filteredEmployees);
    var result = filteredEmployees.length;
    res.innerHTML = result; 
});

const loadEmployees = async () => {
    try {
        const res = await fetch('https://valentinajurievna.github.io/Programming/data.json');
        employees = await res.json();
        displayEmployeesGrid(employees);
        displayEmployeesList(employees);
    } catch (err) {
        console.error(err);
    }
};

const displayEmployeesGrid = (employees) => {
		const htmlString = employees
        .map((employee) => {
            return `
				<div class="card p-3 col-5 mt-4">
	                <img src="${employee.image}" class="card__img mx-auto d-block img-fluid">
	                    <div class="card__body">
	                        <h5 class="card__title mt-3">${employee.title}</h5>
	                        <p class="card__text">${employee.text}</p>
	                    </div>
	                    <div class="card__body mt-3">
	                        <a href="#" class="card__link"><img src="${employee.department.icon}" width="16" height="16" class="img-fluid" alt="">&ensp;${employee.department.specialty}</a>
	                        <a href="#" class="card__link ml-5"><img src="${employee.room.icon}" class="img-fluid" alt="">&ensp;${employee.room.number}</a>
	                    </div>
	                </div>  	
        `;
        })
        .join('');
    employeesGrid.innerHTML = htmlString;
};


const displayEmployeesList = (employees) => {
		const htmlString = employees
        .map((employee) => {
            return `
            <tr>
            <td width="300">${employee.title}</td>
            <td width="300">${employee.text}</td>
            <td width="300">${employee.department.specialty}</td>
            <td width="300">${employee.room.number}</td> 
            </tr>            			
        `;
        })
        .join('');
    employeesList.innerHTML = htmlString;
};


loadEmployees();






