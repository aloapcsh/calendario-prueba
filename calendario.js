
function createCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const calendarDiv = document.getElementById('calendar');

    const monthsNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    console.log(monthsNames[0]);

    let tableHTML = '<table>';
    tableHTML += `<caption>${monthsNames[month]} ${year}</caption>`;
    tableHTML += '<tr><th>Domingo</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th></tr>';

    let dayOfMonth = 1;

    for (let i=0; i <6; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfWeek){
                tableHTML += '<td></td>';
            }else if (dayOfMonth > daysInMonth) {
                tableHTML += '<td></td>';
            } else {
                tableHTML += `<td>${dayOfMonth}</td>`;
                dayOfMonth++;
            }
        }
        tableHTML += '<tr>';
    }

    tableHTML += '</table>';
    calendarDiv.innerHTML += tableHTML;
}

for (let month = 0; month < 12; month++) {
    createCalendar(2025, month);
}