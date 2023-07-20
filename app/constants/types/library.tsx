export type LibraryCardProps = {
    number: string;
    title: string;
    onMoveDetail: (number: string) => void;
};

export type LibraryTitleProps = {
    number: string | string[] | undefined;
    children: string;
};
