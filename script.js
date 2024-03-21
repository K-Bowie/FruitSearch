const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (let item of fruit) {
		if (item.toLowerCase().includes(str.toLowerCase())) {
			results.push(item);
		};
	}
	return results;
}
//console.log(search('ma'));

function searchHandler(e) {
    let inputVal = e.target.value; 
    let searchResults = search(inputVal);
    showSuggestions(searchResults, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    results.forEach(result => {
        let li = document.createElement('li');
        li.textContent = result;
        suggestions.appendChild(li);
    });
    if (inputVal) {
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

function useSuggestion(e) {
	input.value = e.target.textContent;
    suggestions.style.display = 'none';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);