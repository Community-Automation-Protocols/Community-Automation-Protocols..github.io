let labwareList = [];
let liquidList = [];

function addLabware() {
    const labware = document.getElementById('labware').value;
    const deckLocation = document.getElementById('deck-location').value;
    if (labware && deckLocation) {
        labwareList.push({'item': labware, 'location': deckLocation });
        labwareList = removeDuplicateLocations(labwareList);
		//displayItemsList('labware-list', labwareList, 'Labware', 'Deck Location');
        updateDeckLayout();
        updateSummary();
        
    }
}

function addLiquid() {
    const liquid = document.getElementById('liquid').value;
    const storageLabware = document.getElementById('storage-labware').value;
    if (liquid && storageLabware) {
        liquidList.push({'item': liquid, 'location': storageLabware });
        //displayItemsList('liquid-list', liquidList, 'Liquid', 'Storage Labware');
        updateSummary();
    }
}

function removeDuplicateLocations(arr) { 
	// removes objects based on first in first out for location key values
    const locationMap = {}; // Object to store location as keys
    const duplicatesRemoved = [];

    arr.forEach(obj => {
        locationMap[obj.location] = obj; // Later values overwrite earlier ones
    });
    
    Object.entries(locationMap).forEach(([key, values]) => {
    	duplicatesRemoved.push(values);
    });
    
    return duplicatesRemoved;
}

/*
function displayItemsList(listObjID, listObj, itemsType, locationType) { 
    const itemListDiv = document.getElementById(listObjID);
    itemListDiv.innerHTML = '';
	listObj.forEach(item => {
        const div = document.createElement('div');
        console.log(item);
        div.textContent = `${itemsType}: ${item.item}, ${locationType}: ${item.location}`;
        itemListDiv.appendChild(div);
    });
}
*/

function updateDeckLayout() {
    const deckCells = document.querySelectorAll('.deck-cell');
    deckCells.forEach(cell => {
        cell.textContent = cell.dataset.position;
    });

    labwareList.forEach(item => {
        const cell = document.querySelector(`.deck-cell[data-position="${item.location}"]`);
        if (cell) {
            cell.textContent = item.item;
        }
    });
}

function updateSummary() {
    const summaryListDiv = document.getElementById('summary-list');
    summaryListDiv.innerHTML = '';

    const labwareSummary = summaryList('Labware', labwareList, 'Deck Location');	
    const liquidSummary = summaryList('Liquid', liquidList, 'Storage Labware');

    if (labwareList.length > 0) {
	    summaryListDiv.appendChild(labwareSummary);
    }
    if (liquidList.length > 0) {
    	summaryListDiv.appendChild(liquidSummary);
    }
}

function summaryList(itemType, itemList, location) {
    const subsectionSummary = document.createElement('div');
    subsectionSummary.innerHTML = `<h3>${itemType}s</h3>`;
    itemList.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${itemType}: ${item.item}, ${location}: ${item.location}`;
        subsectionSummary.appendChild(div);
    });
	return subsectionSummary;
}

// offloading the filling of the drop downs for labware to be generated on page load

const deckPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const labwareOptions = {
    "tiprack": "Tip Rack",
    "plate": "Plate",
    "15ml": "15 ml Opentrons Reservoir",
    "50ml": "50 ml Opentrons Reservoir",
    "single50ml": "50 ml Single Channel Reservoir"
};

function populateSelect(selectId, options) {
    const selectElement = document.getElementById(selectId);
    for (const [value, text] of Object.entries(options)) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = text;
        selectElement.appendChild(option);
    }
}

window.onload = () => {
    populateSelect("deck-location", deckPositions.reduce((acc, val) => ({ ...acc, [val]: val }), {}));
    populateSelect("labware", labwareOptions);
};


//being able to click an element of the deck layout and update the deck location in the dropdown menu
const deckCells = document.querySelectorAll('.deck-cell');
const deckLocationSelect = document.getElementById('deck-location');

// Add event listener to each deck-cell
deckCells.forEach(cell => {
    cell.addEventListener('click', function() {
        const selectedPosition = cell.dataset.position; // Get the deck location from data-position
        deckLocationSelect.value = selectedPosition; // Update the dropdown value

        // Optionally, highlight the clicked cell and remove highlight from others
        deckCells.forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
    });
});
