import Home from '@/components/screens/home';
import { FC, memo } from 'react';
import { HomeContent } from '../../sanity/sanity-queries/home-queries';
import { getHomeData } from '../../sanity/services/home.service';

type HomePageProps = {
  data: HomeContent[]
  isError: boolean
}

const HomePage: FC<HomePageProps> = ({ data, isError }) => {

  if (isError) {
    return <div>Error loading data</div>;
  };

  return (<Home data={data} isError={isError} />);
};

export const getServerSideProps = async (context: any) => {
  const { locale } = context;  

  try {
    const data = await getHomeData(locale);

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
