

const BookMark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div  className="bg-slate-200 p-4 m-4">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

export default BookMark;