import { FC, memo } from 'react';

import CoWorkers from '@/components/screens/co_workers';

import { getCoWorkers } from '../../../sanity/services/co-workers.service';
import { Co_workers } from '../../../sanity/sanity-queries/co-workers';

type CoWorkersProps = {
	data: Co_workers[]
	isError: boolean
}

const COWorkersPage: FC<CoWorkersProps> = ({ data, isError }) => {

    if (isError) {
        return <div>Error loading data</div>;
    }

	return (<CoWorkers data={data} isError={isError}/>);
};

export async function getServerSideProps(context: any) {
    const { locale } = context;
    
    try {
        const data = await getCoWorkers(locale);
        return {
            props: {
                data,
                isError: false,
            },
        };
    } catch (error) {
        return {
            props: {
                data: {},
                isError: true,
            },
        };
    }
}

export default memo(COWorkersPage);
