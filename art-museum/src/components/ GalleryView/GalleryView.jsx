import { useParams, Navigate } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

export default function GalleryView (props) { 
    let { galleryId } = useParams();
    let { galleries } = props
    console.log("HERE", galleries[0].objects)
    const matchedId = galleries.find(ele => ele.id == galleryId);
    // console.log(matchedId)
    // console.log(galleries)
    // console.log('HEY', galleryId)
    return (
        <>
        <h1>Hello from GalleryView</h1>
        <h2>{matchedId ? matchedId.name : ( <Navigate to='/' /> ) }</h2>
        {matchedId.objects.map(art =>  (
            <ArtImageTile art={art} />
            )
        )}
        </>
    ) 
}