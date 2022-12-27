import React from 'react'

const Menus = () => {
    return (
        <div className='menu px-4 py-1'>
            <div className="container me-auto menu-bar" style={{ maxWidth: "1000px !important" }} >
                <div className="feature text-center d-flex  py-0 ">
                    <div className="image">
                        <img src="../dist/img/natural.svg" alt />
                    </div>
                    <div className="text ml-1">Natural <br /> Ingredients</div>
                </div>
                <div className="feature text-center d-flex  py-0 ">
                    <div className="image">
                        <img src="../dist/img/toxins.svg" alt />
                    </div>
                    <div className="text ml-1">Helps to Remove <br /> Harmful Toxins</div>
                </div>
                <div className="feature text-center d-flex  py-0">
                    <div className="image">
                        <img src="../dist/img/bodymind.svg" alt />
                    </div>
                    <div className="text ml-1">Heals <br /> Body &amp; Mind</div>
                </div>
                <div className="feature text-center d-flex  py-0">
                    <div className="image">
                        <img src="../dist/img/traditional.svg" alt />
                    </div>
                    <div className="text ml-1">Traditional <br /> Eastern Medicine</div>
                </div>
            </div>
        </div>


    )
}

export default Menus
