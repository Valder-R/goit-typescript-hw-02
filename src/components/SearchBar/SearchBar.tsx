import toast, { Toaster } from 'react-hot-toast';
import { FormEvent, useState, ChangeEvent } from 'react';

type SearchBarProps = {
    handler: (newTopic: string) => void;
}

export default function SearchBar({ handler}: SearchBarProps) {

    const [topic, setTopic] = useState<string>("")

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        if (topic == "") {
            toast('Provide search value');
        }
        else {
            handler(topic);
        }
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={topic}
                    onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                        setTopic(evt.target.value)
                    }}
                />
                <button type="submit">Search</button>
                <Toaster />
            </form>
        </header>

    )
}