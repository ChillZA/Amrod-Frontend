type Props = {
    page: number;
    onPrevious: () => void;
    onNext: () => void;
};

export default function Pagination(
    props: Props
) {
    return (
        <>
            <button
                disabled={props.page === 1}
                onClick={props.onPrevious}
            >
                Previous
            </button>
            <span>
                Page {props.page}
            </span>
            <button
                onClick={props.onNext}
            >
                Next
            </button>
        </>
    );
}