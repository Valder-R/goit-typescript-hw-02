type ErrorText = {
    error: string;
}

export default function ErrorMessage({ error }: ErrorText) {
    return (
        <>
            <p>{ error }</p>
        </>
    )
}