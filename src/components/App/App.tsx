import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from '../Loader/Loader'
import css from "./App.module.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { fetchData } from '../../fetchData';
import ImageModal from '../ImageModal/ImageModal'
import {UnsplashImage} from '../../fetchData'


function App() {
  const [searchVal, setSearchVal] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [photos, setPhotos] = useState<UnsplashImage[]>([])
  const [modalPhoto, setModalPhoto] = useState<undefined | UnsplashImage>(undefined)
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [errorMes, setErrorMes] = useState<string>("")
  const [curentPage, setCurentPage] = useState<number>(1)
  const [maxPages, setMaxPages] = useState<number>(0)

  

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  const handleSearch = (newTopic: string): void => {
    setSearchVal(newTopic);
    setCurentPage(1);
    setPhotos([])
  }

  const inreasePage = (): void => {
    setCurentPage(curentPage + 1);
  }

  const onImageClick = (picture: UnsplashImage): void => {
    setModalPhoto(picture);
    openModal();
  }

  useEffect(() => {
    if (searchVal === '') {
      return;
    }
    setIsLoading(true)
    fetchData(searchVal, curentPage)
      .then(data => {
        setPhotos((prevPhotos) => { 
          return [...prevPhotos, ...data.results];
        });
      setMaxPages(data.total_pages);
      })
      .catch(error => {
        setErrorMes(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  },[searchVal, curentPage])
  
  return (
    <div className={css.block}>
      <SearchBar handler={handleSearch} />
      {photos.length>0 && errorMes=="" ? <ImageGallery pictureList={photos} onImageClick={onImageClick}/> : <ErrorMessage error={errorMes} />}
      <Loader loading={isLoading} />
      {modalPhoto != undefined && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} modalPhoto={modalPhoto } />}
      {maxPages>0 && curentPage<maxPages && errorMes=="" && isLoading==false && <LoadMoreBtn clickHandle={ inreasePage } /> }
    </div>
  )
}

export default App