function getFeed(fields) {
  fetch(`/api/feed/${fields.feedId}`).then(showResponse).catch(showResponse);
}
