import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Style from './Header.module.scss'
import { useHistory } from 'react-router-dom'
import { Store } from '../../store/index'

const Header = () => {
    const [ term, setTerm ] = useState('')
    const history = useHistory()
    const { globalState, setGlobalState } = useContext(Store)
    const handleSubmit = e => {
        e.preventDefault()
        setGlobalState({ type: 'SET_TERM', payload: { term } })
        history.push(`/search?query=${term}`)
    }

    useEffect(() => {
        setTerm(globalState.term)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className={Style.header}>
            <div className={Style.item}>
                <Link to="/">YouTube</Link>
            </div>
            <div className={Style.item}>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        placeholder="検索"
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                    />
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
        </div>
    )
}

export default Header
