import { contactService } from "./contact.service.js";

document.getElementById('contact-form')
.addEventListener('submit', formSubmitHandler);

function formSubmitHandler ( event ) {
    // prevent Submit makes it default
    event.preventDefault();

    const contactForm = event.target;
    const eleNameError = document.getElementById('name-error');
    const valid = contactService.prototype.validateContactForm(contactForm);
    
    if (valid) {
        
        // create a new Product object and store it in local storage.
        let member = {
            name: contactForm.name.value,
            phone: contactForm.phone.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };
        
        if (!contactService.prototype.saveContact(member)) {
            // put an error msg under the animal name field
            eleNameError.classList.remove('d-none');
            eleNameError.textContent = 'This member already exists';
        } else {
            console.log('good, store contact info');
        
            // log input fields
            console.log(
                `Name: ${document.getElementById('name').value}\n` +
                `Phone: ${document.getElementById('phone').value}\n` +
                `Email: ${document.getElementById('email').value}\n` +
                `Message: ${document.getElementById('message').value}`);
            
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
        }

    } else {
        console.log('not good, don\'t do a thing');
    }
};
