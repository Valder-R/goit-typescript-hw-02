import Modal from 'react-modal';
import css from "./ImageModal.module.css"
import { UnsplashImage } from '../../fetchData';

type ModalProps = {
    modalIsOpen: boolean;
    closeModal: () => void;
    modalPhoto: UnsplashImage;
}

Modal.setAppElement('#root');
export default function ImageModal({modalIsOpen, closeModal, modalPhoto}: ModalProps) {
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={css.Modal}
            overlayClassName={css.Overlay}
            >
            <img src={modalPhoto.urls.regular} alt={modalPhoto.alt_description || 'Image'} className={css.img } />
        </Modal>
    )
}