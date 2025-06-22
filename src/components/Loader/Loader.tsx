import { ClipLoader } from "react-spinners";

type Props = {
    loading: boolean;
}

export default function Loader({loading}: Props) {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <ClipLoader
            color="#ffffff"
            loading={loading}
            cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
    
}