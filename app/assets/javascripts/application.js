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


function renderJob( job ) {

  job.rsp.listings.listing.forEach(function(job){
    var $container    =    $('#jobs');

    let $div = $('<div class="card">')
    // let $img = $('<img class="card-img-top">').attr('src',job.company.logo)
    let $div2 = $('<div class="card-block">')
    let $h4  = $('<h4>').text(job.category.name)
    let $p   = $('<p>').text("Company name :"+ " "+job.company.name)
    let $p2  = $('<p>').text("Job Type :"+ job.type.name)
    let $p3  = $('<p>').text("Job Location :"+ job.company.location.name)
    let $a   = $('<a target="_blank">').attr('href', job.apply_url).text("Apply")
    $div2.append($h4,$p,$p2,$p3,$a)
    $div.append($div2)
    $container.append($div)



    // let $divCard      =    $('<card class="card job">')
    // let $ulCard       =    $('<ul class="list-group list-group-flush">')
    // let $Categoryli   =    $('<li class="list-group-item">').text("Job Title: "+job.category.name)
    // let $Typeli       =    $('<li class="list-group-item">').text("Job Type: "+job.type.name)
    // let $locationLi   =    $('<li class="list-group-item">').text("Job Location: "+job.company.location.name)
    // let $companyName  =    $('<li class="list-group-item">').text("Company name:"+job.company.name)
    // let $companyUrl   =    $('<li class="list-group-item">').text("Company website:"+job.company.url)
    // let $companyLogo  =    $('<li class="list-group-item">').text("Company Logo: "+job.company.logo)
    // let $title        =    $('<li class="list-group-item">').text("Job Title: "+job.title)
    // let $description  =    $('<p>').text("Job Description"+job.description)
    // let $applyUrl     =    $('<li class="list-group-item">').text("Apply here: "+job.apply_url)
    // let $postedDate   =    $('<p>').text("Job Posted Date:"+job.post_date)

    // $ulCard.append($Categoryli,$Typeli,$locationLi,$companyName,$companyUrl,$companyLogo,$title, $description, $applyUrl, $postedDate)
    // $divCard.append($ulCard)
    // $container.append($divCard)
  })


}

function getjobs() {

  let  usersearch = {}



  $('#usersearch').on('click',function(){
  $userInput1 = $('#skill1').val()
  $userInput2 = $('#skill2').val()
  $userInput3 = $('#skill3').val()




  usersearch['keywords'] = $.trim($userInput1) + "," + $.trim($userInput2) + "," +$.trim($userInput3)

  console.log(usersearch)
  let $url ='keywords=' + usersearch["keywords"]
  $.getJSON('/jobs?'+$url).done(function( jobs ) {
    jobs.rsp.listings.listing.forEach(function( job ) {
      console.log("inside of getjobs", job)
      renderJob( jobs );
    })
  })

})

}



$(function() {
  getjobs();
})
