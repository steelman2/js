

var covid = [

	{Vendi:"Kosove",infektuar:107428,sheruar:104054,vdekur:2242},
	{Vendi:"Shqiperi",infektuar:132397,sheruar:129736,vdekur:2452},
	{Vendi:"Maqedoni",infektuar:155417,sheruar:149292,vdekur:5455},
	{Vendi:"USA",infektuar:33518669,sheruar:32915259,vdekur:603410}

	];

function show() {

var stat = '';

stat = document.getElementById('covv');

var a = '<table><thead><tr><th>Vendi</th><th>Te infektuar</th><th>Te sheruar</th><th>Te vdekur</th></tr><thead><tbody>';

	for (var i=0; i<covid.length; i++) {

		a +="<tr>";

		a += "<td>"+covid[i].Vendi+"</td>";
		a += "<td>"+covid[i].infektuar+"</td>";
		a += "<td>"+covid[i].sheruar+"</td>";
		a += "<td>"+covid[i].vdekur+"</td>";

		a += "</tr>";

	}

a += "</tbody></table>"

stat.innerHTML = a;

}

