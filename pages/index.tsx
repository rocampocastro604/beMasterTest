import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContentCategory from "../components/ContentCategory";
import { Movie } from "../typings";
import requests from "../utils/requests";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import ContentDetails from "../components/ContentDetails";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  topRated,
  trendingNow,
}: Props) => {
  const showModal = useRecoilValue(modalState)
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - BeMaster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals}/>
        <section className="md:space-y-24">
          <ContentCategory title="Trending Now" movies={trendingNow} />
          <ContentCategory title="Top Rated" movies={topRated} />
          <ContentCategory title="Action Thrillers" movies={actionMovies} />

          <ContentCategory title="Comedies" movies={comedyMovies} />
          <ContentCategory title="Scary Movies" movies={horrorMovies} />
          <ContentCategory title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <ContentDetails />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      documentaries: documentaries.results,
    },
  };
};
