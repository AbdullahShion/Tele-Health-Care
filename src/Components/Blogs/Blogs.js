import React from 'react';
import blogs from '../../Data/blogs';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-success text-uppercase">our blogs</h5>
                    <h1>From Our Blog</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogs.map(blog => <BlogPost blog={blog}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;