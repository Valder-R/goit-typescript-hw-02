import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { UnsplashImage } from "../../fetchData";


type Props = {
    pictureList: UnsplashImage[];
    onImageClick: (picture: UnsplashImage) => void;
}

export default function ImageGallery({ pictureList, onImageClick}: Props) {
    return (
        <ul className={css.myList}>
            {pictureList.map(picture => {
                return (
                    <li key={picture.id} onClick={() => {
                        onImageClick(picture);
                    }}>
                        <ImageCard picture={picture} />
                    </li>
                )
            })}
        </ul>
    )
}