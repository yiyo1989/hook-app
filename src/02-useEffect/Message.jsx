import { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };

        window.addEventListener('mousemove', onMouseMove);

        // window.addEventListener('mousemove', (event) => {
        //     console.log(event.x, event.y);
        // });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <h3>User Exist!</h3>
            {JSON.stringify(coords)}
        </>
    );
};
