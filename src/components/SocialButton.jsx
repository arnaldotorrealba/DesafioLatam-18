export const SocialButton = ({ iconClass }) => {
    return (
        <div>
            <button className="btn btn-outline-dark rounded-circle">
                <i className={`${iconClass}`}></i>
            </button>
        </div>
    );
};
