import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { API } from '../../config';


const Google = ({ informParent = f => f }) => {
    const responseGoogle = response => {
        console.log(response.tokenId);
        axios({
            method: 'POST',
            url: `${API}/google-login`,
            data: { idToken: response.tokenId }
        })
            .then(response => {
                console.log('this was a succesful login', response);
                // inform parent component
                informParent(response);
            })
            .catch(error => {
                console.log('GOOGLE SIGNIN ERROR', error.response);
            });
    };
    return (
        <div>
            <GoogleLogin
                clientId={"25703732402-g72j15t1k7uk4mntt8olel9q806r1jvn.apps.googleusercontent.com"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                    Login with Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Google;