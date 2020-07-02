import React from 'react'
import Heading from "./Heading"
import  {Link} from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Sunt quis enim aliquip sit tempor labore quis ad laboris tempor qui sit amet.
                             Velit aute consectetur ea fugiat aliqua. Ad aute labore sint ullamco. Sit 
                             labore sint in qui. Deserunt tempor ipsum excepteur exercitation et et proident 
                             excepteur voluptate id enim amet ipsum consequat. Labore fugiat sint aute commodo 
                             proident adipisicing cupidatat commodo adipisicing. Occaecat nisi nisi sit ipsum enim 
                             fugiat cupidatat anim proident laboris et ipsum.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
