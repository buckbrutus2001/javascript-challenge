// from data.js

let ufoData = data;
let tBody = d3.select('tbody');


function handleSearch() {

    d3.event.preventDefault();
    let dateInput = d3.select("#datetime").node().value;
    populatedata(dateInput);

}

function populatedata(){

    tBody.html("");
    let dateSearch = d3.select("#datetime").node().value;
    let searchResult = ufoData.filter( ufo => ufo.datetime ===dateSearch);

    searchResult.forEach(function(results){
        // 	console.log(ufo);
            const row = tBody.append('tr');
            for (key in results){
                const cell = tBody.append('td');
                cell.text(results[key]);
            }	
        }
    );
}


d3.select('#filter-btn').on('click',handleSearch);

