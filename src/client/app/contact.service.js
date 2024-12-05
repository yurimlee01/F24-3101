export function contactService () {
    let contact = localStorage.getItem('members');

    if (!contact) {
        localStorage.setItem('members', JDON.stringify([]));
    }
}

let params = new URL(document.location).searchParams;
let nameInSearch = params.get('name');

// store contact info in local storage
contactService.prototype.saveContact = function ( contact ) {
    const contacts = contactService.prototype.getContact();
    // see if this animal already exist
    if(contacts.find(c => c.name == contact.name)){
        // tell the caller we're not going to save this
        return false;
    }
    // if it doesn't, add it to the array
    contacts.push( contact );
    // and save it in storage again
    localStorage.setItem('members', JSON.stringify(contacts));
    // tell the caller all was well
    return true;
}

// list stored contact
contactService.prototype.getContact = function () {
    let members;
    // if there is, get a ref to this array (JSON.parse)
    if (localStorage.getItem('members')) {
        members = JSON.parse(localStorage.getItem('members'));
    } else {
        // if not, create a new empty array
        members = [];
    }
    //return the list one way or another 
    return members;
}

// method to validate contact form fields
contactService.prototype.validateContactForm = function ( form ) {
    let valid = true;

    // test if name is valid
    const eleNameError = form.name.nextElementSibling;
    if (document.getElementById('name').value === '') {
        eleNameError.classList.remove('d-none');
        eleNameError.textContent = 'Please enter your name.';
        valid = false;
    } else if (!nameInSearch) {
        eleNameError.classList.add('d-none');

    }

    // test if phone is valid
    if (document.getElementById('phone').value === '') {
        form.phone.nextElementSibling.classList.remove('d-none');
        form.phone.nextElementSibling.textContent = 'Please enter your phone number.';
        valid = false;
    } else if (!nameInSearch) {
        form.phone.nextElementSibling.classList.add('d-none');
    }

    // test if email is valid
    if (document.getElementById('email').value === '') {
        form.email.nextElementSibling.classList.remove('d-none');
        form.email.nextElementSibling.textContent = 'Please enter your email address';
        valid = false;
    } else if (!nameInSearch) {
        form.email.nextElementSibling.classList.add('d-none');
    }

    // test if message is valid
    if (document.getElementById('message').value === '') {
        form.message.nextElementSibling.classList.remove('d-none');
        form.message.nextElementSibling.textContent = 'Please provide a message';
        valid = false;
    } else if (!nameInSearch) {
        form.message.nextElementSibling.classList.add('d-none');
    }

    return valid;
}