import s from "./noeFoundPage.module.css"
import phones from '../../assets/phones.svg'

const NotFoundPage = () => {
    return (
        <div className={s.notFoundPage}>
            <img src={phones} alt="phones" />
            <div>
                <h2>Oops! Page Not Found (404 Error)</h2>
                <p>We're sorry, but the page you're looking for doesn't seem to exist.
If you typed the URL manually, please double-check the spelling.
If you clicked on a link, it may be outdated or broken.</p>
            </div>
        </div>
    )
}

export default NotFoundPage