import css from "./ImageCard.module.css";
import { UnsplashImage } from "../../fetchData";
type Picture = {
    picture: UnsplashImage;
}

export default function ImageCard({ picture }: Picture) {
    return (
        <div className={css.myCard}>
            <img src={picture.urls.small} alt={picture.alt_description || 'Image'} className={css.myImage } />
        </div>
    )
}