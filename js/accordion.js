$(document).ready(function() {
	// $('#content ul li:first-child a').addClass('active')
	
	// $('#content section').first().addClass('show')

	$('#content ul li a').on('click', function() {
		if (!$(this).hasClass('active')) {
		var id = $(this).attr('href')
		$('#content ul li a').removeClass('active')
		$(this).addClass('active')
		$('#content section').removeClass('show')
		$(id).addClass('show')
		}
	})
})