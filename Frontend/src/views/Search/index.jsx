import CardList from '../../components/CardList'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar'
import './index.css'

function Search(){
    return (
        <>
        <div className='headerS'>
            <Header logged={true}/>
        
        <div className="content-container">
            <div className='content wrapper'>
                <Sidebar/>
                <CardList/>         
            </div>
        </div>
        
        </div>
      
        </>
       
    )
}

export default Search