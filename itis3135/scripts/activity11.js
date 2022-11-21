//source : https://api.jqueryui.com/accordion/#option-active

$(document).ready(function() {
    $("#accordion").accordion( {
         //the size of the tab is the height of content
         heightStyle: 'content',

        //make all tabs collapseable so nothing can be open
        collapsible: true,
        active: false
       
    });
});