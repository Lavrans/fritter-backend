/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllRepliesToFreet(fields) {
  fetch(`/api/replies/freet/${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllRepliesToReply(fields) {
  fetch(`/api/replies/reply/${fields.replyId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createReplyToFreet(fields) {
  fetch(`/api/replies/freet/${fields.freetId}`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function createReplyToReply(fields) {
  fetch(`/api/replies/reply/${fields.replyId}`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function editReply(fields) {
  fetch(`/api/replies/${fields.replyId}`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function deleteReply(fields) {
  fetch(`/api/replies/${fields.replyId}`, { method: "DELETE" })
    .then(showResponse)
    .catch(showResponse);
}
