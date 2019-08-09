
 function EmailVerification(userDetails){
    var image = null;
    var url = null;
   if(process.env.NODE_ENV != "production"){
       url = "http://localhost:8000/login"
       image = "https://firebasestorage.googleapis.com/v0/b/talentexcel-1.appspot.com/o/talentexcel%2Ftalent-excel-logo.png?alt=media&token=5dd78ecb-dc4a-40f3-8c82-1aca6d6ff6e6"
   }else{
       url = "https://talentexcel.com/login"
       image = "https://talentexcel.com/static/talent-excel-logo-68534db6d28d18d5ef7936994147c7cd.png"
   }
   const email = `
   <!DOCTYPE html>
   <body style="background-color: #EDF0F3">
       <section style="background-color:#fff;width:90%;margin:auto">
           <section style="width: 90%;margin:auto;padding:1rem;">
               <img src=${image} style="display:table;margin: 2rem auto auto auto;width:12rem">
           </section>
          <section style="width: 90%;margin:auto;padding:1rem;">
               <table style="margin: auto">
                       <tbody>
                           <tr><td>
                               <section>
                                       <h2 style="font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:200;text-align: -webkit-center;font-size: 2rem;">Thanks for signing up.</h2>
                                       <h4 style="font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:200;text-align: -webkit-center;">Please confirm your email address.</h4>
                               </section>
                           </td></tr>
                           <tr>
                               <td>
                                   <a href="${url}/${userDetails}" style="text-decoration:none;cursor:pointer;" target="_blank">
                                   <button type="button" style="cursor:pointer;margin:1rem auto; display:-webkit-box;padding:1rem;border-radius:2rem;color:#fff;background-color:#115d56;">Confirm your email</button>
                                   </a>
                               </td>
                           </tr>
                       </tbody>
                   </table>
          </section>
                   <table style="margin: auto">
                       <tbody>
                           <tr><td>
                               <p style="text-align: -webkit-center;">You're receiving this email because you created an account on Talent Excel using this address.</p>
                           </td></tr>
                           <tr>
                               <td>
                                   <p style="text-align: -webkit-center;">© Talent Excel | All Rights Reserved | Terms of Use and Privacy</p>
                               </td>
                           </tr>
                       </tbody>
                   </table>
       </section>
   </body>
   `
   return email
}

export { EmailVerification }