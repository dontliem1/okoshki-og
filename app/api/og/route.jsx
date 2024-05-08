import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        const title = searchParams.get('t')?.slice(0, 128);
        const desc = searchParams.get('d')?.slice(0, 128);
        const path = searchParams.get('p');
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 25,
                        lineHeight: '35px',
                        color: '#2f2525',
                        background: '#ffe9b2',
                        width: '100%',
                        height: '100%',
                        padding: '50px 200px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {path && <img
                        width="170"
                        height="170"
                        src={`https://okoshki.me/storage/app/uploads/public/${path}`}
                        style={{
                            borderRadius: 85,
                        }}
                    />}
                    <h1 style={{ fontSize: 75, lineHeight: '85px', fontWeight: 'bold', margin: '30px 0 15px' }}>{title}</h1>
                    {desc}
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        );
    } catch (e) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}