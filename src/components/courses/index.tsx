import { FC, memo } from 'react';
// import { Courses_Names } from '../../../sanity/sanity-queries/courses-names';
// import { getCoursesNames } from '../../../sanity/services/courses-names.service';



const CoursesModal = () => {
    // console.log(data);

    // const func = async () => {
    //     const data = await getCoursesNames();
    //     console.log(data);
    // }
    // func()
    return (
        <div>
            <div>
                <p style={{ textAlign: 'center' }}>Courses</p>
            </div>
        </div>
    );
};

// export async function getServerSideProps() {
//     try {
//         const data = await getCoursesNames();
//         return {
//             props: {
//                 data,
//                 isError: false,
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 data: [],
//                 isError: true,
//             },
//         };
//     }
//   }

export default memo(CoursesModal);