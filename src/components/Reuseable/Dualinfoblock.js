import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                    <div className="row">
                        <div className="col-8 mx-auto ">
                            <p className="lead text-white mb-5">
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.
                                lorem50Aute magna esse culpa nostrud fugiat duis anim qui consequat laboris.

                            </p>
                            </div>
                            
                             <div className="col-4 ">
                                 <div className="card bg-dark">
                                 <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="card-img-top" alt="image goes here" />
                                    <div className="card-body">
                                        <h5 className="card-title text-white">Just Click Photos</h5>
                                            <p className="card-text text-white">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                                    </div>


                             </div>
                        </div>


                    </div>
                
            </div>
            
        </section>
    )
}
