const api = '/.netlify/functions';

async function add(gameId, token) {
  await fetch(api + '/add-wishlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ gameId })
  });
}
