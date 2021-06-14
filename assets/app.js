/*
"use strict";

var i;
const githubContent = document.querySelector("#test-dummy");
const userStatus = document.querySelector("#user-status");
const userBio = document.querySelector("#user-bio");
const userStats = document.querySelector("#user-stats");

// Needed so we don't bump into any CORS errors
$.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});

// Fetch stats from https://api.github.com (will return followers, following, stars, etc.)
fetch("https://api.github.com/users/leahcimto")
    .then(response => response.json())
    .then(data => {
        userBio.innerText = data.bio;
        userStats.innerText =
          "Followers: "    + data.followers + " | " +
          "Following: "    + data.following + " | " +
          "Stars gained:"
        ;
    })
;
// Fetch the repos you have and their stats (used to count all the stars you've gained)
// (Note that gist stars aren't recorded.)
fetch("https://api.github.com/users/leahcimto/repos")
    .then(response => response.json())
    .then(data => {
        var starsGained = 0;
        for (i = 0; i < data.length; i++) {
            starsGained += data[i].stargazers_count;
        }
        userStats.innerHTML = "<b>" + userStats.innerText + " " + starsGained + "</b>";
    })
;

// Fetch ALL the content from https://github.com/leahcimto, and get the status from there since the github API doesn't provide your status :(
// This method is slow and requires like 3x loading time, but I think that it's the only way to do it.
$.get({
    crossOrigin: true,
    url: 'https://github.com/leahcimto',
    success: function (response) {
        githubContent.innerHTML = response;
        try {
            userStatus.innerHTML =
                githubContent.querySelector("div[data-team-hovercards-enabled]").innerText;
        } catch(err) {
            userStatus.innerHTML = null;
        }
        githubContent.innerHTML = null;
    }
});
// Also, the method of fetching is a bit different than the way all the other data is being fetched because github.com's CORS Policy is more strict than
// api.github.com's one.

*/
