import { NextResponse } from "next/server";

export const GET = async() => {
    const state = '0lTAixFVRY8ckUT6';
    const scope = 'user-read-private user-read-email user-top-read';
    const client_id = process.env.CLIENT_ID
    const redirect_uri = process.env.REDIRECT_URI;


    if (!client_id || !redirect_uri) {
        return new NextResponse('Missing environment variables: CLIENT_ID or REDIRECT_URI', { status: 500 });
    }
    
    const params = {
        response_type: 'code',
        client_id : client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }

    const queryParams = new URLSearchParams(params).toString();
    console.log(queryParams);
    return NextResponse.redirect('https://accounts.spotify.com/authorize?' + queryParams
    )
}