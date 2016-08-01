// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function renderJob(job) {
    console.log(job)
    let $container = $('#jobs');
    let $div = $('<div class="card">')
    let $div2 = $('<div class="card-block">')
    let $h4 = $('<h4>').text(job.category.name)
    let $p = $('<p>').text("Company name :" + " " + job.company.name)
    let $p2 = $('<p>').text("Job Type :" + job.type.name)
    let $p3 = $('<p>').text("Job Location :" + job.company.location.name)
    let $p4 = $('<p>').text("Job posted date:" + job.post_date)
    let $a = $('<a target="_blank">').attr('href', job.apply_url).text("Apply")
    $div2.append($h4, $p, $p2, $p3, $p4, $a)
    $div.append($div2)
    $container.append($div)

}

function renderGuestJob(job) {

    let $container = $('#guest-jobs');
    let $div = $('<div class="card">')
    let $div2 = $('<div class="card-block">')
    let $h4 = $('<h4>').text(job.category.name)
    let $p = $('<p>').text("Company name :" + " " + job.company.name)
    let $p2 = $('<p>').text("Job Type :" + job.type.name)
    let $p3 = $('<p>').text("Job Location :" + job.company.location.name)
    let $p4 = $('<p>').text("Job posted date:" + job.post_date)
    let $a = $('<a target="_blank">').attr('href', job.apply_url).text("Apply")
    $div2.append($h4, $p, $p2, $p3, $p4, $a)
    $div.append($div2)
    $container.append($div)

}



function getGuestJobs(){
  $.getJSON('/jobs?keywords=react,html,css,ruby,JavaScript,mongodb,postgresql').done(function(jobs) {
    jobs.rsp.listings.listing.forEach(function(job) {
                renderGuestJob(job);
            })
        })
}

function getjobs() {

    let usersearch = {}

    $('#usersearch').on('click', function() {
        $userInput1 = $('#skill1').val()
        $userInput2 = $('#skill2').val()
        $userInput3 = $('#skill3').val()

        usersearch['keywords'] = $.trim($userInput1) + "," + $.trim($userInput2) + "," + $.trim($userInput3)

        let $url = 'keywords=' + usersearch["keywords"]
        $.getJSON('/jobs?' + $url).done(function(jobs) {
            jobs.rsp.listings.listing.forEach(function(job) {
                renderJob(job);
            })
        })

    })

}


$(function() {
    getjobs();
    getGuestJobs();
})
