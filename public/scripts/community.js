/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllCommunities(fields) {
  fetch("/api/communities").then(showResponse).catch(showResponse);
}

function viewCommunity(fields) {
  fetch(`/api/communities/${fields.communityName}`)
    .then(showResponse)
    .catch(showResponse);
}

function joinCommunity(fields) {
  fetch(`/api/communities/${fields.communityId}?action=join`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function leaveCommunity(fields) {
  fetch(`/api/communities/${fields.communityId}?action=leave`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function createCommunity(fields) {
  const body = {
    name: fields.communityName,
  };
  console.log(body);
  fetch("/api/communities", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function changeCommunityOwner(fields) {
  fetch(`/api/communities/${fields.communityId}/${fields.username}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function deleteCommunity(fields) {
  fetch(`/api/communities/${fields.communityId}`, { method: "DELETE" })
    .then(showResponse)
    .catch(showResponse);
}
