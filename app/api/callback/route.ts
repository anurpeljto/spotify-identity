import { NextResponse, NextRequest } from "next/server";

export const GET = async(req: NextRequest) => {
    try {
        const {searchParams} = new URL(req.url);
        const code = searchParams.get('code');
        const redirect_uri = process.env.REDIRECT_URI;
        if (!redirect_uri) {
            return new NextResponse('Missing environment variables: REDIRECT_URI', { status: 500 });
        }
        if(!code) {
            return new NextResponse('Missing code!', {status: 500});
        }

        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri : redirect_uri
        })

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${process.env.BASE_64}`
            },
            body: body.toString()
        });

        const data = await response.json();
        const token = data.access_token;
        const token_type = data.token_type;

        const redirectUrl = new URL(`/callback`, req.url);
        redirectUrl.searchParams.set('token', token);
        redirectUrl.searchParams.set('type', token_type);
        return NextResponse.redirect(redirectUrl.toString());
    } catch (error: any) {
        return new NextResponse('Error: ' + error.message, {status: 500});
    }
}