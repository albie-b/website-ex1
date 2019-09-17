$(document).on('submit', '#search-form', function(e) {
  e.preventDefault();
  var options = {
    term: $('#search-term').val(),
    resultsContainer: $('#search-results')
  };
  findImagesOnGoogle(options);
});
