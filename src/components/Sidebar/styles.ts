import { createStyles } from '@/lib/createStyles';


export const styles = createStyles({
    main: () => ({
        display: 'flex',
        flexDirection: 'column',
    }),
    hover: () => ({
        backgroundColor: '#191e24',
    }),
    link: ({ hover }) => ({
        padding: '10px 40px',
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
