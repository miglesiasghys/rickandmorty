import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function usePeople() {

    //LO QUE ESTABA EN CONTAIN CARDS

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const { filterStatus } = useParams()

    async function getCharacters() {
        try {
            const { data } = await axios(
                `https://rickandmortyapi.com/api/character/?page=${page}&${filterStatus ? `status=${filterStatus}` : ""}`)
            setCharacters(data.results)
            setTotalPages(data.info.pages)
        } catch (error) {
            console.log(error);
        }
    }

    const resetPage = () => {
        setPage(1)
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    //LO QUE ESTABA EN DETAIL CHARACTERS

    const { idCharacter } = useParams()
    const [characterDetail, setCharacterDetail] = useState({})

    async function getDetail() {
        try {
            const { data } = await axios(
                `https://rickandmortyapi.com/api/character/${idCharacter}`)
            setCharacterDetail(data)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        characters,
        getCharacters,
        totalPages,
        page,
        handleChange,
        filterStatus,
        resetPage,
        characterDetail, 
        getDetail
    }
}

