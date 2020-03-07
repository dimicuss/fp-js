import { createStyles } from '@/lib/createStyles';


export const styles = createStyles({
    sidebar: () => ({
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid black',
    }),
    sidebarItem: ({ sidebar }) => ({
        padding: '10px 10px',
        border: '1px solid black',
        borderTop: 'none'
    }),
});
