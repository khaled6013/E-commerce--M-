import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Latest from '../components/Latest'
import Support from '../components/Support'
import Trending from '../components/Trending'
import Unique from '../components/Unique'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Featured></Featured>
            <Latest></Latest>
            <Support></Support>
            <Unique></Unique>
            <Trending></Trending>
        </>
    )
}

export default Home