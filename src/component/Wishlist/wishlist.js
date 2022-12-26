import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Footer from '../Footer'
import Header from '../Header'
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';
import swal from 'sweetalert'
import Pagination from "../Pagination";



function Wishlist() {
    let common = new CommonService();
    const { user_id, Loding ,CartPost } = useAppContext();

    const [List, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = List.slice(firstPostIndex, lastPostIndex);

    function GetWishlist() {
        setIsLoading(true)
        const GetAllWishlist = `${urlConstant.Wishlist.GetAllWishlist}/${user_id}`;
        common.httpGet(GetAllWishlist).then(function (res) {
            setList(res.data.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                ToasterError("Error");
                setIsLoading(false)
            });
    }


    const deletehandler = async (id) => {

        swal({
            title: 'Are You Sure Delete Data?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                setIsLoading(true)
                const deleteWishlist = `${urlConstant.Wishlist.DeleteWishlist}?product_id=${id}&user_id=${user_id}`;
                common.httpGet(deleteWishlist).then((res) => {
                    GetWishlist();
                    setIsLoading(false);
                });
            }
            else {
                ToasterWarning("Your Data Safe...!!");
                setIsLoading(false);
            }
        })

    };

    useEffect(() => {
        GetWishlist();
    }, []);
    return (
        <div>
            {isLoading ? <Loding /> : Wishlist}
            <Header Wishlist={List.length} />
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> wishlist
                        </div>
                    </div>
                </div>
                <div className="mb-30 mt-50">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="mb-50">
                                <h1 className="heading-2 mb-10">Your Wishlist</h1>
                                <h6 className="text-body">There are <span className="text-brand">{List.length}</span> products in this list</h6>
                            </div>
                            <div className="table-responsive shopping-summery">
                                <table className="table table-wishlist">
                                    <thead>
                                        <tr className="main-heading">
                                            <th className="custome-checkbox start pl-30">
                                                {/* <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" defaultValue />
                        <label className="form-check-label" htmlFor="exampleCheckbox11" /> */}
                                            </th>
                                            <th scope="col" colSpan={2}>Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Stock Status</th>
                                            <th scope="col">Action</th>
                                            <th scope="col" className="end">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {

                                                List == '' ? <h1 style={{ textAlign: "center" }}>Oops, no product in your list</h1> :
                                                currentPosts.map((item, i) => {

                                                    const { name, thumbnail_image, base_price, rating, id, InStock } = item.product;

                                                    const iamge = thumbnail_image == '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU' : thumbnail_image;

                                                    return (
                                                        <tr className="pt-30">
                                                            <td className="custome-checkbox pl-30">
                                                                {/* <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                                    <label className="form-check-label" htmlFor="exampleCheckbox1" /> */}
                                                            </td>
                                                            <td className="image product-thumbnail pt-40"><img src={iamge} alt={iamge} /></td>
                                                            <td className="product-des product-name">
                                                                <h6>{name}</h6>
                                                                <div className="product-rate-cover">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div className="product-rating" style={{ width: '90%' }} />
                                                                    </div>
                                                                    <span className="font-small ml-5 text-muted">{(rating)}</span>
                                                                </div>
                                                            </td>
                                                            <td className="price" data-title="Price">
                                                                <h3 className="text-brand">{base_price}</h3>
                                                            </td>
                                                            <td className="text-center detail-info" data-title="Stock">
                                                                {
                                                                    InStock == 0 ? <span className="stock-status out-stock">Out of stock</span> :
                                                                        <span className="stock-status in-stock mb-0"> In Stock</span>
                                                                }
                                                            </td>
                                                            <td className="text-right" data-title="Cart">
                                                                {
                                                                    InStock == 0 ?<button className="btn btn-sm" disabled >Add to cart</button> : 
                                                                    <button className="btn btn-sm" onClick={()=>{CartPost(id)}} >Add to cart</button>
                                                                }
                                                            </td>
                                                            <td className="action text-center" data-title="Remove" onClick={() => deletehandler(id)}>
                                                                <a className="text-body"><i className="fi-rs-trash" /></a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }



                                    </tbody>
                                </table>
                                <Pagination
                                    totalPosts={List.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="main">
                <section className="newsletter mb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20">
                                            Stay home &amp; get your daily <br />
                                            needs from our shop
                                        </h2>
                                        <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand"> Colebrook Mart</span></p>
                                        <form className="form-subcriber d-flex">
                                            <input type="email" placeholder="Your emaill address" />
                                            <button className="btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>


            <Footer />
        </div>
    )
}

export default Wishlist