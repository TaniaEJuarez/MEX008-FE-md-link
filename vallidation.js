function fileValidation(){
    const fileInput = document.getElementById('file');
    const filePath = fileInput.value;
    const allowedExtensions = /(.md)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Favor de cargar el archivo con la extensión correcta.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}