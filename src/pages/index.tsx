import Home from '@/components/screens/home';
import { FC, memo } from 'react';
import { HomeContent } from '../../sanity/sanity-queries/home-queries';
import { getHomeData } from '../../sanity/services/home.service';

type HomePageProps = {
  data: HomeContent[];
  isError: boolean,
}

const HomePage: FC<HomePageProps> = ({ data, isError }) => {
  return (<Home data={data} isError={isError} />);
};

export const getServerSideProps = async () => {
  try {
    const data = await getHomeData();
    return {
      props: {
        data,
        isError: false,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        isError: true,
      },
    };
  }
};

export default memo(HomePage);
