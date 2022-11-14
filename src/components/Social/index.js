import './social.css';

export function Social( { children, url, title} ){
    return(
        <a href={url} rel="noopener noreferrer" className='social' target="_blank" 
        title={title}>
            { children }
        </a>
    )
}