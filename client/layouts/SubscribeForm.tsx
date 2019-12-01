import React from 'react';

const SubscribeForm: React.FC<{}> = () => {
    return (
        <form
            action="https://csslayout.us4.list-manage.com/subscribe/post?u=77d0bf6497a2cdbb36f08587c&amp;id=e8a912009a"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate={true}
            style={{
                margin: 0,
            }}
        >
            <input
                type="email"
                name="EMAIL"
                placeholder="Email address"
                required={true}
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderBottomLeftRadius: '4px',
                    borderTopLeftRadius: '4px',
                    padding: '8px',
                    width: '200px',
                }}
            />
            <div style={{ left: '-5000px', position: 'absolute' }} aria-hidden="true">
                <input type="text" name="b_77d0bf6497a2cdbb36f08587c_e8a912009a" tabIndex={-1} />
            </div>
            <button
                type="submit"
                name="subscribe"
                style={{
                    backgroundColor: '#00449E',
                    borderBottomRightRadius: '4px',
                    borderColor: 'transparent',
                    borderTopRightRadius: '4px',
                    color: '#FFF',
                    padding: '8px 16px',
                }}
            >
                Subscribe
            </button>
        </form>
    );
};

export default SubscribeForm;
