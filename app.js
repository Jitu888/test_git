const nodemailer = require('nodemailer')
const {google} = require('googleapis')


const CLIENT_ID =''
const CLIENT_SECRET =''
const REDIRECT_URI =''
const REFRESH_TOKEN='1//04TAEEcstUoUPCgYIARAAGAQSNwF-L9Ir-YAOUC8R-gIyAWINHCYOVMeUlrc63bU3fKNsi-byV4zCf1jJXbFOis2GalcVD924tQU'



const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,  CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token : REFRESH_TOKEN })



 async function sendMail(){
    try {
        const accessToken = await oAuth2Client.getAccessToken()
        

        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                type:'OAuth2',
                user:'jitendra7518888@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken:accessToken

            }
        })
    


        const mailOptions = {
            from:'jitendra7518888@gmail.com',
            to: '13399jv@gmail.com,mm7853355@gmail.com',
            subject: "hello from gmail",
            text: 'hello friend',
            html: '<h1>hello friend</h1>'

        };
        

        const result =  await  transport.sendMail(mailOptions)
        return result
        
    } catch (error) {
        return error
        
    }

}

sendMail().then(result=> console.log("email is sent")).catch(error=> console.log(error.message))