import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';
import useGames from '../hooks/useGames';
import { useState, useEffect } from 'react'


function SearchInput() {
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { data } = useGames();
    const [initialGameCount, setInitialGameCount] = useState<string | null>(null);
    useEffect(() => {
        if (data && !initialGameCount) {
            const fetchDataLength = data.pages[0].count;
            setInitialGameCount(fetchDataLength ? fetchDataLength.toLocaleString() : null);
        }
    }, [data, initialGameCount]);

    const placeholder_text = initialGameCount ? `Search ${initialGameCount} games` : 'Search games';

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value)
                navigate('/')
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder={placeholder_text} variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput
