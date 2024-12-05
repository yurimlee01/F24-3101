// Select all elements with class "viewMore"
const eleViewMores = document.querySelectorAll('.viewMore');
const eleCardContainer = document.getElementById('card-container');

// eleViewMore.addEventListener('click', () => {
//     eleCardContainer.appendChild(createModal());
// })
// Add event listeners to each "View More" link
eleViewMores.forEach(eleViewMore => {
    eleViewMore.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        eleCardContainer.appendChild(createModal()); // Append the modal to the container
        // Optionally you can open the modal here using JavaScript (if not using Bootstrap's automatic behavior)
        const modal = new bootstrap.Modal(document.getElementById('modalDownload'));
        modal.show();
    });
});

// generate modal for download button
function createModal() {

    // modal object
    const eleModal = document.createElement('div');
    eleModal.setAttribute('class', 'modal fade');
    eleModal.setAttribute('id', 'modalDownload');
    eleModal.setAttribute('tabindex', '-1');
    eleModal.setAttribute('aria-labelledby', 'exampleModalLabel');

    const eleModalDialog = document.createElement('div');
    eleModalDialog.setAttribute('class', 'modal-dialog');
    
    const eleModalContent = document.createElement('div');
    eleModalContent.setAttribute('class', 'modal-content');

    // header message
    const eleModalHeader = document.createElement('div');
    eleModalHeader.setAttribute('class', 'modal-header');
    const eleModalHeaderText = document.createElement('h3');
    eleModalHeaderText.setAttribute('class', 'modal-title fs-5');
    eleModalHeaderText.textContent = 'Want to view more of this application?';
    
    // close button at the top right conner
    const eleModalBtnClose = document.createElement('button');
    eleModalBtnClose.setAttribute('class', 'btn-close');
    eleModalBtnClose.setAttribute('data-bs-dismiss', 'modal');
    eleModalBtnClose.setAttribute('aria-label', 'Close');

    const eleModalBody = document.createElement('div');
    eleModalBody.setAttribute('class', 'moral-body');

    const eleModalMsg = document.createElement('p');
    eleModalMsg.textContent = 'Click Download for downloading .apk of the application.';

    const eleModalFooter = document.createElement('div');
    eleModalFooter.setAttribute('class', 'modal-footer');

    // close button on the bottum
    const eleModalBtnCloseInFtr = document.createElement('button');
    eleModalBtnCloseInFtr.setAttribute('class', 'btn btn-secondary');
    eleModalBtnCloseInFtr.setAttribute('data-bs-dismiss', 'modal');
    eleModalBtnCloseInFtr.textContent = 'Close';
    
    // download button inside footer
    const eleModalBtnDownloadInFtr = document.createElement('button');
    eleModalBtnDownloadInFtr.setAttribute('class', 'btn btn-primary');
    eleModalBtnDownloadInFtr.setAttribute('data-bs-dismiss', 'modal');
    eleModalBtnDownloadInFtr.textContent = 'Download';
    eleModalBtnDownloadInFtr.setAttribute('id', 'modal-download');
    
    // structure tags
    eleModalBody.appendChild(eleModalMsg);
    eleModalFooter.appendChild(eleModalBtnCloseInFtr);
    eleModalFooter.appendChild(eleModalBtnDownloadInFtr);

    eleModalHeader.appendChild(eleModalHeaderText);
    eleModalHeader.appendChild(eleModalBtnClose);

    eleModalContent.appendChild(eleModalHeader);
    eleModalContent.appendChild(eleModalBody);
    eleModalContent.appendChild(eleModalFooter);

    eleModalDialog.appendChild(eleModalContent);
    eleModal.appendChild(eleModalDialog);

    return eleModal;
}