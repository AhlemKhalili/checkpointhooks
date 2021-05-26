import React, {useState} from 'react'
import Moviecard from './Moviecard'
import Movieserch from './Movieserch'


function Movielist({films}) {
    const [text, settext] = useState('')
    const [rate, setrate] = useState('')


    const filterText=(text)=> {
                settext(text)
    }
    const filterRate=(rate)=> {
            setrate(rate)
}
    return (
        <div>
          <Movieserch  filterText={filterText} filterRate={filterRate}/>
        <div className='container'>
        {films.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&&el.rate>=rate).map(el=><Moviecard film={el}/>)}
        </div>
          
        </div>
    )
}

export default Movielist 
