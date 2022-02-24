import './ButtonPagination.scss'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
function ButtonPagination(props) {
    return (
            <div className={props.className}>
                <img onClick={props.changePage} className={props.pagination.page === 0 ? ' show--arrow' : 'arrow'} src={arrowRight} alt='arrow-right' />
                <img onClick={props.changePage} className={props.pagination.page === 16 ? ' show--arrow' : 'arrow'} src={arrowLeft} alt='arrow-left' />
            </div>
    );
}
export default ButtonPagination