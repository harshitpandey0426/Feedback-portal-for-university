const keys = require('../../config/keys');

// survey.body contains body of our email
// will put styling in our feedback form
//defined redirect domain in keys
module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align : center;">
                    <h3>I'd like your input!</h3>
                    <p>please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a> 
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>
        `;
};