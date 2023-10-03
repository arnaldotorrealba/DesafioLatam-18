export const SocialButton = () => {
    return (
        <>
            <div className="w-100 d-flex justify-content-center gap-2">
                <div>
                    <button className="btn btn-outline-dark rounded-circle">
                        <i class="fa-brands fa-facebook"></i>
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline-dark rounded-circle">
                        <i class="fa-brands fa-github"></i>
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline-dark rounded-circle">
                        <i class="fa-brands fa-linkedin"></i>
                    </button>
                </div>
            </div>
            <div className="row">
                <p className="col">O usa tu email para registrarte</p>
            </div>
        </>
    );
};
