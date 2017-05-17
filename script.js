$(document).ready(function() {
	$('#container').append('<table></table>');
	for (i = 0; i < 16; i++) {
		$('table').append('<tr></tr>');}
	for (i = 0; i < 16; i++) {
		$('tr').append('<td></td>');
	};

	$('td').on("mouseenter",function() {
		$(this).css("background-color","red");
	});

	$('#reset').on('click', function() {
		$('td').css("background-color","6da3f9")
	});
});