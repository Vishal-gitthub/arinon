import React, { useEffect } from 'react';

const IgReel2 = () => {
    useEffect(() => {
        // Load Instagram embed script if it's not already loaded
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                window.instgrm.Embeds.process(); // Process the embed content after script is loaded
            };
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <blockquote
            className='instagram-media'
            data-instgrm-permalink='https://www.instagram.com/reel/DDPsSUVzHV6/?utm_source=ig_embed&utm_campaign=loading'
            data-instgrm-version='14'
            style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '300px',
                minWidth: '270px',
                padding: '0',
                width: '99.375%',
                WebkitCalc: 'calc(100% - 2px)',
                calc: 'calc(100% - 2px)',
            }}
        >
            <div style={{ padding: '16px' }}>
                <a
                    href='https://www.instagram.com/reel/DDPsSUVzHV6/?utm_source=ig_embed&utm_campaign=loading'
                    style={{
                        background: '#FFFFFF',
                        lineHeight: '0',
                        padding: '0 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                    target='_blank'
                >
                    {/* Additional content like profile picture, description etc. */}
                    <div style={{ padding: '19% 0' }}></div>
                </a>
                <p
                    style={{
                        color: '#c9c8cd',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: '17px',
                        marginBottom: '0',
                        marginTop: '8px',
                        overflow: 'hidden',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <a
                        href='https://www.instagram.com/reel/DDPsSUVzHV6/?utm_source=ig_embed&utm_campaign=loading'
                        style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            textDecoration: 'none',
                        }}
                        target='_blank'
                    >
                        A post shared by Aakanksha Bhatt Vohra (@musingsofaakanksha)
                    </a>
                </p>
            </div>
        </blockquote>
    );
};

export default IgReel2;
