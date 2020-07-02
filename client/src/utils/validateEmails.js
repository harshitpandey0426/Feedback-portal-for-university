const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// we want to find the list of invalid email to let the user know that entered email is invalid
export default ( emails ) => {
    const invalidEmails = emails
    .split(',')//emails will be entered comma seperated so splited on it
    .map(email => email.trim())//trim to remove extra spaces on either side of email
    //use map so as to map over every single email and trim it
    // how map function work:it takes the value from the array(email here) and whatever we return from this function will be added to a new array and this new array will eventually be returned
    .filter(email => re.test(email) === false ) //catch invalid emails using reg ex, seen from email regex.com


    if(invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return null;

};