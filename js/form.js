//http-GET/POST/PUT/DELETE


const employees = [
    {department:'Hr',name:'Anurag'},
    {department:'Technical',name:'Bhargav'},
    {department:'Hr',name:'Chenraj'},
    {department:'Technical',name:'Deepak'},
    {department:'Technical',name:'Johnny'},
    {department:'Sales',name:'Ein'},
    {department:'Sales',name:'Farooq'},
    {department:'Technical',name:'Joseph'}];

const postUrl = 'http://dct-api-data.herokuapp.com/tickets?api_key=225f8a61e32a6357';

const tableHandle = document.getElementById('tickets');
const formHandle = document.getElementById('addTicket');
const nameHandle = document.getElementById('name');
const departmentHandle = document.getElementById('department');
const priorityHandle = document.getElementById('priority');
const messageHandle = document.getElementById('message');
const employeeHandle = document.getElementById('employee');

const nameErrorHandle = document.getElementById('nameError');
const departmentErrorHandle = document.getElementById('departmentError');
const priorityErrorHandle = document.getElementById('priorityError');
const messageErrorHandle = document.getElementById('messageError');

messageHandle.value = '';

let formValidateObj = {
    name: false,
    department: false,
    priority: false,
    message: false
}

function validateName() {
    if (nameHandle.value == '') {
        nameErrorHandle.innerHTML = 'can not be blank';
        formValidateObj.name = false;
    } else {
        nameErrorHandle.innerHTML = '';
        formValidateObj.name = true;
    }
}

function validateDepartment() {
    if (departmentHandle.value.lenght == 0) {
        departmentErrorHandle.innerHTML = 'cant be blank';
        formValidateObj.department = false;
    } else {
        departmentErrorHandle.innerHTML = '';
        formValidateObj.department = true;
    }
}

function validatePriority() {
    if (priorityHandle.value == '') {
       priorityErrorHandle.innerHTML = 'cant be blank';
        formValidateObj.priority = false;
    } else {
        priorityErrorHandle.innerHTML = '';
        formValidateObj.priority = true;
    }
}

function validateMessage() {
    if (messageHandle.value == '') {
       messageErrorHandle.innerHTML = 'cant be blank';
        formValidateObj.message = false;
    } else {
        messageErrorHandle.innerHTML = '';
        formValidateObj.message = true;
    }
}


    formHandle.addEventListener('submit', function (e) {
        e.preventDefault();
        validateName();
        validateDepartment();
        validatePriority();
        validateMessage();


        let formData = {
            name: nameHandle.value,
            department: departmentHandle.value,
            priority: priorityHandle.value,
            message: messageHandle.value
        };
        console.log(formData);

        if (Object.values(formValidateObj).includes(false)) {
            console.log(Object.values(formValidateObj));
                console.log('errors in from');
        }else{
            axios.post(postUrl, formData).then((response) => {
                let ticket = response.data;
                console.log(ticket);
                tableHandle.innerHTML +=
                    `<tr><td> ${ticket.ticket_code} </td>
                 <td> ${ticket.name} </td>
                 <td> ${ticket.priority} </td>
                 <td> ${ticket.department} </td>
                 <td> ${ticket.message} </td>
            </tr>`
            })
            formHandle.reset();
        }
    }, false)

// dynamic select

departmentHandle.addEventListener('change', function(){
    let departmentSelected = departmentHandle.value;
    console.log(departmentSelected);
    let filterdEmployees = employees.filter(function(employee){
        console.log(employee.department);
        return employee.department == departmentSelected;
    });
    console.log(filterdEmployees);
    employeeHandle.innerHTML = '';
    filterdEmployees.forEach(function(employee){
        let option = document.createElement('option');
        option.setAttribute('value',employee.name);
        option.innerHTML = employee.name;
        employeeHandle.appendChild(option);
    })
},false);
            
