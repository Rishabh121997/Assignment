
const cardData = [
    { units: '1 Unit', discount: '10% Off', price: '$10.00 USD', originalPrice: '$24.00 USD', note: '' },
    { units: '2 Units', discount: '20% Off', price: '$18.00 USD', originalPrice: '$24.00 USD', note: 'Most Popular' },
    { units: '3 Units', discount: '30% Off', price: '$24.00 USD', originalPrice: '$24.00 USD', note: '' }
];

const container = document.getElementById('cards-container');

function createCards() {
    cardData.forEach((data, index) => {
     
       
        const card = document.createElement('div');
        card.classList.add('option-card');
        card.innerHTML = `
            <div class="option-card-header">
                <div class="header-left">
                    ${data.note ? `<div class="note">${data.note}</div>` : ''}
                    <input type="radio" name="card-selection" id="card${index}" class="radio-button">
               
                <div class="header-middle">
                    <div class="unit">
                        <span>${data.units}</span>
                        <span class="discount">${data.discount}</span>
                    </div>
                    <div class="dropdowns">
                        <div>
                            <label for="size${index}">Size</label>
                            <select id="size${index}">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select> 
                            <select id="size${index}">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                        </div>
                        <div>
                            <label for="color${index}">Colour</label>
                            <select id="color${index}">
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                            </select> 
                            <select id="color${index}">
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                            </select>
                        </div>
                    </div>
                </div>
                 </div>
                <div class="price">
                    <div>${data.price}</div>
                    <div class="original-price">${data.originalPrice}</div>
                </div>
            </div>
        `;

        const radioButton = card.querySelector('.radio-button');
        if (data.note && !document.querySelector('.expanded')) {
            card.classList.add('expanded');
            radioButton.checked = true;
        }
    
        card.addEventListener('click', () => {

            const allCards = document.querySelectorAll('.option-card');
            allCards.forEach(c => {
                c.classList.remove('expanded');
                const radio = c.querySelector('.radio-button');
                if (radio) {
                    radio.checked = false; 
                }
            });

            card.classList.add('expanded');
            radioButton.checked = true;
        });

        container.appendChild(card);
    });
}


createCards();
