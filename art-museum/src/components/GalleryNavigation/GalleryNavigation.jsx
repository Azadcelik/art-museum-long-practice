import { NavLink } from "react-router-dom";

export default function GalleryNavigation(props) {
    const { galleries } = props;
    // console.log("HERE", props.galleries)

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/'>Home</NavLink>
            {galleries.map(gallery => {
                // console.log(gallery)
               return <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
            })}

        </nav>

    ) 
}