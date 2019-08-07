
 function ForgotPassword(userDetails){
     var image = null;
     var url = null;
    if(process.env.NODE_ENV != "production"){
        url = "http://localhost:8000"
        image = "https://firebasestorage.googleapis.com/v0/b/talentexcel-1.appspot.com/o/talentexcel%2Ftalent.png?alt=media&token=bf3102df-54de-490f-a7a2-948729234027"
    }else{
        url = "https://talentexcel.com"
        image = "https://firebasestorage.googleapis.com/v0/b/talentexcel-1.appspot.com/o/talentexcel%2Ftalent.png?alt=media&token=bf3102df-54de-490f-a7a2-948729234027"
    }
    const email = `
            <table style="margin: 35px auto auto auto;">
            <tbody>
                <tr>
                <td>
                <section style="display: table;margin: auto; display: -webkit-box">
                        <img alt="talent.png" 
                            src=${image}
                        />
                    <p style="font-size: xx-large;margin: 2rem;"><b>Hi ${userDetails.firstName}</b></p>
                </section>
                </td>
            </tr>
                <tr><td><p style="font-size: larger;">Reset your password, and we'll get you on your way.</p></td></tr>
                <tr><td><p style="font-size: larger;">To change your Talent Excel password, click the link below.</p></td></tr>
                <tr><td><br/><a href="${url}/reset-password/${userDetails.uid}" style="text-decoration: none; color: #066d66; color: crimson; font-size: larger;">Reset my password</a></td></tr>
                <tr><td><p style="font-size: larger;">This link will expire in 24 hours, so be sure to use it right way.</p></td></tr>
                <tr><td>Thank you for using Talent Excel</td></tr>
                <tr><td>The Talent Excel Team.</td></tr>
            </tbody>
        </table>
    `
    return email
}

export { ForgotPassword }