function searchCards(query) {
  let q = new URLSearchParams(query);
  return fetch('http://localhost:3000/api/search/' + q.toString())
}

searchCards().then((res) => res.json()).then((res) => {
  if (res && res.data) {
    let table = document.getElementById('card-display-body');

    clearTable(table)
    renderCards(res.data, table)
  }
})

function renderCard(cardData, id) {
  console.log(cardData)
  let card = document.createElement('tr')
  let el;

  card.setAttribute('class', getDisplayColor(cardData.type_line))

  el = document.createElement('td') //id
  el.textContent = id
  el.setAttribute('scope', 'row')
  card.append(el)

  el = document.createElement('td') //name
  el.textContent = cardData.name
  card.append(el)

  el = document.createElement('td') //type type_line
  el.textContent = cardData.type_line
  card.append(el)

  el = document.createElement('td') //legality legality.standard
  el.textContent = cardData.legalities.standard
  card.append(el)

  return card
}

function renderCards(cards, table) {

  cards.forEach((card, id) => {
    table.append(renderCard(card, id + 1))
  })
}

function clearTable(table) {
  // table.children.forEach(child => child.remove()) //clear items
  while (table.children.length) {
    table.children[0].remove()
  }
}

function getDisplayColor(type) {
  if (type.includes('Legendary')) {
    return 'table-warning'
  }
  if (type.includes('Land')) {
    return 'table-info'
  }
  if (type.includes('Creature')) {
    return 'table-secondary'
  }
  if (type.includes('Sorcery')) {
    return 'table-primary'
  }
}

