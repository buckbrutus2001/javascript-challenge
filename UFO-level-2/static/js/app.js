// from data.js

let ufoData = data;
let tBody = d3.select('tbody');


function handleSearch() {

    d3.event.preventDefault();
    let dateInput = d3.select("#datetime").node().value.trim().toLowerCase();
    let cityInput = d3.select("#citysearch").node().value.trim().toLowerCase();
    let stateInput = d3.select("#statesearch").node().value.trim().toLowerCase();
    let countryInput = d3.select("#countrysearch").node().value.trim().toLowerCase();
    let shapeInput = d3.select("#shapesearch").node().value.trim().toLowerCase();

    populatedata(dateInput,cityInput,stateInput,countryInput,shapeInput);

}

function handleClear(){
    d3.event.preventDefault();
    d3.select("#datetime").node().value = '';
    d3.select("#citysearch").node().value = '';
    d3.select("#statesearch").node().value = '';
    d3.select("#countrysearch").node().value = '';
    d3.select("#shapesearch").node().value = '';
    
}


function populatedata(dateInput,cityInput,stateInput,countryInput,shapeInput){

    tBody.html("");
    // let dateSearch = d3.select("#datetime").node().value;

    // let searchResult = ufoData.filter( ufo => ufo.datetime ===dateSearch);
   
    let searchResult = [];

    if (dateInput != ''){
        searchResult = ufoData.filter( ufo => ufo.datetime ===dateInput);
    }
    else {
        searchResult = ufoData;
    };

    if (cityInput != ''){
        searchResult = searchResult.filter( search => search.city ===cityInput);
    };

    if (stateInput != ''){
        searchResult = searchResult.filter( search => search.state ===stateInput);
    };

    if (countryInput != ''){
        searchResult = searchResult.filter( search => search.country ===countryInput);
    };

    if (shapeInput != ''){
        searchResult = searchResult.filter( search => search.shape ===shapeInput);
    };

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
d3.select('#clear-btn').on('click',handleClear);

