function getFriends(fields) {
  fetch(`/api/friends/${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}
