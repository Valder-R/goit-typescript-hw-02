import css from "./LoadMoreBtn.module.css"

type ButtonProps = {
    clickHandle: () => void;
}

export default function LoadMoreBtn({clickHandle}: ButtonProps) {
    return (
        <>
            <button type="button" onClick={clickHandle} className={css.btn}>Load more</button>
        </>
    )
}