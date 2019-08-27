let fileInput = document.getElementById('fileInput');
let gravDataArea = document.getElementById('gravDataArea');
let reload_button = document.getElementById("reload_button");
let submit_button = document.getElementById("submit_button");

jQuery(document).ready(function () {
	jQuery('input.digit').live('input keyup',function(e){ jQuery(this).val(jQuery(this).val().replace( /[^\d]/g ,'')); });
});

function readGravData() {
	 fileInput.addEventListener('change', function() {
			let file = fileInput.files[0];
			let textType = /text.*/;

			if (file.type.match(textType)) {
				let reader = new FileReader();

				reader.onload = function() {
					gravDataArea.innerText = reader.result;
					fileInput.disabled = true;
					submit_button.disabled = false;
				};

				reader.readAsText(file);
			} else {
				gravDataArea.innerText = "File not supported!";
			}
			reload_button.disabled = false;
			gravDataArea.readOnly = true;
		});
}
