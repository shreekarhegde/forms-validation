//alert('app.js is file loaded')

let ticketsHandle = document.getElementById('tickets');
const url = 'http://dct-api-data.herokuapp.com/tickets?api_key=225f8a61e32a6357'

//let statusHandle = document.getElementById('status');


    axios.get(url).then((response) => {
        //statusHandle.innerHTML = '';
        let tickets = response.data;
        tickets.forEach((ticket) => {
            let tr = document.createElement('tr');

            let tdCode = document.createElement('td');
            let textCode = document.createTextNode(ticket.ticket_code);
            tdCode.appendChild(textCode);
            tr.appendChild(tdCode);

            let tdName = document.createElement('td');
            let textName = document.createTextNode(ticket.name);
            tdName.appendChild(textName);
            tr.appendChild(tdName);

            let tdPriority = document.createElement('td');
            let textPriority = document.createTextNode(ticket.priority);
            tdPriority.appendChild(textPriority);
            tr.appendChild(tdPriority);

            let tdMessage = document.createElement('td');
            let textMessage = document.createTextNode(ticket.message);
            tdMessage.appendChild(textMessage);
            tr.appendChild(tdMessage);

            let tdStatus = document.createElement('td');
            let textStatus = document.createTextNode(ticket.status);
            tdStatus.appendChild(textStatus);
            tr.appendChild(tdStatus);

            ticketsHandle.appendChild(tr);

            //not recommended
            //  output += `<tr>`
            //  `<td>${ticket.ticket_code}</td>`
            //  `<td>${ticket.ticket_name}</td>`
            //  `<td>${ticket.ticket_message}</td>`
            //  `<td>${ticket.ticket_code}</td>`
            //  `<td>${ticket.ticket_code}</td>`
        });
    }).catch((err)=> {
        console.log(err);
    })