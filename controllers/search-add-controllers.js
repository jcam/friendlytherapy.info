
module.exports = {

    // name_of_function: (request, response) => {
    //     response.something('pages/there-is-no-page-here');
    // },
    
    add_a_provider: (request, response) => {
        response.render('pages/add-to-the-list');
    },

    find_a_provider: (request, response) => {
        response.render('pages/find-a-therapist-search');
    },




}