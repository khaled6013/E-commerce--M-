import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Latest from '../components/Latest'
import Support from '../components/Support'
import TopCate from '../components/TopCate'
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
            <TopCate></TopCate>
        </>
    )
}

export default Home