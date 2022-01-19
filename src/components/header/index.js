/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src="https://about.netflix.com/images/logo.png" alt="NetFlix"/>
                </a>
            </div>
        </header>
    );
}