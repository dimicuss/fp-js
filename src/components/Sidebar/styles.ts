import { createStyles } from '@/lib/createStyles';


export const styles = createStyles({
    main: () => ({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#212031',
    }),
    hover: () => ({
        backgroundColor: '#191e24',
        color: '#5dbcd2',
    }),
    link: ({ hover }) => ({
        padding: '18px 40px',
        textDecoration: 'none',
        color: '#7b8790',
        outline: 'none',
        '&:hover': hover,
    }),
    activeLink: ({ hover, link }) => ({
        ...link,
        ...hover,
    }),
});
