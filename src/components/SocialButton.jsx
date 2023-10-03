export const SocialButton = ({ iconClass }) => {
    return (
        <button className="btn btn-outline-dark rounded-circle">
            <i className={`${iconClass}`}></i>
        </button>
    );
};
