function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

function toggleMemeImageField() {
    var memeImageField = document.getElementById('memeImageField');
    var memeRadioButton = document.getElementById('meme');
    memeImageField.style.display = memeRadioButton.checked ? 'block' : 'none';
}

document.getElementById('meme').addEventListener('change', toggleMemeImageField);
document.getElementById('standard').addEventListener('change', toggleMemeImageField);