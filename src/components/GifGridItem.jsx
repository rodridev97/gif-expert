
export const GifGridItem = ({ id, title, url }) => {
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt="gif-image" />
            <p>{ title }</p>
        </div>
    )
}
