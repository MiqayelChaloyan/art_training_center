import CoWorkers from '@/components/screens/co_workers';
import { getCoWorkers } from '../../../sanity/services/co-workers.service';
import { Co_workers } from '../../../sanity/sanity-queries/co-workers';
import { FC, memo } from 'react';


type CoWorkersProps = {
	data: Co_workers[]
	isError: boolean
}

const COWorkersPage: FC<CoWorkersProps> = ({ data, isError }) => {
	return (<CoWorkers data={data} isError={isError}/>);
};

export async function getServerSideProps() {
    try {
        const data = await getCoWorkers();
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
