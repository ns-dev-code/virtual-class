import React   from "react";
import { Main } from '../../components/shared';
import SEO from '../../components/site-meta-data';
import ForgotPass from '../../components/forgot-password';

function PasswordReset(props){

    return(
        <React.Fragment>
            <SEO/>
            <Main>
              <ForgotPass />
            </Main>
        </React.Fragment>
    )
}
export default PasswordReset