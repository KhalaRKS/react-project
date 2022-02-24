import './Pagination.scss'


function Paginnation(props) {
    const { page } = props.pagination
 
    return (
            <p className="pagination--text">{page === 0 ? 16 : 32} of 32 products </p>
    );
}
export default Paginnation