console.log("I'm alive!!")


//HEADER

const hamburgerMenu = document.querySelector("#hamburger");
const menuItems = document.querySelector('.link-menu');
const toggleMenu = function () {
    menuItems.classList.toggle('open');
}
hamburgerMenu.addEventListener('click', toggleMenu);


// FOOTER

const caretDown = document.querySelector("#caret-down-plz"); 
const caretUp = document.querySelector("#caret-up"); 
const extendfooter = document.querySelector(".extend-footer")

const toggleFatFooter = function() {
    extendfooter.classList.toggle('open');
    // caretUp.classList.toggle('open');
    //does not work
    // caretDown.classList.toggle('hide');
}

caretDown.addEventListener('click', toggleFatFooter);






let footerMessage = [
// '​\"We are pow­er­ful because we have sur­vived, and that is what it is all about- sur­vival and growth.\" \n-Audre Lorde',
'\"We have always been very resilient — but our resilience doesn’t mean that our lives are ever ​easy.\" \n-Gwen Benaway', 
'You got this. No really, you got this.',
'\"They tried to bury us, but they did not know that we were seeds\"',
'You are brave, bold, and beautiful, and you are doing your best.',
];

function newMessage(){
    let randomNumber = Math.floor(Math.random()*footerMessage.length);
    document.querySelector("#footer-message").innerHTML = footerMessage[randomNumber];
}



// MOAR RESOURCES PAGE

function displaySWresource(){
    for (let i=0; i<document.querySelectorAll(".sw-resource").length; i++){
          document.querySelectorAll(".sw-resource")[i].classList.toggle('show-me-resource'); 
    }
}

function displayTransResource(){
    for (let i=0; i<document.querySelectorAll(".trans-resource").length; i++){
          document.querySelectorAll(".trans-resource")[i].classList.toggle('show-me-resource'); 
    }
}

function displayBIPOCResource(){
    for (let i=0; i<document.querySelectorAll(".bipoc-resource").length; i++){
        document.querySelectorAll(".bipoc-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayKinkResource(){
    for (let i=0; i<document.querySelectorAll(".kink-resource").length; i++){
        document.querySelectorAll(".kink-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayPolyResource(){
    for (let i=0; i<document.querySelectorAll(".poly-resource").length; i++){
        document.querySelectorAll(".poly-resource")[i].classList.toggle('show-me-resource'); 
}
}

function displayAllResource(){
    for (let i=0; i<document.querySelectorAll(".resource-square").length; i++){
        document.querySelectorAll(".resource-square")[i].classList.toggle('show-me-resource'); 
}
}


function displayAddResourceForm() {
    document.querySelector('#add-resource-form').style.display = "block";
    document.querySelector('#show-resources-form-button').style.display = "none";   

}

function displayThankYouResource(){
    document.querySelector('#thank-you-resource').style.display = "block";
}


// RESULTS 

function displayResultsAsGrid() {
    document.querySelector('#display-results-grid-div').style.display = "block";
    document.querySelector('#search-results-boxes-div').style.display = "none";
}

function displayResultsAsBoxes() {
    document.querySelector('#display-results-grid-div').style.display = "none";
    document.querySelector('#search-results-boxes-div').style.display = "block";
}


//  ADD TO THE LIST

function displayClientForm() {
    document.querySelector('.client-add-provider').classList.add('show-me-resource');
    document.querySelector('#provider-display-button').style.display = "none";
    // document.querySelector('.add-provider-submit').style.display = "block";
    document.querySelector('#who-button-horizontal').classList.remove('button-align');
    document.querySelector('.spacer2').style.display = "none";
    document.querySelector('#who-button-horizontal').classList.add('center-me');
    document.querySelector('#client-added-info-check').checked=true;
}

function displayProviderForm() {
    document.querySelector('.provider-add-provider').classList.add('show-me-resource');
    document.querySelector('#client-display-button').style.display = "none";
    // document.querySelector('.add-provider-submit').style.display = "block";
    document.querySelector('#who-button-horizontal').classList.remove('button-align');
    document.querySelector('#who-button-horizontal').classList.add('center-me');
    document.querySelector('#provider-added-info-check').checked=true;
}




// function displayClientForm() {
//     // this displays the form version
//     document.querySelector('.client-add-provider').classList.add('show-me-resource');
//     // this should display submit button but does not
//     document.getElementById('add-provider-submit').classList.add('show-me-resource');
//      document.querySelector('#add-provider-submit').classList.add('show-me-resource')
// }


//display more options to click for ratings display

function display_more_i_am_options() {
    document.querySelector('#who-are-you-2').style.display="block"
}


// display rating options when identity is clicked

let checkBoxQueer = document.getElementById("queer_check");
let queerRating = document.getElementById("queer_rating");

function showQueerRating() {
    
    if (checkBoxQueer.checked == true){
        queerRating.style.display = "block";
    } else {
        queerRating.style.display = "none";
    }
}

let checkBoxTrans = document.getElementById("trans_check");
let transRating = document.getElementById("trans_rating");

function showTransRating() {
    if (checkBoxTrans.checked == true){
        transRating.style.display = "block";
    } else {
        transRating.style.display = "none";
    }
}

let checkBoxPoly = document.getElementById("nonmono_check");
let polyRating = document.getElementById("poly_rating");
function showPolyRating() {
    if (checkBoxPoly.checked == true){
        polyRating.style.display = "block";
    } else {
        polyRating.style.display = "none";
    }
  }

let checkBoxKink = document.getElementById("kink_check");
let kinkRating = document.getElementById("kink_rating");  
function showKinkRating() {
    if (checkBoxKink.checked == true){
        kinkRating.style.display = "block";
    } else {
        kinkRating.style.display = "none";
    }

}

let checkBoxSW = document.getElementById("sw_check");
let SWRating = document.getElementById("sw_rating");
function showSWRating() {
    if (checkBoxSW.checked == true){
        SWRating.style.display = "block";
    } else {
        SWRating.style.display = "none";
    }
}

let checkBoxBIPOC = document.getElementById("bipoc_check");
let bipocRating = document.getElementById("bipoc_rating");
function showBIPOCRating() {
    if (checkBoxBIPOC.checked == true){
        bipocRating.style.display = "block";
    } else {
        bipocRating.style.display = "none";
    }
}

let checkBoxADHD = document.getElementById("adhd_check");
let adhdRating = document.getElementById("adhd_rating");
function showADHDRating() {
    if (checkBoxADHD.checked == true){
        adhdRating.style.display = "block";
    } else {
        adhdRating.style.display = "none";
    }
}

let checkBoxAutism = document.getElementById("autism_check");
let autismRating = document.getElementById("autism_rating");
function showAutismRating() {
    if (checkBoxAutism.checked == true){
        autismRating.style.display = "block";
    } else {
        autismRating.style.display = "none";
    }
}

let checkBoxTrauma = document.getElementById("trauma_check");
let traumaRating = document.getElementById("trauma_rating");
function showTraumaRating() {
    if (checkBoxTrauma.checked == true){
        traumaRating.style.display = "block";
    } else {
        traumaRating.style.display = "none";
    }
}

let checkBoxDisability = document.getElementById("disability_check");
let disabilityRating = document.getElementById("disability_rating");
function showDisabilityRating() {
    if (checkBoxDisability.checked == true){
        disabilityRating.style.display = "block";
    } else {
        disabilityRating.style.display = "none";
    }
}

let checkBoxSubstanceUse = document.getElementById("substance_use_check");
let substanceUseRating = document.getElementById("substance_use_rating");
function showSubstanceUseRating() {
    if (checkBoxSubstanceUse.checked == true){
        substanceUseRating.style.display = "block";
    } else {
        substanceUseRating.style.display = "none";
    }
}




let additionalRating = document.getElementById("additional_rating_info");

function showAdditionalRating() {
    if ((checkBoxQueer.checked == true) || (checkBoxTrans.checked == true) || (checkBoxPoly.checked == true)  (checkBoxKink.checked == true) ||  (checkBoxSW.checked == true) ||  (checkBoxBIPOC.checked == true)){
        additionalRating.style.display = "block";
    } else {
        additionalRating.style.display = "none";
    }
}

function display_insurance_options(){
    document.querySelector('.insurance-box').style.display = "flex";
    document.querySelector('.show-insurance-button').style.display = "none";
}




function displayThankYouAdd(){
    document.querySelector('.thank-you-add').style.display = "block";
}














